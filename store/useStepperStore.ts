import { create } from "zustand";
import type {
  StepInfo,
  ApplicantInfo as GraphQLApplicantInfo,
  ModelInfo as GraphQLModelInfo,
  LabReport as GraphQLLabReport,
  Payment as GraphQLPayment,
  Fan as GraphQLFan,
  Ac
} from "@/queries/generated/graphql";

// Re-export the GraphQL types
export type {
  StepInfo,
  ApplicantInfo as GraphQLApplicantInfo,
  ModelInfo as GraphQLModelInfo,
  LabReport as GraphQLLabReport,
  Payment as GraphQLPayment,
  Fan as GraphQLFan,
  Ac
};

// Local interfaces that extend GraphQL types
export interface ApplicantInfo extends GraphQLApplicantInfo {}
export interface ModelInfo extends GraphQLModelInfo {}
export interface LabReport extends GraphQLLabReport {}
export interface Payment extends GraphQLPayment {}
export interface Fan extends GraphQLFan {}
export interface AC extends Ac {}

export interface StepperState {
  id?: string | null;
  current_step: string;
  product_id?: string | null;
  stepper_type?: string | null;
  steps_info: Array<Partial<StepInfo>>;
  success?: boolean | null;
  message?: string | null;
  count?: number | null;
  userAgreement?: boolean;
  isSubmissionSuccessful?: boolean;

  // Actions
  setCurrentStep: (step: number) => void;
  updateStepper: (data: Partial<StepperState>) => void;
  resetStepper: () => void;
  resetAgreementStore: () => void;
}

const initialState: Omit<
  StepperState,
  "setCurrentStep" | "updateStepper" | "resetStepper" | "resetAgreementStore"
> = {
  current_step: "1",
  steps_info: [
    {
      applicantInfo: {
        company_name: "",
        company_address: "",
        company_country: "",
        company_province: "",
        company_city: "",
        factory_telephone: "",
        factory_address: "",
        factory_country: "",
        factory_province: "",
        factory_city: "",
        office_telephone: "",
        office_managing_director_name: "",
        contact_person_name: "",
        contact_person_phone: "",
        contact_person_telephone: "",
        contact_person_email: "",
        registered_with_chamber: false,
        user_agreement: false,
        registration_number: "",
        registration_year: "",
        member_of_association: false,
        membership_name: "",
        membership_number: "",
        membership_year: "",
        sales_network_regions: [],
        company_brochure: "",
        product_brochure: "",
      },
      modelInfo: {
        model_name: "",
        estimated_production_per_anum: "",
        refrigerator: {
          brand_name: "",
          model_name: "",
          manufacture_date: "",
          origin_country: "",
          kw_rating: 0,
          annual_energy_consumption: 0,
          total_volume_litres: 0,
          refrigerant_type: "",
          colors: "",
          ps_mark: false,
          energy_efficiency_features: "",
          specify_number: "",
        },
        ac: {
          id: "",
          model_info_id: "",
          brand_name: "",
          model_name: "",
          manufacture_date: "",
          origin_country: "",
          kw_rating: 0,
          annual_energy_consumption: 0,
          cooling_capacity: "",
          refrigerant_type: "",
          colors: "",
          ps_mark: false,
          energy_efficiency_features: "",
          specify_number: "",
        },
        fan: {
          id: "",
          model_info_id: "",
          size_capacity: 0,
          rating: "",
          ps_mark: false,
          model_name: "",
          energy_efficiency_features: "",
          colors: "",
          specify_number: "",
        },
        motor: {
          manufacturer_name: "",
          country_of_manufacture: "",
          brand_name: "",
          first_manufactured_year: 0,
          model_number: "",
          replaces_other_model: false,
          date_marked: null, // *** FIXED HERE ***
          website_url: "",
          phase_type: "",
          rated_power_output: 0,
          rated_voltage: 0,
          rated_frequency: 0,
          number_of_poles: 0,
          rated_speed: 0,
          motor_duty: "",
          mounting_code: "",
          frame_code: "",
          enclosure_rating: "",
          motor_design: "",
          motor_insulation: "",
          state_model: "",
          date_format: "",
        },
        ledLight: {
          brand_name: "",
          model_number: "",
          bar_code: "",
          lamp_type: "",
          country_of_origin: "",
          manufacture_date: "",
          lamp_length: 0,
          max_diameter: 0,
          min_voltage: 0,
          max_voltage: 0,
          rated_frequency: 0,
          rated_power: 0,
          power_factor: 0,
          standby_power: 0,
          flux: 0,
          efficacy: 0,
          color_temperature: 0,
          chromaticity_tolerance: 0,
          color_rendering_index: 0,
          rated_lifetime: 0,
          mercury_content: 0,
          risk_group: "",
          warranty_years: 0,
        },
      },
      labReport: {
        lab_country: "",
        lab_id: "",
        lab_user_name: "",
        report_from: "",
        test_report: "",
      },
      payment: [
        {
          payment_type: "companyinfo",
          amount: 100000,
          payment_date: "",
          pay_order_number: "",
          demand_draft: "",
        },
        {
          payment_type: "modelinfo",
          amount: 100000,
          payment_date: "",
          pay_order_number: "",
          demand_draft: "",
        },
      ],
    },
  ],
  userAgreement: false,
  isSubmissionSuccessful: false,
};

export const useStepperStore = create<StepperState>((set) => ({
  ...initialState,

  setCurrentStep: (step: number) => set({ current_step: step.toString() }),

  updateStepper: (data: Partial<StepperState>) =>
    set((state) => {
      console.log("Updating stepper store with:", data);
      return {
        ...state,
        ...data,
        steps_info:
          data.steps_info &&
          Array.isArray(data.steps_info) &&
          data.steps_info.length > 0
            ? data.steps_info
            : state.steps_info,
      };
    }),

  resetStepper: () => set(() => ({ ...initialState })),

  resetAgreementStore: () =>
    set({
      id: undefined,
      userAgreement: false,
      current_step: "1",
      steps_info: [
        {
          applicantInfo: {
            company_address: "",
            company_brochure: "",
            company_city: "",
            company_country: "",
            company_name: "",
            company_province: "",
            contact_person_email: "",
            contact_person_name: "",
            contact_person_phone: "",
            contact_person_telephone: "",
            factory_address: "",
            factory_city: "",
            factory_country: "",
            factory_province: "",
            factory_telephone: "",
            member_of_association: false,
            membership_name: "",
            membership_number: "",
            membership_year: "",
            office_managing_director_name: "",
            office_telephone: "",
            product_brochure: "",
            registered_with_chamber: false,
            registration_number: "",
            registration_year: "",
            sales_network_regions: [],
            user_agreement: false,
          },
          modelInfo: {
            model_name: "",
            estimated_production_per_anum: "",
            refrigerator: {
              total_volume_litres: 0,
              refrigerant_type: "",
              ps_mark: false,
              origin_country: "",
              model_name: "",
              manufacture_date: "",
              kw_rating: 0,
              energy_efficiency_features: "",
              colors: "",
              brand_name: "",
              annual_energy_consumption: 0,
              specify_number: "",
            },
            motor: {
              website_url: "",
              replaces_other_model: false,
              rated_voltage: 0,
              rated_speed: 0,
              rated_power_output: 0,
              rated_frequency: 0,
              phase_type: "",
              number_of_poles: 0,
              mounting_code: "",
              motor_insulation: "",
              motor_duty: "",
              motor_design: "",
              model_number: "",
              manufacturer_name: "",
              frame_code: "",
              first_manufactured_year: 0,
              enclosure_rating: "",
              date_marked: null, // *** FIXED HERE ***
              country_of_manufacture: "",
              brand_name: "",
              state_model: "",
              date_format: "",
            },
            ledLight: {
              warranty_years: 0,
              standby_power: 0,
              risk_group: "",
              rated_power: 0,
              rated_lifetime: 0,
              rated_frequency: 0,
              power_factor: 0,
              model_number: "",
              min_voltage: 0,
              mercury_content: 0,
              max_voltage: 0,
              max_diameter: 0,
              manufacture_date: "",
              lamp_type: "",
              lamp_length: 0,
              flux: 0,
              efficacy: 0,
              country_of_origin: "",
              color_temperature: 0,
              color_rendering_index: 0,
              chromaticity_tolerance: 0,
              brand_name: "",
              bar_code: "",
            },
            fan: {
              id: "",
              model_info_id: "",
              size_capacity: 0,
              rating: "",
              ps_mark: false,
              model_name: "",
              energy_efficiency_features: "",
              colors: "",
              specify_number: "",
            },
            ac: {
              id: "",
              model_info_id: "",
              refrigerant_type: "",
              ps_mark: false,
              origin_country: "",
              model_name: "",
              manufacture_date: "",
              kw_rating: 0,
              energy_efficiency_features: "",
              cooling_capacity: "",
              colors: "",
              brand_name: "",
              annual_energy_consumption: 0,
              specify_number: "",
            },
          },
          labReport: {
            lab_country: "",
            lab_id: "",
            lab_user_name: "",
            report_from: "",
            test_report: "",
          },
          payment: [
            {
              payment_type: "companyinfo",
              amount: 100000,
              payment_date: "",
              pay_order_number: "",
              demand_draft: "",
            },
            {
              payment_type: "modelinfo",
              amount: 100000,
              payment_date: "",
              pay_order_number: "",
              demand_draft: "",
            },
          ],
        },
      ],
      isSubmissionSuccessful: false,
    }),
}));