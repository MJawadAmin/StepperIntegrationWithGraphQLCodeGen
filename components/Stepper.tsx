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
import { useStepperStore, type Fan, type AC } from "@/store/useStepperStore";
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
  const { current_step, setCurrentStep, updateStepper } = useStepperStore();
  const currentStep = parseInt(current_step);
  const [isLoading, setIsLoading] = useState(false);

  // Get stepper data using the generated hook
  const { loading, error, data } = useClientGetStepperQuery({
    variables: {
      productId,
      stepperType,
    },
    fetchPolicy: "network-only",
    skip: !jwt,
    context: {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  });

  // Update stepper mutation
  const [updateStepperMutation] = useClientUpdateStepperMutation({
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
        id: data.clientGetStepper.id || "",
        count: data.clientGetStepper.count || 0,
        success: data.clientGetStepper.success || false,
        message: data.clientGetStepper.message || "",
        product_id: data.clientGetStepper.product_id || "",
        stepper_type: data.clientGetStepper.stepper_type || "",
        current_step: data.clientGetStepper.current_step || "1",
        steps_info: data.clientGetStepper.steps_info?.filter(Boolean).map(step => ({
          applicantInfo: step?.applicantInfo || undefined,
          modelInfo: step?.modelInfo ? {
            model_name: step.modelInfo.model_name || "",
            estimated_production_per_anum: step.modelInfo.estimated_production_per_anum || "",
            refrigerator: step.modelInfo.refrigerator ? {
              brand_name: step.modelInfo.refrigerator.brand_name || "",
              model_name: step.modelInfo.refrigerator.model_name || "",
              manufacture_date: step.modelInfo.refrigerator.manufacture_date || "",
              origin_country: step.modelInfo.refrigerator.origin_country || "",
              kw_rating: step.modelInfo.refrigerator.kw_rating || 0,
              annual_energy_consumption: step.modelInfo.refrigerator.annual_energy_consumption || 0,
              total_volume_litres: step.modelInfo.refrigerator.total_volume_litres || 0,
              refrigerant_type: step.modelInfo.refrigerator.refrigerant_type || "",
              colors: step.modelInfo.refrigerator.colors || "",
              ps_mark: step.modelInfo.refrigerator.ps_mark || false,
              energy_efficiency_features: step.modelInfo.refrigerator.energy_efficiency_features || "",
              specify_number: step.modelInfo.refrigerator.specify_number || "",
            } : undefined,
            motor: step.modelInfo.motor ? {
              manufacturer_name: step.modelInfo.motor.manufacturer_name || "",
              country_of_manufacture: step.modelInfo.motor.country_of_manufacture || "",
              brand_name: step.modelInfo.motor.brand_name || "",
              first_manufactured_year: step.modelInfo.motor.first_manufactured_year || 0,
              model_number: step.modelInfo.motor.model_number || "",
              replaces_other_model: step.modelInfo.motor.replaces_other_model || false,
              date_marked: step.modelInfo.motor.date_marked || false,
              website_url: step.modelInfo.motor.website_url || "",
              phase_type: step.modelInfo.motor.phase_type || "",
              rated_power_output: step.modelInfo.motor.rated_power_output || 0,
              rated_voltage: step.modelInfo.motor.rated_voltage || 0,
              rated_frequency: step.modelInfo.motor.rated_frequency || 0,
              number_of_poles: step.modelInfo.motor.number_of_poles || 0,
              rated_speed: step.modelInfo.motor.rated_speed || 0,
              motor_duty: step.modelInfo.motor.motor_duty || "",
              mounting_code: step.modelInfo.motor.mounting_code || "",
              frame_code: step.modelInfo.motor.frame_code || "",
              enclosure_rating: step.modelInfo.motor.enclosure_rating || "",
              motor_design: step.modelInfo.motor.motor_design || "",
              motor_insulation: step.modelInfo.motor.motor_insulation || "",
            } : undefined,
            ledLight: step.modelInfo.ledLight ? {
              brand_name: step.modelInfo.ledLight.brand_name || "",
              model_number: step.modelInfo.ledLight.model_number || "",
              bar_code: step.modelInfo.ledLight.bar_code || "",
              lamp_type: step.modelInfo.ledLight.lamp_type || "",
              country_of_origin: step.modelInfo.ledLight.country_of_origin || "",
              manufacture_date: step.modelInfo.ledLight.manufacture_date || "",
              lamp_length: step.modelInfo.ledLight.lamp_length || 0,
              max_diameter: step.modelInfo.ledLight.max_diameter || 0,
              min_voltage: step.modelInfo.ledLight.min_voltage || 0,
              max_voltage: step.modelInfo.ledLight.max_voltage || 0,
              rated_frequency: step.modelInfo.ledLight.rated_frequency || 0,
              rated_power: step.modelInfo.ledLight.rated_power || 0,
              power_factor: step.modelInfo.ledLight.power_factor || 0,
              standby_power: step.modelInfo.ledLight.standby_power || 0,
              flux: step.modelInfo.ledLight.flux || 0,
              efficacy: step.modelInfo.ledLight.efficacy || 0,
              color_temperature: step.modelInfo.ledLight.color_temperature || 0,
              chromaticity_tolerance: step.modelInfo.ledLight.chromaticity_tolerance || 0,
              color_rendering_index: step.modelInfo.ledLight.color_rendering_index || 0,
              rated_lifetime: step.modelInfo.ledLight.rated_lifetime || 0,
              mercury_content: step.modelInfo.ledLight.mercury_content || 0,
              risk_group: step.modelInfo.ledLight.risk_group || "",
              warranty_years: step.modelInfo.ledLight.warranty_years || 0,
            } : undefined,
            fan: step.modelInfo.fan ? ({
              model_name: step.modelInfo.fan.model_name || "",
              rating: step.modelInfo.fan.rating || "",
              size_capacity: step.modelInfo.fan.size_capacity || 0,
              colors: step.modelInfo.fan.colors || "",
              ps_mark: step.modelInfo.fan.ps_mark || false,
              energy_efficiency_features: step.modelInfo.fan.energy_efficiency_features || "",
              specify_number: step.modelInfo.fan.specify_number || "",
            } as Fan) : undefined,
            ac: step.modelInfo.ac ? ({
              brand_name: step.modelInfo.ac.brand_name || "",
              model_name: step.modelInfo.ac.model_name || "",
              manufacture_date: step.modelInfo.ac.manufacture_date || "",
              origin_country: step.modelInfo.ac.origin_country || "",
              kw_rating: step.modelInfo.ac.kw_rating || 0,
              annual_energy_consumption: step.modelInfo.ac.annual_energy_consumption || 0,
              cooling_capacity: step.modelInfo.ac.cooling_capacity || "",
              refrigerant_type: step.modelInfo.ac.refrigerant_type || "",
              colors: step.modelInfo.ac.colors || "",
              ps_mark: step.modelInfo.ac.ps_mark || false,
              energy_efficiency_features: step.modelInfo.ac.energy_efficiency_features || "",
              specify_number: step.modelInfo.ac.specify_number || "",
            } as AC) : undefined,
          } : undefined,
          labReport: step?.labReport || undefined,
          payment: step?.payment || undefined,
        })) || [],
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
  }, [data, currentStep, router, searchParams, setCurrentStep, updateStepper]);

  // Handle step navigation
  const goToStep = async (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > 6) return;
    
    setIsLoading(true);
    try {
      // Save current data before navigating
      await handleSave();
      
      // Update current step
      setCurrentStep(stepNumber);
      router.push(`?step=${stepNumber}`);
    } catch (err) {
      console.error("Navigation failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Save stepper data
  const handleSave = async (action = "save") => {
    setIsLoading(true);

    try {
      // Get current store data
      const { steps_info } = useStepperStore.getState();

      // Format data for the mutation with complete field structure
      const formattedStepInfo: StepInfoInput[] = steps_info.map((step) => ({
        applicantInfo: step.applicantInfo || undefined,
        modelInfo: step.modelInfo
          ? {
              model_name: step.modelInfo.model_name || undefined,
              estimated_production_per_anum:
                step.modelInfo.estimated_production_per_anum || undefined,
              fan: step.modelInfo.fan
                ? {
                    id: step.modelInfo.fan.id || "",
                    model_info_id: step.modelInfo.fan.model_info_id || "",
                    model_name: step.modelInfo.fan.model_name || undefined,
                    rating: step.modelInfo.fan.rating || undefined,
                    size_capacity: step.modelInfo.fan.size_capacity || undefined,
                    colors: step.modelInfo.fan.colors || undefined,
                    ps_mark: step.modelInfo.fan.ps_mark || undefined,
                    energy_efficiency_features:
                      step.modelInfo.fan.energy_efficiency_features || undefined,
                    specify_number: step.modelInfo.fan.specify_number || undefined,
                  }
                : undefined,
              ac: step.modelInfo.ac
                ? {
                    id: step.modelInfo.ac.id || "",
                    model_info_id: step.modelInfo.ac.model_info_id || "",
                    brand_name: step.modelInfo.ac.brand_name || undefined,
                    model_name: step.modelInfo.ac.model_name || undefined,
                    manufacture_date: step.modelInfo.ac.manufacture_date || undefined,
                    origin_country: step.modelInfo.ac.origin_country || undefined,
                    kw_rating: step.modelInfo.ac.kw_rating || undefined,
                    annual_energy_consumption:
                      step.modelInfo.ac.annual_energy_consumption || undefined,
                    cooling_capacity: step.modelInfo.ac.cooling_capacity || undefined,
                    refrigerant_type: step.modelInfo.ac.refrigerant_type || undefined,
                    colors: step.modelInfo.ac.colors || undefined,
                    ps_mark: step.modelInfo.ac.ps_mark || undefined,
                    energy_efficiency_features:
                      step.modelInfo.ac.energy_efficiency_features || undefined,
                    specify_number: step.modelInfo.ac.specify_number || undefined,
                  }
                : undefined,
            }
          : undefined,
        labReport: step.labReport || undefined,
        payment: step.payment || undefined,
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
        if (result.data.clientUpdateStepper) {
          const updatedState = {
            id: result.data.clientUpdateStepper.id || "",
            count: result.data.clientUpdateStepper.count || 0,
            success: result.data.clientUpdateStepper.success || false,
            message: result.data.clientUpdateStepper.message || "",
            product_id: result.data.clientUpdateStepper.product_id || "",
            stepper_type: result.data.clientUpdateStepper.stepper_type || "",
            current_step: result.data.clientUpdateStepper.current_step || "1",
            steps_info: result.data.clientUpdateStepper.steps_info?.filter(Boolean).map(step => ({
              applicantInfo: step?.applicantInfo || undefined,
              modelInfo: step?.modelInfo ? {
                model_name: step.modelInfo.model_name || "",
                estimated_production_per_anum: step.modelInfo.estimated_production_per_anum || "",
                refrigerator: step.modelInfo.refrigerator ? {
                  brand_name: step.modelInfo.refrigerator.brand_name || "",
                  model_name: step.modelInfo.refrigerator.model_name || "",
                  manufacture_date: step.modelInfo.refrigerator.manufacture_date || "",
                  origin_country: step.modelInfo.refrigerator.origin_country || "",
                  kw_rating: step.modelInfo.refrigerator.kw_rating || 0,
                  annual_energy_consumption: step.modelInfo.refrigerator.annual_energy_consumption || 0,
                  total_volume_litres: step.modelInfo.refrigerator.total_volume_litres || 0,
                  refrigerant_type: step.modelInfo.refrigerator.refrigerant_type || "",
                  colors: step.modelInfo.refrigerator.colors || "",
                  ps_mark: step.modelInfo.refrigerator.ps_mark || false,
                  energy_efficiency_features: step.modelInfo.refrigerator.energy_efficiency_features || "",
                  specify_number: step.modelInfo.refrigerator.specify_number || "",
                } : undefined,
                motor: step.modelInfo.motor ? {
                  manufacturer_name: step.modelInfo.motor.manufacturer_name || "",
                  country_of_manufacture: step.modelInfo.motor.country_of_manufacture || "",
                  brand_name: step.modelInfo.motor.brand_name || "",
                  first_manufactured_year: step.modelInfo.motor.first_manufactured_year || 0,
                  model_number: step.modelInfo.motor.model_number || "",
                  replaces_other_model: step.modelInfo.motor.replaces_other_model || false,
                  date_marked: step.modelInfo.motor.date_marked || false,
                  website_url: step.modelInfo.motor.website_url || "",
                  phase_type: step.modelInfo.motor.phase_type || "",
                  rated_power_output: step.modelInfo.motor.rated_power_output || 0,
                  rated_voltage: step.modelInfo.motor.rated_voltage || 0,
                  rated_frequency: step.modelInfo.motor.rated_frequency || 0,
                  number_of_poles: step.modelInfo.motor.number_of_poles || 0,
                  rated_speed: step.modelInfo.motor.rated_speed || 0,
                  motor_duty: step.modelInfo.motor.motor_duty || "",
                  mounting_code: step.modelInfo.motor.mounting_code || "",
                  frame_code: step.modelInfo.motor.frame_code || "",
                  enclosure_rating: step.modelInfo.motor.enclosure_rating || "",
                  motor_design: step.modelInfo.motor.motor_design || "",
                  motor_insulation: step.modelInfo.motor.motor_insulation || "",
                } : undefined,
                ledLight: step.modelInfo.ledLight ? {
                  brand_name: step.modelInfo.ledLight.brand_name || "",
                  model_number: step.modelInfo.ledLight.model_number || "",
                  bar_code: step.modelInfo.ledLight.bar_code || "",
                  lamp_type: step.modelInfo.ledLight.lamp_type || "",
                  country_of_origin: step.modelInfo.ledLight.country_of_origin || "",
                  manufacture_date: step.modelInfo.ledLight.manufacture_date || "",
                  lamp_length: step.modelInfo.ledLight.lamp_length || 0,
                  max_diameter: step.modelInfo.ledLight.max_diameter || 0,
                  min_voltage: step.modelInfo.ledLight.min_voltage || 0,
                  max_voltage: step.modelInfo.ledLight.max_voltage || 0,
                  rated_frequency: step.modelInfo.ledLight.rated_frequency || 0,
                  rated_power: step.modelInfo.ledLight.rated_power || 0,
                  power_factor: step.modelInfo.ledLight.power_factor || 0,
                  standby_power: step.modelInfo.ledLight.standby_power || 0,
                  flux: step.modelInfo.ledLight.flux || 0,
                  efficacy: step.modelInfo.ledLight.efficacy || 0,
                  color_temperature: step.modelInfo.ledLight.color_temperature || 0,
                  chromaticity_tolerance: step.modelInfo.ledLight.chromaticity_tolerance || 0,
                  color_rendering_index: step.modelInfo.ledLight.color_rendering_index || 0,
                  rated_lifetime: step.modelInfo.ledLight.rated_lifetime || 0,
                  mercury_content: step.modelInfo.ledLight.mercury_content || 0,
                  risk_group: step.modelInfo.ledLight.risk_group || "",
                  warranty_years: step.modelInfo.ledLight.warranty_years || 0,
                } : undefined,
                fan: step.modelInfo.fan ? ({
                  model_name: step.modelInfo.fan.model_name || "",
                  rating: step.modelInfo.fan.rating || "",
                  size_capacity: step.modelInfo.fan.size_capacity || 0,
                  colors: step.modelInfo.fan.colors || "",
                  ps_mark: step.modelInfo.fan.ps_mark || false,
                  energy_efficiency_features: step.modelInfo.fan.energy_efficiency_features || "",
                  specify_number: step.modelInfo.fan.specify_number || "",
                } as Fan) : undefined,
                ac: step.modelInfo.ac ? ({
                  brand_name: step.modelInfo.ac.brand_name || "",
                  model_name: step.modelInfo.ac.model_name || "",
                  manufacture_date: step.modelInfo.ac.manufacture_date || "",
                  origin_country: step.modelInfo.ac.origin_country || "",
                  kw_rating: step.modelInfo.ac.kw_rating || 0,
                  annual_energy_consumption: step.modelInfo.ac.annual_energy_consumption || 0,
                  cooling_capacity: step.modelInfo.ac.cooling_capacity || "",
                  refrigerant_type: step.modelInfo.ac.refrigerant_type || "",
                  colors: step.modelInfo.ac.colors || "",
                  ps_mark: step.modelInfo.ac.ps_mark || false,
                  energy_efficiency_features: step.modelInfo.ac.energy_efficiency_features || "",
                  specify_number: step.modelInfo.ac.specify_number || "",
                } as AC) : undefined,
              } : undefined,
              labReport: step?.labReport || undefined,
              payment: step?.payment || undefined,
            })) || [],
          };
          updateStepper(updatedState);
        }
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
        {isLoading && <div className="text-white mt-4">Saving changes...</div>}
      </div>
    </Suspense>
  );
};

export default StepperComponent;
