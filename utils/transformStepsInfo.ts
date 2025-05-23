// @/utils/transformStepsInfo.ts

import type { StepInfo } from "@/queries/generated/graphql";

interface PaymentData {
  payment_type?: string;
  amount?: number;
  payment_date?: string;
  pay_order_number?: string;
  demand_draft?: string;
}

export interface TransformedStepInfo {
  applicantInfo: {
    company_name: string;
    company_address: string;
    company_country: string;
    company_province: string;
    company_city: string;
    factory_telephone: string;
    factory_address: string;
    factory_country: string;
    factory_province: string;
    factory_city: string;
    office_telephone: string;
    office_managing_director_name: string;
    contact_person_name: string;
    contact_person_phone: string;
    contact_person_telephone: string;
    contact_person_email: string;
    registered_with_chamber: boolean;
    user_agreement: boolean;
    registration_number: string;
    registration_year: string;
    member_of_association: boolean;
    membership_name: string;
    membership_number: string;
    membership_year: string;
    sales_network_regions: string | string[];
    company_brochure: string;
    product_brochure: string;
  };
  modelInfo: {
    model_name: string;
    estimated_production_per_anum: string;
    refrigerator?: {
      brand_name: string;
      model_name: string;
      manufacture_date: string;
      origin_country: string;
      kw_rating: number;
      annual_energy_consumption: number;
      total_volume_litres: number;
      refrigerant_type: string;
      colors: string;
      ps_mark: boolean;
      energy_efficiency_features: string;
      specify_number?: string;
    };
    motor?: {
      manufacturer_name: string;
      country_of_manufacture: string;
      brand_name: string;
      first_manufactured_year: number | string;
      model_number: string;
      replaces_other_model: boolean;
      date_marked: boolean | string;
      website_url: string;
      phase_type: string;
      rated_power_output: number;
      rated_voltage: number;
      rated_frequency: number;
      number_of_poles: number;
      rated_speed: number;
      motor_duty: string;
      mounting_code: string;
      frame_code: string;
      enclosure_rating: string;
      motor_design: string;
      motor_insulation: string;
      state_model?: string;
      date_format?: string;
    };
    ledLight?: {
      brand_name: string;
      model_number: string;
      bar_code: string;
      lamp_type: string;
      country_of_origin: string;
      manufacture_date: string;
      lamp_length: number;
      max_diameter: number;
      min_voltage: number;
      max_voltage: number;
      rated_frequency: number;
      rated_power: number;
      power_factor: number;
      standby_power: number;
      flux: number;
      efficacy: number;
      color_temperature: number;
      chromaticity_tolerance: number | string;
      color_rendering_index: number;
      rated_lifetime: number;
      mercury_content: number;
      risk_group: string;
      warranty_years: number;
    };
    fan?: {
      size_capacity: number | string;
      rating: number | string;
      ps_mark: boolean;
      model_name: string;
      energy_efficiency_features: string;
      colors: string;
      specify_number?: string;
    };
    ac?: {
      refrigerant_type: string;
      ps_mark: boolean;
      origin_country: string;
      model_name: string;
      manufacture_date: string;
      kw_rating: number;
      energy_efficiency_features: string;
      cooling_capacity: string;
      colors: string;
      brand_name: string;
      annual_energy_consumption: number;
      specify_number?: string;
    };
  };
  payment: Array<{
    payment_type: string;
    amount: number;
    payment_date: string;
    pay_order_number: string;
    demand_draft: string;
  }>;
  labReport: {
    test_report: string | null;
    report_from: string | null;
    lab_user_name: string | null;
    lab_id: string | null;
    lab_country: string | null;
  };
}

export const transformStepsInfo = (stepsInfo: any[] = []) => {
  // Ensure stepsInfo is always an array
  if (!stepsInfo || !Array.isArray(stepsInfo) || stepsInfo.length === 0) {
    // Return a default structure based on resetAgreementStore
    return [
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
          sales_network_regions: "",
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
            date_marked: false,
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
            size_capacity: 0,
            rating: 0,
            ps_mark: false,
            model_name: "",
            energy_efficiency_features: "",
            colors: "",
            specify_number: "",
          },
          ac: {
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
    ];
  }

  return stepsInfo.map((step) => {
    // Ensure each step has a structure even if it's empty
    if (!step) step = {};

    // For payment, create a clean array without forbidden fields
    let cleanPayments = [];

    if (Array.isArray(step.payment)) {
      cleanPayments = step.payment.map((pay: PaymentData) => ({
        payment_type: pay?.payment_type || "",
        amount: pay?.amount || 0,
        payment_date: pay?.payment_date || "",
        pay_order_number: pay?.pay_order_number || "",
        demand_draft: pay?.demand_draft || "",
      }));
    } else if (step.payment) {
      // Handle the payment structure with c_ and m_ prefixes
      cleanPayments = [
        {
          payment_type: "companyinfo",
          amount: step.payment.c_amount || 100000,
          payment_date: step.payment.c_payment_date || "",
          pay_order_number: step.payment.c_pay_order_number || "",
          demand_draft: step.payment.c_demand_draft || "",
        },
        {
          payment_type: "modelinfo",
          amount: step.payment.m_amount || 100000,
          payment_date: step.payment.m_payment_date || "",
          pay_order_number: step.payment.m_pay_order_number || "",
          demand_draft: step.payment.m_demand_draft || "",
        },
      ];
    } else {
      // Default payment structure
      cleanPayments = [
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
      ];
    }

    // Handle nested formData and applicantInfo structures
    const combinedApplicantInfo = {
      ...(step.formData || {}),
      ...(step.applicantInfo || {}),
    };

    return {
      applicantInfo: combinedApplicantInfo
        ? {
            user_agreement: combinedApplicantInfo.user_agreement ?? false,
            company_name: combinedApplicantInfo.company_name || "",
            company_address: combinedApplicantInfo.company_address || "",
            company_city: combinedApplicantInfo.company_city || "",
            company_country: combinedApplicantInfo.company_country || "",
            company_province: combinedApplicantInfo.company_province || "",
            contact_person_email:
              combinedApplicantInfo.contact_person_email || "",
            contact_person_name:
              combinedApplicantInfo.contact_person_name || "",
            contact_person_phone:
              combinedApplicantInfo.contact_person_phone || "",
            contact_person_telephone:
              combinedApplicantInfo.contact_person_telephone || "",
            factory_address: combinedApplicantInfo.factory_address || "",
            factory_city: combinedApplicantInfo.factory_city || "",
            factory_country: combinedApplicantInfo.factory_country || "",
            factory_province: combinedApplicantInfo.factory_province || "",
            factory_telephone: combinedApplicantInfo.factory_telephone || "",
            member_of_association:
              combinedApplicantInfo.member_of_association ?? false,
            membership_name: combinedApplicantInfo.membership_name || "",
            membership_number: combinedApplicantInfo.membership_number || "",
            membership_year: combinedApplicantInfo.membership_year || "",
            office_managing_director_name:
              combinedApplicantInfo.office_managing_director_name || "",
            office_telephone: combinedApplicantInfo.office_telephone || "",
            registered_with_chamber:
              combinedApplicantInfo.registered_with_chamber ?? false,
            registration_number:
              combinedApplicantInfo.registration_number || "",
            registration_year: combinedApplicantInfo.registration_year || "",
            sales_network_regions: Array.isArray(
              combinedApplicantInfo.sales_network_regions
            )
              ? combinedApplicantInfo.sales_network_regions.join(",")
              : combinedApplicantInfo.sales_network_regions || "",
            company_brochure: combinedApplicantInfo.company_brochure || "",
            product_brochure: combinedApplicantInfo.product_brochure || "",
          }
        : {
            user_agreement: false,
            company_name: "",
            company_address: "",
            company_city: "",
            company_country: "",
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
            registered_with_chamber: false,
            registration_number: "",
            registration_year: "",
            sales_network_regions: "",
            company_brochure: "",
            product_brochure: "",
          },

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
                    step.modelInfo.refrigerator.annual_energy_consumption || 0,
                  total_volume_litres:
                    step.modelInfo.refrigerator.total_volume_litres || 0,
                  refrigerant_type:
                    step.modelInfo.refrigerator.refrigerant_type || "",
                  colors: step.modelInfo.refrigerator.colors || "",
                  ps_mark: step.modelInfo.refrigerator.ps_mark || false,
                  energy_efficiency_features:
                    step.modelInfo.refrigerator.energy_efficiency_features ||
                    "",
                  specify_number:
                    step.modelInfo.refrigerator.specify_number || "",
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
                  specify_number: step.modelInfo.ac.specify_number || "",
                }
              : undefined,

            // Fan data
            fan: step.modelInfo.fan
              ? {
                  size_capacity: step.modelInfo.fan.size_capacity || 0,
                  rating: step.modelInfo.fan.rating || 0,
                  ps_mark: step.modelInfo.fan.ps_mark || false,
                  model_name: step.modelInfo.fan.model_name || "",
                  energy_efficiency_features:
                    step.modelInfo.fan.energy_efficiency_features || "",
                  colors: step.modelInfo.fan.colors || "",
                  specify_number: step.modelInfo.fan.specify_number || "",
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
                    step.modelInfo.motor.first_manufactured_year || 0,
                  model_number: step.modelInfo.motor.model_number || "",
                  replaces_other_model:
                    step.modelInfo.motor.replaces_other_model || false,
                  date_marked: step.modelInfo.motor.date_marked || false,
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
                  enclosure_rating: step.modelInfo.motor.enclosure_rating || "",
                  motor_design: step.modelInfo.motor.motor_design || "",
                  motor_insulation: step.modelInfo.motor.motor_insulation || "",
                  state_model: step.modelInfo.motor.state_model || "",
                  date_format: step.modelInfo.motor.date_format || "",
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
                  rated_frequency: step.modelInfo.ledLight.rated_frequency || 0,
                  rated_power: step.modelInfo.ledLight.rated_power || 0,
                  power_factor: step.modelInfo.ledLight.power_factor || 0,
                  standby_power: step.modelInfo.ledLight.standby_power || 0,
                  flux: step.modelInfo.ledLight.flux || 0,
                  efficacy: step.modelInfo.ledLight.efficacy || 0,
                  color_temperature:
                    step.modelInfo.ledLight.color_temperature || 0,
                  chromaticity_tolerance:
                    step.modelInfo.ledLight.chromaticity_tolerance || 0,
                  color_rendering_index:
                    step.modelInfo.ledLight.color_rendering_index || 0,
                  rated_lifetime: step.modelInfo.ledLight.rated_lifetime || 0,
                  mercury_content: step.modelInfo.ledLight.mercury_content || 0,
                  risk_group: step.modelInfo.ledLight.risk_group || "",
                  warranty_years: step.modelInfo.ledLight.warranty_years || 0,
                }
              : undefined,
          }
        : {
            model_name: "",
            estimated_production_per_anum: "",
          },

      // Lab Report data
      labReport: step.labReport
        ? {
            lab_country: step.labReport.lab_country || "",
            lab_id: step.labReport.lab_id || "",
            lab_user_name: step.labReport.lab_user_name || "",
            report_from: step.labReport.report_from || "",
            test_report: step.labReport.test_report || "",
          }
        : {
            lab_country: "",
            lab_id: "",
            lab_user_name: "",
            report_from: "",
            test_report: "",
          },

      // Use the cleaned payment array
      payment: cleanPayments,
    };
  });
};
