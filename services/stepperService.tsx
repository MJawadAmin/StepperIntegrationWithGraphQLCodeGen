// services/stepperService.ts

import { gql } from "@apollo/client";
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useStepperStore } from "@/store/useStepperStore";
import { handleApolloError } from "@/utils/handleApolloError";
import type { StepInfo } from "@/store/useStepperStore";
import type { NextRouter } from "next/router";

// Define types for the responses
interface StepperResponse {
  id: string;
  count: number;
  success: boolean;
  message: string;
  product_id: string;
  stepper_type: string;
  current_step: string;
  steps_info: StepInfo[];
}

interface StatusResponse {
  clientGetStatus: {
    userProduct: {
      product_id: string;
      status: string;
    };
  };
}

// Update mutation with proper variable names matching the schema
export const UPDATE_STEPPER_DATA = gql`
  mutation ClientUpdateStepper(
    $product_id: String!
    $action: String!
    $current_step: String!
    $stepper_type: String!
    $steps_info: [StepInfoInput]!
  ) {
    clientUpdateStepper(
      product_id: $product_id
      action: $action
      current_step: $current_step
      stepper_type: $stepper_type
      steps_info: $steps_info
    ) {
      id
    count
    success
    message
    product_id
    stepper_type
    current_step
    steps_info {
      labReport {
        id
        user_id
        lab_id
        product_id
        model_info_id
        test_report
        report_from
        lab_country
        lab_user_name
        status
        reason
        lab {
          id
          name
          email
          father_name
          country
          cnic
          phone
          profile_picture
          lab_type
          lab_origin
          lab_category
          lab_expires
          role
          status
          allowed_products
        }
        user {
          id
          name
          email
          father_name
          country
          cnic
          phone
          profile_picture
          lab_type
          lab_origin
          lab_category
          lab_expires
          role
          status
          allowed_products
        }
        Product {
          id
          name
          description
          image
        }
        createdAt
        updatedAt
      }
      applicantInfo {
        id
        user_id
        assign_to
        assign_by
        status
        product_id
        company_name
        company_address
        company_country
        company_province
        company_city
        factory_telephone
        factory_address
        factory_country
        factory_province
        factory_city
        office_telephone
        office_managing_director_name
        contact_person_name
        contact_person_phone
        contact_person_telephone
        contact_person_email
        registered_with_chamber
        user_agreement
        registration_number
        registration_year
        member_of_association
        membership_name
        membership_number
        membership_year
        sales_network_regions
        company_brochure
        product_brochure
        createdAt
        updatedAt
        reason
      }
      modelInfo {
        id
        user_id
        product_id
        model_name
        estimated_production_per_anum
        status
        service_value
        start_rating
        remarks_comments
        refrigerator {
          model_info_id
          brand_name
          model_name
          manufacture_date
          origin_country
          kw_rating
          annual_energy_consumption
          total_volume_litres
          refrigerant_type
          colors
          ps_mark
          specify_number
          energy_efficiency_features
        }
        motor {
          model_info_id
          manufacturer_name
          country_of_manufacture
          brand_name
          first_manufactured_year
          model_number
          replaces_other_model
          date_marked
          website_url
          phase_type
          rated_power_output
          rated_voltage
          rated_frequency
          number_of_poles
          rated_speed
          motor_duty
          mounting_code
          frame_code
          enclosure_rating
          motor_design
          motor_insulation
          state_model
          date_format
        }
        ledLight {
          model_info_id
          brand_name
          model_number
          bar_code
          lamp_type
          country_of_origin
          manufacture_date
          lamp_length
          max_diameter
          min_voltage
          max_voltage
          rated_frequency
          rated_power
          power_factor
          standby_power
          flux
          efficacy
          color_temperature
          chromaticity_tolerance
          color_rendering_index
          rated_lifetime
          mercury_content
          risk_group
          warranty_years
        }
        fan {
          id
          model_info_id
          model_name
          rating
          size_capacity
          colors
          ps_mark
          specify_number
          energy_efficiency_features
        }
        ac {
          brand_name
          model_name
          manufacture_date
          origin_country
          kw_rating
          annual_energy_consumption
          cooling_capacity
          refrigerant_type
          colors
          ps_mark
          specify_number
          energy_efficiency_features
        }
        createdAt
        is_certificate_generated
      }
      payment {
        id
        user_id
        product_id
        modelinfo_id
        payment_type
        amount
        payment_date
        pay_order_number
        demand_draft
        status
      }
    }
  }
}
`;


export const GET_STEPPER_DATA = gql`
  query ClientGetStepper($product_id: String!, $stepper_type: String!) {
    clientGetStepper(product_id: $product_id, stepper_type: $stepper_type) {
     id
    count
    success
    message
    product_id
    stepper_type
    current_step
    steps_info {
      labReport {
        id
        user_id
        lab_id
        product_id
        model_info_id
        test_report
        report_from
        lab_country
        lab_user_name
        status
        reason
        lab {
          id
          name
          email
          father_name
          country
          cnic
          phone
          profile_picture
          lab_type
          lab_origin
          lab_category
          lab_expires
          role
          status
          allowed_products
        }
        user {
          id
          name
          email
          father_name
          country
          cnic
          phone
          profile_picture
          lab_type
          lab_origin
          lab_category
          lab_expires
          role
          status
          allowed_products
        }
        Product {
          id
          name
          description
          image
        }
        createdAt
        updatedAt
      }
      applicantInfo {
        id
        user_id
        assign_to
        assign_by
        status
        product_id
        company_name
        company_address
        company_country
        company_province
        company_city
        factory_telephone
        factory_address
        factory_country
        factory_province
        factory_city
        office_telephone
        office_managing_director_name
        contact_person_name
        contact_person_phone
        contact_person_telephone
        contact_person_email
        registered_with_chamber
        user_agreement
        registration_number
        registration_year
        member_of_association
        membership_name
        membership_number
        membership_year
        sales_network_regions
        company_brochure
        product_brochure
        createdAt
        updatedAt
        reason
      }
      modelInfo {
        id
        user_id
        product_id
        model_name
        estimated_production_per_anum
        status
        service_value
        start_rating
        remarks_comments
        refrigerator {
          model_info_id
          brand_name
          model_name
          manufacture_date
          origin_country
          kw_rating
          annual_energy_consumption
          total_volume_litres
          refrigerant_type
          colors
          ps_mark
          specify_number
          energy_efficiency_features
        }
        motor {
          model_info_id
          manufacturer_name
          country_of_manufacture
          brand_name
          first_manufactured_year
          model_number
          replaces_other_model
          date_marked
          website_url
          phase_type
          rated_power_output
          rated_voltage
          rated_frequency
          number_of_poles
          rated_speed
          motor_duty
          mounting_code
          frame_code
          enclosure_rating
          motor_design
          motor_insulation
          state_model
          date_format
        }
        ledLight {
          model_info_id
          brand_name
          model_number
          bar_code
          lamp_type
          country_of_origin
          manufacture_date
          lamp_length
          max_diameter
          min_voltage
          max_voltage
          rated_frequency
          rated_power
          power_factor
          standby_power
          flux
          efficacy
          color_temperature
          chromaticity_tolerance
          color_rendering_index
          rated_lifetime
          mercury_content
          risk_group
          warranty_years
        }
        fan {
          id
          model_info_id
          model_name
          rating
          size_capacity
          colors
          ps_mark
          specify_number
          energy_efficiency_features
        }
        ac {
          brand_name
          model_name
          manufacture_date
          origin_country
          kw_rating
          annual_energy_consumption
          cooling_capacity
          refrigerant_type
          colors
          ps_mark
          specify_number
          energy_efficiency_features
        }
        createdAt
        is_certificate_generated
      }
      payment {
        id
        user_id
        product_id
        modelinfo_id
        payment_type
        amount
        payment_date
        pay_order_number
        demand_draft
        status
      }
    }
  }
}
`;

export const updateStepperData = async (
  client: ApolloClient<NormalizedCacheObject>,
  productId: string,
  currentStep: string,
  stepperType: string,
  stepsInfo: StepInfo[],
  action: string,
  router: NextRouter
): Promise<StepperResponse> => {
  try {
    const token = localStorage.getItem("NECCA_AUTH_TOKEN") || "";
    
    const { data, errors } = await client.mutate<{
      clientUpdateStepper: StepperResponse;
    }>({
      mutation: UPDATE_STEPPER_DATA,
      variables: {
        product_id: productId,
        action: action,
        current_step: currentStep,
        stepper_type: stepperType,
        steps_info: stepsInfo
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      },
    });

    if (errors || !data?.clientUpdateStepper) {
      const errorMessage = errors?.[0].message || "Failed to update stepper data";
      console.error("Update Stepper Errors:", {
        variables: { productId, currentStep, stepperType, action },
        errors
      });
      throw new Error(errorMessage);
    }

    return data.clientUpdateStepper;
  } catch (error) {
    handleApolloError(error, router);
    console.error("Error updating stepper data:", error);
    throw error;
  }
};

export const fetchStepperData = async (
  client: ApolloClient<NormalizedCacheObject>,
  stepperType: string,
  productId: string,
  router: NextRouter
): Promise<StepperResponse> => {
  try {
    const token = localStorage.getItem("NECCA_AUTH_TOKEN") || "";
    
    const { data, error } = await client.query<{
      clientGetStepper: StepperResponse;
    }>({
      query: GET_STEPPER_DATA,
      variables: {
        product_id: productId,
        stepper_type: stepperType
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      },
      fetchPolicy: "network-only",
      errorPolicy: 'all'
    });

    if (error || !data?.clientGetStepper) {
      throw new Error(error?.message || "Failed to fetch stepper data");
    }

    useStepperStore.getState().updateStepper(data.clientGetStepper);
    return data.clientGetStepper;
  } catch (error) {
    handleApolloError(error, router);
    console.error("Error fetching stepper data:", error);
    throw error;
  }
};

export const GET_STATUS_QUERY = gql`
  query ClientGetStatus($product_id: String!) {
    clientGetStatus(product_id: $product_id) {
      userProduct {
        product_id
        status
      }
    }
  }
`;

export const checkProductStatus = async (
  client: ApolloClient<NormalizedCacheObject>,
  productId: string,
  router: NextRouter
): Promise<boolean> => {
  try {
    const { data, error } = await client.query<StatusResponse>({
      query: GET_STATUS_QUERY,
      variables: { product_id: productId },
      context: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("NECCA_AUTH_TOKEN") || ""}`,
        },
      },
      fetchPolicy: "network-only"
    });

    if (error) {
      throw new Error(error.message);
    }

    const status = data?.clientGetStatus?.userProduct?.status;
    if (status === "Pending") {
      router.push("/protected/NEERS-PID-2/statusInfo");
      return true;
    }
    return false;
  } catch (error) {
    handleApolloError(error, router);
    return false;
  }
};