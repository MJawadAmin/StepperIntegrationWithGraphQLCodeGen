"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  useClientGetStepperQuery,
  useClientUpdateStepperMutation,
  StepInfoInput,
} from "@/queries/generated/graphql";
import { useUserStore } from "@/store/useUserStore";
import { useStepperStore } from "@/store/useStepperStore";
import isEqual from "lodash.isequal";

const renderLoader = () => <p>Loading</p>;

const steps = [
  { number: 1, label: "Agreement" },
  { number: 2, label: "Applicant Info" },
  { number: 3, label: "Model Info" },
  { number: 4, label: "Document" },
  { number: 5, label: "Test Report" },
  { number: 6, label: "Fees" },
];

const StepperComponent = ({
  productId = "NEERS-PID-2",
  stepperType = "product",
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { jwt } = useUserStore();
  const { current_step, setCurrentStep, steps_info, updateStepper } =
    useStepperStore();
  const currentStep = parseInt(current_step);
  const [isLoading, setIsLoading] = useState(false);

  // Get stepper data using the generated hook
  const { loading, error, data } = useClientGetStepperQuery({
    variables: {
      productId,
      stepperType,
    },
    fetchPolicy: "network-only", // Don't use cache, always fetch latest data
    skip: !jwt, // Skip query if user isn't authenticated
    context: {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  });

  // Update stepper mutation
  const [updateStepperMutation, { loading: updateLoading }] =
    useClientUpdateStepperMutation({
      context: {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    });

  // Initialize stepper data when it loads
  useEffect(() => {
    if (data?.clientGetStepper) {
      // Get current store state
      const currentState = useStepperStore.getState();

      // New state to compare against
      const newState = {
        ...data.clientGetStepper,
        steps_info: data.clientGetStepper.steps_info || [],
      };

      // Only update if there are actual changes
      if (
        !isEqual(newState, {
          id: currentState.id,
          count: currentState.count,
          success: currentState.success,
          message: currentState.message,
          product_id: currentState.product_id,
          stepper_type: currentState.stepper_type,
          current_step: currentState.current_step,
          steps_info: currentState.steps_info,
        })
      ) {
        updateStepper(newState);
      }

      // Set current step from API or URL parameter
      const apiStep = parseInt(data.clientGetStepper.current_step || "1");
      const urlStep = parseInt(searchParams?.get("step") || "1");
      const newStep = apiStep || urlStep;

      if (newStep !== currentStep) {
        setCurrentStep(newStep);

        // Update URL if needed
        if (newStep !== urlStep) {
          router.push(`?step=${newStep}`);
        }
      }
    }
  }, [data]); // Remove currentStep from dependencies

  // Save stepper data
  const handleSave = async (action = "save") => {
    setIsLoading(true);

    try {
      // Get current store data
      const { steps_info } = useStepperStore.getState();

      // Format data for the mutation with complete field structure
      const formattedStepInfo: StepInfoInput[] = steps_info.map((step) => ({
        applicantInfo: step.applicantInfo
          ? {
              company_name: step.applicantInfo.company_name || "",
              company_address: step.applicantInfo.company_address || "",
              company_city: step.applicantInfo.company_city || "",
              company_country: step.applicantInfo.company_country || "",
              company_province: step.applicantInfo.company_province || "",
              contact_person_email:
                step.applicantInfo.contact_person_email || "",
              contact_person_name: step.applicantInfo.contact_person_name || "",
              contact_person_phone:
                step.applicantInfo.contact_person_phone || "",
              contact_person_telephone:
                step.applicantInfo.contact_person_telephone || "",
              factory_address: step.applicantInfo.factory_address || "",
              factory_city: step.applicantInfo.factory_city || "",
              factory_country: step.applicantInfo.factory_country || "",
              factory_province: step.applicantInfo.factory_province || "",
              factory_telephone: step.applicantInfo.factory_telephone || "",
              member_of_association:
                step.applicantInfo.member_of_association || false,
              membership_name: step.applicantInfo.membership_name || "",
              membership_number: step.applicantInfo.membership_number || "",
              membership_year: step.applicantInfo.membership_year || "",
              office_managing_director_name:
                step.applicantInfo.office_managing_director_name || "",
              office_telephone: step.applicantInfo.office_telephone || "",
              registered_with_chamber:
                step.applicantInfo.registered_with_chamber || false,
              registration_number: step.applicantInfo.registration_number || "",
              registration_year: step.applicantInfo.registration_year || "",
              sales_network_regions:
                step.applicantInfo.sales_network_regions || "",
              company_brochure: step.applicantInfo.company_brochure || "",
              product_brochure: step.applicantInfo.product_brochure || "",
              user_agreement: step.applicantInfo.user_agreement || false,
            }
          : undefined,

        modelInfo: step.modelInfo
          ? {
              model_name: step.modelInfo.model_name || "",
              estimated_production_per_anum:
                step.modelInfo.estimated_production_per_anum || "",

              // Refrigerator data
              refrigerator: step.modelInfo.refrigerator
                ? {
                    brand_name: step.modelInfo.refrigerator.brand_name || "",
                    model_name: step.modelInfo.refrigerator.model_name || "",
                    manufacture_date:
                      step.modelInfo.refrigerator.manufacture_date || "",
                    origin_country:
                      step.modelInfo.refrigerator.origin_country || "",
                    kw_rating: step.modelInfo.refrigerator.kw_rating || 0,
                    annual_energy_consumption:
                      step.modelInfo.refrigerator.annual_energy_consumption ||
                      0,
                    total_volume_litres:
                      step.modelInfo.refrigerator.total_volume_litres || 0,
                    refrigerant_type:
                      step.modelInfo.refrigerator.refrigerant_type || "",
                    colors: step.modelInfo.refrigerator.colors || "",
                    ps_mark: step.modelInfo.refrigerator.ps_mark || false,
                    energy_efficiency_features:
                      step.modelInfo.refrigerator.energy_efficiency_features ||
                      "",
                  }
                : undefined,

              // AC data
              ac: step.modelInfo.ac
                ? {
                    brand_name: step.modelInfo.ac.brand_name || "",
                    model_name: step.modelInfo.ac.model_name || "",
                    manufacture_date: step.modelInfo.ac.manufacture_date || "",
                    origin_country: step.modelInfo.ac.origin_country || "",
                    kw_rating: step.modelInfo.ac.kw_rating || 0,
                    annual_energy_consumption:
                      step.modelInfo.ac.annual_energy_consumption || 0,
                    cooling_capacity: step.modelInfo.ac.cooling_capacity || "",
                    refrigerant_type: step.modelInfo.ac.refrigerant_type || "",
                    colors: step.modelInfo.ac.colors || "",
                    ps_mark: step.modelInfo.ac.ps_mark || false,
                    energy_efficiency_features:
                      step.modelInfo.ac.energy_efficiency_features || "",
                  }
                : undefined,

              // Fan data
              fan: step.modelInfo.fan
                ? {
                    size_capacity: step.modelInfo.fan.size_capacity || "",
                    rating: step.modelInfo.fan.rating || 0,
                    ps_mark: step.modelInfo.fan.ps_mark || false,
                    model_name: step.modelInfo.fan.model_name || "",
                    energy_efficiency_features:
                      step.modelInfo.fan.energy_efficiency_features || "",
                    colors: step.modelInfo.fan.colors || "",
                  }
                : undefined,

              // Motor data
              motor: step.modelInfo.motor
                ? {
                    manufacturer_name:
                      step.modelInfo.motor.manufacturer_name || "",
                    country_of_manufacture:
                      step.modelInfo.motor.country_of_manufacture || "",
                    brand_name: step.modelInfo.motor.brand_name || "",
                    first_manufactured_year:
                      step.modelInfo.motor.first_manufactured_year || "",
                    model_number: step.modelInfo.motor.model_number || "",
                    replaces_other_model:
                      step.modelInfo.motor.replaces_other_model || false,
                    date_marked: step.modelInfo.motor.date_marked || "",
                    website_url: step.modelInfo.motor.website_url || "",
                    phase_type: step.modelInfo.motor.phase_type || "",
                    rated_power_output:
                      step.modelInfo.motor.rated_power_output || 0,
                    rated_voltage: step.modelInfo.motor.rated_voltage || 0,
                    rated_frequency: step.modelInfo.motor.rated_frequency || 0,
                    number_of_poles: step.modelInfo.motor.number_of_poles || 0,
                    rated_speed: step.modelInfo.motor.rated_speed || 0,
                    motor_duty: step.modelInfo.motor.motor_duty || "",
                    mounting_code: step.modelInfo.motor.mounting_code || "",
                    frame_code: step.modelInfo.motor.frame_code || "",
                    enclosure_rating:
                      step.modelInfo.motor.enclosure_rating || "",
                    motor_design: step.modelInfo.motor.motor_design || "",
                    motor_insulation:
                      step.modelInfo.motor.motor_insulation || "",
                  }
                : undefined,

              // LED Light data
              ledLight: step.modelInfo.ledLight
                ? {
                    brand_name: step.modelInfo.ledLight.brand_name || "",
                    model_number: step.modelInfo.ledLight.model_number || "",
                    bar_code: step.modelInfo.ledLight.bar_code || "",
                    lamp_type: step.modelInfo.ledLight.lamp_type || "",
                    country_of_origin:
                      step.modelInfo.ledLight.country_of_origin || "",
                    manufacture_date:
                      step.modelInfo.ledLight.manufacture_date || "",
                    lamp_length: step.modelInfo.ledLight.lamp_length || 0,
                    max_diameter: step.modelInfo.ledLight.max_diameter || 0,
                    min_voltage: step.modelInfo.ledLight.min_voltage || 0,
                    max_voltage: step.modelInfo.ledLight.max_voltage || 0,
                    rated_frequency:
                      step.modelInfo.ledLight.rated_frequency || 0,
                    rated_power: step.modelInfo.ledLight.rated_power || 0,
                    power_factor: step.modelInfo.ledLight.power_factor || 0,
                    standby_power: step.modelInfo.ledLight.standby_power || 0,
                    flux: step.modelInfo.ledLight.flux || 0,
                    efficacy: step.modelInfo.ledLight.efficacy || 0,
                    color_temperature:
                      step.modelInfo.ledLight.color_temperature || 0,
                    chromaticity_tolerance:
                      step.modelInfo.ledLight.chromaticity_tolerance || "",
                    color_rendering_index:
                      step.modelInfo.ledLight.color_rendering_index || 0,
                    rated_lifetime: step.modelInfo.ledLight.rated_lifetime || 0,
                    mercury_content:
                      step.modelInfo.ledLight.mercury_content || 0,
                    risk_group: step.modelInfo.ledLight.risk_group || "",
                    warranty_years: step.modelInfo.ledLight.warranty_years || 0,
                  }
                : undefined,
            }
          : undefined,

        // Lab Report data
        labReport: step.labReport
          ? {
              lab_country: step.labReport.lab_country || "",
              lab_id: step.labReport.lab_id || "",
              lab_user_name: step.labReport.lab_user_name || "",
              report_from: step.labReport.report_from || "",
              test_report: step.labReport.test_report || "",
            }
          : undefined,

        // Payment data with fixed structure
        payment: [
          {
            amount: 100000,
            demand_draft: step.payment?.[0]?.demand_draft || "",
            pay_order_number: step.payment?.[0]?.pay_order_number || "",
            payment_date: step.payment?.[0]?.payment_date || "",
            payment_type: "companyinfo",
          },
          {
            amount: 100000,
            demand_draft: step.payment?.[1]?.demand_draft || "",
            pay_order_number: step.payment?.[1]?.pay_order_number || "",
            payment_date: step.payment?.[1]?.payment_date || "",
            payment_type: "modelinfo",
          },
        ],
      }));

      // Execute the mutation
      const result = await updateStepperMutation({
        variables: {
          productId,
          action,
          currentStep: current_step,
          stepperType,
          stepsInfo: formattedStepInfo,
        },
      });

      if (result.data?.clientUpdateStepper?.success) {
        toast.success("Saved successfully");

        // Update store with response
        updateStepper({
          ...result.data.clientUpdateStepper,
          steps_info: result.data.clientUpdateStepper.steps_info || [],
        });
      } else {
        toast.error(
          `Failed to save: ${
            result.data?.clientUpdateStepper?.message || "Unknown error"
          }`
        );
      }
    } catch (err) {
      console.error("Save failed:", err);
      toast.error("Failed to save changes");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle navigation between steps
  const handleNavigation = async (direction: "prev" | "next") => {
    const newStep = direction === "next" ? currentStep + 1 : currentStep - 1;
    if (newStep < 1 || newStep > 6) return;

    // Save current step data first
    setIsLoading(true);

    try {
      // Save current data before navigating
      await handleSave();

      // Update current step
      setCurrentStep(newStep);
      router.push(`?step=${newStep}`);
    } catch (err) {
      console.error("Navigation failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || !jwt) return <div>Loading stepper data...</div>;
  if (error) return <div>Error loading stepper: {error.message}</div>;

  return (
    <Suspense fallback={renderLoader()}>
      <div className="bg-[#173B45] mt-10 py-5 px-20 rounded-[5px] overflow-x-auto scrollbar-hidden">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => goToStep(step.number)}
              >
                <div
                  className={`text-white w-8 h-8 flex items-center justify-center rounded-full p-4 !text-sm font-semibold transition-all duration-200 ${
                    currentStep >= step.number ? "bg-[#F76300]" : "bg-[#d1d5db]"
                  }`}
                >
                  {step.number}
                </div>
                <p className="mt-4 text-white text-sm">{step.label}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="border-t-2 border-white flex-1 mx-4 pb-6" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default StepperComponent;
