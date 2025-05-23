"use client";
import type React from "react";
import { Suspense, lazy, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Keep this import
import { gql, useApolloClient, useQuery } from "@apollo/client";
import { useUserStore } from "@/store/useUserStore";
import { useStepperStore } from "@/store/useStepperStore";
import { fetchStepperData } from "@/services/stepperService";
import { handleApolloError } from "@/utils/handleApolloError";
import { transformStepsInfo } from "@/utils/transformStepsInfo";
import { toast } from "react-hot-toast";
import {
  useClientUpdateStepperMutation,
  StepperResponse,
  StepInfo,
} from "@/queries/generated/graphql";
import { NormalizedCacheObject } from "@apollo/client";

// GraphQL
const GET_CURRENT_STEP = gql`
  query ClientGetProducts {
    clientGetProducts {
      steppers {
        product_id
        current_step
      }
    }
  }
`;

// Lazy-loaded step components
const steps: { [key: number]: React.ComponentType } = {
  1: lazy(() => import("@/components/steps/Step1")),
  2: lazy(() => import("@/components/steps/Step2")),
  3: lazy(() => import("@/components/steps/Step3")),
  4: lazy(() => import("@/components/steps/Step4")),
  5: lazy(() => import("@/components/steps/Step5")),
  6: lazy(() => import("@/components/steps/Step6")),
};

const StepperPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // This is AppRouterInstance
  const client = useApolloClient() as import("@apollo/client").ApolloClient<NormalizedCacheObject>;

  const { jwt, setJwt } = useUserStore();
  const { current_step, setCurrentStep, steps_info } = useStepperStore();
  const currentStep = parseInt(current_step);
  const [isSaving, setIsSaving] = useState(false);

  const stepperType = "product";
  const productId = "NEERS-PID-2"; // This should ideally come from a prop or dynamic route

  const didInitRef = useRef(false);

  const [updateStepperMutation] = useClientUpdateStepperMutation();

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem("NECCA_AUTH_TOKEN");
    if (!token) {
      router.push("/auth/sign-in");
    } else if (!jwt) {
      setJwt(token);
    }
  }, [jwt, setJwt, router]);

  // Fetch current step from backend
  const { loading, error } = useQuery(GET_CURRENT_STEP, {
    context: { headers: { Authorization: `Bearer ${jwt}` } },
    skip: !jwt,
    fetchPolicy: "network-only",
    onError: (err) => handleApolloError(err, router), // No 'as any' needed here now
  });

  // Load stepper data on mount
  useEffect(() => {
    const initStepper = async () => {
      if (!jwt || !productId || !stepperType || didInitRef.current) return;

      try {
        const data = await fetchStepperData(
          client,
          stepperType,
          productId,
          router  // No 'as any' needed here now
        );
        if (data) {
          const serverStep = parseInt(data.current_step || "1");
          const urlStep = Number(searchParams?.get("step")) || 1;
          const newStep = serverStep || urlStep;

          if (newStep !== currentStep) {
            setCurrentStep(newStep);
          }

          const currentUrlStep = Number(searchParams?.get("step")) || 1;
          if (newStep !== currentUrlStep) {
            router.push(`?step=${newStep}`);
          }

          useStepperStore.getState().updateStepper({
            ...data,
            current_step: data.current_step || undefined,
            steps_info: data.steps_info?.filter(Boolean) as StepInfo[] || undefined,
          });
        }
        didInitRef.current = true;
      } catch (err: unknown) {
        console.error("Failed to initialize stepper:", err);
        toast.error("Failed to load form data");
      }
    };

    initStepper();
  }, [
    jwt,
    productId,
    stepperType,
    currentStep,
    client,
    router,
    searchParams,
    setCurrentStep,
  ]);

  // Sync URL with currentStep
  useEffect(() => {
    const urlStep = Number(searchParams?.get("step")) || 1;
    if (urlStep !== currentStep) {
      router.push(`?step=${currentStep}`);
    }
  }, [currentStep, searchParams, router]);

  const StepComponent = steps[currentStep];

  const handleSave = async (action = "save") => {
    setIsSaving(true);

    try {
      const { steps_info: currentStepsInfo } = useStepperStore.getState();

      console.log(`Saving step ${currentStep} with action: ${action}`);
      console.log("Sending steps_info:", currentStepsInfo);

      const result = await updateStepperMutation({
        variables: {
          productId: productId,
          action: action,
          currentStep: current_step,
          stepperType: stepperType,
          stepsInfo: transformStepsInfo(currentStepsInfo),
        },
      });

      if (result?.data?.clientUpdateStepper?.success) {
        toast.success("Saved successfully");

        useStepperStore.getState().updateStepper({
          ...(result.data.clientUpdateStepper as StepperResponse),
          current_step:
            result.data.clientUpdateStepper.current_step || undefined,
          steps_info: result.data.clientUpdateStepper.steps_info?.filter(Boolean) as StepInfo[] || undefined,
        });
      } else {
        console.error(
          "Error saving:",
          result?.data?.clientUpdateStepper?.message
        );
        toast.error(
          `Failed to save: ${
            result?.data?.clientUpdateStepper?.message || "Unknown error"
          }`
        );
      }
    } catch (err: unknown) {
      console.error("Save failed:", err);
      if (err instanceof Error) {
        toast.error(`Failed to save changes: ${err.message}`);
      } else {
        toast.error("Failed to save changes");
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleNavigation = async (direction: "prev" | "next") => {
    const newStep = direction === "next" ? currentStep + 1 : currentStep - 1;
    if (newStep < 1 || newStep > 6) return;

    setIsSaving(true);

    console.log("Navigation triggered:", direction);
    console.log("Current steps_info:", steps_info);
    console.log(
      "Steps info type:",
      typeof steps_info,
      Array.isArray(steps_info)
    );

    try {
      let stepsToTransform = steps_info;

      if (!stepsToTransform || !stepsToTransform.length) {
        stepsToTransform = useStepperStore.getState().steps_info;
      }

      console.log("Using steps_info:", stepsToTransform);

      const result = await updateStepperMutation({
        variables: {
          productId: productId,
          action: "save",
          currentStep: current_step,
          stepperType: stepperType,
          stepsInfo: transformStepsInfo(stepsToTransform),
        },
      });

      if (result?.data?.clientUpdateStepper?.success) {
        useStepperStore.getState().updateStepper({
          ...(result.data.clientUpdateStepper as StepperResponse),
          current_step:
            result.data.clientUpdateStepper.current_step || undefined,
          steps_info: result.data.clientUpdateStepper.steps_info?.filter(Boolean) as StepInfo[] || undefined,
        });

        setCurrentStep(newStep);
        router.push(`?step=${newStep}`);
      } else {
        toast.error(
          `Navigation failed: ${
            result?.data?.clientUpdateStepper?.message || "Unknown error"
          }`
        );
      }
    } catch (err: unknown) {
      console.error("Navigation failed:", err);
      if (err instanceof Error) {
        toast.error(`Failed to navigate: ${err.message}`);
      } else {
        toast.error("Failed to navigate: An unknown error occurred.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (!jwt)
    return (
      <div className="w-full text-center p-8">Redirecting to login...</div>
    );
  if (loading)
    return <div className="w-full text-center p-8">Loading application...</div>;
  if (error)
    return (
      <div className="w-full text-center p-8 text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <Suspense
      fallback={<div className="w-full text-center p-8">Loading step...</div>}
    >
      {StepComponent && <StepComponent />}

      <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10 w-full pb-5">
        <button
          disabled={currentStep === 1 || isSaving}
          onClick={() => handleNavigation("prev")}
          className="sm:w-[120px] h-[40px] rounded border border-[#F76300] font-bold text-[18px] text-[#F76300] disabled:opacity-35 disabled:cursor-not-allowed hover:bg-[#F76300]/10 transition-colors"
        >
          {isSaving && currentStep !== 1 ? "Saving..." : "Previous"}
        </button>

        {currentStep > 1 && currentStep < 6 && (
          <button
            onClick={() => handleSave()}
            disabled={isSaving}
            className="sm:w-[120px] h-[40px] rounded bg-[#F76300] font-bold text-[18px] text-white hover:bg-[#45a049] transition-colors"
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        )}

        {currentStep === 6 ? (
          <button
            onClick={() => handleSave("submit")}
            disabled={isSaving}
            className="sm:w-[120px] h-[40px] rounded bg-[#F76300] font-bold text-[18px] text-white hover:bg-[#F76300]/90 transition-colors"
          >
            {isSaving ? "Submitting..." : "Submit"}
          </button>
        ) : (
          <button
            disabled={isSaving || currentStep === 6}
            onClick={() => handleNavigation("next")}
            className="sm:w-[120px] h-[40px] rounded bg-[#F76300] font-bold text-[18px] text-white hover:bg-[#F76300]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "Next"}
          </button>
        )}
      </div>
    </Suspense>
  );
};
export default StepperPage;