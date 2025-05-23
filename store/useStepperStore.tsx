import { create } from "zustand"

interface ApplicantInfo {
  company_name: string
  company_address: string
  company_country: string
  company_province: string
  company_city: string
  factory_telephone: string
  factory_address: string
  factory_country: string
  factory_province: string
  factory_city: string
  office_telephone: string
  office_managing_director_name: string
  contact_person_name: string
  contact_person_phone: string
  contact_person_telephone: string
  contact_person_email: string
  registered_with_chamber: boolean
  user_agreement: boolean
  registration_number: string
  registration_year: string
  member_of_association: boolean
  membership_name: string
  membership_number: string
  membership_year: string
  sales_network_regions: string[]
  company_brochure: string
  product_brochure: string
}

interface LabReport {
    test_report: string | null;
    report_from: string | null;
    lab_user_name: string | null;
    lab_id: string | null;
    lab_country: string | null;
  }

interface Refrigerator {
  brand_name: string
  model_name: string
  manufacture_date: string
  origin_country: string
  kw_rating: number
  annual_energy_consumption: number
  total_volume_litres: number
  refrigerant_type: string
  colors: string
  ps_mark: boolean
  energy_efficiency_features: string
}

interface Motor {
  manufacturer_name: string
  country_of_manufacture: string
  brand_name: string
  first_manufactured_year: number
  model_number: string
  replaces_other_model: boolean
  date_marked: boolean
  website_url: string
  phase_type: string
  rated_power_output: number
  rated_voltage: number
  rated_frequency: number
  number_of_poles: number
  rated_speed: number
  motor_duty: string
  mounting_code: string
  frame_code: string
  enclosure_rating: string
  motor_design: string
  motor_insulation: string
}

interface LedLight {
  brand_name: string
  model_number: string
  bar_code: string
  lamp_type: string
  country_of_origin: string
  manufacture_date: string
  lamp_length: number
  max_diameter: number
  min_voltage: number
  max_voltage: number
  rated_frequency: number
  rated_power: number
  power_factor: number
  standby_power: number
  flux: number
  efficacy: number
  color_temperature: number
  chromaticity_tolerance: number
  color_rendering_index: number
  rated_lifetime: number
  mercury_content: number
  risk_group: string
  warranty_years: number
}

interface Fan {
  model_name: string
  rating: string
  size_capacity: number
  colors: string
  ps_mark: boolean
  energy_efficiency_features: string
}

interface Ac {
  id: string
  model_info_id: string
  brand_name: string
  model_name: string
  manufacture_date: string
  origin_country: string
  kw_rating: number
  annual_energy_consumption: number
  cooling_capacity: string
  refrigerant_type: string
  colors: string
  ps_mark: boolean
  energy_efficiency_features: string
  specify_number: string
}

interface ModelInfo {
  model_name: string
  estimated_production_per_anum: string
  refrigerator: Refrigerator
  motor: Motor
  ledLight: LedLight
  fan: Fan
  ac: Ac
}

interface Payment {
  payment_type: string
  amount: number
  payment_date: string
  pay_order_number: string
  demand_draft: string
}

export interface StepInfo {
  applicantInfo: ApplicantInfo
  modelInfo: ModelInfo
  payment: Payment[],
  labReport: LabReport | null; // Add labReport to StepInfo
}

interface StepperState {
  id: string
  count: number
  success: boolean
  message: string
  product_id: string
  stepper_type: string
  current_step: string
  steps_info: StepInfo[]
  updateStepper: (newState: Partial<Omit<StepperState, "updateStepper">>) => void
  setCurrentStep: (step: number) => void
  clearStore: () => void
  updateStepInfo: (stepInfo: StepInfo, stepIndex: number) => void
}

export const useStepperStore = create<StepperState>((set) => ({
  id: "",
  count: 0,
  success: false,
  message: "",
  product_id: "",
  stepper_type: "",
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
        user_agreement: true,
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
        },
        motor: {
          manufacturer_name: "",
          country_of_manufacture: "",
          brand_name: "",
          first_manufactured_year: 0,
          model_number: "",
          replaces_other_model: false,
          date_marked: false,
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
        fan: {
          model_name: "",
          rating: "",
          size_capacity: 0,
          colors: "",
          ps_mark: false,
          energy_efficiency_features: "",
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
      labReport: {
        test_report: "",
        report_from:  "",
        lab_user_name:"",
        lab_id:   "",
        lab_country:  "",
        },
    },
  ],
  updateStepper: (newState) => set((state) => ({ ...state, ...newState })),
  setCurrentStep: (step) => set({ current_step: step.toString() }),
  clearStore: () =>
    set({
      id: "",
      count: 0,
      success: false,
      message: "",
      product_id: "",
      stepper_type: "",
      current_step: "1",
      steps_info: [],
    }),
    updateStepInfo: (stepInfo: StepInfo, stepIndex: number) =>
        set((state) => ({
          steps_info: state.steps_info.map((step, index) =>
            index === stepIndex ? { ...step, ...stepInfo } : step
          ),
        })),
}))

