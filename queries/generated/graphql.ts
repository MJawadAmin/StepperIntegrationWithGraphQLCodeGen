import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Ac = {
  __typename?: "AC";
  annual_energy_consumption?: Maybe<Scalars["Float"]["output"]>;
  brand_name?: Maybe<Scalars["String"]["output"]>;
  colors?: Maybe<Scalars["String"]["output"]>;
  cooling_capacity?: Maybe<Scalars["String"]["output"]>;
  energy_efficiency_features?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  kw_rating?: Maybe<Scalars["Float"]["output"]>;
  manufacture_date?: Maybe<Scalars["String"]["output"]>;
  model_info_id: Scalars["String"]["output"];
  model_name?: Maybe<Scalars["String"]["output"]>;
  origin_country?: Maybe<Scalars["String"]["output"]>;
  ps_mark?: Maybe<Scalars["Boolean"]["output"]>;
  refrigerant_type?: Maybe<Scalars["String"]["output"]>;
  specify_number?: Maybe<Scalars["String"]["output"]>;
};

export type ActionBy = {
  __typename?: "ActionBy";
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ActionLog = {
  __typename?: "ActionLog";
  User?: Maybe<ActionBy>;
  action_by: Scalars["String"]["output"];
  action_message: Scalars["String"]["output"];
  action_on: Scalars["String"]["output"];
  action_type: Scalars["String"]["output"];
  action_value: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  reason?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["String"]["output"];
};

export type AdminApplicantInfo = {
  __typename?: "AdminApplicantInfo";
  Product?: Maybe<AdminProduct>;
  RegisteredBy?: Maybe<AdminUser>;
  company_address?: Maybe<Scalars["String"]["output"]>;
  company_brochure?: Maybe<Scalars["String"]["output"]>;
  company_city?: Maybe<Scalars["String"]["output"]>;
  company_country?: Maybe<Scalars["String"]["output"]>;
  company_name?: Maybe<Scalars["String"]["output"]>;
  company_province?: Maybe<Scalars["String"]["output"]>;
  contact_person_email?: Maybe<Scalars["String"]["output"]>;
  contact_person_name?: Maybe<Scalars["String"]["output"]>;
  contact_person_phone?: Maybe<Scalars["String"]["output"]>;
  contact_person_telephone?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  factory_address?: Maybe<Scalars["String"]["output"]>;
  factory_city?: Maybe<Scalars["String"]["output"]>;
  factory_country?: Maybe<Scalars["String"]["output"]>;
  factory_province?: Maybe<Scalars["String"]["output"]>;
  factory_telephone?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  member_of_association?: Maybe<Scalars["Boolean"]["output"]>;
  membership_name?: Maybe<Scalars["String"]["output"]>;
  membership_number?: Maybe<Scalars["String"]["output"]>;
  membership_year?: Maybe<Scalars["String"]["output"]>;
  office_managing_director_name?: Maybe<Scalars["String"]["output"]>;
  office_telephone?: Maybe<Scalars["String"]["output"]>;
  product_brochure?: Maybe<Scalars["String"]["output"]>;
  registered_with_chamber?: Maybe<Scalars["Boolean"]["output"]>;
  registration_number?: Maybe<Scalars["String"]["output"]>;
  registration_year?: Maybe<Scalars["String"]["output"]>;
  sales_network_regions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_agreement?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AdminAssignPrintingOrderInput = {
  printing_order_id: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  user_id: Scalars["String"]["input"];
};

export type AdminAssignPrintingOrderPayload = {
  __typename?: "AdminAssignPrintingOrderPayload";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type AdminAuthPayload = {
  __typename?: "AdminAuthPayload";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
  success: Scalars["Boolean"]["output"];
  token: Scalars["String"]["output"];
};

export type AdminChangePrintingOrderStatusInput = {
  printing_order_id: Scalars["String"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
  status: Scalars["String"]["input"];
};

export type AdminChangePrintingOrderStatusPayload = {
  __typename?: "AdminChangePrintingOrderStatusPayload";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type AdminDashboardData = {
  __typename?: "AdminDashboardData";
  applicants: ApplicantCounts;
  models: ModelCounts;
  payments: PaymentCounts;
  vendors: Scalars["Int"]["output"];
};

export type AdminGetAllPrintingOrdersResult = {
  __typename?: "AdminGetAllPrintingOrdersResult";
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  orders: Array<AdminPrintingOrder>;
  totalPages: Scalars["Int"]["output"];
};

export type AdminGetPaymentByIdResponse = {
  __typename?: "AdminGetPaymentByIdResponse";
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  payment?: Maybe<AdminPayment>;
};

export type AdminGetPrintingOrderByIdResult = {
  __typename?: "AdminGetPrintingOrderByIdResult";
  actionLogs: Array<ActionLog>;
  order: AdminPrintingOrder;
};

export type AdminGetProducts = {
  __typename?: "AdminGetProducts";
  message?: Maybe<Scalars["String"]["output"]>;
  products?: Maybe<Array<Maybe<AdminProduct>>>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AdminModelInfo = {
  __typename?: "AdminModelInfo";
  colour?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  energy_consumption_details?: Maybe<Scalars["String"]["output"]>;
  estimated_annual_production?: Maybe<Scalars["String"]["output"]>;
  estimated_production_per_anum?: Maybe<Scalars["String"]["output"]>;
  has_ps_mark?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  is_certificate_generated?: Maybe<Scalars["Boolean"]["output"]>;
  model_name?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  rating?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  specify_number?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type AdminModelInfowithApplicant = {
  __typename?: "AdminModelInfowithApplicant";
  ApplicantInfo?: Maybe<ApplicantInfo>;
  ac?: Maybe<Ac>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  estimated_production_per_anum?: Maybe<Scalars["String"]["output"]>;
  fan?: Maybe<Fan>;
  fan_type?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  is_certificate_generated?: Maybe<Scalars["Boolean"]["output"]>;
  ledLight?: Maybe<LedLight>;
  model_name?: Maybe<Scalars["String"]["output"]>;
  motor?: Maybe<Motor>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  refrigerator?: Maybe<Refrigerator>;
  remarks_comments?: Maybe<Scalars["String"]["output"]>;
  service_value?: Maybe<Scalars["String"]["output"]>;
  start_rating?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  sweep_size?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type AdminPayment = {
  __typename?: "AdminPayment";
  ModelInfo?: Maybe<AdminModelInfo>;
  Product?: Maybe<AdminProduct>;
  User?: Maybe<AdminUser>;
  amount?: Maybe<Scalars["Float"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  demand_draft?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  pay_order_number?: Maybe<Scalars["String"]["output"]>;
  payment_date?: Maybe<Scalars["String"]["output"]>;
  payment_type?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type AdminPrintingOrder = {
  __typename?: "AdminPrintingOrder";
  Buyer?: Maybe<Buyer>;
  Payments?: Maybe<Array<Maybe<Payment>>>;
  Seller?: Maybe<Seller>;
  StickerOrders?: Maybe<Array<Maybe<AdminStickerOrder>>>;
  address?: Maybe<Scalars["String"]["output"]>;
  assigned_by?: Maybe<Scalars["String"]["output"]>;
  assigned_to?: Maybe<Scalars["String"]["output"]>;
  buyer_id?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  delivery_company_name?: Maybe<Scalars["String"]["output"]>;
  delivery_type?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  product_id?: Maybe<Scalars["String"]["output"]>;
  seller_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  total_price?: Maybe<Scalars["Float"]["output"]>;
  total_quantity?: Maybe<Scalars["Int"]["output"]>;
  tracking_id?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type AdminProduct = {
  __typename?: "AdminProduct";
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type AdminStickerOrder = {
  __typename?: "AdminStickerOrder";
  ModelInfo?: Maybe<ModelInfo>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  model_id?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  printing_id?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type AdminUpdateAdminInput = {
  allowed_access?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  designation?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  is_committee_head?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_committee_member?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type AdminUser = {
  __typename?: "AdminUser";
  allowed_access?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  allowed_products?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  cnic?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  designation?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  father_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  is_committee_head?: Maybe<Scalars["Boolean"]["output"]>;
  is_md?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  organization?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
};

export type AdminsPaginated = {
  __typename?: "AdminsPaginated";
  admins?: Maybe<Array<Maybe<AdminUser>>>;
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type AnnualCashInData = {
  __typename?: "AnnualCashInData";
  amount?: Maybe<Scalars["Float"]["output"]>;
  month?: Maybe<Scalars["String"]["output"]>;
};

export type ApplicantCounts = {
  __typename?: "ApplicantCounts";
  approved: Scalars["Int"]["output"];
  pending: Scalars["Int"]["output"];
  rejected: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ApplicantInfo = {
  __typename?: "ApplicantInfo";
  assign_by?: Maybe<Scalars["String"]["output"]>;
  assign_to?: Maybe<Scalars["String"]["output"]>;
  company_address?: Maybe<Scalars["String"]["output"]>;
  company_brochure?: Maybe<Scalars["String"]["output"]>;
  company_city?: Maybe<Scalars["String"]["output"]>;
  company_country?: Maybe<Scalars["String"]["output"]>;
  company_name?: Maybe<Scalars["String"]["output"]>;
  company_province?: Maybe<Scalars["String"]["output"]>;
  contact_person_email?: Maybe<Scalars["String"]["output"]>;
  contact_person_name?: Maybe<Scalars["String"]["output"]>;
  contact_person_phone?: Maybe<Scalars["String"]["output"]>;
  contact_person_telephone?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  factory_address?: Maybe<Scalars["String"]["output"]>;
  factory_city?: Maybe<Scalars["String"]["output"]>;
  factory_country?: Maybe<Scalars["String"]["output"]>;
  factory_province?: Maybe<Scalars["String"]["output"]>;
  factory_telephone?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  member_of_association?: Maybe<Scalars["Boolean"]["output"]>;
  membership_name?: Maybe<Scalars["String"]["output"]>;
  membership_number?: Maybe<Scalars["String"]["output"]>;
  membership_year?: Maybe<Scalars["String"]["output"]>;
  office_managing_director_name?: Maybe<Scalars["String"]["output"]>;
  office_telephone?: Maybe<Scalars["String"]["output"]>;
  product_brochure?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  registered_with_chamber?: Maybe<Scalars["Boolean"]["output"]>;
  registration_number?: Maybe<Scalars["String"]["output"]>;
  registration_year?: Maybe<Scalars["String"]["output"]>;
  sales_network_regions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  user_agreement?: Maybe<Scalars["Boolean"]["output"]>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type ApplicantInfoInput = {
  company_address?: InputMaybe<Scalars["String"]["input"]>;
  company_brochure?: InputMaybe<Scalars["String"]["input"]>;
  company_city?: InputMaybe<Scalars["String"]["input"]>;
  company_country?: InputMaybe<Scalars["String"]["input"]>;
  company_name?: InputMaybe<Scalars["String"]["input"]>;
  company_province?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_email?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_name?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_phone?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_telephone?: InputMaybe<Scalars["String"]["input"]>;
  factory_address?: InputMaybe<Scalars["String"]["input"]>;
  factory_city?: InputMaybe<Scalars["String"]["input"]>;
  factory_country?: InputMaybe<Scalars["String"]["input"]>;
  factory_province?: InputMaybe<Scalars["String"]["input"]>;
  factory_telephone?: InputMaybe<Scalars["String"]["input"]>;
  member_of_association?: InputMaybe<Scalars["Boolean"]["input"]>;
  membership_name?: InputMaybe<Scalars["String"]["input"]>;
  membership_number?: InputMaybe<Scalars["String"]["input"]>;
  membership_year?: InputMaybe<Scalars["String"]["input"]>;
  office_managing_director_name?: InputMaybe<Scalars["String"]["input"]>;
  office_telephone?: InputMaybe<Scalars["String"]["input"]>;
  product_brochure?: InputMaybe<Scalars["String"]["input"]>;
  registered_with_chamber?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration_number?: InputMaybe<Scalars["String"]["input"]>;
  registration_year?: InputMaybe<Scalars["String"]["input"]>;
  sales_network_regions?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  user_agreement?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ApplicantInfoPagination = {
  __typename?: "ApplicantInfoPagination";
  applicants?: Maybe<Array<Maybe<AdminApplicantInfo>>>;
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type ApplicantInfoWithLogs = {
  __typename?: "ApplicantInfoWithLogs";
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  applicantInfo?: Maybe<AdminApplicantInfo>;
  models?: Maybe<Array<Maybe<ModelInfo>>>;
};

export type ApplicationMetrics = {
  __typename?: "ApplicationMetrics";
  averageProcessingTime?: Maybe<Scalars["Float"]["output"]>;
  detailsByMonth?: Maybe<Array<Maybe<MetricDetails>>>;
  metricType?: Maybe<Scalars["String"]["output"]>;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

export type ApplicationMetricsFilter = {
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  specificMonth?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
  status: Scalars["String"]["output"];
  success?: Maybe<Scalars["Boolean"]["output"]>;
  token: Scalars["String"]["output"];
};

export type BatchVolunteerKeyInput = {
  maxUseCount: Scalars["Int"]["input"];
  registrationKeys: Array<Scalars["String"]["input"]>;
};

export type BatchVolunteerKeyResponse = {
  __typename?: "BatchVolunteerKeyResponse";
  count: Scalars["Int"]["output"];
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
  volunteerKeys?: Maybe<Array<VolunteerKeyType>>;
};

export type Buyer = {
  __typename?: "Buyer";
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Certificate = {
  __typename?: "Certificate";
  ApplicantInfo?: Maybe<CertificateApplicantInfo>;
  ModelInfo?: Maybe<CertificateModelInfo>;
  Product?: Maybe<CertificateProduct>;
  User?: Maybe<CertificateUser>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  expiry_date?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type CertificateApplicantInfo = {
  __typename?: "CertificateApplicantInfo";
  company_address?: Maybe<Scalars["String"]["output"]>;
  company_city?: Maybe<Scalars["String"]["output"]>;
  company_country?: Maybe<Scalars["String"]["output"]>;
  company_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
};

export type CertificateFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type CertificateModelInfo = {
  __typename?: "CertificateModelInfo";
  colour?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  model_name?: Maybe<Scalars["String"]["output"]>;
  rating?: Maybe<Scalars["String"]["output"]>;
  service_value?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  start_rating?: Maybe<Scalars["Float"]["output"]>;
};

export type CertificatePagination = {
  __typename?: "CertificatePagination";
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type CertificateProduct = {
  __typename?: "CertificateProduct";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type CertificateUser = {
  __typename?: "CertificateUser";
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ClientCreatePrintingOrderInput = {
  address: Scalars["String"]["input"];
  delivery_type?: InputMaybe<Scalars["String"]["input"]>;
  payment?: InputMaybe<PaymentInput>;
  product_id: Scalars["String"]["input"];
  seller_id: Scalars["String"]["input"];
  sticker_orders: Array<StickerOrderInput>;
  total_quantity: Scalars["Int"]["input"];
};

export type ClientGResubmissionType = {
  __typename?: "ClientGResubmissionType";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type ClientGetPrintingOrderByIdResult = {
  __typename?: "ClientGetPrintingOrderByIdResult";
  PrintingOrder?: Maybe<PrintingOrder>;
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
};

export type ClientGoToDashboardType = {
  __typename?: "ClientGoTODashboardType";
  message?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

export type ClientNews = {
  __typename?: "ClientNews";
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type ClientNewsPagination = {
  __typename?: "ClientNewsPagination";
  currentPage: Scalars["Int"]["output"];
  news: Array<News>;
  totalCount: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type Communication = {
  __typename?: "Communication";
  body: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  subject: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
  variables?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type CommunicationFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type CommunicationInput = {
  body: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  subject: Scalars["String"]["input"];
  variables?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CommunicationsResponse = {
  __typename?: "CommunicationsResponse";
  communications?: Maybe<Array<Maybe<Communication>>>;
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type Company = {
  __typename?: "Company";
  cnic?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  father_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type CompanyCounts = {
  __typename?: "CompanyCounts";
  approved: Scalars["Int"]["output"];
  pending: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type CompanyFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompanyResponse = {
  __typename?: "CompanyResponse";
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
  users?: Maybe<Array<Maybe<Company>>>;
};

export type CreateAcInput = {
  annual_energy_consumption?: InputMaybe<Scalars["Float"]["input"]>;
  brand_name?: InputMaybe<Scalars["String"]["input"]>;
  colors?: InputMaybe<Scalars["String"]["input"]>;
  cooling_capacity?: InputMaybe<Scalars["String"]["input"]>;
  energy_efficiency_features?: InputMaybe<Scalars["String"]["input"]>;
  kw_rating?: InputMaybe<Scalars["Float"]["input"]>;
  manufacture_date?: InputMaybe<Scalars["String"]["input"]>;
  model_name?: InputMaybe<Scalars["String"]["input"]>;
  origin_country?: InputMaybe<Scalars["String"]["input"]>;
  ps_mark?: InputMaybe<Scalars["Boolean"]["input"]>;
  refrigerant_type?: InputMaybe<Scalars["String"]["input"]>;
  specify_number?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateFanInput = {
  colors?: InputMaybe<Scalars["String"]["input"]>;
  energy_efficiency_features?: InputMaybe<Scalars["String"]["input"]>;
  model_name?: InputMaybe<Scalars["String"]["input"]>;
  ps_mark?: InputMaybe<Scalars["Boolean"]["input"]>;
  rating?: InputMaybe<Scalars["String"]["input"]>;
  size_capacity?: InputMaybe<Scalars["Int"]["input"]>;
  specify_number?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateLedLightInput = {
  bar_code?: InputMaybe<Scalars["String"]["input"]>;
  brand_name?: InputMaybe<Scalars["String"]["input"]>;
  chromaticity_tolerance?: InputMaybe<Scalars["Int"]["input"]>;
  color_rendering_index?: InputMaybe<Scalars["Int"]["input"]>;
  color_temperature?: InputMaybe<Scalars["Int"]["input"]>;
  country_of_origin?: InputMaybe<Scalars["String"]["input"]>;
  efficacy?: InputMaybe<Scalars["Float"]["input"]>;
  flux?: InputMaybe<Scalars["Int"]["input"]>;
  lamp_length?: InputMaybe<Scalars["Int"]["input"]>;
  lamp_type?: InputMaybe<Scalars["String"]["input"]>;
  manufacture_date?: InputMaybe<Scalars["String"]["input"]>;
  max_diameter?: InputMaybe<Scalars["Int"]["input"]>;
  max_voltage?: InputMaybe<Scalars["Int"]["input"]>;
  mercury_content?: InputMaybe<Scalars["Float"]["input"]>;
  min_voltage?: InputMaybe<Scalars["Int"]["input"]>;
  model_number?: InputMaybe<Scalars["String"]["input"]>;
  power_factor?: InputMaybe<Scalars["Float"]["input"]>;
  rated_frequency?: InputMaybe<Scalars["Int"]["input"]>;
  rated_lifetime?: InputMaybe<Scalars["Int"]["input"]>;
  rated_power?: InputMaybe<Scalars["Float"]["input"]>;
  risk_group?: InputMaybe<Scalars["String"]["input"]>;
  standby_power?: InputMaybe<Scalars["Float"]["input"]>;
  warranty_years?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CreateMotorInput = {
  brand_name?: InputMaybe<Scalars["String"]["input"]>;
  country_of_manufacture?: InputMaybe<Scalars["String"]["input"]>;
  date_format?: InputMaybe<Scalars["String"]["input"]>;
  date_marked?: InputMaybe<Scalars["Boolean"]["input"]>;
  enclosure_rating?: InputMaybe<Scalars["String"]["input"]>;
  first_manufactured_year?: InputMaybe<Scalars["Int"]["input"]>;
  frame_code?: InputMaybe<Scalars["String"]["input"]>;
  manufacturer_name?: InputMaybe<Scalars["String"]["input"]>;
  model_number?: InputMaybe<Scalars["String"]["input"]>;
  motor_design?: InputMaybe<Scalars["String"]["input"]>;
  motor_duty?: InputMaybe<Scalars["String"]["input"]>;
  motor_insulation?: InputMaybe<Scalars["String"]["input"]>;
  mounting_code?: InputMaybe<Scalars["String"]["input"]>;
  number_of_poles?: InputMaybe<Scalars["Int"]["input"]>;
  phase_type?: InputMaybe<Scalars["String"]["input"]>;
  rated_frequency?: InputMaybe<Scalars["Int"]["input"]>;
  rated_power_output?: InputMaybe<Scalars["Float"]["input"]>;
  rated_speed?: InputMaybe<Scalars["Int"]["input"]>;
  rated_voltage?: InputMaybe<Scalars["Int"]["input"]>;
  replaces_other_model?: InputMaybe<Scalars["Boolean"]["input"]>;
  state_model?: InputMaybe<Scalars["String"]["input"]>;
  website_url?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateRefrigeratorInput = {
  annual_energy_consumption?: InputMaybe<Scalars["Float"]["input"]>;
  brand_name?: InputMaybe<Scalars["String"]["input"]>;
  colors?: InputMaybe<Scalars["String"]["input"]>;
  energy_efficiency_features?: InputMaybe<Scalars["String"]["input"]>;
  kw_rating?: InputMaybe<Scalars["Float"]["input"]>;
  manufacture_date?: InputMaybe<Scalars["String"]["input"]>;
  model_name?: InputMaybe<Scalars["String"]["input"]>;
  origin_country?: InputMaybe<Scalars["String"]["input"]>;
  ps_mark?: InputMaybe<Scalars["Boolean"]["input"]>;
  refrigerant_type?: InputMaybe<Scalars["String"]["input"]>;
  specify_number?: InputMaybe<Scalars["String"]["input"]>;
  total_volume_litres?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DashboardData = {
  __typename?: "DashboardData";
  annualCashInData: Array<AnnualCashInData>;
  labReportCounts: LabReportCounts;
  modelInfoCounts: ModelInfoCounts;
  recentModels: Array<ModelInfoSummary>;
  recentPayments: Array<PaymentSummary>;
};

export type DateRange = {
  __typename?: "DateRange";
  endDate?: Maybe<Scalars["String"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
};

export type DateRangeInput = {
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type Fan = {
  __typename?: "Fan";
  colors?: Maybe<Scalars["String"]["output"]>;
  energy_efficiency_features?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  model_info_id: Scalars["String"]["output"];
  model_name?: Maybe<Scalars["String"]["output"]>;
  ps_mark?: Maybe<Scalars["Boolean"]["output"]>;
  rating?: Maybe<Scalars["String"]["output"]>;
  size_capacity?: Maybe<Scalars["Int"]["output"]>;
  specify_number?: Maybe<Scalars["String"]["output"]>;
};

export type FirmUser = {
  __typename?: "FirmUser";
  address?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  cnic?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  father_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  mod_of_delivery?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  sticker_cost?: Maybe<Scalars["Float"]["output"]>;
};

export type GetStatusRepsonse = {
  __typename?: "GetStatusRepsonse";
  applicantInfo?: Maybe<ApplicantInfo>;
  labReport?: Maybe<LabReport>;
  model?: Maybe<ModelInfoSummary>;
  modelPayment?: Maybe<PaymentSummary>;
  productPayment?: Maybe<PaymentSummary>;
  userProduct?: Maybe<UserProduct>;
};

export type LedLight = {
  __typename?: "LEDLight";
  bar_code?: Maybe<Scalars["String"]["output"]>;
  brand_name?: Maybe<Scalars["String"]["output"]>;
  chromaticity_tolerance?: Maybe<Scalars["Int"]["output"]>;
  color_rendering_index?: Maybe<Scalars["Int"]["output"]>;
  color_temperature?: Maybe<Scalars["Int"]["output"]>;
  country_of_origin?: Maybe<Scalars["String"]["output"]>;
  efficacy?: Maybe<Scalars["Float"]["output"]>;
  flux?: Maybe<Scalars["Int"]["output"]>;
  lamp_length?: Maybe<Scalars["Int"]["output"]>;
  lamp_type?: Maybe<Scalars["String"]["output"]>;
  manufacture_date?: Maybe<Scalars["String"]["output"]>;
  max_diameter?: Maybe<Scalars["Int"]["output"]>;
  max_voltage?: Maybe<Scalars["Int"]["output"]>;
  mercury_content?: Maybe<Scalars["Float"]["output"]>;
  min_voltage?: Maybe<Scalars["Int"]["output"]>;
  model_info_id?: Maybe<Scalars["String"]["output"]>;
  model_number?: Maybe<Scalars["String"]["output"]>;
  power_factor?: Maybe<Scalars["Float"]["output"]>;
  rated_frequency?: Maybe<Scalars["Int"]["output"]>;
  rated_lifetime?: Maybe<Scalars["Int"]["output"]>;
  rated_power?: Maybe<Scalars["Float"]["output"]>;
  risk_group?: Maybe<Scalars["String"]["output"]>;
  standby_power?: Maybe<Scalars["Float"]["output"]>;
  warranty_years?: Maybe<Scalars["Int"]["output"]>;
};

export type LabReport = {
  __typename?: "LabReport";
  Product?: Maybe<AdminProduct>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lab?: Maybe<LabUser>;
  lab_country?: Maybe<Scalars["String"]["output"]>;
  lab_id?: Maybe<Scalars["String"]["output"]>;
  lab_user_name?: Maybe<Scalars["String"]["output"]>;
  model_info_id?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  report_from?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  test_report?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<LabUser>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type LabReportCounts = {
  __typename?: "LabReportCounts";
  approved: Scalars["Int"]["output"];
  pending: Scalars["Int"]["output"];
  rejected: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type LabReportFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type LabReportInput = {
  lab_country?: InputMaybe<Scalars["String"]["input"]>;
  lab_id?: InputMaybe<Scalars["String"]["input"]>;
  lab_user_name?: InputMaybe<Scalars["String"]["input"]>;
  report_from?: InputMaybe<Scalars["String"]["input"]>;
  test_report?: InputMaybe<Scalars["String"]["input"]>;
};

export type LabReportPagination = {
  __typename?: "LabReportPagination";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  labReports?: Maybe<Array<Maybe<LabReport>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type LabUser = {
  __typename?: "LabUser";
  allowed_products?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  cnic?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  father_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lab_category?: Maybe<Scalars["String"]["output"]>;
  lab_expires?: Maybe<Scalars["String"]["output"]>;
  lab_origin?: Maybe<Scalars["String"]["output"]>;
  lab_type?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type LabUserInput = {
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  lab_category?: InputMaybe<Scalars["String"]["input"]>;
  lab_expires?: InputMaybe<Scalars["String"]["input"]>;
  lab_origin?: InputMaybe<Scalars["String"]["input"]>;
  lab_type?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type LabsPaginated = {
  __typename?: "LabsPaginated";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  labs?: Maybe<Array<Maybe<LabUser>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ManufacturerRevenue = {
  __typename?: "ManufacturerRevenue";
  company_name: Scalars["String"]["output"];
  labelPrintingFeeRevenue: Scalars["Float"]["output"];
  modelFeeRevenue: Scalars["Float"]["output"];
  registrationFeeRevenue: Scalars["Float"]["output"];
  totalRevenue: Scalars["Float"]["output"];
};

export type ManufacturerRevenueFilter = {
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  manufacturer?: InputMaybe<Scalars["String"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type Message = {
  __typename?: "Message";
  message: Scalars["String"]["output"];
};

export type MetricDetails = {
  __typename?: "MetricDetails";
  approvals?: Maybe<Scalars["Int"]["output"]>;
  averageProcessingTime?: Maybe<Scalars["Float"]["output"]>;
  month?: Maybe<Scalars["String"]["output"]>;
  rejections?: Maybe<Scalars["Int"]["output"]>;
  submissions?: Maybe<Scalars["Int"]["output"]>;
};

export type ModelCounts = {
  __typename?: "ModelCounts";
  approved: Scalars["Int"]["output"];
  pending: Scalars["Int"]["output"];
  rejected: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ModelInfo = {
  __typename?: "ModelInfo";
  ac?: Maybe<Ac>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  estimated_production_per_anum?: Maybe<Scalars["String"]["output"]>;
  fan?: Maybe<Fan>;
  fan_type?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  is_certificate_generated?: Maybe<Scalars["Boolean"]["output"]>;
  ledLight?: Maybe<LedLight>;
  model_name?: Maybe<Scalars["String"]["output"]>;
  motor?: Maybe<Motor>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  refrigerator?: Maybe<Refrigerator>;
  remarks_comments?: Maybe<Scalars["String"]["output"]>;
  service_value?: Maybe<Scalars["String"]["output"]>;
  start_rating?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  sweep_size?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type ModelInfoCounts = {
  __typename?: "ModelInfoCounts";
  approved: Scalars["Int"]["output"];
  pending: Scalars["Int"]["output"];
  rejected: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ModelInfoFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ModelInfoInput = {
  ac?: InputMaybe<CreateAcInput>;
  estimated_production_per_anum?: InputMaybe<Scalars["String"]["input"]>;
  fan?: InputMaybe<CreateFanInput>;
  ledLight?: InputMaybe<CreateLedLightInput>;
  model_name?: InputMaybe<Scalars["String"]["input"]>;
  motor?: InputMaybe<CreateMotorInput>;
  refrigerator?: InputMaybe<CreateRefrigeratorInput>;
};

export type ModelInfoResponse = {
  __typename?: "ModelInfoResponse";
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  models: Array<ModelInfo>;
  totalPages: Scalars["Int"]["output"];
};

export type ModelInfoSummary = {
  __typename?: "ModelInfoSummary";
  colour?: Maybe<Scalars["String"]["output"]>;
  company_brochure?: Maybe<Scalars["String"]["output"]>;
  energy_consumption_details?: Maybe<Scalars["String"]["output"]>;
  estimated_annual_production?: Maybe<Scalars["String"]["output"]>;
  has_ps_mark?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  model_name?: Maybe<Scalars["String"]["output"]>;
  product_brochure?: Maybe<Scalars["String"]["output"]>;
  rating?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  specify_number?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type ModelInfoWithDetails = {
  __typename?: "ModelInfoWithDetails";
  ApplicantInfo?: Maybe<AdminApplicantInfo>;
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  labReport?: Maybe<LabReport>;
  modelInfo?: Maybe<ModelInfo>;
  payments?: Maybe<AdminPayment>;
};

export type ModelInfoWithPayments = {
  __typename?: "ModelInfoWithPayments";
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  labReports?: Maybe<Array<Maybe<LabReport>>>;
  modelInfo?: Maybe<ModelInfo>;
  payments?: Maybe<Array<Payment>>;
};

export type ModelPagination = {
  __typename?: "ModelPagination";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  models?: Maybe<Array<Maybe<AdminModelInfowithApplicant>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ModelSignature = {
  __typename?: "ModelSignature";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  img_url?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type ModelsRating = {
  __typename?: "ModelsRating";
  Cost: Scalars["Float"]["output"];
  KWH: Scalars["Float"]["output"];
  Name: Scalars["String"]["output"];
  Rating: Scalars["Int"]["output"];
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type Motor = {
  __typename?: "Motor";
  brand_name?: Maybe<Scalars["String"]["output"]>;
  country_of_manufacture?: Maybe<Scalars["String"]["output"]>;
  date_format?: Maybe<Scalars["String"]["output"]>;
  date_marked?: Maybe<Scalars["Boolean"]["output"]>;
  enclosure_rating?: Maybe<Scalars["String"]["output"]>;
  first_manufactured_year?: Maybe<Scalars["Int"]["output"]>;
  frame_code?: Maybe<Scalars["String"]["output"]>;
  manufacturer_name?: Maybe<Scalars["String"]["output"]>;
  model_info_id?: Maybe<Scalars["String"]["output"]>;
  model_number?: Maybe<Scalars["String"]["output"]>;
  motor_design?: Maybe<Scalars["String"]["output"]>;
  motor_duty?: Maybe<Scalars["String"]["output"]>;
  motor_insulation?: Maybe<Scalars["String"]["output"]>;
  mounting_code?: Maybe<Scalars["String"]["output"]>;
  number_of_poles?: Maybe<Scalars["Int"]["output"]>;
  phase_type?: Maybe<Scalars["String"]["output"]>;
  rated_frequency?: Maybe<Scalars["Int"]["output"]>;
  rated_power_output?: Maybe<Scalars["Float"]["output"]>;
  rated_speed?: Maybe<Scalars["Int"]["output"]>;
  rated_voltage?: Maybe<Scalars["Int"]["output"]>;
  replaces_other_model?: Maybe<Scalars["Boolean"]["output"]>;
  state_model?: Maybe<Scalars["String"]["output"]>;
  website_url?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  adminAssignApplicantInfo?: Maybe<SuccessResponse>;
  adminAssignModelInfo: SuccessResponse;
  adminAssignPrintingOrder: AdminAssignPrintingOrderPayload;
  adminAssignUserProduct: SuccessResponse;
  adminBatchCreateVolunteerKeys: BatchVolunteerKeyResponse;
  adminChangeApplicantStatus?: Maybe<SuccessResponse>;
  adminChangeCompanyStatus?: Maybe<SuccessResponse>;
  adminChangeModelStatus?: Maybe<SuccessResponse>;
  adminChangePaymentStatus?: Maybe<SuccessResponse>;
  adminChangePrintingOrderStatus: AdminChangePrintingOrderStatusPayload;
  adminChangeUserProductStatus?: Maybe<SuccessResponse>;
  adminCreateAdmin?: Maybe<SuccessResponse>;
  adminCreateLabUser: SuccessResponse;
  adminCreateNews?: Maybe<SuccessResponse>;
  adminCreatePrintingFirm: SuccessResponse;
  adminCreateVolunteerKey: VolunteerKeyResponse;
  adminDeleteAdmin?: Maybe<SuccessResponse>;
  adminDeleteLabUser: SuccessResponse;
  adminDeleteNews: SuccessResponse;
  adminDeletePrintingFirm: SuccessResponse;
  adminDeleteVolunteerKey: VolunteerKeyResponse;
  adminForgotPassword: SuccessResponse;
  adminGenerateCertificate: SuccessResponse;
  adminLogin?: Maybe<AdminAuthPayload>;
  adminResetPassword: SuccessResponse;
  adminToggleVoucherStatus?: Maybe<Setting>;
  adminUpdateAdmin?: Maybe<SuccessResponse>;
  adminUpdateCommunication?: Maybe<Communication>;
  adminUpdateLabUser: SuccessResponse;
  adminUpdateModelRatingByID?: Maybe<ModelsRating>;
  adminUpdateNews: SuccessResponse;
  adminUpdatePassword: SuccessResponse;
  adminUpdatePrintingFirm: SuccessResponse;
  adminUpdateProductSignatureImgUrl?: Maybe<ProductSignature>;
  adminUpdateProfile?: Maybe<AdminAuthPayload>;
  adminUpdateSettings?: Maybe<Setting>;
  adminUpdateVolunteerKey: VolunteerKeyResponse;
  adminUpdateVoucherSettings?: Maybe<Setting>;
  clientCreatePrintingOrder?: Maybe<Success>;
  clientForgotPassword: SuccessResponse;
  clientGoToDashboard?: Maybe<ClientGoToDashboardType>;
  clientLogin: AuthPayload;
  clientRequestUpdateContact: SuccessResponse;
  clientResendOtp: SuccessResponse;
  clientResetPassword: SuccessResponse;
  clientResubmitApplication?: Maybe<ClientGResubmissionType>;
  clientSignup?: Maybe<SuccessResponse>;
  clientUpdateApplicantInfoById: SuccessResponse;
  clientUpdateLabReportById: Message;
  clientUpdateModelById: Message;
  clientUpdatePassword: SuccessResponse;
  clientUpdatePaymentById: Message;
  clientUpdateProfile?: Maybe<AuthPayload>;
  clientUpdateStepper?: Maybe<StepperResponse>;
  clientVerifyAndUpdateContact: SuccessResponse;
  clientVerifyAndUseVolunteerKey?: Maybe<VolunteerKeyResponse>;
  clientVerifyOtp: OtpVerificationResponse;
  labChangeLabReportStatus: SuccessResponse;
  labForgotPassword: SuccessResponse;
  labLogin: AuthPayload;
  labResetPassword: SuccessResponse;
  labUpdatePassword: SuccessResponse;
  labUpdateProfile?: Maybe<AuthPayload>;
  printingFirmChangePrintingOrderStatus: Success;
  printingFirmForgotPassword: SuccessResponse;
  printingFirmLogin: AuthPayload;
  printingFirmResetPassword: SuccessResponse;
  printingFirmUpdatePassword: SuccessResponse;
  printingFirmUpdateProfile?: Maybe<AuthPayload>;
};

export type MutationAdminAssignApplicantInfoArgs = {
  applicant_info_id: Scalars["String"]["input"];
  status?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminAssignModelInfoArgs = {
  fan_type?: InputMaybe<Scalars["String"]["input"]>;
  model_info_id: Scalars["String"]["input"];
  remarks_comments?: InputMaybe<Scalars["String"]["input"]>;
  service_value?: InputMaybe<Scalars["String"]["input"]>;
  start_rating?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  sweep_size?: InputMaybe<Scalars["Float"]["input"]>;
  user_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminAssignPrintingOrderArgs = {
  input: AdminAssignPrintingOrderInput;
};

export type MutationAdminAssignUserProductArgs = {
  user_id: Scalars["String"]["input"];
  user_product_id: Scalars["String"]["input"];
};

export type MutationAdminBatchCreateVolunteerKeysArgs = {
  input: BatchVolunteerKeyInput;
};

export type MutationAdminChangeApplicantStatusArgs = {
  applicantId: Scalars["ID"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
  status: Scalars["String"]["input"];
};

export type MutationAdminChangeCompanyStatusArgs = {
  status: Scalars["String"]["input"];
  user_id: Scalars["ID"]["input"];
};

export type MutationAdminChangeModelStatusArgs = {
  fan_type?: InputMaybe<Scalars["String"]["input"]>;
  modelId: Scalars["String"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
  remarks_comments?: InputMaybe<Scalars["String"]["input"]>;
  service_value?: InputMaybe<Scalars["String"]["input"]>;
  start_rating?: InputMaybe<Scalars["Float"]["input"]>;
  status: Scalars["String"]["input"];
  sweep_size?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationAdminChangePaymentStatusArgs = {
  payment_id: Scalars["String"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
  status: Scalars["String"]["input"];
};

export type MutationAdminChangePrintingOrderStatusArgs = {
  input: AdminChangePrintingOrderStatusInput;
};

export type MutationAdminChangeUserProductStatusArgs = {
  reason?: InputMaybe<Scalars["String"]["input"]>;
  status: Scalars["String"]["input"];
  userProductId: Scalars["ID"]["input"];
};

export type MutationAdminCreateAdminArgs = {
  allowed_access?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cnic: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  designation?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  is_committee_head?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  organization?: InputMaybe<Scalars["String"]["input"]>;
  phone: Scalars["String"]["input"];
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminCreateLabUserArgs = {
  allowed_products?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  lab_category?: InputMaybe<Scalars["String"]["input"]>;
  lab_expires?: InputMaybe<Scalars["String"]["input"]>;
  lab_origin?: InputMaybe<Scalars["String"]["input"]>;
  lab_type: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminCreateNewsArgs = {
  content: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type MutationAdminCreatePrintingFirmArgs = {
  address?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  mod_of_delivery?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
  sticker_cost?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MutationAdminCreateVolunteerKeyArgs = {
  input: VolunteerKeyInput;
};

export type MutationAdminDeleteAdminArgs = {
  user_id: Scalars["ID"]["input"];
};

export type MutationAdminDeleteLabUserArgs = {
  user_id: Scalars["ID"]["input"];
};

export type MutationAdminDeleteNewsArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationAdminDeletePrintingFirmArgs = {
  user_id: Scalars["ID"]["input"];
};

export type MutationAdminDeleteVolunteerKeyArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationAdminForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationAdminGenerateCertificateArgs = {
  modelId: Scalars["String"]["input"];
};

export type MutationAdminLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationAdminResetPasswordArgs = {
  newPassword: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationAdminToggleVoucherStatusArgs = {
  enabled: Scalars["Boolean"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationAdminUpdateAdminArgs = {
  input?: InputMaybe<AdminUpdateAdminInput>;
  user_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminUpdateCommunicationArgs = {
  id: Scalars["ID"]["input"];
  input: CommunicationInput;
};

export type MutationAdminUpdateLabUserArgs = {
  input: LabUserInput;
  user_id: Scalars["ID"]["input"];
};

export type MutationAdminUpdateModelRatingByIdArgs = {
  Cost?: InputMaybe<Scalars["Float"]["input"]>;
  KWH?: InputMaybe<Scalars["Float"]["input"]>;
  Rating?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type MutationAdminUpdateNewsArgs = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminUpdatePasswordArgs = {
  confirmPassword: Scalars["String"]["input"];
  currentPassword: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
};

export type MutationAdminUpdatePrintingFirmArgs = {
  input: PrintingFirmUserInput;
  user_id: Scalars["ID"]["input"];
};

export type MutationAdminUpdateProductSignatureImgUrlArgs = {
  id: Scalars["String"]["input"];
  img_url: Scalars["String"]["input"];
};

export type MutationAdminUpdateProfileArgs = {
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAdminUpdateSettingsArgs = {
  id: Scalars["ID"]["input"];
  input: SettingInput;
};

export type MutationAdminUpdateVolunteerKeyArgs = {
  id: Scalars["ID"]["input"];
  input: VolunteerKeyInput;
};

export type MutationAdminUpdateVoucherSettingsArgs = {
  id: Scalars["ID"]["input"];
  status: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
  validity: Scalars["String"]["input"];
};

export type MutationClientCreatePrintingOrderArgs = {
  input: ClientCreatePrintingOrderInput;
};

export type MutationClientForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationClientGoToDashboardArgs = {
  product_id: Scalars["String"]["input"];
};

export type MutationClientLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationClientRequestUpdateContactArgs = {
  newContact: Scalars["String"]["input"];
};

export type MutationClientResendOtpArgs = {
  email: Scalars["String"]["input"];
};

export type MutationClientResetPasswordArgs = {
  newPassword: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationClientResubmitApplicationArgs = {
  product_id: Scalars["String"]["input"];
};

export type MutationClientSignupArgs = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
};

export type MutationClientUpdateApplicantInfoByIdArgs = {
  data?: InputMaybe<UpdateApplicantInfoInput>;
  info_Id: Scalars["String"]["input"];
};

export type MutationClientUpdateLabReportByIdArgs = {
  data: LabReportInput;
  report_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationClientUpdateModelByIdArgs = {
  data: ModelInfoInput;
  model_id: Scalars["String"]["input"];
};

export type MutationClientUpdatePasswordArgs = {
  confirmPassword: Scalars["String"]["input"];
  currentPassword: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
};

export type MutationClientUpdatePaymentByIdArgs = {
  data: PaymentInput;
  payment_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationClientUpdateProfileArgs = {
  applicantInfo?: InputMaybe<UpdateApplicantInfoInput>;
  userProfile?: InputMaybe<UpdateUserProfileInput>;
};

export type MutationClientUpdateStepperArgs = {
  action: Scalars["String"]["input"];
  current_step: Scalars["String"]["input"];
  product_id: Scalars["String"]["input"];
  stepper_type: Scalars["String"]["input"];
  steps_info: Array<InputMaybe<StepInfoInput>>;
};

export type MutationClientVerifyAndUpdateContactArgs = {
  newContact: Scalars["String"]["input"];
  otp: Scalars["String"]["input"];
};

export type MutationClientVerifyAndUseVolunteerKeyArgs = {
  registrationKey: Scalars["String"]["input"];
};

export type MutationClientVerifyOtpArgs = {
  email: Scalars["String"]["input"];
  emailOtp: Scalars["String"]["input"];
  phoneOtp: Scalars["String"]["input"];
};

export type MutationLabChangeLabReportStatusArgs = {
  reason?: InputMaybe<Scalars["String"]["input"]>;
  reportId: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
};

export type MutationLabForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationLabLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationLabResetPasswordArgs = {
  newPassword: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationLabUpdatePasswordArgs = {
  confirmPassword: Scalars["String"]["input"];
  currentPassword: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
};

export type MutationLabUpdateProfileArgs = {
  userProfile?: InputMaybe<UpdatelabProfileInput>;
};

export type MutationPrintingFirmChangePrintingOrderStatusArgs = {
  input: PrintingFirmChangePrintingOrderStatusInput;
};

export type MutationPrintingFirmForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationPrintingFirmLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationPrintingFirmResetPasswordArgs = {
  newPassword: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationPrintingFirmUpdatePasswordArgs = {
  confirmPassword: Scalars["String"]["input"];
  currentPassword: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
};

export type MutationPrintingFirmUpdateProfileArgs = {
  userProfile?: InputMaybe<UpdatePrintitingProfileInput>;
};

export type News = {
  __typename?: "News";
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type NewsPagination = {
  __typename?: "NewsPagination";
  currentPage: Scalars["Int"]["output"];
  news: Array<News>;
  totalCount: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type OtpVerificationResponse = {
  __typename?: "OTPVerificationResponse";
  emailVerified: Scalars["Boolean"]["output"];
  phoneVerified: Scalars["Boolean"]["output"];
  status: Scalars["String"]["output"];
};

export type OrderApplicant = {
  __typename?: "OrderApplicant";
  company_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type Payment = {
  __typename?: "Payment";
  amount?: Maybe<Scalars["Float"]["output"]>;
  demand_draft?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  modelinfo_id?: Maybe<Scalars["String"]["output"]>;
  pay_order_number?: Maybe<Scalars["String"]["output"]>;
  payment_date?: Maybe<Scalars["String"]["output"]>;
  payment_type?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type PaymentCounts = {
  __typename?: "PaymentCounts";
  approved: Scalars["Float"]["output"];
  pending?: Maybe<Scalars["Float"]["output"]>;
  rejected?: Maybe<Scalars["Float"]["output"]>;
  total: Scalars["Float"]["output"];
};

export type PaymentFilterInput = {
  payment_type?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentInput = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  applicant_info_id?: InputMaybe<Scalars["String"]["input"]>;
  demand_draft?: InputMaybe<Scalars["String"]["input"]>;
  pay_order_number?: InputMaybe<Scalars["String"]["input"]>;
  payment_date?: InputMaybe<Scalars["String"]["input"]>;
  payment_type?: InputMaybe<Scalars["String"]["input"]>;
};

export type PaymentPagination = {
  __typename?: "PaymentPagination";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  payments?: Maybe<Array<Maybe<AdminPayment>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type PaymentResponse = {
  __typename?: "PaymentResponse";
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  payments: Array<Payment>;
  totalPages: Scalars["Int"]["output"];
};

export type PaymentSummary = {
  __typename?: "PaymentSummary";
  amount?: Maybe<Scalars["Float"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  demand_draft?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  pay_order_number?: Maybe<Scalars["String"]["output"]>;
  payment_date?: Maybe<Scalars["String"]["output"]>;
  payment_type?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type PaymentWithModelInfo = {
  __typename?: "PaymentWithModelInfo";
  model_info?: Maybe<ModelInfo>;
  payment?: Maybe<Payment>;
};

export type PrintingCompaniesPaginated = {
  __typename?: "PrintingCompaniesPaginated";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  printingFirms?: Maybe<Array<Maybe<FirmUser>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type PrintingFirm = {
  __typename?: "PrintingFirm";
  cnic?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  father_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type PrintingFirmChangePrintingOrderStatusInput = {
  delivery_company_name?: InputMaybe<Scalars["String"]["input"]>;
  printing_order_id: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  tracking_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type PrintingFirmUserInput = {
  address?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  mod_of_delivery?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
  sticker_cost?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PrintingModelRating = {
  __typename?: "PrintingModelRating";
  Cost: Scalars["Float"]["output"];
  KWH: Scalars["Float"]["output"];
  Name: Scalars["String"]["output"];
  Rating: Scalars["Int"]["output"];
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type PrintingOrder = {
  __typename?: "PrintingOrder";
  ApplicantInfo?: Maybe<OrderApplicant>;
  Payments?: Maybe<Array<Maybe<Payment>>>;
  Seller?: Maybe<SellerDetails>;
  StickerOrders?: Maybe<Array<Maybe<StickerOrder>>>;
  address?: Maybe<Scalars["String"]["output"]>;
  buyer_id?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  delivery_company_name?: Maybe<Scalars["String"]["output"]>;
  delivery_type?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  product_id?: Maybe<Scalars["String"]["output"]>;
  seller_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  total_price?: Maybe<Scalars["Float"]["output"]>;
  total_quantity?: Maybe<Scalars["Int"]["output"]>;
  tracking_id?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type PrintingOrderFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type PrintingOrderPagination = {
  __typename?: "PrintingOrderPagination";
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  orders: Array<PrintingOrder>;
  totalPages: Scalars["Int"]["output"];
};

export type PrintingSetting = {
  __typename?: "PrintingSetting";
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type Product = {
  __typename?: "Product";
  count?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  steppers?: Maybe<Array<Maybe<Stepper>>>;
};

export type ProductPaginatedResponse = {
  __typename?: "ProductPaginatedResponse";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  products?: Maybe<Array<Maybe<UserProduct>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ProductRevenue = {
  __typename?: "ProductRevenue";
  product_name: Scalars["String"]["output"];
  totalRevenue: Scalars["Float"]["output"];
  transactionCount: Scalars["Int"]["output"];
};

export type ProductRevenueFilter = {
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductSignature = {
  __typename?: "ProductSignature";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  img_url?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type PublicCertificate = {
  __typename?: "PublicCertificate";
  ApplicantInfo?: Maybe<CertificateApplicantInfo>;
  ModelInfo?: Maybe<CertificateModelInfo>;
  Product?: Maybe<CertificateProduct>;
  User?: Maybe<CertificateUser>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  expiry_date?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type PublicCertificateApplicantInfo = {
  __typename?: "PublicCertificateApplicantInfo";
  comapny_country?: Maybe<Scalars["String"]["output"]>;
  company_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
};

export type PublicCertificateModelInfo = {
  __typename?: "PublicCertificateModelInfo";
  colour?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  model_name?: Maybe<Scalars["String"]["output"]>;
  rating?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
};

export type PublicCertificateProduct = {
  __typename?: "PublicCertificateProduct";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type PublicCertificateUser = {
  __typename?: "PublicCertificateUser";
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type PublicModelInfo = {
  __typename?: "PublicModelInfo";
  ac?: Maybe<Ac>;
  fan?: Maybe<Fan>;
  id?: Maybe<Scalars["ID"]["output"]>;
  ledLight?: Maybe<LedLight>;
  model_name?: Maybe<Scalars["String"]["output"]>;
  motor?: Maybe<Motor>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  refrigerator?: Maybe<Refrigerator>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type PublicModelInfoFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type PublicModelInfoResponse = {
  __typename?: "PublicModelInfoResponse";
  count: Scalars["Int"]["output"];
  currentPage: Scalars["Int"]["output"];
  models: Array<PublicModelInfo>;
  totalPages: Scalars["Int"]["output"];
};

export type PublicModelInfoWithDetails = {
  __typename?: "PublicModelInfoWithDetails";
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  labReports?: Maybe<Array<Maybe<LabReport>>>;
  modelInfo?: Maybe<PublicModelInfo>;
  payments: Array<Payment>;
};

export type PublicProduct = {
  __typename?: "PublicProduct";
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type PublicProductResponse = {
  __typename?: "PublicProductResponse";
  products?: Maybe<Array<Maybe<PublicProduct>>>;
};

export type Query = {
  __typename?: "Query";
  ClientGetCertificateById?: Maybe<Certificate>;
  PublicVerifyCertificate?: Maybe<Certificate>;
  adminGetAdminById?: Maybe<UserById>;
  adminGetAllAdmins?: Maybe<AdminsPaginated>;
  adminGetAllApplicants: ApplicantInfoPagination;
  adminGetAllCommunications: CommunicationsResponse;
  adminGetAllCompanies: CompanyResponse;
  adminGetAllLabs?: Maybe<LabsPaginated>;
  adminGetAllModels: ModelPagination;
  adminGetAllModelsRatings?: Maybe<Array<Maybe<ModelsRating>>>;
  adminGetAllNews: NewsPagination;
  adminGetAllPayments: PaymentPagination;
  adminGetAllPrintingCompanies?: Maybe<PrintingCompaniesPaginated>;
  adminGetAllPrintingOrders: AdminGetAllPrintingOrdersResult;
  adminGetAllProductSignatures?: Maybe<Array<Maybe<ProductSignature>>>;
  adminGetAllProducts?: Maybe<AdminGetProducts>;
  adminGetAllReportApplicants: ReportApplicantPagination;
  adminGetAllReportModels: ReportModelPagination;
  adminGetAllReportOrders: ReportOrderPagination;
  adminGetAllReportPayments: ReportPaymentPagination;
  adminGetAllSettings: Array<Maybe<Setting>>;
  adminGetAllUserProducts?: Maybe<ProductPaginatedResponse>;
  adminGetAllVolunteerKeys: VolunteerKeyListResponse;
  adminGetApplicantInfoById?: Maybe<ApplicantInfoWithLogs>;
  adminGetCommitteeMembers?: Maybe<Array<Maybe<AdminUser>>>;
  adminGetDashboard: AdminDashboardData;
  adminGetLabById?: Maybe<UserById>;
  adminGetModelById?: Maybe<ModelInfoWithDetails>;
  adminGetModelRatingByID?: Maybe<ModelsRating>;
  adminGetNewsById?: Maybe<News>;
  adminGetPaymentById?: Maybe<AdminGetPaymentByIdResponse>;
  adminGetPrintingCompanyById?: Maybe<FirmUser>;
  adminGetPrintingOrderById: AdminGetPrintingOrderByIdResult;
  adminGetProductRevenueReport?: Maybe<Array<Maybe<ProductRevenue>>>;
  adminGetProductSignature?: Maybe<ProductSignature>;
  adminGetReportApplicationMetrics: ApplicationMetrics;
  adminGetReportRevenueSummaryReport: RevenueSummary;
  adminGetRevenueByManufacturerReport?: Maybe<
    Array<Maybe<ManufacturerRevenue>>
  >;
  adminGetSettingsById?: Maybe<Setting>;
  adminGetUserProductById?: Maybe<UserProductWithDetails>;
  adminGetVolunteerKeyById?: Maybe<VolunteerKeyType>;
  adminProfile?: Maybe<AdminUser>;
  clientGetAllLabs: Array<Maybe<User>>;
  clientGetAllModelSignatures?: Maybe<Array<Maybe<ModelSignature>>>;
  clientGetAllNews: ClientNewsPagination;
  clientGetAllPayments: PaymentResponse;
  clientGetAllPrintingFirms: Array<User>;
  clientGetApplicantInfoByProductId?: Maybe<ApplicantInfo>;
  clientGetDashboard: DashboardData;
  clientGetDropDownModels: Array<ModelInfo>;
  clientGetModelById: ModelInfoWithPayments;
  clientGetModelSignature?: Maybe<ModelSignature>;
  clientGetModels: ModelInfoResponse;
  clientGetNewsById?: Maybe<ClientNews>;
  clientGetPaymentById: PaymentWithModelInfo;
  clientGetPrintingOrderById?: Maybe<ClientGetPrintingOrderByIdResult>;
  clientGetPrintingOrders?: Maybe<PrintingOrderPagination>;
  clientGetProducts: Array<Product>;
  clientGetProfile?: Maybe<UserProfile>;
  clientGetSettingsByKey?: Maybe<Setting>;
  clientGetStatus: GetStatusRepsonse;
  clientGetStepper?: Maybe<StepperResponse>;
  clientGetgetAllCertificates?: Maybe<CertificatePagination>;
  labGetAllReports?: Maybe<LabReportPagination>;
  labGetProfile?: Maybe<LabUser>;
  labGetReportById?: Maybe<LabReport>;
  printingFirmGGetAllSettings: Array<Maybe<PrintingSetting>>;
  printingFirmGetAllModelsRatings?: Maybe<Array<Maybe<PrintingModelRating>>>;
  printingFirmGetPrintingOrderById: PrintingOrder;
  printingFirmGetPrintingOrders?: Maybe<PrintingOrderPagination>;
  printingFirmGetProfile?: Maybe<PrintingFirm>;
  printingFirmGetSerialNumbers: Array<Scalars["String"]["output"]>;
  publicGetAllModels: PublicModelInfoResponse;
  publicGetAllNews: PublicNewsPagination;
  publicGetAllProducts: PublicProductResponse;
  publicGetModelById: PublicModelInfoWithDetails;
  publicGetNewsById?: Maybe<PublicNews>;
  publicVerifySticker: VerifyStickerResponse;
};

export type QueryClientGetCertificateByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryPublicVerifyCertificateArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAdminGetAdminByIdArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllAdminsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllApplicantsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllCommunicationsArgs = {
  filter?: InputMaybe<CommunicationFilterInput>;
  limit: Scalars["Int"]["input"];
  page: Scalars["Int"]["input"];
};

export type QueryAdminGetAllCompaniesArgs = {
  filter?: InputMaybe<CompanyFilterInput>;
  limit: Scalars["Int"]["input"];
  page: Scalars["Int"]["input"];
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllLabsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllModelsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllNewsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllPaymentsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllPrintingCompaniesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllPrintingOrdersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllReportApplicantsArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllReportModelsArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllReportOrdersArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllReportPaymentsArgs = {
  dateRange?: InputMaybe<DateRangeInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  payment_type?: InputMaybe<Scalars["String"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetAllUserProductsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetApplicantInfoByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAdminGetDashboardArgs = {
  product_id: Scalars["ID"]["input"];
};

export type QueryAdminGetLabByIdArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetModelByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAdminGetModelRatingByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAdminGetNewsByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAdminGetPaymentByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAdminGetPrintingCompanyByIdArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdminGetPrintingOrderByIdArgs = {
  order_id: Scalars["String"]["input"];
};

export type QueryAdminGetProductRevenueReportArgs = {
  filters?: InputMaybe<ProductRevenueFilter>;
};

export type QueryAdminGetProductSignatureArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAdminGetReportApplicationMetricsArgs = {
  filters?: InputMaybe<ApplicationMetricsFilter>;
};

export type QueryAdminGetReportRevenueSummaryReportArgs = {
  filters?: InputMaybe<RevenueSummaryFilter>;
};

export type QueryAdminGetRevenueByManufacturerReportArgs = {
  filters?: InputMaybe<ManufacturerRevenueFilter>;
};

export type QueryAdminGetSettingsByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAdminGetUserProductByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAdminGetVolunteerKeyByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryClientGetAllLabsArgs = {
  country?: InputMaybe<Scalars["String"]["input"]>;
  lab_category?: InputMaybe<Scalars["String"]["input"]>;
  lab_origin?: InputMaybe<Scalars["String"]["input"]>;
  lab_type?: InputMaybe<Scalars["String"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryClientGetAllNewsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryClientGetAllPaymentsArgs = {
  filter?: InputMaybe<PaymentFilterInput>;
  limit: Scalars["Int"]["input"];
  page: Scalars["Int"]["input"];
  product_id: Scalars["String"]["input"];
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryClientGetApplicantInfoByProductIdArgs = {
  product_id: Scalars["String"]["input"];
};

export type QueryClientGetDashboardArgs = {
  product_id: Scalars["String"]["input"];
};

export type QueryClientGetDropDownModelsArgs = {
  product_id: Scalars["String"]["input"];
};

export type QueryClientGetModelByIdArgs = {
  model_id: Scalars["String"]["input"];
  product_id: Scalars["String"]["input"];
};

export type QueryClientGetModelSignatureArgs = {
  id: Scalars["String"]["input"];
};

export type QueryClientGetModelsArgs = {
  filter?: InputMaybe<ModelInfoFilterInput>;
  limit: Scalars["Int"]["input"];
  page: Scalars["Int"]["input"];
  product_id: Scalars["String"]["input"];
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryClientGetNewsByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryClientGetPaymentByIdArgs = {
  payment_id: Scalars["String"]["input"];
};

export type QueryClientGetPrintingOrderByIdArgs = {
  order_id: Scalars["String"]["input"];
};

export type QueryClientGetPrintingOrdersArgs = {
  filter?: InputMaybe<PrintingOrderFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_id: Scalars["String"]["input"];
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryClientGetSettingsByKeyArgs = {
  key: Scalars["String"]["input"];
};

export type QueryClientGetStatusArgs = {
  product_id: Scalars["String"]["input"];
};

export type QueryClientGetStepperArgs = {
  product_id: Scalars["String"]["input"];
  stepper_type: Scalars["String"]["input"];
};

export type QueryClientGetgetAllCertificatesArgs = {
  filter?: InputMaybe<CertificateFilterInput>;
  limit: Scalars["Int"]["input"];
  page: Scalars["Int"]["input"];
  product_id: Scalars["String"]["input"];
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryLabGetAllReportsArgs = {
  filter?: InputMaybe<LabReportFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryLabGetReportByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPrintingFirmGetPrintingOrderByIdArgs = {
  order_id: Scalars["String"]["input"];
};

export type QueryPrintingFirmGetPrintingOrdersArgs = {
  filter?: InputMaybe<PrintingOrderFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryPrintingFirmGetSerialNumbersArgs = {
  printingOrderId: Scalars["ID"]["input"];
};

export type QueryPublicGetAllModelsArgs = {
  filter?: InputMaybe<PublicModelInfoFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  product_ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryPublicGetAllNewsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryPublicGetModelByIdArgs = {
  model_id: Scalars["String"]["input"];
  product_id: Scalars["String"]["input"];
};

export type QueryPublicGetNewsByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryPublicVerifyStickerArgs = {
  qr: Scalars["String"]["input"];
};

export type Refrigerator = {
  __typename?: "Refrigerator";
  annual_energy_consumption?: Maybe<Scalars["Float"]["output"]>;
  brand_name?: Maybe<Scalars["String"]["output"]>;
  colors?: Maybe<Scalars["String"]["output"]>;
  energy_efficiency_features?: Maybe<Scalars["String"]["output"]>;
  kw_rating?: Maybe<Scalars["Float"]["output"]>;
  manufacture_date?: Maybe<Scalars["String"]["output"]>;
  model_info_id?: Maybe<Scalars["String"]["output"]>;
  model_name?: Maybe<Scalars["String"]["output"]>;
  origin_country?: Maybe<Scalars["String"]["output"]>;
  ps_mark?: Maybe<Scalars["Boolean"]["output"]>;
  refrigerant_type?: Maybe<Scalars["String"]["output"]>;
  specify_number?: Maybe<Scalars["String"]["output"]>;
  total_volume_litres?: Maybe<Scalars["Int"]["output"]>;
};

export type ReportApplicantInfo = {
  __typename?: "ReportApplicantInfo";
  company_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type ReportApplicantPagination = {
  __typename?: "ReportApplicantPagination";
  applicants?: Maybe<Array<Maybe<ReportApplicants>>>;
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ReportApplicants = {
  __typename?: "ReportApplicants";
  Product?: Maybe<ReportProduct>;
  company_name?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type ReportModelInfo = {
  __typename?: "ReportModelInfo";
  ApplicantInfo?: Maybe<ReportApplicantInfo>;
  Payments?: Maybe<Array<Maybe<ReportModelPayment>>>;
  Product?: Maybe<ReportProduct>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  model_name?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type ReportModelPagination = {
  __typename?: "ReportModelPagination";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  models?: Maybe<Array<Maybe<ReportModelInfo>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ReportModelPayment = {
  __typename?: "ReportModelPayment";
  amount?: Maybe<Scalars["Float"]["output"]>;
};

export type ReportOrderPagination = {
  __typename?: "ReportOrderPagination";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  orders?: Maybe<Array<Maybe<ReportOrders>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ReportOrders = {
  __typename?: "ReportOrders";
  ApplicantInfo?: Maybe<ReportApplicantInfo>;
  Product?: Maybe<ReportProduct>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  total_price?: Maybe<Scalars["Float"]["output"]>;
  total_quantity?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type ReportPayment = {
  __typename?: "ReportPayment";
  ApplicantInfo?: Maybe<ReportApplicantInfo>;
  PrintingOrder?: Maybe<ReportPaymentOrders>;
  Product?: Maybe<ReportProduct>;
  amount?: Maybe<Scalars["Float"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  payment_date?: Maybe<Scalars["String"]["output"]>;
  payment_type?: Maybe<Scalars["String"]["output"]>;
  product_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type ReportPaymentOrders = {
  __typename?: "ReportPaymentOrders";
  id?: Maybe<Scalars["ID"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type ReportPaymentPagination = {
  __typename?: "ReportPaymentPagination";
  count?: Maybe<Scalars["Int"]["output"]>;
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  payments?: Maybe<Array<Maybe<ReportPayment>>>;
  totalPages?: Maybe<Scalars["Int"]["output"]>;
};

export type ReportProduct = {
  __typename?: "ReportProduct";
  name?: Maybe<Scalars["String"]["output"]>;
};

export type RevenueSummary = {
  __typename?: "RevenueSummary";
  dateRange?: Maybe<DateRange>;
  labelPrintingFee?: Maybe<Scalars["Float"]["output"]>;
  modelRegistrationFee?: Maybe<Scalars["Float"]["output"]>;
  productRegistrationFee?: Maybe<Scalars["Float"]["output"]>;
  totalRevenue?: Maybe<Scalars["Float"]["output"]>;
};

export type RevenueSummaryFilter = {
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  product_id?: InputMaybe<Scalars["String"]["input"]>;
  revenueType?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type Seller = {
  __typename?: "Seller";
  name?: Maybe<Scalars["String"]["output"]>;
};

export type SellerDetails = {
  __typename?: "SellerDetails";
  address?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  mod_of_delivery?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Setting = {
  __typename?: "Setting";
  createdAt: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
  voucher_enabled?: Maybe<Scalars["Boolean"]["output"]>;
  voucher_imageurl?: Maybe<Scalars["String"]["output"]>;
  voucher_status?: Maybe<Scalars["String"]["output"]>;
  voucher_type?: Maybe<Scalars["String"]["output"]>;
  voucher_validity?: Maybe<Scalars["String"]["output"]>;
};

export type SettingInput = {
  key: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
  voucher_enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  voucher_imageurl?: InputMaybe<Scalars["String"]["input"]>;
  voucher_status?: InputMaybe<Scalars["String"]["input"]>;
  voucher_type?: InputMaybe<Scalars["String"]["input"]>;
  voucher_validity?: InputMaybe<Scalars["String"]["input"]>;
};

export type StepInfo = {
  __typename?: "StepInfo";
  applicantInfo?: Maybe<ApplicantInfo>;
  labReport?: Maybe<LabReport>;
  modelInfo?: Maybe<ModelInfo>;
  payment?: Maybe<Array<Maybe<Payment>>>;
};

export type StepInfoInput = {
  applicantInfo?: InputMaybe<ApplicantInfoInput>;
  labReport?: InputMaybe<LabReportInput>;
  modelInfo?: InputMaybe<ModelInfoInput>;
  payment?: InputMaybe<Array<InputMaybe<PaymentInput>>>;
};

export type Stepper = {
  __typename?: "Stepper";
  current_step: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  product_id: Scalars["String"]["output"];
  stepper_type: Scalars["String"]["output"];
  steps_info?: Maybe<Array<Maybe<StepInfo>>>;
  user_id: Scalars["String"]["output"];
};

export type StepperResponse = {
  __typename?: "StepperResponse";
  count?: Maybe<Scalars["Int"]["output"]>;
  current_step?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  message: Scalars["String"]["output"];
  product_id?: Maybe<Scalars["String"]["output"]>;
  stepper_type?: Maybe<Scalars["String"]["output"]>;
  steps_info?: Maybe<Array<Maybe<StepInfo>>>;
  success: Scalars["Boolean"]["output"];
};

export type StickerOrder = {
  __typename?: "StickerOrder";
  ModelInfo?: Maybe<ModelInfo>;
  created_at?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  model_id?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  printing_id?: Maybe<Scalars["String"]["output"]>;
  qr?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["String"]["output"]>;
};

export type StickerOrderInput = {
  model_info_id: Scalars["String"]["input"];
  quantity: Scalars["Int"]["input"];
};

export type Success = {
  __typename?: "Success";
  message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SuccessResponse = {
  __typename?: "SuccessResponse";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type UpdateApplicantInfoInput = {
  company_address?: InputMaybe<Scalars["String"]["input"]>;
  company_city?: InputMaybe<Scalars["String"]["input"]>;
  company_country?: InputMaybe<Scalars["String"]["input"]>;
  company_name?: InputMaybe<Scalars["String"]["input"]>;
  company_province?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_email?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_name?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_phone?: InputMaybe<Scalars["String"]["input"]>;
  contact_person_telephone?: InputMaybe<Scalars["String"]["input"]>;
  factory_address?: InputMaybe<Scalars["String"]["input"]>;
  factory_city?: InputMaybe<Scalars["String"]["input"]>;
  factory_country?: InputMaybe<Scalars["String"]["input"]>;
  factory_province?: InputMaybe<Scalars["String"]["input"]>;
  factory_telephone?: InputMaybe<Scalars["String"]["input"]>;
  member_of_association?: InputMaybe<Scalars["Boolean"]["input"]>;
  membership_name?: InputMaybe<Scalars["String"]["input"]>;
  membership_number?: InputMaybe<Scalars["String"]["input"]>;
  membership_year?: InputMaybe<Scalars["String"]["input"]>;
  office_managing_director_name?: InputMaybe<Scalars["String"]["input"]>;
  office_telephone?: InputMaybe<Scalars["String"]["input"]>;
  registered_with_chamber?: InputMaybe<Scalars["Boolean"]["input"]>;
  registration_number?: InputMaybe<Scalars["String"]["input"]>;
  registration_year?: InputMaybe<Scalars["String"]["input"]>;
  sales_network_regions?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
};

export type UpdatePrintitingProfileInput = {
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserProfileInput = {
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatelabProfileInput = {
  cnic?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  father_name?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_picture?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  address?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  cnic?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  father_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lab_type?: Maybe<Scalars["String"]["output"]>;
  mod_of_delivery?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  sticker_cost?: Maybe<Scalars["Float"]["output"]>;
};

export type UserById = {
  __typename?: "UserByID";
  allowed_access?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  allowed_products?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  cnic?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Scalars["String"]["output"]>;
  designation?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  father_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  is_committee_head?: Maybe<Scalars["Boolean"]["output"]>;
  is_md?: Maybe<Scalars["Boolean"]["output"]>;
  lab_category?: Maybe<Scalars["String"]["output"]>;
  lab_expires?: Maybe<Scalars["String"]["output"]>;
  lab_origin?: Maybe<Scalars["String"]["output"]>;
  lab_type?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  organization?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_picture?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  sticker_cost?: Maybe<Scalars["Float"]["output"]>;
};

export type UserProductWithDetails = {
  __typename?: "UserProductWithDetails";
  actionLogs?: Maybe<Array<Maybe<ActionLog>>>;
  payments?: Maybe<Payment>;
  userProduct?: Maybe<UserProduct>;
};

export type UserProfile = {
  __typename?: "UserProfile";
  applicantInfo?: Maybe<ApplicantInfo>;
  user?: Maybe<User>;
};

export type UserUserProduct = {
  __typename?: "UserUserProduct";
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type VerifyStickerResponse = {
  __typename?: "VerifyStickerResponse";
  message: Scalars["String"]["output"];
  qr_count: Scalars["Int"]["output"];
  quantity?: Maybe<Scalars["Int"]["output"]>;
  success: Scalars["Boolean"]["output"];
};

export type VolunteerKey = {
  __typename?: "VolunteerKey";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  maxUseCount?: Maybe<Scalars["Int"]["output"]>;
  registrationKey?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  usedBy?: Maybe<Scalars["String"]["output"]>;
  usedCount?: Maybe<Scalars["Int"]["output"]>;
};

export type VolunteerKeyInput = {
  maxUseCount: Scalars["Int"]["input"];
  registrationKey: Scalars["String"]["input"];
};

export type VolunteerKeyListResponse = {
  __typename?: "VolunteerKeyListResponse";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
  volunteerKeys: Array<VolunteerKeyType>;
};

export type VolunteerKeyResponse = {
  __typename?: "VolunteerKeyResponse";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
  volunteerKey?: Maybe<VolunteerKeyType>;
};

export type VolunteerKeyType = {
  __typename?: "VolunteerKeyType";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  max_use_count?: Maybe<Scalars["Int"]["output"]>;
  registration_key?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  usedBy?: Maybe<Scalars["String"]["output"]>;
  used_count?: Maybe<Scalars["Int"]["output"]>;
};

export type PublicNews = {
  __typename?: "publicNews";
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type PublicNewsPagination = {
  __typename?: "publicNewsPagination";
  currentPage: Scalars["Int"]["output"];
  news: Array<News>;
  totalCount: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type UserProduct = {
  __typename?: "userProduct";
  id: Scalars["ID"]["output"];
  product_id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["String"]["output"]>;
};

export type ClientCreatePrintingOrderMutationVariables = Exact<{
  input: ClientCreatePrintingOrderInput;
}>;

export type ClientCreatePrintingOrderMutation = {
  __typename?: "Mutation";
  clientCreatePrintingOrder?: {
    __typename?: "Success";
    success?: boolean | null;
    message?: string | null;
  } | null;
};

export type ClientGoToDashboardMutationVariables = Exact<{
  productId: Scalars["String"]["input"];
}>;

export type ClientGoToDashboardMutation = {
  __typename?: "Mutation";
  clientGoToDashboard?: {
    __typename?: "ClientGoTODashboardType";
    message?: string | null;
    token?: string | null;
  } | null;
};

export type ClientResetPasswordMutationVariables = Exact<{
  token: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
}>;

export type ClientResetPasswordMutation = {
  __typename?: "Mutation";
  clientResetPassword: {
    __typename?: "SuccessResponse";
    success: boolean;
    message: string;
  };
};

export type ClientResubmitApplicationMutationVariables = Exact<{
  productId: Scalars["String"]["input"];
}>;

export type ClientResubmitApplicationMutation = {
  __typename?: "Mutation";
  clientResubmitApplication?: {
    __typename?: "ClientGResubmissionType";
    message?: string | null;
  } | null;
};

export type ClientUpdateApplicantInfoByIdMutationVariables = Exact<{
  infoId: Scalars["String"]["input"];
  data?: InputMaybe<UpdateApplicantInfoInput>;
}>;

export type ClientUpdateApplicantInfoByIdMutation = {
  __typename?: "Mutation";
  clientUpdateApplicantInfoById: {
    __typename?: "SuccessResponse";
    success: boolean;
    message: string;
  };
};

export type ClientUpdateLabReportByIdMutationVariables = Exact<{
  data: LabReportInput;
  reportId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientUpdateLabReportByIdMutation = {
  __typename?: "Mutation";
  clientUpdateLabReportById: { __typename?: "Message"; message: string };
};

export type ClientUpdateModelByIdMutationVariables = Exact<{
  modelId: Scalars["String"]["input"];
  data: ModelInfoInput;
}>;

export type ClientUpdateModelByIdMutation = {
  __typename?: "Mutation";
  clientUpdateModelById: { __typename?: "Message"; message: string };
};

export type ClientUpdatePasswordMutationVariables = Exact<{
  currentPassword: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
  confirmPassword: Scalars["String"]["input"];
}>;

export type ClientUpdatePasswordMutation = {
  __typename?: "Mutation";
  clientUpdatePassword: {
    __typename?: "SuccessResponse";
    success: boolean;
    message: string;
  };
};

export type ClientUpdatePaymentByIdMutationVariables = Exact<{
  data: PaymentInput;
  paymentId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientUpdatePaymentByIdMutation = {
  __typename?: "Mutation";
  clientUpdatePaymentById: { __typename?: "Message"; message: string };
};

export type ClientUpdateProfileMutationVariables = Exact<{
  userProfile?: InputMaybe<UpdateUserProfileInput>;
}>;

export type ClientUpdateProfileMutation = {
  __typename?: "Mutation";
  clientUpdateProfile?: {
    __typename?: "AuthPayload";
    id: string;
    email: string;
    token: string;
    status: string;
    success?: boolean | null;
    message?: string | null;
  } | null;
};

export type ClientVerifyAndUseVolunteerKeyMutationVariables = Exact<{
  registrationKey: Scalars["String"]["input"];
}>;

export type ClientVerifyAndUseVolunteerKeyMutation = {
  __typename?: "Mutation";
  clientVerifyAndUseVolunteerKey?: {
    __typename?: "VolunteerKeyResponse";
    message: string;
    success: boolean;
  } | null;
};

export type ClientForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"]["input"];
}>;

export type ClientForgotPasswordMutation = {
  __typename?: "Mutation";
  clientForgotPassword: { __typename?: "SuccessResponse"; message: string };
};

export type ClientLoginMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type ClientLoginMutation = {
  __typename?: "Mutation";
  clientLogin: {
    __typename?: "AuthPayload";
    email: string;
    id: string;
    message?: string | null;
    token: string;
    success?: boolean | null;
    status: string;
  };
};

export type ClientResendOtpMutationVariables = Exact<{
  email: Scalars["String"]["input"];
}>;

export type ClientResendOtpMutation = {
  __typename?: "Mutation";
  clientResendOtp: { __typename?: "SuccessResponse"; message: string };
};

export type ClientSignupMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
}>;

export type ClientSignupMutation = {
  __typename?: "Mutation";
  clientSignup?: {
    __typename?: "SuccessResponse";
    message: string;
    success: boolean;
  } | null;
};

export type ClientUpdateStepperMutationVariables = Exact<{
  productId: Scalars["String"]["input"];
  action: Scalars["String"]["input"];
  currentStep: Scalars["String"]["input"];
  stepperType: Scalars["String"]["input"];
  stepsInfo: Array<InputMaybe<StepInfoInput>> | InputMaybe<StepInfoInput>;
}>;

export type ClientUpdateStepperMutation = {
  __typename?: "Mutation";
  clientUpdateStepper?: {
    __typename?: "StepperResponse";
    id?: string | null;
    count?: number | null;
    success: boolean;
    message: string;
    product_id?: string | null;
    stepper_type?: string | null;
    current_step?: string | null;
    steps_info?: Array<{
      __typename?: "StepInfo";
      applicantInfo?: {
        __typename?: "ApplicantInfo";
        id?: string | null;
        user_id?: string | null;
        assign_to?: string | null;
        assign_by?: string | null;
        status?: string | null;
        product_id?: string | null;
        company_name?: string | null;
        company_address?: string | null;
        company_country?: string | null;
        company_province?: string | null;
        company_city?: string | null;
        factory_telephone?: string | null;
        factory_address?: string | null;
        factory_country?: string | null;
        factory_province?: string | null;
        factory_city?: string | null;
        office_telephone?: string | null;
        office_managing_director_name?: string | null;
        contact_person_name?: string | null;
        contact_person_phone?: string | null;
        contact_person_telephone?: string | null;
        contact_person_email?: string | null;
        registered_with_chamber?: boolean | null;
        user_agreement?: boolean | null;
        registration_number?: string | null;
        registration_year?: string | null;
        member_of_association?: boolean | null;
        membership_name?: string | null;
        membership_number?: string | null;
        membership_year?: string | null;
        sales_network_regions?: Array<string | null> | null;
        company_brochure?: string | null;
        product_brochure?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        reason?: string | null;
      } | null;
      labReport?: {
        __typename?: "LabReport";
        id?: string | null;
        user_id?: string | null;
        lab_id?: string | null;
        product_id?: string | null;
        model_info_id?: string | null;
        test_report?: string | null;
        report_from?: string | null;
        lab_country?: string | null;
        lab_user_name?: string | null;
        status?: string | null;
        reason?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      payment?: Array<{
        __typename?: "Payment";
        id?: string | null;
        user_id?: string | null;
        product_id?: string | null;
        modelinfo_id?: string | null;
        payment_type?: string | null;
        amount?: number | null;
        payment_date?: string | null;
        pay_order_number?: string | null;
        demand_draft?: string | null;
        status?: string | null;
      } | null> | null;
      modelInfo?: {
        __typename?: "ModelInfo";
        id?: string | null;
        user_id?: string | null;
        product_id?: string | null;
        model_name?: string | null;
        estimated_production_per_anum?: string | null;
        createdAt?: string | null;
        refrigerator?: {
          __typename?: "Refrigerator";
          brand_name?: string | null;
          model_name?: string | null;
          manufacture_date?: string | null;
          origin_country?: string | null;
          kw_rating?: number | null;
          annual_energy_consumption?: number | null;
          total_volume_litres?: number | null;
          refrigerant_type?: string | null;
          colors?: string | null;
          ps_mark?: boolean | null;
          energy_efficiency_features?: string | null;
          specify_number?: string | null;
        } | null;
        motor?: {
          __typename?: "Motor";
          manufacturer_name?: string | null;
          country_of_manufacture?: string | null;
          brand_name?: string | null;
          first_manufactured_year?: number | null;
          model_number?: string | null;
          replaces_other_model?: boolean | null;
          date_marked?: boolean | null;
          website_url?: string | null;
          phase_type?: string | null;
          rated_power_output?: number | null;
          rated_voltage?: number | null;
          rated_frequency?: number | null;
          number_of_poles?: number | null;
          rated_speed?: number | null;
          motor_duty?: string | null;
          mounting_code?: string | null;
          frame_code?: string | null;
          enclosure_rating?: string | null;
          motor_design?: string | null;
          motor_insulation?: string | null;
          state_model?: string | null;
          date_format?: string | null;
        } | null;
        ledLight?: {
          __typename?: "LEDLight";
          brand_name?: string | null;
          model_number?: string | null;
          bar_code?: string | null;
          lamp_type?: string | null;
          country_of_origin?: string | null;
          manufacture_date?: string | null;
          lamp_length?: number | null;
          max_diameter?: number | null;
          min_voltage?: number | null;
          max_voltage?: number | null;
          rated_frequency?: number | null;
          rated_power?: number | null;
          power_factor?: number | null;
          standby_power?: number | null;
          flux?: number | null;
          efficacy?: number | null;
          color_temperature?: number | null;
          chromaticity_tolerance?: number | null;
          color_rendering_index?: number | null;
          rated_lifetime?: number | null;
          mercury_content?: number | null;
          risk_group?: string | null;
          warranty_years?: number | null;
        } | null;
        fan?: {
          __typename?: "Fan";
          model_name?: string | null;
          rating?: string | null;
          size_capacity?: number | null;
          colors?: string | null;
          ps_mark?: boolean | null;
          energy_efficiency_features?: string | null;
          specify_number?: string | null;
        } | null;
        ac?: {
          __typename?: "AC";
          brand_name?: string | null;
          model_name?: string | null;
          manufacture_date?: string | null;
          origin_country?: string | null;
          kw_rating?: number | null;
          annual_energy_consumption?: number | null;
          cooling_capacity?: string | null;
          refrigerant_type?: string | null;
          colors?: string | null;
          ps_mark?: boolean | null;
          energy_efficiency_features?: string | null;
          specify_number?: string | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ClientVerifyOtpMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  phoneOtp: Scalars["String"]["input"];
  emailOtp: Scalars["String"]["input"];
}>;

export type ClientVerifyOtpMutation = {
  __typename?: "Mutation";
  clientVerifyOtp: {
    __typename?: "OTPVerificationResponse";
    phoneVerified: boolean;
    emailVerified: boolean;
    status: string;
  };
};

export type ClientGetAllPrintingFirmsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ClientGetAllPrintingFirmsQuery = {
  __typename?: "Query";
  clientGetAllPrintingFirms: Array<{
    __typename?: "User";
    id: string;
    name?: string | null;
    phone?: string | null;
    email?: string | null;
    country?: string | null;
    cnic?: string | null;
    father_name?: string | null;
    profile_picture?: string | null;
    role?: string | null;
    status?: string | null;
    address?: Array<string | null> | null;
    mod_of_delivery?: Array<string | null> | null;
    sticker_cost?: number | null;
    lab_type?: string | null;
  }>;
};

export type ClientGetAllNewsQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientGetAllNewsQuery = {
  __typename?: "Query";
  clientGetAllNews: {
    __typename?: "ClientNewsPagination";
    totalCount: number;
    currentPage: number;
    totalPages: number;
    news: Array<{
      __typename?: "News";
      type?: string | null;
      content?: string | null;
      createdAt?: string | null;
      id?: string | null;
      title?: string | null;
      updatedAt?: string | null;
    }>;
  };
};

export type ApplicantInfoQueryVariables = Exact<{ [key: string]: never }>;

export type ApplicantInfoQuery = {
  __typename?: "Query";
  clientGetProfile?: {
    __typename?: "UserProfile";
    applicantInfo?: {
      __typename?: "ApplicantInfo";
      id?: string | null;
      user_id?: string | null;
      company_name?: string | null;
      company_address?: string | null;
      company_country?: string | null;
      company_province?: string | null;
      company_city?: string | null;
      factory_telephone?: string | null;
      factory_address?: string | null;
      factory_country?: string | null;
      factory_province?: string | null;
      factory_city?: string | null;
      office_telephone?: string | null;
      office_managing_director_name?: string | null;
      contact_person_name?: string | null;
      contact_person_phone?: string | null;
      contact_person_telephone?: string | null;
      contact_person_email?: string | null;
      registered_with_chamber?: boolean | null;
      registration_number?: string | null;
      registration_year?: string | null;
      member_of_association?: boolean | null;
      membership_name?: string | null;
      membership_number?: string | null;
      membership_year?: string | null;
      sales_network_regions?: Array<string | null> | null;
      company_brochure?: string | null;
      product_brochure?: string | null;
      user_agreement?: boolean | null;
      status?: string | null;
    } | null;
  } | null;
};

export type ClientGetApplicantInfoByProductIdQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
}>;

export type ClientGetApplicantInfoByProductIdQuery = {
  __typename?: "Query";
  clientGetApplicantInfoByProductId?: {
    __typename?: "ApplicantInfo";
    id?: string | null;
    user_id?: string | null;
    company_name?: string | null;
    company_address?: string | null;
    company_country?: string | null;
    company_province?: string | null;
    company_city?: string | null;
    factory_telephone?: string | null;
    factory_address?: string | null;
    factory_country?: string | null;
    factory_province?: string | null;
    factory_city?: string | null;
    office_telephone?: string | null;
    office_managing_director_name?: string | null;
    contact_person_name?: string | null;
    contact_person_phone?: string | null;
    contact_person_telephone?: string | null;
    contact_person_email?: string | null;
    registered_with_chamber?: boolean | null;
    registration_number?: string | null;
    registration_year?: string | null;
    member_of_association?: boolean | null;
    membership_name?: string | null;
    membership_number?: string | null;
    membership_year?: string | null;
    sales_network_regions?: Array<string | null> | null;
    company_brochure?: string | null;
    product_brochure?: string | null;
    user_agreement?: boolean | null;
    reason?: string | null;
    status?: string | null;
  } | null;
};

export type ClientGetCertificateByIdQueryVariables = Exact<{
  clientGetCertificateByIdId: Scalars["String"]["input"];
}>;

export type ClientGetCertificateByIdQuery = {
  __typename?: "Query";
  ClientGetCertificateById?: {
    __typename?: "Certificate";
    id?: string | null;
    status?: string | null;
    expiry_date?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    User?: {
      __typename?: "CertificateUser";
      id?: string | null;
      name?: string | null;
      email?: string | null;
    } | null;
    ApplicantInfo?: {
      __typename?: "CertificateApplicantInfo";
      id?: string | null;
      company_name?: string | null;
      company_country?: string | null;
      company_address?: string | null;
    } | null;
    ModelInfo?: {
      __typename?: "CertificateModelInfo";
      id: string;
      model_name?: string | null;
      size?: string | null;
      colour?: string | null;
      rating?: string | null;
    } | null;
    Product?: {
      __typename?: "CertificateProduct";
      id: string;
      name: string;
    } | null;
  } | null;
};

export type ClientGetgetAllCertificatesQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
  page: Scalars["Int"]["input"];
  limit: Scalars["Int"]["input"];
  filter?: InputMaybe<CertificateFilterInput>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientGetgetAllCertificatesQuery = {
  __typename?: "Query";
  clientGetgetAllCertificates?: {
    __typename?: "CertificatePagination";
    count?: number | null;
    totalPages?: number | null;
    currentPage?: number | null;
    certificates?: Array<{
      __typename?: "Certificate";
      id?: string | null;
      status?: string | null;
      expiry_date?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      User?: {
        __typename?: "CertificateUser";
        id?: string | null;
        name?: string | null;
        email?: string | null;
      } | null;
      ApplicantInfo?: {
        __typename?: "CertificateApplicantInfo";
        id?: string | null;
        company_name?: string | null;
        company_country?: string | null;
        company_address?: string | null;
      } | null;
      ModelInfo?: {
        __typename?: "CertificateModelInfo";
        id: string;
        model_name?: string | null;
        size?: string | null;
        colour?: string | null;
        rating?: string | null;
      } | null;
      Product?: {
        __typename?: "CertificateProduct";
        id: string;
        name: string;
      } | null;
    } | null> | null;
  } | null;
};

export type ClientGetDropDownModelsQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
}>;

export type ClientGetDropDownModelsQuery = {
  __typename?: "Query";
  clientGetDropDownModels: Array<{
    __typename?: "ModelInfo";
    id?: string | null;
    user_id?: string | null;
    product_id?: string | null;
    model_name?: string | null;
    status?: string | null;
    createdAt?: string | null;
    refrigerator?: {
      __typename?: "Refrigerator";
      model_info_id?: string | null;
      brand_name?: string | null;
      model_name?: string | null;
      manufacture_date?: string | null;
      origin_country?: string | null;
      kw_rating?: number | null;
      annual_energy_consumption?: number | null;
      total_volume_litres?: number | null;
      refrigerant_type?: string | null;
      colors?: string | null;
      ps_mark?: boolean | null;
      energy_efficiency_features?: string | null;
      specify_number?: string | null;
    } | null;
    motor?: {
      __typename?: "Motor";
      model_info_id?: string | null;
      manufacturer_name?: string | null;
      country_of_manufacture?: string | null;
      brand_name?: string | null;
      first_manufactured_year?: number | null;
      model_number?: string | null;
      replaces_other_model?: boolean | null;
      date_marked?: boolean | null;
      website_url?: string | null;
      phase_type?: string | null;
      rated_power_output?: number | null;
      rated_voltage?: number | null;
      rated_frequency?: number | null;
      number_of_poles?: number | null;
      rated_speed?: number | null;
      motor_duty?: string | null;
      mounting_code?: string | null;
      frame_code?: string | null;
      enclosure_rating?: string | null;
      motor_design?: string | null;
      motor_insulation?: string | null;
      state_model?: string | null;
      date_format?: string | null;
    } | null;
    ledLight?: {
      __typename?: "LEDLight";
      model_info_id?: string | null;
      brand_name?: string | null;
      model_number?: string | null;
      bar_code?: string | null;
      lamp_type?: string | null;
      country_of_origin?: string | null;
      manufacture_date?: string | null;
      lamp_length?: number | null;
      max_diameter?: number | null;
      min_voltage?: number | null;
      max_voltage?: number | null;
      rated_frequency?: number | null;
      rated_power?: number | null;
      power_factor?: number | null;
      standby_power?: number | null;
      flux?: number | null;
      efficacy?: number | null;
      color_temperature?: number | null;
      chromaticity_tolerance?: number | null;
      color_rendering_index?: number | null;
      rated_lifetime?: number | null;
      mercury_content?: number | null;
      risk_group?: string | null;
      warranty_years?: number | null;
    } | null;
    fan?: {
      __typename?: "Fan";
      id: string;
      model_info_id: string;
      model_name?: string | null;
      rating?: string | null;
      size_capacity?: number | null;
      colors?: string | null;
      ps_mark?: boolean | null;
      energy_efficiency_features?: string | null;
      specify_number?: string | null;
    } | null;
    ac?: {
      __typename?: "AC";
      id: string;
      model_info_id: string;
      brand_name?: string | null;
      model_name?: string | null;
      manufacture_date?: string | null;
      origin_country?: string | null;
      kw_rating?: number | null;
      annual_energy_consumption?: number | null;
      cooling_capacity?: string | null;
      refrigerant_type?: string | null;
      colors?: string | null;
      ps_mark?: boolean | null;
      energy_efficiency_features?: string | null;
      specify_number?: string | null;
    } | null;
  }>;
};

export type ClientGetModalPaymentByIdQueryVariables = Exact<{
  paymentId: Scalars["String"]["input"];
}>;

export type ClientGetModalPaymentByIdQuery = {
  __typename?: "Query";
  clientGetPaymentById: {
    __typename?: "PaymentWithModelInfo";
    payment?: {
      __typename?: "Payment";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      modelinfo_id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
    } | null;
  };
};

export type ClientGetModelSignatureQueryVariables = Exact<{
  clientGetModelSignatureId: Scalars["String"]["input"];
}>;

export type ClientGetModelSignatureQuery = {
  __typename?: "Query";
  clientGetModelSignature?: {
    __typename?: "ModelSignature";
    id: string;
    title?: string | null;
    product_id?: string | null;
    img_url?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type ClientGetPaymentByIdUniqueChangeQueryVariables = Exact<{
  paymentId: Scalars["String"]["input"];
}>;

export type ClientGetPaymentByIdUniqueChangeQuery = {
  __typename?: "Query";
  clientGetPaymentById: {
    __typename?: "PaymentWithModelInfo";
    payment?: {
      __typename?: "Payment";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      modelinfo_id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
    } | null;
  };
};

export type ClientGetPrintingOrderByIdQueryVariables = Exact<{
  orderId: Scalars["String"]["input"];
}>;

export type ClientGetPrintingOrderByIdQuery = {
  __typename?: "Query";
  clientGetPrintingOrderById?: {
    __typename?: "ClientGetPrintingOrderByIdResult";
    PrintingOrder?: {
      __typename?: "PrintingOrder";
      id: string;
      product_id?: string | null;
      total_price?: number | null;
      buyer_id?: string | null;
      seller_id?: string | null;
      address?: string | null;
      status?: string | null;
      total_quantity?: number | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      delivery_type?: string | null;
      delivery_company_name?: string | null;
      tracking_id?: string | null;
      Seller?: {
        __typename?: "SellerDetails";
        name?: string | null;
        address?: Array<string | null> | null;
        mod_of_delivery?: Array<string | null> | null;
      } | null;
      StickerOrders?: Array<{
        __typename?: "StickerOrder";
        id: string;
        printing_id?: string | null;
        model_id?: string | null;
        quantity?: number | null;
        price?: number | null;
        created_at?: string | null;
        updated_at?: string | null;
        qr?: string | null;
        ModelInfo?: {
          __typename?: "ModelInfo";
          id?: string | null;
          user_id?: string | null;
          product_id?: string | null;
          model_name?: string | null;
          estimated_production_per_anum?: string | null;
          status?: string | null;
          createdAt?: string | null;
          refrigerator?: {
            __typename?: "Refrigerator";
            model_info_id?: string | null;
            brand_name?: string | null;
            model_name?: string | null;
            manufacture_date?: string | null;
            origin_country?: string | null;
            kw_rating?: number | null;
            annual_energy_consumption?: number | null;
            total_volume_litres?: number | null;
            refrigerant_type?: string | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            specify_number?: string | null;
            energy_efficiency_features?: string | null;
          } | null;
          motor?: {
            __typename?: "Motor";
            model_info_id?: string | null;
            manufacturer_name?: string | null;
            country_of_manufacture?: string | null;
            brand_name?: string | null;
            first_manufactured_year?: number | null;
            model_number?: string | null;
            replaces_other_model?: boolean | null;
            date_marked?: boolean | null;
            website_url?: string | null;
            phase_type?: string | null;
            rated_power_output?: number | null;
            rated_voltage?: number | null;
            rated_frequency?: number | null;
            number_of_poles?: number | null;
            rated_speed?: number | null;
            motor_duty?: string | null;
            mounting_code?: string | null;
            frame_code?: string | null;
            enclosure_rating?: string | null;
            motor_design?: string | null;
            motor_insulation?: string | null;
            state_model?: string | null;
            date_format?: string | null;
          } | null;
          ledLight?: {
            __typename?: "LEDLight";
            model_info_id?: string | null;
            brand_name?: string | null;
            model_number?: string | null;
            bar_code?: string | null;
            lamp_type?: string | null;
            country_of_origin?: string | null;
            manufacture_date?: string | null;
            lamp_length?: number | null;
            max_diameter?: number | null;
            min_voltage?: number | null;
            max_voltage?: number | null;
            rated_frequency?: number | null;
            rated_power?: number | null;
            power_factor?: number | null;
            standby_power?: number | null;
            flux?: number | null;
            efficacy?: number | null;
            color_temperature?: number | null;
            chromaticity_tolerance?: number | null;
            color_rendering_index?: number | null;
            rated_lifetime?: number | null;
            mercury_content?: number | null;
            risk_group?: string | null;
            warranty_years?: number | null;
          } | null;
          fan?: {
            __typename?: "Fan";
            id: string;
            model_info_id: string;
            model_name?: string | null;
            rating?: string | null;
            size_capacity?: number | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            specify_number?: string | null;
            energy_efficiency_features?: string | null;
          } | null;
          ac?: {
            __typename?: "AC";
            id: string;
            model_info_id: string;
            brand_name?: string | null;
            model_name?: string | null;
            manufacture_date?: string | null;
            origin_country?: string | null;
            kw_rating?: number | null;
            annual_energy_consumption?: number | null;
            cooling_capacity?: string | null;
            refrigerant_type?: string | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            specify_number?: string | null;
            energy_efficiency_features?: string | null;
          } | null;
        } | null;
      } | null> | null;
      Payments?: Array<{
        __typename?: "Payment";
        id?: string | null;
        user_id?: string | null;
        product_id?: string | null;
        modelinfo_id?: string | null;
        payment_type?: string | null;
        amount?: number | null;
        payment_date?: string | null;
        pay_order_number?: string | null;
        demand_draft?: string | null;
        status?: string | null;
      } | null> | null;
    } | null;
    actionLogs?: Array<{
      __typename?: "ActionLog";
      id: string;
      action_on: string;
      action_type: string;
      action_value: string;
      reason?: string | null;
      action_message: string;
      createdAt: string;
      action_by: string;
      updatedAt: string;
      User?: {
        __typename?: "ActionBy";
        id?: string | null;
        name?: string | null;
        email?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ClientGetPrintingOrdersQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
  filter?: InputMaybe<PrintingOrderFilterInput>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientGetPrintingOrdersQuery = {
  __typename?: "Query";
  clientGetPrintingOrders?: {
    __typename?: "PrintingOrderPagination";
    count: number;
    totalPages: number;
    currentPage: number;
    orders: Array<{
      __typename?: "PrintingOrder";
      id: string;
      product_id?: string | null;
      total_price?: number | null;
      buyer_id?: string | null;
      seller_id?: string | null;
      address?: string | null;
      status?: string | null;
      total_quantity?: number | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      StickerOrders?: Array<{
        __typename?: "StickerOrder";
        id: string;
        printing_id?: string | null;
        model_id?: string | null;
        quantity?: number | null;
        price?: number | null;
        created_at?: string | null;
        updated_at?: string | null;
        qr?: string | null;
        ModelInfo?: {
          __typename?: "ModelInfo";
          id?: string | null;
          user_id?: string | null;
          product_id?: string | null;
          model_name?: string | null;
          status?: string | null;
          createdAt?: string | null;
          refrigerator?: {
            __typename?: "Refrigerator";
            model_info_id?: string | null;
            brand_name?: string | null;
            model_name?: string | null;
            manufacture_date?: string | null;
            origin_country?: string | null;
            kw_rating?: number | null;
            annual_energy_consumption?: number | null;
            total_volume_litres?: number | null;
            refrigerant_type?: string | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            specify_number?: string | null;
            energy_efficiency_features?: string | null;
          } | null;
          motor?: {
            __typename?: "Motor";
            model_info_id?: string | null;
            manufacturer_name?: string | null;
            country_of_manufacture?: string | null;
            brand_name?: string | null;
            first_manufactured_year?: number | null;
            model_number?: string | null;
            replaces_other_model?: boolean | null;
            date_marked?: boolean | null;
            website_url?: string | null;
            phase_type?: string | null;
            rated_power_output?: number | null;
            rated_voltage?: number | null;
            rated_frequency?: number | null;
            number_of_poles?: number | null;
            rated_speed?: number | null;
            motor_duty?: string | null;
            mounting_code?: string | null;
            frame_code?: string | null;
            enclosure_rating?: string | null;
            motor_design?: string | null;
            motor_insulation?: string | null;
            state_model?: string | null;
            date_format?: string | null;
          } | null;
          ledLight?: {
            __typename?: "LEDLight";
            model_info_id?: string | null;
            brand_name?: string | null;
            model_number?: string | null;
            bar_code?: string | null;
            lamp_type?: string | null;
            country_of_origin?: string | null;
            manufacture_date?: string | null;
            lamp_length?: number | null;
            max_diameter?: number | null;
            min_voltage?: number | null;
            max_voltage?: number | null;
            rated_frequency?: number | null;
            rated_power?: number | null;
            power_factor?: number | null;
            standby_power?: number | null;
            flux?: number | null;
            efficacy?: number | null;
            color_temperature?: number | null;
            chromaticity_tolerance?: number | null;
            color_rendering_index?: number | null;
            rated_lifetime?: number | null;
            mercury_content?: number | null;
            risk_group?: string | null;
            warranty_years?: number | null;
          } | null;
          fan?: {
            __typename?: "Fan";
            id: string;
            model_info_id: string;
            model_name?: string | null;
            rating?: string | null;
            size_capacity?: number | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            specify_number?: string | null;
            energy_efficiency_features?: string | null;
          } | null;
          ac?: {
            __typename?: "AC";
            id: string;
            model_info_id: string;
            brand_name?: string | null;
            model_name?: string | null;
            manufacture_date?: string | null;
            origin_country?: string | null;
            kw_rating?: number | null;
            annual_energy_consumption?: number | null;
            cooling_capacity?: string | null;
            refrigerant_type?: string | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            specify_number?: string | null;
            energy_efficiency_features?: string | null;
          } | null;
        } | null;
      } | null> | null;
      Payments?: Array<{
        __typename?: "Payment";
        id?: string | null;
        user_id?: string | null;
        product_id?: string | null;
        modelinfo_id?: string | null;
        payment_type?: string | null;
        amount?: number | null;
        payment_date?: string | null;
        pay_order_number?: string | null;
        demand_draft?: string | null;
        status?: string | null;
      } | null> | null;
    }>;
  } | null;
};

export type ClientGetNewsByIdQueryVariables = Exact<{
  clientGetNewsByIdId: Scalars["String"]["input"];
}>;

export type ClientGetNewsByIdQuery = {
  __typename?: "Query";
  clientGetNewsById?: {
    __typename?: "ClientNews";
    id?: string | null;
    title?: string | null;
    content?: string | null;
    type?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type ClientGetSettingsByKeyQueryVariables = Exact<{
  key: Scalars["String"]["input"];
}>;

export type ClientGetSettingsByKeyQuery = {
  __typename?: "Query";
  clientGetSettingsByKey?: {
    __typename?: "Setting";
    id: string;
    key: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    voucher_enabled?: boolean | null;
    voucher_type?: string | null;
    voucher_validity?: string | null;
    voucher_status?: string | null;
    voucher_imageurl?: string | null;
  } | null;
};

export type ClientGetStatusQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
}>;

export type ClientGetStatusQuery = {
  __typename?: "Query";
  clientGetStatus: {
    __typename?: "GetStatusRepsonse";
    model?: {
      __typename?: "ModelInfoSummary";
      id?: string | null;
      model_name?: string | null;
      size?: string | null;
      colour?: string | null;
      rating?: string | null;
      has_ps_mark?: boolean | null;
      specify_number?: string | null;
      energy_consumption_details?: string | null;
      estimated_annual_production?: string | null;
      company_brochure?: string | null;
      product_brochure?: string | null;
      status?: string | null;
      reason?: string | null;
    } | null;
    applicantInfo?: {
      __typename?: "ApplicantInfo";
      id?: string | null;
      user_id?: string | null;
      assign_to?: string | null;
      assign_by?: string | null;
      status?: string | null;
      product_id?: string | null;
      company_name?: string | null;
      company_address?: string | null;
      company_country?: string | null;
      company_province?: string | null;
      company_city?: string | null;
      factory_telephone?: string | null;
      factory_address?: string | null;
      factory_country?: string | null;
      factory_province?: string | null;
      factory_city?: string | null;
      office_telephone?: string | null;
      office_managing_director_name?: string | null;
      contact_person_name?: string | null;
      contact_person_phone?: string | null;
      contact_person_telephone?: string | null;
      contact_person_email?: string | null;
      registered_with_chamber?: boolean | null;
      user_agreement?: boolean | null;
      registration_number?: string | null;
      registration_year?: string | null;
      member_of_association?: boolean | null;
      membership_name?: string | null;
      membership_number?: string | null;
      membership_year?: string | null;
      sales_network_regions?: Array<string | null> | null;
      company_brochure?: string | null;
      product_brochure?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      reason?: string | null;
    } | null;
    modelPayment?: {
      __typename?: "PaymentSummary";
      id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
      reason?: string | null;
      createdAt?: string | null;
    } | null;
    productPayment?: {
      __typename?: "PaymentSummary";
      id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
      reason?: string | null;
      createdAt?: string | null;
    } | null;
    labReport?: {
      __typename?: "LabReport";
      id?: string | null;
      user_id?: string | null;
      lab_id?: string | null;
      product_id?: string | null;
      model_info_id?: string | null;
      test_report?: string | null;
      report_from?: string | null;
      lab_country?: string | null;
      lab_user_name?: string | null;
      status?: string | null;
      reason?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    userProduct?: {
      __typename?: "userProduct";
      id: string;
      user_id?: string | null;
      product_id?: string | null;
      status?: string | null;
    } | null;
  };
};

export type ClientGetStepperQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
  stepperType: Scalars["String"]["input"];
}>;

export type ClientGetStepperQuery = {
  __typename?: "Query";
  clientGetStepper?: {
    __typename?: "StepperResponse";
    id?: string | null;
    count?: number | null;
    success: boolean;
    message: string;
    product_id?: string | null;
    stepper_type?: string | null;
    current_step?: string | null;
    steps_info?: Array<{
      __typename?: "StepInfo";
      payment?: Array<{
        __typename?: "Payment";
        id?: string | null;
        user_id?: string | null;
        product_id?: string | null;
        modelinfo_id?: string | null;
        payment_type?: string | null;
        amount?: number | null;
        payment_date?: string | null;
        pay_order_number?: string | null;
        demand_draft?: string | null;
        status?: string | null;
      } | null> | null;
      labReport?: {
        __typename?: "LabReport";
        id?: string | null;
        user_id?: string | null;
        lab_id?: string | null;
        product_id?: string | null;
        model_info_id?: string | null;
        test_report?: string | null;
        report_from?: string | null;
        lab_country?: string | null;
        lab_user_name?: string | null;
        status?: string | null;
        reason?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      applicantInfo?: {
        __typename?: "ApplicantInfo";
        id?: string | null;
        user_id?: string | null;
        assign_to?: string | null;
        assign_by?: string | null;
        status?: string | null;
        product_id?: string | null;
        company_name?: string | null;
        company_address?: string | null;
        company_country?: string | null;
        company_province?: string | null;
        company_city?: string | null;
        factory_telephone?: string | null;
        factory_address?: string | null;
        factory_country?: string | null;
        factory_province?: string | null;
        factory_city?: string | null;
        office_telephone?: string | null;
        office_managing_director_name?: string | null;
        contact_person_name?: string | null;
        contact_person_phone?: string | null;
        contact_person_telephone?: string | null;
        contact_person_email?: string | null;
        registered_with_chamber?: boolean | null;
        user_agreement?: boolean | null;
        registration_number?: string | null;
        registration_year?: string | null;
        member_of_association?: boolean | null;
        membership_name?: string | null;
        membership_number?: string | null;
        membership_year?: string | null;
        sales_network_regions?: Array<string | null> | null;
        company_brochure?: string | null;
        product_brochure?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        reason?: string | null;
      } | null;
      modelInfo?: {
        __typename?: "ModelInfo";
        id?: string | null;
        user_id?: string | null;
        product_id?: string | null;
        model_name?: string | null;
        estimated_production_per_anum?: string | null;
        status?: string | null;
        createdAt?: string | null;
        refrigerator?: {
          __typename?: "Refrigerator";
          brand_name?: string | null;
          model_name?: string | null;
          manufacture_date?: string | null;
          origin_country?: string | null;
          kw_rating?: number | null;
          annual_energy_consumption?: number | null;
          total_volume_litres?: number | null;
          refrigerant_type?: string | null;
          colors?: string | null;
          ps_mark?: boolean | null;
          energy_efficiency_features?: string | null;
          specify_number?: string | null;
        } | null;
        motor?: {
          __typename?: "Motor";
          manufacturer_name?: string | null;
          country_of_manufacture?: string | null;
          brand_name?: string | null;
          first_manufactured_year?: number | null;
          model_number?: string | null;
          replaces_other_model?: boolean | null;
          date_marked?: boolean | null;
          website_url?: string | null;
          phase_type?: string | null;
          rated_power_output?: number | null;
          rated_voltage?: number | null;
          rated_frequency?: number | null;
          number_of_poles?: number | null;
          rated_speed?: number | null;
          motor_duty?: string | null;
          mounting_code?: string | null;
          frame_code?: string | null;
          enclosure_rating?: string | null;
          motor_design?: string | null;
          motor_insulation?: string | null;
          state_model?: string | null;
          date_format?: string | null;
        } | null;
        ledLight?: {
          __typename?: "LEDLight";
          brand_name?: string | null;
          model_number?: string | null;
          bar_code?: string | null;
          lamp_type?: string | null;
          country_of_origin?: string | null;
          manufacture_date?: string | null;
          lamp_length?: number | null;
          max_diameter?: number | null;
          min_voltage?: number | null;
          max_voltage?: number | null;
          rated_frequency?: number | null;
          rated_power?: number | null;
          power_factor?: number | null;
          standby_power?: number | null;
          flux?: number | null;
          efficacy?: number | null;
          color_temperature?: number | null;
          chromaticity_tolerance?: number | null;
          color_rendering_index?: number | null;
          rated_lifetime?: number | null;
          mercury_content?: number | null;
          risk_group?: string | null;
          warranty_years?: number | null;
        } | null;
        fan?: {
          __typename?: "Fan";
          model_name?: string | null;
          rating?: string | null;
          size_capacity?: number | null;
          colors?: string | null;
          ps_mark?: boolean | null;
          energy_efficiency_features?: string | null;
          specify_number?: string | null;
        } | null;
        ac?: {
          __typename?: "AC";
          brand_name?: string | null;
          model_name?: string | null;
          manufacture_date?: string | null;
          origin_country?: string | null;
          kw_rating?: number | null;
          annual_energy_consumption?: number | null;
          cooling_capacity?: string | null;
          refrigerant_type?: string | null;
          colors?: string | null;
          ps_mark?: boolean | null;
          energy_efficiency_features?: string | null;
          specify_number?: string | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ClientGetAllPaymentsQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
  page: Scalars["Int"]["input"];
  limit: Scalars["Int"]["input"];
  filter?: InputMaybe<PaymentFilterInput>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientGetAllPaymentsQuery = {
  __typename?: "Query";
  clientGetAllPayments: {
    __typename?: "PaymentResponse";
    count: number;
    totalPages: number;
    currentPage: number;
    payments: Array<{
      __typename?: "Payment";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      modelinfo_id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
    }>;
  };
};

export type ClientGetAllLabsQueryVariables = Exact<{
  country?: InputMaybe<Scalars["String"]["input"]>;
  labType?: InputMaybe<Scalars["String"]["input"]>;
  productId?: InputMaybe<Scalars["String"]["input"]>;
  labOrigin?: InputMaybe<Scalars["String"]["input"]>;
  labCategory?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientGetAllLabsQuery = {
  __typename?: "Query";
  clientGetAllLabs: Array<{
    __typename?: "User";
    id: string;
    name?: string | null;
    phone?: string | null;
    email?: string | null;
    country?: string | null;
    cnic?: string | null;
    father_name?: string | null;
    profile_picture?: string | null;
    role?: string | null;
    status?: string | null;
    sticker_cost?: number | null;
    lab_type?: string | null;
  } | null>;
};

export type ClientGetProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ClientGetProfileQuery = {
  __typename?: "Query";
  clientGetProfile?: {
    __typename?: "UserProfile";
    user?: {
      __typename?: "User";
      id: string;
      name?: string | null;
      phone?: string | null;
      email?: string | null;
      profile_picture?: string | null;
      role?: string | null;
      status?: string | null;
      country?: string | null;
      lab_type?: string | null;
      father_name?: string | null;
      cnic?: string | null;
    } | null;
    applicantInfo?: {
      __typename?: "ApplicantInfo";
      id?: string | null;
      user_id?: string | null;
      company_name?: string | null;
      company_address?: string | null;
      company_country?: string | null;
      company_province?: string | null;
      company_city?: string | null;
      factory_telephone?: string | null;
      factory_address?: string | null;
      factory_country?: string | null;
      factory_province?: string | null;
      factory_city?: string | null;
      office_telephone?: string | null;
      office_managing_director_name?: string | null;
      contact_person_name?: string | null;
      contact_person_phone?: string | null;
      contact_person_telephone?: string | null;
      contact_person_email?: string | null;
      registered_with_chamber?: boolean | null;
      registration_number?: string | null;
      registration_year?: string | null;
      member_of_association?: boolean | null;
      membership_name?: string | null;
      membership_number?: string | null;
      membership_year?: string | null;
      sales_network_regions?: Array<string | null> | null;
      company_brochure?: string | null;
      product_brochure?: string | null;
      user_agreement?: boolean | null;
    } | null;
  } | null;
};

export type ClientGetDashboardQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
}>;

export type ClientGetDashboardQuery = {
  __typename?: "Query";
  clientGetDashboard: {
    __typename?: "DashboardData";
    modelInfoCounts: {
      __typename?: "ModelInfoCounts";
      total: number;
      pending: number;
      approved: number;
      rejected: number;
    };
    labReportCounts: {
      __typename?: "LabReportCounts";
      total: number;
      pending: number;
      approved: number;
      rejected: number;
    };
    recentPayments: Array<{
      __typename?: "PaymentSummary";
      id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
      reason?: string | null;
      createdAt?: string | null;
    }>;
    recentModels: Array<{
      __typename?: "ModelInfoSummary";
      id?: string | null;
      model_name?: string | null;
      size?: string | null;
      colour?: string | null;
      rating?: string | null;
      has_ps_mark?: boolean | null;
      specify_number?: string | null;
      energy_consumption_details?: string | null;
      estimated_annual_production?: string | null;
      company_brochure?: string | null;
      product_brochure?: string | null;
      status?: string | null;
      reason?: string | null;
    }>;
    annualCashInData: Array<{
      __typename?: "AnnualCashInData";
      month?: string | null;
      amount?: number | null;
    }>;
  };
};

export type ClientGetModelsQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
  page: Scalars["Int"]["input"];
  limit: Scalars["Int"]["input"];
  filter?: InputMaybe<ModelInfoFilterInput>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ClientGetModelsQuery = {
  __typename?: "Query";
  clientGetModels: {
    __typename?: "ModelInfoResponse";
    count: number;
    totalPages: number;
    currentPage: number;
    models: Array<{
      __typename?: "ModelInfo";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      model_name?: string | null;
      estimated_production_per_anum?: string | null;
      status?: string | null;
      createdAt?: string | null;
      refrigerator?: {
        __typename?: "Refrigerator";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        total_volume_litres?: number | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        energy_efficiency_features?: string | null;
        specify_number?: string | null;
      } | null;
      motor?: {
        __typename?: "Motor";
        model_info_id?: string | null;
        manufacturer_name?: string | null;
        country_of_manufacture?: string | null;
        brand_name?: string | null;
        first_manufactured_year?: number | null;
        model_number?: string | null;
        replaces_other_model?: boolean | null;
        date_marked?: boolean | null;
        website_url?: string | null;
        phase_type?: string | null;
        rated_power_output?: number | null;
        rated_voltage?: number | null;
        rated_frequency?: number | null;
        number_of_poles?: number | null;
        rated_speed?: number | null;
        motor_duty?: string | null;
        mounting_code?: string | null;
        frame_code?: string | null;
        enclosure_rating?: string | null;
        motor_design?: string | null;
        motor_insulation?: string | null;
        state_model?: string | null;
        date_format?: string | null;
      } | null;
      ledLight?: {
        __typename?: "LEDLight";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_number?: string | null;
        bar_code?: string | null;
        lamp_type?: string | null;
        country_of_origin?: string | null;
        manufacture_date?: string | null;
        lamp_length?: number | null;
        max_diameter?: number | null;
        min_voltage?: number | null;
        max_voltage?: number | null;
        rated_frequency?: number | null;
        rated_power?: number | null;
        power_factor?: number | null;
        standby_power?: number | null;
        flux?: number | null;
        efficacy?: number | null;
        color_temperature?: number | null;
        chromaticity_tolerance?: number | null;
        color_rendering_index?: number | null;
        rated_lifetime?: number | null;
        mercury_content?: number | null;
        risk_group?: string | null;
        warranty_years?: number | null;
      } | null;
      fan?: {
        __typename?: "Fan";
        id: string;
        model_info_id: string;
        model_name?: string | null;
        rating?: string | null;
        size_capacity?: number | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        energy_efficiency_features?: string | null;
        specify_number?: string | null;
      } | null;
      ac?: {
        __typename?: "AC";
        id: string;
        model_info_id: string;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        cooling_capacity?: string | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        energy_efficiency_features?: string | null;
        specify_number?: string | null;
      } | null;
    }>;
  };
};

export type ClientGetModelByIdQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
  modelId: Scalars["String"]["input"];
}>;

export type ClientGetModelByIdQuery = {
  __typename?: "Query";
  clientGetModelById: {
    __typename?: "ModelInfoWithPayments";
    modelInfo?: {
      __typename?: "ModelInfo";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      model_name?: string | null;
      estimated_production_per_anum?: string | null;
      status?: string | null;
      createdAt?: string | null;
      refrigerator?: {
        __typename?: "Refrigerator";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        total_volume_litres?: number | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
      motor?: {
        __typename?: "Motor";
        model_info_id?: string | null;
        manufacturer_name?: string | null;
        country_of_manufacture?: string | null;
        brand_name?: string | null;
        first_manufactured_year?: number | null;
        model_number?: string | null;
        replaces_other_model?: boolean | null;
        date_marked?: boolean | null;
        website_url?: string | null;
        phase_type?: string | null;
        rated_power_output?: number | null;
        rated_voltage?: number | null;
        rated_frequency?: number | null;
        number_of_poles?: number | null;
        rated_speed?: number | null;
        motor_duty?: string | null;
        mounting_code?: string | null;
        frame_code?: string | null;
        enclosure_rating?: string | null;
        motor_design?: string | null;
        motor_insulation?: string | null;
        state_model?: string | null;
        date_format?: string | null;
      } | null;
      ledLight?: {
        __typename?: "LEDLight";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_number?: string | null;
        bar_code?: string | null;
        lamp_type?: string | null;
        country_of_origin?: string | null;
        manufacture_date?: string | null;
        lamp_length?: number | null;
        max_diameter?: number | null;
        min_voltage?: number | null;
        max_voltage?: number | null;
        rated_frequency?: number | null;
        rated_power?: number | null;
        power_factor?: number | null;
        standby_power?: number | null;
        flux?: number | null;
        efficacy?: number | null;
        color_temperature?: number | null;
        chromaticity_tolerance?: number | null;
        color_rendering_index?: number | null;
        rated_lifetime?: number | null;
        mercury_content?: number | null;
        risk_group?: string | null;
        warranty_years?: number | null;
      } | null;
      fan?: {
        __typename?: "Fan";
        id: string;
        model_info_id: string;
        model_name?: string | null;
        rating?: string | null;
        size_capacity?: number | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
      ac?: {
        __typename?: "AC";
        id: string;
        model_info_id: string;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        cooling_capacity?: string | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
    } | null;
    labReports?: Array<{
      __typename?: "LabReport";
      id?: string | null;
      user_id?: string | null;
      lab_id?: string | null;
      product_id?: string | null;
      model_info_id?: string | null;
      test_report?: string | null;
      report_from?: string | null;
      lab_country?: string | null;
      lab_user_name?: string | null;
      status?: string | null;
      reason?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      lab?: {
        __typename?: "LabUser";
        id: string;
        name?: string | null;
        email?: string | null;
        father_name?: string | null;
        country?: string | null;
        cnic?: string | null;
        phone?: string | null;
        profile_picture?: string | null;
        lab_type?: string | null;
        lab_origin?: string | null;
        lab_category?: string | null;
        lab_expires?: string | null;
        role?: string | null;
        status?: string | null;
        allowed_products?: Array<string | null> | null;
      } | null;
      user?: {
        __typename?: "LabUser";
        id: string;
        name?: string | null;
        email?: string | null;
        father_name?: string | null;
        country?: string | null;
        cnic?: string | null;
        phone?: string | null;
        profile_picture?: string | null;
        lab_type?: string | null;
        lab_origin?: string | null;
        lab_category?: string | null;
        lab_expires?: string | null;
        role?: string | null;
        status?: string | null;
        allowed_products?: Array<string | null> | null;
      } | null;
      Product?: {
        __typename?: "AdminProduct";
        id?: string | null;
        name?: string | null;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null> | null;
    payments?: Array<{
      __typename?: "Payment";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      modelinfo_id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
    }> | null;
    certificates?: Array<{
      __typename?: "Certificate";
      id?: string | null;
      status?: string | null;
      expiry_date?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      User?: {
        __typename?: "CertificateUser";
        id?: string | null;
        name?: string | null;
        email?: string | null;
      } | null;
      ApplicantInfo?: {
        __typename?: "CertificateApplicantInfo";
        id?: string | null;
        company_name?: string | null;
        company_country?: string | null;
        company_address?: string | null;
        company_city?: string | null;
      } | null;
      ModelInfo?: {
        __typename?: "CertificateModelInfo";
        id: string;
        model_name?: string | null;
        size?: string | null;
        colour?: string | null;
        rating?: string | null;
        service_value?: string | null;
        start_rating?: number | null;
      } | null;
      Product?: {
        __typename?: "CertificateProduct";
        id: string;
        name: string;
      } | null;
    } | null> | null;
  };
};

export type ClientGetPaymentByIdQueryVariables = Exact<{
  paymentId: Scalars["String"]["input"];
}>;

export type ClientGetPaymentByIdQuery = {
  __typename?: "Query";
  clientGetPaymentById: {
    __typename?: "PaymentWithModelInfo";
    payment?: {
      __typename?: "Payment";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      modelinfo_id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
    } | null;
    model_info?: {
      __typename?: "ModelInfo";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      model_name?: string | null;
      status?: string | null;
      createdAt?: string | null;
      refrigerator?: {
        __typename?: "Refrigerator";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        total_volume_litres?: number | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        energy_efficiency_features?: string | null;
        specify_number?: string | null;
      } | null;
      motor?: {
        __typename?: "Motor";
        model_info_id?: string | null;
        manufacturer_name?: string | null;
        country_of_manufacture?: string | null;
        brand_name?: string | null;
        first_manufactured_year?: number | null;
        model_number?: string | null;
        replaces_other_model?: boolean | null;
        date_marked?: boolean | null;
        website_url?: string | null;
        phase_type?: string | null;
        rated_power_output?: number | null;
        rated_voltage?: number | null;
        rated_frequency?: number | null;
        number_of_poles?: number | null;
        rated_speed?: number | null;
        motor_duty?: string | null;
        mounting_code?: string | null;
        frame_code?: string | null;
        enclosure_rating?: string | null;
        motor_design?: string | null;
        motor_insulation?: string | null;
        state_model?: string | null;
        date_format?: string | null;
      } | null;
      ledLight?: {
        __typename?: "LEDLight";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_number?: string | null;
        bar_code?: string | null;
        lamp_type?: string | null;
        country_of_origin?: string | null;
        manufacture_date?: string | null;
        lamp_length?: number | null;
        max_diameter?: number | null;
        min_voltage?: number | null;
        max_voltage?: number | null;
        rated_frequency?: number | null;
        rated_power?: number | null;
        power_factor?: number | null;
        standby_power?: number | null;
        flux?: number | null;
        efficacy?: number | null;
        color_temperature?: number | null;
        chromaticity_tolerance?: number | null;
        color_rendering_index?: number | null;
        rated_lifetime?: number | null;
        mercury_content?: number | null;
        risk_group?: string | null;
        warranty_years?: number | null;
      } | null;
      fan?: {
        __typename?: "Fan";
        id: string;
        model_info_id: string;
        model_name?: string | null;
        rating?: string | null;
        size_capacity?: number | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        energy_efficiency_features?: string | null;
        specify_number?: string | null;
      } | null;
      ac?: {
        __typename?: "AC";
        id: string;
        model_info_id: string;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        cooling_capacity?: string | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        energy_efficiency_features?: string | null;
        specify_number?: string | null;
      } | null;
    } | null;
  };
};

export type ClientGetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type ClientGetProductsQuery = {
  __typename?: "Query";
  clientGetProducts: Array<{
    __typename?: "Product";
    id?: string | null;
    name?: string | null;
    description?: string | null;
    image?: string | null;
    count?: number | null;
    steppers?: Array<{
      __typename?: "Stepper";
      id: string;
      user_id: string;
      product_id: string;
      current_step: string;
      stepper_type: string;
      steps_info?: Array<{
        __typename?: "StepInfo";
        payment?: Array<{
          __typename?: "Payment";
          id?: string | null;
          user_id?: string | null;
          product_id?: string | null;
          modelinfo_id?: string | null;
          payment_type?: string | null;
          amount?: number | null;
          payment_date?: string | null;
          pay_order_number?: string | null;
          demand_draft?: string | null;
          status?: string | null;
        } | null> | null;
        applicantInfo?: {
          __typename?: "ApplicantInfo";
          id?: string | null;
          user_id?: string | null;
          assign_to?: string | null;
          assign_by?: string | null;
          status?: string | null;
          product_id?: string | null;
          company_name?: string | null;
          company_address?: string | null;
          company_country?: string | null;
          company_province?: string | null;
          company_city?: string | null;
          factory_telephone?: string | null;
          factory_address?: string | null;
          factory_country?: string | null;
          factory_province?: string | null;
          factory_city?: string | null;
          office_telephone?: string | null;
          office_managing_director_name?: string | null;
          contact_person_name?: string | null;
          contact_person_phone?: string | null;
          contact_person_telephone?: string | null;
          contact_person_email?: string | null;
          registered_with_chamber?: boolean | null;
          user_agreement?: boolean | null;
          registration_number?: string | null;
          registration_year?: string | null;
          member_of_association?: boolean | null;
          membership_name?: string | null;
          membership_number?: string | null;
          membership_year?: string | null;
          sales_network_regions?: Array<string | null> | null;
          company_brochure?: string | null;
          product_brochure?: string | null;
          createdAt?: string | null;
          updatedAt?: string | null;
          reason?: string | null;
        } | null;
        labReport?: {
          __typename?: "LabReport";
          id?: string | null;
          user_id?: string | null;
          lab_id?: string | null;
          product_id?: string | null;
          model_info_id?: string | null;
          test_report?: string | null;
          report_from?: string | null;
          lab_country?: string | null;
          lab_user_name?: string | null;
          status?: string | null;
          reason?: string | null;
          createdAt?: string | null;
          updatedAt?: string | null;
        } | null;
        modelInfo?: {
          __typename?: "ModelInfo";
          id?: string | null;
          user_id?: string | null;
          product_id?: string | null;
          model_name?: string | null;
          status?: string | null;
          createdAt?: string | null;
          refrigerator?: {
            __typename?: "Refrigerator";
            model_info_id?: string | null;
            brand_name?: string | null;
            model_name?: string | null;
            manufacture_date?: string | null;
            origin_country?: string | null;
            kw_rating?: number | null;
            annual_energy_consumption?: number | null;
            total_volume_litres?: number | null;
            refrigerant_type?: string | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            energy_efficiency_features?: string | null;
            specify_number?: string | null;
          } | null;
          motor?: {
            __typename?: "Motor";
            model_info_id?: string | null;
            manufacturer_name?: string | null;
            country_of_manufacture?: string | null;
            brand_name?: string | null;
            first_manufactured_year?: number | null;
            model_number?: string | null;
            replaces_other_model?: boolean | null;
            date_marked?: boolean | null;
            website_url?: string | null;
            phase_type?: string | null;
            rated_power_output?: number | null;
            rated_voltage?: number | null;
            rated_frequency?: number | null;
            number_of_poles?: number | null;
            rated_speed?: number | null;
            motor_duty?: string | null;
            mounting_code?: string | null;
            frame_code?: string | null;
            enclosure_rating?: string | null;
            motor_design?: string | null;
            motor_insulation?: string | null;
            state_model?: string | null;
            date_format?: string | null;
          } | null;
          ledLight?: {
            __typename?: "LEDLight";
            model_info_id?: string | null;
            brand_name?: string | null;
            model_number?: string | null;
            bar_code?: string | null;
            lamp_type?: string | null;
            country_of_origin?: string | null;
            manufacture_date?: string | null;
            lamp_length?: number | null;
            max_diameter?: number | null;
            min_voltage?: number | null;
            max_voltage?: number | null;
            rated_frequency?: number | null;
            rated_power?: number | null;
            power_factor?: number | null;
            standby_power?: number | null;
            flux?: number | null;
            efficacy?: number | null;
            color_temperature?: number | null;
            chromaticity_tolerance?: number | null;
            color_rendering_index?: number | null;
            rated_lifetime?: number | null;
            mercury_content?: number | null;
            risk_group?: string | null;
            warranty_years?: number | null;
          } | null;
          fan?: {
            __typename?: "Fan";
            model_name?: string | null;
            rating?: string | null;
            size_capacity?: number | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            energy_efficiency_features?: string | null;
            specify_number?: string | null;
          } | null;
          ac?: {
            __typename?: "AC";
            brand_name?: string | null;
            model_name?: string | null;
            manufacture_date?: string | null;
            origin_country?: string | null;
            kw_rating?: number | null;
            annual_energy_consumption?: number | null;
            cooling_capacity?: string | null;
            refrigerant_type?: string | null;
            colors?: string | null;
            ps_mark?: boolean | null;
            energy_efficiency_features?: string | null;
            specify_number?: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null> | null;
  }>;
};

export type PublicGetNewsByIdQueryVariables = Exact<{
  publicGetNewsByIdId: Scalars["String"]["input"];
}>;

export type PublicGetNewsByIdQuery = {
  __typename?: "Query";
  publicGetNewsById?: {
    __typename?: "publicNews";
    id?: string | null;
    title?: string | null;
    content?: string | null;
    type?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type PublicGetAllModelsQueryVariables = Exact<{
  productIds?: InputMaybe<
    | Array<InputMaybe<Scalars["String"]["input"]>>
    | InputMaybe<Scalars["String"]["input"]>
  >;
  filter?: InputMaybe<PublicModelInfoFilterInput>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PublicGetAllModelsQuery = {
  __typename?: "Query";
  publicGetAllModels: {
    __typename?: "PublicModelInfoResponse";
    count: number;
    totalPages: number;
    currentPage: number;
    models: Array<{
      __typename?: "PublicModelInfo";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      model_name?: string | null;
      refrigerator?: {
        __typename?: "Refrigerator";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        total_volume_litres?: number | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
      motor?: {
        __typename?: "Motor";
        model_info_id?: string | null;
        manufacturer_name?: string | null;
        country_of_manufacture?: string | null;
        brand_name?: string | null;
        first_manufactured_year?: number | null;
        model_number?: string | null;
        replaces_other_model?: boolean | null;
        date_marked?: boolean | null;
        website_url?: string | null;
        phase_type?: string | null;
        rated_power_output?: number | null;
        rated_voltage?: number | null;
        rated_frequency?: number | null;
        number_of_poles?: number | null;
        rated_speed?: number | null;
        motor_duty?: string | null;
        mounting_code?: string | null;
        frame_code?: string | null;
        enclosure_rating?: string | null;
        motor_design?: string | null;
        motor_insulation?: string | null;
        state_model?: string | null;
        date_format?: string | null;
      } | null;
      ledLight?: {
        __typename?: "LEDLight";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_number?: string | null;
        bar_code?: string | null;
        lamp_type?: string | null;
        country_of_origin?: string | null;
        manufacture_date?: string | null;
        lamp_length?: number | null;
        max_diameter?: number | null;
        min_voltage?: number | null;
        max_voltage?: number | null;
        rated_frequency?: number | null;
        rated_power?: number | null;
        power_factor?: number | null;
        standby_power?: number | null;
        flux?: number | null;
        efficacy?: number | null;
        color_temperature?: number | null;
        chromaticity_tolerance?: number | null;
        color_rendering_index?: number | null;
        rated_lifetime?: number | null;
        mercury_content?: number | null;
        risk_group?: string | null;
        warranty_years?: number | null;
      } | null;
      fan?: {
        __typename?: "Fan";
        id: string;
        model_info_id: string;
        model_name?: string | null;
        rating?: string | null;
        size_capacity?: number | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
      ac?: {
        __typename?: "AC";
        id: string;
        model_info_id: string;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        cooling_capacity?: string | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
    }>;
  };
};

export type PublicGetAllNewsQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PublicGetAllNewsQuery = {
  __typename?: "Query";
  publicGetAllNews: {
    __typename?: "publicNewsPagination";
    totalCount: number;
    currentPage: number;
    totalPages: number;
    news: Array<{
      __typename?: "News";
      id?: string | null;
      title?: string | null;
      content?: string | null;
      type?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    }>;
  };
};

export type PublicGetAllProductsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type PublicGetAllProductsQuery = {
  __typename?: "Query";
  publicGetAllProducts: {
    __typename?: "PublicProductResponse";
    products?: Array<{
      __typename?: "PublicProduct";
      id?: string | null;
      name?: string | null;
      description?: string | null;
      image?: string | null;
    } | null> | null;
  };
};

export type PublicGetModelByIdQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
  modelId: Scalars["String"]["input"];
}>;

export type PublicGetModelByIdQuery = {
  __typename?: "Query";
  publicGetModelById: {
    __typename?: "PublicModelInfoWithDetails";
    modelInfo?: {
      __typename?: "PublicModelInfo";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      model_name?: string | null;
      refrigerator?: {
        __typename?: "Refrigerator";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        total_volume_litres?: number | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
      motor?: {
        __typename?: "Motor";
        model_info_id?: string | null;
        manufacturer_name?: string | null;
        country_of_manufacture?: string | null;
        brand_name?: string | null;
        first_manufactured_year?: number | null;
        model_number?: string | null;
        replaces_other_model?: boolean | null;
        date_marked?: boolean | null;
        website_url?: string | null;
        phase_type?: string | null;
        rated_power_output?: number | null;
        rated_voltage?: number | null;
        rated_frequency?: number | null;
        number_of_poles?: number | null;
        rated_speed?: number | null;
        motor_duty?: string | null;
        mounting_code?: string | null;
        frame_code?: string | null;
        enclosure_rating?: string | null;
        motor_design?: string | null;
        motor_insulation?: string | null;
        state_model?: string | null;
        date_format?: string | null;
      } | null;
      ledLight?: {
        __typename?: "LEDLight";
        model_info_id?: string | null;
        brand_name?: string | null;
        model_number?: string | null;
        bar_code?: string | null;
        lamp_type?: string | null;
        country_of_origin?: string | null;
        manufacture_date?: string | null;
        lamp_length?: number | null;
        max_diameter?: number | null;
        min_voltage?: number | null;
        max_voltage?: number | null;
        rated_frequency?: number | null;
        rated_power?: number | null;
        power_factor?: number | null;
        standby_power?: number | null;
        flux?: number | null;
        efficacy?: number | null;
        color_temperature?: number | null;
        chromaticity_tolerance?: number | null;
        color_rendering_index?: number | null;
        rated_lifetime?: number | null;
        mercury_content?: number | null;
        risk_group?: string | null;
        warranty_years?: number | null;
      } | null;
      fan?: {
        __typename?: "Fan";
        id: string;
        model_info_id: string;
        model_name?: string | null;
        rating?: string | null;
        size_capacity?: number | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
      ac?: {
        __typename?: "AC";
        id: string;
        model_info_id: string;
        brand_name?: string | null;
        model_name?: string | null;
        manufacture_date?: string | null;
        origin_country?: string | null;
        kw_rating?: number | null;
        annual_energy_consumption?: number | null;
        cooling_capacity?: string | null;
        refrigerant_type?: string | null;
        colors?: string | null;
        ps_mark?: boolean | null;
        specify_number?: string | null;
        energy_efficiency_features?: string | null;
      } | null;
    } | null;
    payments: Array<{
      __typename?: "Payment";
      id?: string | null;
      user_id?: string | null;
      product_id?: string | null;
      modelinfo_id?: string | null;
      payment_type?: string | null;
      amount?: number | null;
      payment_date?: string | null;
      pay_order_number?: string | null;
      demand_draft?: string | null;
      status?: string | null;
    }>;
    labReports?: Array<{
      __typename?: "LabReport";
      id?: string | null;
      user_id?: string | null;
      lab_id?: string | null;
      product_id?: string | null;
      model_info_id?: string | null;
      test_report?: string | null;
      report_from?: string | null;
      lab_country?: string | null;
      lab_user_name?: string | null;
      status?: string | null;
      reason?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null> | null;
    certificates?: Array<{
      __typename?: "Certificate";
      id?: string | null;
      status?: string | null;
      expiry_date?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      User?: {
        __typename?: "CertificateUser";
        id?: string | null;
        name?: string | null;
        email?: string | null;
      } | null;
      ApplicantInfo?: {
        __typename?: "CertificateApplicantInfo";
        id?: string | null;
        company_name?: string | null;
        company_country?: string | null;
        company_address?: string | null;
      } | null;
      ModelInfo?: {
        __typename?: "CertificateModelInfo";
        id: string;
        model_name?: string | null;
        size?: string | null;
        colour?: string | null;
        rating?: string | null;
      } | null;
      Product?: {
        __typename?: "CertificateProduct";
        id: string;
        name: string;
      } | null;
    } | null> | null;
  };
};

export type PublicVerifyCertificateQueryVariables = Exact<{
  publicVerifyCertificateId: Scalars["String"]["input"];
}>;

export type PublicVerifyCertificateQuery = {
  __typename?: "Query";
  PublicVerifyCertificate?: {
    __typename?: "Certificate";
    status?: string | null;
  } | null;
};

export type PublicVerifyStickerQueryVariables = Exact<{
  qr: Scalars["String"]["input"];
}>;

export type PublicVerifyStickerQuery = {
  __typename?: "Query";
  publicVerifySticker: {
    __typename?: "VerifyStickerResponse";
    success: boolean;
    message: string;
    qr_count: number;
    quantity?: number | null;
  };
};

export const ClientCreatePrintingOrderDocument = gql`
  mutation ClientCreatePrintingOrder($input: ClientCreatePrintingOrderInput!) {
    clientCreatePrintingOrder(input: $input) {
      success
      message
    }
  }
`;
export type ClientCreatePrintingOrderMutationFn = Apollo.MutationFunction<
  ClientCreatePrintingOrderMutation,
  ClientCreatePrintingOrderMutationVariables
>;

/**
 * __useClientCreatePrintingOrderMutation__
 *
 * To run a mutation, you first call `useClientCreatePrintingOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientCreatePrintingOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientCreatePrintingOrderMutation, { data, loading, error }] = useClientCreatePrintingOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useClientCreatePrintingOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientCreatePrintingOrderMutation,
    ClientCreatePrintingOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientCreatePrintingOrderMutation,
    ClientCreatePrintingOrderMutationVariables
  >(ClientCreatePrintingOrderDocument, options);
}
export type ClientCreatePrintingOrderMutationHookResult = ReturnType<
  typeof useClientCreatePrintingOrderMutation
>;
export type ClientCreatePrintingOrderMutationResult =
  Apollo.MutationResult<ClientCreatePrintingOrderMutation>;
export type ClientCreatePrintingOrderMutationOptions =
  Apollo.BaseMutationOptions<
    ClientCreatePrintingOrderMutation,
    ClientCreatePrintingOrderMutationVariables
  >;
export const ClientGoToDashboardDocument = gql`
  mutation ClientGoToDashboard($productId: String!) {
    clientGoToDashboard(product_id: $productId) {
      message
      token
    }
  }
`;
export type ClientGoToDashboardMutationFn = Apollo.MutationFunction<
  ClientGoToDashboardMutation,
  ClientGoToDashboardMutationVariables
>;

/**
 * __useClientGoToDashboardMutation__
 *
 * To run a mutation, you first call `useClientGoToDashboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientGoToDashboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientGoToDashboardMutation, { data, loading, error }] = useClientGoToDashboardMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useClientGoToDashboardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientGoToDashboardMutation,
    ClientGoToDashboardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientGoToDashboardMutation,
    ClientGoToDashboardMutationVariables
  >(ClientGoToDashboardDocument, options);
}
export type ClientGoToDashboardMutationHookResult = ReturnType<
  typeof useClientGoToDashboardMutation
>;
export type ClientGoToDashboardMutationResult =
  Apollo.MutationResult<ClientGoToDashboardMutation>;
export type ClientGoToDashboardMutationOptions = Apollo.BaseMutationOptions<
  ClientGoToDashboardMutation,
  ClientGoToDashboardMutationVariables
>;
export const ClientResetPasswordDocument = gql`
  mutation ClientResetPassword($token: String!, $newPassword: String!) {
    clientResetPassword(token: $token, newPassword: $newPassword) {
      success
      message
    }
  }
`;
export type ClientResetPasswordMutationFn = Apollo.MutationFunction<
  ClientResetPasswordMutation,
  ClientResetPasswordMutationVariables
>;

/**
 * __useClientResetPasswordMutation__
 *
 * To run a mutation, you first call `useClientResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientResetPasswordMutation, { data, loading, error }] = useClientResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useClientResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientResetPasswordMutation,
    ClientResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientResetPasswordMutation,
    ClientResetPasswordMutationVariables
  >(ClientResetPasswordDocument, options);
}
export type ClientResetPasswordMutationHookResult = ReturnType<
  typeof useClientResetPasswordMutation
>;
export type ClientResetPasswordMutationResult =
  Apollo.MutationResult<ClientResetPasswordMutation>;
export type ClientResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ClientResetPasswordMutation,
  ClientResetPasswordMutationVariables
>;
export const ClientResubmitApplicationDocument = gql`
  mutation ClientResubmitApplication($productId: String!) {
    clientResubmitApplication(product_id: $productId) {
      message
    }
  }
`;
export type ClientResubmitApplicationMutationFn = Apollo.MutationFunction<
  ClientResubmitApplicationMutation,
  ClientResubmitApplicationMutationVariables
>;

/**
 * __useClientResubmitApplicationMutation__
 *
 * To run a mutation, you first call `useClientResubmitApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientResubmitApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientResubmitApplicationMutation, { data, loading, error }] = useClientResubmitApplicationMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useClientResubmitApplicationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientResubmitApplicationMutation,
    ClientResubmitApplicationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientResubmitApplicationMutation,
    ClientResubmitApplicationMutationVariables
  >(ClientResubmitApplicationDocument, options);
}
export type ClientResubmitApplicationMutationHookResult = ReturnType<
  typeof useClientResubmitApplicationMutation
>;
export type ClientResubmitApplicationMutationResult =
  Apollo.MutationResult<ClientResubmitApplicationMutation>;
export type ClientResubmitApplicationMutationOptions =
  Apollo.BaseMutationOptions<
    ClientResubmitApplicationMutation,
    ClientResubmitApplicationMutationVariables
  >;
export const ClientUpdateApplicantInfoByIdDocument = gql`
  mutation ClientUpdateApplicantInfoById(
    $infoId: String!
    $data: UpdateApplicantInfoInput
  ) {
    clientUpdateApplicantInfoById(info_Id: $infoId, data: $data) {
      success
      message
    }
  }
`;
export type ClientUpdateApplicantInfoByIdMutationFn = Apollo.MutationFunction<
  ClientUpdateApplicantInfoByIdMutation,
  ClientUpdateApplicantInfoByIdMutationVariables
>;

/**
 * __useClientUpdateApplicantInfoByIdMutation__
 *
 * To run a mutation, you first call `useClientUpdateApplicantInfoByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientUpdateApplicantInfoByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientUpdateApplicantInfoByIdMutation, { data, loading, error }] = useClientUpdateApplicantInfoByIdMutation({
 *   variables: {
 *      infoId: // value for 'infoId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useClientUpdateApplicantInfoByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientUpdateApplicantInfoByIdMutation,
    ClientUpdateApplicantInfoByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientUpdateApplicantInfoByIdMutation,
    ClientUpdateApplicantInfoByIdMutationVariables
  >(ClientUpdateApplicantInfoByIdDocument, options);
}
export type ClientUpdateApplicantInfoByIdMutationHookResult = ReturnType<
  typeof useClientUpdateApplicantInfoByIdMutation
>;
export type ClientUpdateApplicantInfoByIdMutationResult =
  Apollo.MutationResult<ClientUpdateApplicantInfoByIdMutation>;
export type ClientUpdateApplicantInfoByIdMutationOptions =
  Apollo.BaseMutationOptions<
    ClientUpdateApplicantInfoByIdMutation,
    ClientUpdateApplicantInfoByIdMutationVariables
  >;
export const ClientUpdateLabReportByIdDocument = gql`
  mutation ClientUpdateLabReportById(
    $data: LabReportInput!
    $reportId: String
  ) {
    clientUpdateLabReportById(data: $data, report_id: $reportId) {
      message
    }
  }
`;
export type ClientUpdateLabReportByIdMutationFn = Apollo.MutationFunction<
  ClientUpdateLabReportByIdMutation,
  ClientUpdateLabReportByIdMutationVariables
>;

/**
 * __useClientUpdateLabReportByIdMutation__
 *
 * To run a mutation, you first call `useClientUpdateLabReportByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientUpdateLabReportByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientUpdateLabReportByIdMutation, { data, loading, error }] = useClientUpdateLabReportByIdMutation({
 *   variables: {
 *      data: // value for 'data'
 *      reportId: // value for 'reportId'
 *   },
 * });
 */
export function useClientUpdateLabReportByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientUpdateLabReportByIdMutation,
    ClientUpdateLabReportByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientUpdateLabReportByIdMutation,
    ClientUpdateLabReportByIdMutationVariables
  >(ClientUpdateLabReportByIdDocument, options);
}
export type ClientUpdateLabReportByIdMutationHookResult = ReturnType<
  typeof useClientUpdateLabReportByIdMutation
>;
export type ClientUpdateLabReportByIdMutationResult =
  Apollo.MutationResult<ClientUpdateLabReportByIdMutation>;
export type ClientUpdateLabReportByIdMutationOptions =
  Apollo.BaseMutationOptions<
    ClientUpdateLabReportByIdMutation,
    ClientUpdateLabReportByIdMutationVariables
  >;
export const ClientUpdateModelByIdDocument = gql`
  mutation ClientUpdateModelById($modelId: String!, $data: ModelInfoInput!) {
    clientUpdateModelById(model_id: $modelId, data: $data) {
      message
    }
  }
`;
export type ClientUpdateModelByIdMutationFn = Apollo.MutationFunction<
  ClientUpdateModelByIdMutation,
  ClientUpdateModelByIdMutationVariables
>;

/**
 * __useClientUpdateModelByIdMutation__
 *
 * To run a mutation, you first call `useClientUpdateModelByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientUpdateModelByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientUpdateModelByIdMutation, { data, loading, error }] = useClientUpdateModelByIdMutation({
 *   variables: {
 *      modelId: // value for 'modelId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useClientUpdateModelByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientUpdateModelByIdMutation,
    ClientUpdateModelByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientUpdateModelByIdMutation,
    ClientUpdateModelByIdMutationVariables
  >(ClientUpdateModelByIdDocument, options);
}
export type ClientUpdateModelByIdMutationHookResult = ReturnType<
  typeof useClientUpdateModelByIdMutation
>;
export type ClientUpdateModelByIdMutationResult =
  Apollo.MutationResult<ClientUpdateModelByIdMutation>;
export type ClientUpdateModelByIdMutationOptions = Apollo.BaseMutationOptions<
  ClientUpdateModelByIdMutation,
  ClientUpdateModelByIdMutationVariables
>;
export const ClientUpdatePasswordDocument = gql`
  mutation ClientUpdatePassword(
    $currentPassword: String!
    $newPassword: String!
    $confirmPassword: String!
  ) {
    clientUpdatePassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
      confirmPassword: $confirmPassword
    ) {
      success
      message
    }
  }
`;
export type ClientUpdatePasswordMutationFn = Apollo.MutationFunction<
  ClientUpdatePasswordMutation,
  ClientUpdatePasswordMutationVariables
>;

/**
 * __useClientUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useClientUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientUpdatePasswordMutation, { data, loading, error }] = useClientUpdatePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      newPassword: // value for 'newPassword'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useClientUpdatePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientUpdatePasswordMutation,
    ClientUpdatePasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientUpdatePasswordMutation,
    ClientUpdatePasswordMutationVariables
  >(ClientUpdatePasswordDocument, options);
}
export type ClientUpdatePasswordMutationHookResult = ReturnType<
  typeof useClientUpdatePasswordMutation
>;
export type ClientUpdatePasswordMutationResult =
  Apollo.MutationResult<ClientUpdatePasswordMutation>;
export type ClientUpdatePasswordMutationOptions = Apollo.BaseMutationOptions<
  ClientUpdatePasswordMutation,
  ClientUpdatePasswordMutationVariables
>;
export const ClientUpdatePaymentByIdDocument = gql`
  mutation ClientUpdatePaymentById($data: PaymentInput!, $paymentId: String) {
    clientUpdatePaymentById(data: $data, payment_id: $paymentId) {
      message
    }
  }
`;
export type ClientUpdatePaymentByIdMutationFn = Apollo.MutationFunction<
  ClientUpdatePaymentByIdMutation,
  ClientUpdatePaymentByIdMutationVariables
>;

/**
 * __useClientUpdatePaymentByIdMutation__
 *
 * To run a mutation, you first call `useClientUpdatePaymentByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientUpdatePaymentByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientUpdatePaymentByIdMutation, { data, loading, error }] = useClientUpdatePaymentByIdMutation({
 *   variables: {
 *      data: // value for 'data'
 *      paymentId: // value for 'paymentId'
 *   },
 * });
 */
export function useClientUpdatePaymentByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientUpdatePaymentByIdMutation,
    ClientUpdatePaymentByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientUpdatePaymentByIdMutation,
    ClientUpdatePaymentByIdMutationVariables
  >(ClientUpdatePaymentByIdDocument, options);
}
export type ClientUpdatePaymentByIdMutationHookResult = ReturnType<
  typeof useClientUpdatePaymentByIdMutation
>;
export type ClientUpdatePaymentByIdMutationResult =
  Apollo.MutationResult<ClientUpdatePaymentByIdMutation>;
export type ClientUpdatePaymentByIdMutationOptions = Apollo.BaseMutationOptions<
  ClientUpdatePaymentByIdMutation,
  ClientUpdatePaymentByIdMutationVariables
>;
export const ClientUpdateProfileDocument = gql`
  mutation ClientUpdateProfile($userProfile: UpdateUserProfileInput) {
    clientUpdateProfile(userProfile: $userProfile) {
      id
      email
      token
      status
      success
      message
    }
  }
`;
export type ClientUpdateProfileMutationFn = Apollo.MutationFunction<
  ClientUpdateProfileMutation,
  ClientUpdateProfileMutationVariables
>;

/**
 * __useClientUpdateProfileMutation__
 *
 * To run a mutation, you first call `useClientUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientUpdateProfileMutation, { data, loading, error }] = useClientUpdateProfileMutation({
 *   variables: {
 *      userProfile: // value for 'userProfile'
 *   },
 * });
 */
export function useClientUpdateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientUpdateProfileMutation,
    ClientUpdateProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientUpdateProfileMutation,
    ClientUpdateProfileMutationVariables
  >(ClientUpdateProfileDocument, options);
}
export type ClientUpdateProfileMutationHookResult = ReturnType<
  typeof useClientUpdateProfileMutation
>;
export type ClientUpdateProfileMutationResult =
  Apollo.MutationResult<ClientUpdateProfileMutation>;
export type ClientUpdateProfileMutationOptions = Apollo.BaseMutationOptions<
  ClientUpdateProfileMutation,
  ClientUpdateProfileMutationVariables
>;
export const ClientVerifyAndUseVolunteerKeyDocument = gql`
  mutation ClientVerifyAndUseVolunteerKey($registrationKey: String!) {
    clientVerifyAndUseVolunteerKey(registrationKey: $registrationKey) {
      message
      success
    }
  }
`;
export type ClientVerifyAndUseVolunteerKeyMutationFn = Apollo.MutationFunction<
  ClientVerifyAndUseVolunteerKeyMutation,
  ClientVerifyAndUseVolunteerKeyMutationVariables
>;

/**
 * __useClientVerifyAndUseVolunteerKeyMutation__
 *
 * To run a mutation, you first call `useClientVerifyAndUseVolunteerKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientVerifyAndUseVolunteerKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientVerifyAndUseVolunteerKeyMutation, { data, loading, error }] = useClientVerifyAndUseVolunteerKeyMutation({
 *   variables: {
 *      registrationKey: // value for 'registrationKey'
 *   },
 * });
 */
export function useClientVerifyAndUseVolunteerKeyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientVerifyAndUseVolunteerKeyMutation,
    ClientVerifyAndUseVolunteerKeyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientVerifyAndUseVolunteerKeyMutation,
    ClientVerifyAndUseVolunteerKeyMutationVariables
  >(ClientVerifyAndUseVolunteerKeyDocument, options);
}
export type ClientVerifyAndUseVolunteerKeyMutationHookResult = ReturnType<
  typeof useClientVerifyAndUseVolunteerKeyMutation
>;
export type ClientVerifyAndUseVolunteerKeyMutationResult =
  Apollo.MutationResult<ClientVerifyAndUseVolunteerKeyMutation>;
export type ClientVerifyAndUseVolunteerKeyMutationOptions =
  Apollo.BaseMutationOptions<
    ClientVerifyAndUseVolunteerKeyMutation,
    ClientVerifyAndUseVolunteerKeyMutationVariables
  >;
export const ClientForgotPasswordDocument = gql`
  mutation ClientForgotPassword($email: String!) {
    clientForgotPassword(email: $email) {
      message
    }
  }
`;
export type ClientForgotPasswordMutationFn = Apollo.MutationFunction<
  ClientForgotPasswordMutation,
  ClientForgotPasswordMutationVariables
>;

/**
 * __useClientForgotPasswordMutation__
 *
 * To run a mutation, you first call `useClientForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientForgotPasswordMutation, { data, loading, error }] = useClientForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useClientForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientForgotPasswordMutation,
    ClientForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientForgotPasswordMutation,
    ClientForgotPasswordMutationVariables
  >(ClientForgotPasswordDocument, options);
}
export type ClientForgotPasswordMutationHookResult = ReturnType<
  typeof useClientForgotPasswordMutation
>;
export type ClientForgotPasswordMutationResult =
  Apollo.MutationResult<ClientForgotPasswordMutation>;
export type ClientForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ClientForgotPasswordMutation,
  ClientForgotPasswordMutationVariables
>;
export const ClientLoginDocument = gql`
  mutation ClientLogin($email: String!, $password: String!) {
    clientLogin(email: $email, password: $password) {
      email
      id
      message
      token
      success
      status
    }
  }
`;
export type ClientLoginMutationFn = Apollo.MutationFunction<
  ClientLoginMutation,
  ClientLoginMutationVariables
>;

/**
 * __useClientLoginMutation__
 *
 * To run a mutation, you first call `useClientLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientLoginMutation, { data, loading, error }] = useClientLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useClientLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientLoginMutation,
    ClientLoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ClientLoginMutation, ClientLoginMutationVariables>(
    ClientLoginDocument,
    options
  );
}
export type ClientLoginMutationHookResult = ReturnType<
  typeof useClientLoginMutation
>;
export type ClientLoginMutationResult =
  Apollo.MutationResult<ClientLoginMutation>;
export type ClientLoginMutationOptions = Apollo.BaseMutationOptions<
  ClientLoginMutation,
  ClientLoginMutationVariables
>;
export const ClientResendOtpDocument = gql`
  mutation ClientResendOtp($email: String!) {
    clientResendOtp(email: $email) {
      message
    }
  }
`;
export type ClientResendOtpMutationFn = Apollo.MutationFunction<
  ClientResendOtpMutation,
  ClientResendOtpMutationVariables
>;

/**
 * __useClientResendOtpMutation__
 *
 * To run a mutation, you first call `useClientResendOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientResendOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientResendOtpMutation, { data, loading, error }] = useClientResendOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useClientResendOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientResendOtpMutation,
    ClientResendOtpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientResendOtpMutation,
    ClientResendOtpMutationVariables
  >(ClientResendOtpDocument, options);
}
export type ClientResendOtpMutationHookResult = ReturnType<
  typeof useClientResendOtpMutation
>;
export type ClientResendOtpMutationResult =
  Apollo.MutationResult<ClientResendOtpMutation>;
export type ClientResendOtpMutationOptions = Apollo.BaseMutationOptions<
  ClientResendOtpMutation,
  ClientResendOtpMutationVariables
>;
export const ClientSignupDocument = gql`
  mutation ClientSignup(
    $name: String!
    $phone: String!
    $password: String!
    $email: String!
  ) {
    clientSignup(
      name: $name
      phone: $phone
      password: $password
      email: $email
    ) {
      message
      success
    }
  }
`;
export type ClientSignupMutationFn = Apollo.MutationFunction<
  ClientSignupMutation,
  ClientSignupMutationVariables
>;

/**
 * __useClientSignupMutation__
 *
 * To run a mutation, you first call `useClientSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientSignupMutation, { data, loading, error }] = useClientSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useClientSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientSignupMutation,
    ClientSignupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientSignupMutation,
    ClientSignupMutationVariables
  >(ClientSignupDocument, options);
}
export type ClientSignupMutationHookResult = ReturnType<
  typeof useClientSignupMutation
>;
export type ClientSignupMutationResult =
  Apollo.MutationResult<ClientSignupMutation>;
export type ClientSignupMutationOptions = Apollo.BaseMutationOptions<
  ClientSignupMutation,
  ClientSignupMutationVariables
>;
export const ClientUpdateStepperDocument = gql`
  mutation ClientUpdateStepper(
    $productId: String!
    $action: String!
    $currentStep: String!
    $stepperType: String!
    $stepsInfo: [StepInfoInput]!
  ) {
    clientUpdateStepper(
      product_id: $productId
      action: $action
      current_step: $currentStep
      stepper_type: $stepperType
      steps_info: $stepsInfo
    ) {
      id
      count
      success
      message
      product_id
      stepper_type
      current_step
      steps_info {
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
          createdAt
          updatedAt
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
        modelInfo {
          id
          user_id
          product_id
          model_name
          refrigerator {
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
            energy_efficiency_features
            specify_number
          }
          motor {
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
            model_name
            rating
            size_capacity
            colors
            ps_mark
            energy_efficiency_features
            specify_number
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
            energy_efficiency_features
            specify_number
          }
          estimated_production_per_anum
          createdAt
        }
      }
    }
  }
`;
export type ClientUpdateStepperMutationFn = Apollo.MutationFunction<
  ClientUpdateStepperMutation,
  ClientUpdateStepperMutationVariables
>;

/**
 * __useClientUpdateStepperMutation__
 *
 * To run a mutation, you first call `useClientUpdateStepperMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientUpdateStepperMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientUpdateStepperMutation, { data, loading, error }] = useClientUpdateStepperMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      action: // value for 'action'
 *      currentStep: // value for 'currentStep'
 *      stepperType: // value for 'stepperType'
 *      stepsInfo: // value for 'stepsInfo'
 *   },
 * });
 */
export function useClientUpdateStepperMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientUpdateStepperMutation,
    ClientUpdateStepperMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientUpdateStepperMutation,
    ClientUpdateStepperMutationVariables
  >(ClientUpdateStepperDocument, options);
}
export type ClientUpdateStepperMutationHookResult = ReturnType<
  typeof useClientUpdateStepperMutation
>;
export type ClientUpdateStepperMutationResult =
  Apollo.MutationResult<ClientUpdateStepperMutation>;
export type ClientUpdateStepperMutationOptions = Apollo.BaseMutationOptions<
  ClientUpdateStepperMutation,
  ClientUpdateStepperMutationVariables
>;
export const ClientVerifyOtpDocument = gql`
  mutation ClientVerifyOtp(
    $email: String!
    $phoneOtp: String!
    $emailOtp: String!
  ) {
    clientVerifyOtp(email: $email, phoneOtp: $phoneOtp, emailOtp: $emailOtp) {
      phoneVerified
      emailVerified
      status
    }
  }
`;
export type ClientVerifyOtpMutationFn = Apollo.MutationFunction<
  ClientVerifyOtpMutation,
  ClientVerifyOtpMutationVariables
>;

/**
 * __useClientVerifyOtpMutation__
 *
 * To run a mutation, you first call `useClientVerifyOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClientVerifyOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clientVerifyOtpMutation, { data, loading, error }] = useClientVerifyOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      phoneOtp: // value for 'phoneOtp'
 *      emailOtp: // value for 'emailOtp'
 *   },
 * });
 */
export function useClientVerifyOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClientVerifyOtpMutation,
    ClientVerifyOtpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClientVerifyOtpMutation,
    ClientVerifyOtpMutationVariables
  >(ClientVerifyOtpDocument, options);
}
export type ClientVerifyOtpMutationHookResult = ReturnType<
  typeof useClientVerifyOtpMutation
>;
export type ClientVerifyOtpMutationResult =
  Apollo.MutationResult<ClientVerifyOtpMutation>;
export type ClientVerifyOtpMutationOptions = Apollo.BaseMutationOptions<
  ClientVerifyOtpMutation,
  ClientVerifyOtpMutationVariables
>;
export const ClientGetAllPrintingFirmsDocument = gql`
  query ClientGetAllPrintingFirms {
    clientGetAllPrintingFirms {
      id
      name
      phone
      email
      country
      cnic
      father_name
      profile_picture
      role
      status
      address
      mod_of_delivery
      sticker_cost
      lab_type
    }
  }
`;

/**
 * __useClientGetAllPrintingFirmsQuery__
 *
 * To run a query within a React component, call `useClientGetAllPrintingFirmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetAllPrintingFirmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetAllPrintingFirmsQuery({
 *   variables: {
 *   },
 * });
 */
export function useClientGetAllPrintingFirmsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClientGetAllPrintingFirmsQuery,
    ClientGetAllPrintingFirmsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetAllPrintingFirmsQuery,
    ClientGetAllPrintingFirmsQueryVariables
  >(ClientGetAllPrintingFirmsDocument, options);
}
export function useClientGetAllPrintingFirmsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetAllPrintingFirmsQuery,
    ClientGetAllPrintingFirmsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetAllPrintingFirmsQuery,
    ClientGetAllPrintingFirmsQueryVariables
  >(ClientGetAllPrintingFirmsDocument, options);
}
export function useClientGetAllPrintingFirmsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetAllPrintingFirmsQuery,
        ClientGetAllPrintingFirmsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetAllPrintingFirmsQuery,
    ClientGetAllPrintingFirmsQueryVariables
  >(ClientGetAllPrintingFirmsDocument, options);
}
export type ClientGetAllPrintingFirmsQueryHookResult = ReturnType<
  typeof useClientGetAllPrintingFirmsQuery
>;
export type ClientGetAllPrintingFirmsLazyQueryHookResult = ReturnType<
  typeof useClientGetAllPrintingFirmsLazyQuery
>;
export type ClientGetAllPrintingFirmsSuspenseQueryHookResult = ReturnType<
  typeof useClientGetAllPrintingFirmsSuspenseQuery
>;
export type ClientGetAllPrintingFirmsQueryResult = Apollo.QueryResult<
  ClientGetAllPrintingFirmsQuery,
  ClientGetAllPrintingFirmsQueryVariables
>;
export const ClientGetAllNewsDocument = gql`
  query ClientGetAllNews(
    $page: Int
    $limit: Int
    $search: String
    $sort: String
    $sortBy: String
    $sortOrder: String
  ) {
    clientGetAllNews(
      page: $page
      limit: $limit
      search: $search
      sort: $sort
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      totalCount
      currentPage
      totalPages
      news {
        type
        content
        createdAt
        id
        title
        updatedAt
      }
    }
  }
`;

/**
 * __useClientGetAllNewsQuery__
 *
 * To run a query within a React component, call `useClientGetAllNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetAllNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetAllNewsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      sort: // value for 'sort'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useClientGetAllNewsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClientGetAllNewsQuery,
    ClientGetAllNewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClientGetAllNewsQuery, ClientGetAllNewsQueryVariables>(
    ClientGetAllNewsDocument,
    options
  );
}
export function useClientGetAllNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetAllNewsQuery,
    ClientGetAllNewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetAllNewsQuery,
    ClientGetAllNewsQueryVariables
  >(ClientGetAllNewsDocument, options);
}
export function useClientGetAllNewsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetAllNewsQuery,
        ClientGetAllNewsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetAllNewsQuery,
    ClientGetAllNewsQueryVariables
  >(ClientGetAllNewsDocument, options);
}
export type ClientGetAllNewsQueryHookResult = ReturnType<
  typeof useClientGetAllNewsQuery
>;
export type ClientGetAllNewsLazyQueryHookResult = ReturnType<
  typeof useClientGetAllNewsLazyQuery
>;
export type ClientGetAllNewsSuspenseQueryHookResult = ReturnType<
  typeof useClientGetAllNewsSuspenseQuery
>;
export type ClientGetAllNewsQueryResult = Apollo.QueryResult<
  ClientGetAllNewsQuery,
  ClientGetAllNewsQueryVariables
>;
export const ApplicantInfoDocument = gql`
  query ApplicantInfo {
    clientGetProfile {
      applicantInfo {
        id
        user_id
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
        registration_number
        registration_year
        member_of_association
        membership_name
        membership_number
        membership_year
        sales_network_regions
        company_brochure
        product_brochure
        user_agreement
        status
      }
    }
  }
`;

/**
 * __useApplicantInfoQuery__
 *
 * To run a query within a React component, call `useApplicantInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicantInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicantInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useApplicantInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ApplicantInfoQuery,
    ApplicantInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ApplicantInfoQuery, ApplicantInfoQueryVariables>(
    ApplicantInfoDocument,
    options
  );
}
export function useApplicantInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ApplicantInfoQuery,
    ApplicantInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ApplicantInfoQuery, ApplicantInfoQueryVariables>(
    ApplicantInfoDocument,
    options
  );
}
export function useApplicantInfoSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ApplicantInfoQuery,
        ApplicantInfoQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ApplicantInfoQuery,
    ApplicantInfoQueryVariables
  >(ApplicantInfoDocument, options);
}
export type ApplicantInfoQueryHookResult = ReturnType<
  typeof useApplicantInfoQuery
>;
export type ApplicantInfoLazyQueryHookResult = ReturnType<
  typeof useApplicantInfoLazyQuery
>;
export type ApplicantInfoSuspenseQueryHookResult = ReturnType<
  typeof useApplicantInfoSuspenseQuery
>;
export type ApplicantInfoQueryResult = Apollo.QueryResult<
  ApplicantInfoQuery,
  ApplicantInfoQueryVariables
>;
export const ClientGetApplicantInfoByProductIdDocument = gql`
  query ClientGetApplicantInfoByProductId($productId: String!) {
    clientGetApplicantInfoByProductId(product_id: $productId) {
      id
      user_id
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
      registration_number
      registration_year
      member_of_association
      membership_name
      membership_number
      membership_year
      sales_network_regions
      company_brochure
      product_brochure
      user_agreement
      reason
      status
    }
  }
`;

/**
 * __useClientGetApplicantInfoByProductIdQuery__
 *
 * To run a query within a React component, call `useClientGetApplicantInfoByProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetApplicantInfoByProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetApplicantInfoByProductIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useClientGetApplicantInfoByProductIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetApplicantInfoByProductIdQuery,
    ClientGetApplicantInfoByProductIdQueryVariables
  > &
    (
      | {
          variables: ClientGetApplicantInfoByProductIdQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetApplicantInfoByProductIdQuery,
    ClientGetApplicantInfoByProductIdQueryVariables
  >(ClientGetApplicantInfoByProductIdDocument, options);
}
export function useClientGetApplicantInfoByProductIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetApplicantInfoByProductIdQuery,
    ClientGetApplicantInfoByProductIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetApplicantInfoByProductIdQuery,
    ClientGetApplicantInfoByProductIdQueryVariables
  >(ClientGetApplicantInfoByProductIdDocument, options);
}
export function useClientGetApplicantInfoByProductIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetApplicantInfoByProductIdQuery,
        ClientGetApplicantInfoByProductIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetApplicantInfoByProductIdQuery,
    ClientGetApplicantInfoByProductIdQueryVariables
  >(ClientGetApplicantInfoByProductIdDocument, options);
}
export type ClientGetApplicantInfoByProductIdQueryHookResult = ReturnType<
  typeof useClientGetApplicantInfoByProductIdQuery
>;
export type ClientGetApplicantInfoByProductIdLazyQueryHookResult = ReturnType<
  typeof useClientGetApplicantInfoByProductIdLazyQuery
>;
export type ClientGetApplicantInfoByProductIdSuspenseQueryHookResult =
  ReturnType<typeof useClientGetApplicantInfoByProductIdSuspenseQuery>;
export type ClientGetApplicantInfoByProductIdQueryResult = Apollo.QueryResult<
  ClientGetApplicantInfoByProductIdQuery,
  ClientGetApplicantInfoByProductIdQueryVariables
>;
export const ClientGetCertificateByIdDocument = gql`
  query ClientGetCertificateById($clientGetCertificateByIdId: String!) {
    ClientGetCertificateById(id: $clientGetCertificateByIdId) {
      id
      User {
        id
        name
        email
      }
      ApplicantInfo {
        id
        company_name
        company_country
        company_address
      }
      ModelInfo {
        id
        model_name
        size
        colour
        rating
      }
      Product {
        id
        name
      }
      status
      expiry_date
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useClientGetCertificateByIdQuery__
 *
 * To run a query within a React component, call `useClientGetCertificateByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetCertificateByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetCertificateByIdQuery({
 *   variables: {
 *      clientGetCertificateByIdId: // value for 'clientGetCertificateByIdId'
 *   },
 * });
 */
export function useClientGetCertificateByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetCertificateByIdQuery,
    ClientGetCertificateByIdQueryVariables
  > &
    (
      | { variables: ClientGetCertificateByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetCertificateByIdQuery,
    ClientGetCertificateByIdQueryVariables
  >(ClientGetCertificateByIdDocument, options);
}
export function useClientGetCertificateByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetCertificateByIdQuery,
    ClientGetCertificateByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetCertificateByIdQuery,
    ClientGetCertificateByIdQueryVariables
  >(ClientGetCertificateByIdDocument, options);
}
export function useClientGetCertificateByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetCertificateByIdQuery,
        ClientGetCertificateByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetCertificateByIdQuery,
    ClientGetCertificateByIdQueryVariables
  >(ClientGetCertificateByIdDocument, options);
}
export type ClientGetCertificateByIdQueryHookResult = ReturnType<
  typeof useClientGetCertificateByIdQuery
>;
export type ClientGetCertificateByIdLazyQueryHookResult = ReturnType<
  typeof useClientGetCertificateByIdLazyQuery
>;
export type ClientGetCertificateByIdSuspenseQueryHookResult = ReturnType<
  typeof useClientGetCertificateByIdSuspenseQuery
>;
export type ClientGetCertificateByIdQueryResult = Apollo.QueryResult<
  ClientGetCertificateByIdQuery,
  ClientGetCertificateByIdQueryVariables
>;
export const ClientGetgetAllCertificatesDocument = gql`
  query ClientGetgetAllCertificates(
    $productId: String!
    $page: Int!
    $limit: Int!
    $filter: CertificateFilterInput
    $sortBy: String
    $sortOrder: String
  ) {
    clientGetgetAllCertificates(
      product_id: $productId
      page: $page
      limit: $limit
      filter: $filter
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      certificates {
        id
        User {
          id
          name
          email
        }
        ApplicantInfo {
          id
          company_name
          company_country
          company_address
        }
        ModelInfo {
          id
          model_name
          size
          colour
          rating
        }
        Product {
          id
          name
        }
        status
        expiry_date
        createdAt
        updatedAt
      }
      count
      totalPages
      currentPage
    }
  }
`;

/**
 * __useClientGetgetAllCertificatesQuery__
 *
 * To run a query within a React component, call `useClientGetgetAllCertificatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetgetAllCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetgetAllCertificatesQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useClientGetgetAllCertificatesQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetgetAllCertificatesQuery,
    ClientGetgetAllCertificatesQueryVariables
  > &
    (
      | { variables: ClientGetgetAllCertificatesQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetgetAllCertificatesQuery,
    ClientGetgetAllCertificatesQueryVariables
  >(ClientGetgetAllCertificatesDocument, options);
}
export function useClientGetgetAllCertificatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetgetAllCertificatesQuery,
    ClientGetgetAllCertificatesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetgetAllCertificatesQuery,
    ClientGetgetAllCertificatesQueryVariables
  >(ClientGetgetAllCertificatesDocument, options);
}
export function useClientGetgetAllCertificatesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetgetAllCertificatesQuery,
        ClientGetgetAllCertificatesQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetgetAllCertificatesQuery,
    ClientGetgetAllCertificatesQueryVariables
  >(ClientGetgetAllCertificatesDocument, options);
}
export type ClientGetgetAllCertificatesQueryHookResult = ReturnType<
  typeof useClientGetgetAllCertificatesQuery
>;
export type ClientGetgetAllCertificatesLazyQueryHookResult = ReturnType<
  typeof useClientGetgetAllCertificatesLazyQuery
>;
export type ClientGetgetAllCertificatesSuspenseQueryHookResult = ReturnType<
  typeof useClientGetgetAllCertificatesSuspenseQuery
>;
export type ClientGetgetAllCertificatesQueryResult = Apollo.QueryResult<
  ClientGetgetAllCertificatesQuery,
  ClientGetgetAllCertificatesQueryVariables
>;
export const ClientGetDropDownModelsDocument = gql`
  query ClientGetDropDownModels($productId: String!) {
    clientGetDropDownModels(product_id: $productId) {
      id
      user_id
      product_id
      model_name
      status
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
        energy_efficiency_features
        specify_number
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
        energy_efficiency_features
        specify_number
      }
      ac {
        id
        model_info_id
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
        energy_efficiency_features
        specify_number
      }
      createdAt
    }
  }
`;

/**
 * __useClientGetDropDownModelsQuery__
 *
 * To run a query within a React component, call `useClientGetDropDownModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetDropDownModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetDropDownModelsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useClientGetDropDownModelsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetDropDownModelsQuery,
    ClientGetDropDownModelsQueryVariables
  > &
    (
      | { variables: ClientGetDropDownModelsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetDropDownModelsQuery,
    ClientGetDropDownModelsQueryVariables
  >(ClientGetDropDownModelsDocument, options);
}
export function useClientGetDropDownModelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetDropDownModelsQuery,
    ClientGetDropDownModelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetDropDownModelsQuery,
    ClientGetDropDownModelsQueryVariables
  >(ClientGetDropDownModelsDocument, options);
}
export function useClientGetDropDownModelsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetDropDownModelsQuery,
        ClientGetDropDownModelsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetDropDownModelsQuery,
    ClientGetDropDownModelsQueryVariables
  >(ClientGetDropDownModelsDocument, options);
}
export type ClientGetDropDownModelsQueryHookResult = ReturnType<
  typeof useClientGetDropDownModelsQuery
>;
export type ClientGetDropDownModelsLazyQueryHookResult = ReturnType<
  typeof useClientGetDropDownModelsLazyQuery
>;
export type ClientGetDropDownModelsSuspenseQueryHookResult = ReturnType<
  typeof useClientGetDropDownModelsSuspenseQuery
>;
export type ClientGetDropDownModelsQueryResult = Apollo.QueryResult<
  ClientGetDropDownModelsQuery,
  ClientGetDropDownModelsQueryVariables
>;
export const ClientGetModalPaymentByIdDocument = gql`
  query ClientGetModalPaymentById($paymentId: String!) {
    clientGetPaymentById(payment_id: $paymentId) {
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
`;

/**
 * __useClientGetModalPaymentByIdQuery__
 *
 * To run a query within a React component, call `useClientGetModalPaymentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetModalPaymentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetModalPaymentByIdQuery({
 *   variables: {
 *      paymentId: // value for 'paymentId'
 *   },
 * });
 */
export function useClientGetModalPaymentByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetModalPaymentByIdQuery,
    ClientGetModalPaymentByIdQueryVariables
  > &
    (
      | { variables: ClientGetModalPaymentByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetModalPaymentByIdQuery,
    ClientGetModalPaymentByIdQueryVariables
  >(ClientGetModalPaymentByIdDocument, options);
}
export function useClientGetModalPaymentByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetModalPaymentByIdQuery,
    ClientGetModalPaymentByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetModalPaymentByIdQuery,
    ClientGetModalPaymentByIdQueryVariables
  >(ClientGetModalPaymentByIdDocument, options);
}
export function useClientGetModalPaymentByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetModalPaymentByIdQuery,
        ClientGetModalPaymentByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetModalPaymentByIdQuery,
    ClientGetModalPaymentByIdQueryVariables
  >(ClientGetModalPaymentByIdDocument, options);
}
export type ClientGetModalPaymentByIdQueryHookResult = ReturnType<
  typeof useClientGetModalPaymentByIdQuery
>;
export type ClientGetModalPaymentByIdLazyQueryHookResult = ReturnType<
  typeof useClientGetModalPaymentByIdLazyQuery
>;
export type ClientGetModalPaymentByIdSuspenseQueryHookResult = ReturnType<
  typeof useClientGetModalPaymentByIdSuspenseQuery
>;
export type ClientGetModalPaymentByIdQueryResult = Apollo.QueryResult<
  ClientGetModalPaymentByIdQuery,
  ClientGetModalPaymentByIdQueryVariables
>;
export const ClientGetModelSignatureDocument = gql`
  query ClientGetModelSignature($clientGetModelSignatureId: String!) {
    clientGetModelSignature(id: $clientGetModelSignatureId) {
      id
      title
      product_id
      img_url
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useClientGetModelSignatureQuery__
 *
 * To run a query within a React component, call `useClientGetModelSignatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetModelSignatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetModelSignatureQuery({
 *   variables: {
 *      clientGetModelSignatureId: // value for 'clientGetModelSignatureId'
 *   },
 * });
 */
export function useClientGetModelSignatureQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetModelSignatureQuery,
    ClientGetModelSignatureQueryVariables
  > &
    (
      | { variables: ClientGetModelSignatureQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetModelSignatureQuery,
    ClientGetModelSignatureQueryVariables
  >(ClientGetModelSignatureDocument, options);
}
export function useClientGetModelSignatureLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetModelSignatureQuery,
    ClientGetModelSignatureQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetModelSignatureQuery,
    ClientGetModelSignatureQueryVariables
  >(ClientGetModelSignatureDocument, options);
}
export function useClientGetModelSignatureSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetModelSignatureQuery,
        ClientGetModelSignatureQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetModelSignatureQuery,
    ClientGetModelSignatureQueryVariables
  >(ClientGetModelSignatureDocument, options);
}
export type ClientGetModelSignatureQueryHookResult = ReturnType<
  typeof useClientGetModelSignatureQuery
>;
export type ClientGetModelSignatureLazyQueryHookResult = ReturnType<
  typeof useClientGetModelSignatureLazyQuery
>;
export type ClientGetModelSignatureSuspenseQueryHookResult = ReturnType<
  typeof useClientGetModelSignatureSuspenseQuery
>;
export type ClientGetModelSignatureQueryResult = Apollo.QueryResult<
  ClientGetModelSignatureQuery,
  ClientGetModelSignatureQueryVariables
>;
export const ClientGetPaymentByIdUniqueChangeDocument = gql`
  query ClientGetPaymentByIdUniqueChange($paymentId: String!) {
    clientGetPaymentById(payment_id: $paymentId) {
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
`;

/**
 * __useClientGetPaymentByIdUniqueChangeQuery__
 *
 * To run a query within a React component, call `useClientGetPaymentByIdUniqueChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetPaymentByIdUniqueChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetPaymentByIdUniqueChangeQuery({
 *   variables: {
 *      paymentId: // value for 'paymentId'
 *   },
 * });
 */
export function useClientGetPaymentByIdUniqueChangeQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetPaymentByIdUniqueChangeQuery,
    ClientGetPaymentByIdUniqueChangeQueryVariables
  > &
    (
      | {
          variables: ClientGetPaymentByIdUniqueChangeQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetPaymentByIdUniqueChangeQuery,
    ClientGetPaymentByIdUniqueChangeQueryVariables
  >(ClientGetPaymentByIdUniqueChangeDocument, options);
}
export function useClientGetPaymentByIdUniqueChangeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetPaymentByIdUniqueChangeQuery,
    ClientGetPaymentByIdUniqueChangeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetPaymentByIdUniqueChangeQuery,
    ClientGetPaymentByIdUniqueChangeQueryVariables
  >(ClientGetPaymentByIdUniqueChangeDocument, options);
}
export function useClientGetPaymentByIdUniqueChangeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetPaymentByIdUniqueChangeQuery,
        ClientGetPaymentByIdUniqueChangeQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetPaymentByIdUniqueChangeQuery,
    ClientGetPaymentByIdUniqueChangeQueryVariables
  >(ClientGetPaymentByIdUniqueChangeDocument, options);
}
export type ClientGetPaymentByIdUniqueChangeQueryHookResult = ReturnType<
  typeof useClientGetPaymentByIdUniqueChangeQuery
>;
export type ClientGetPaymentByIdUniqueChangeLazyQueryHookResult = ReturnType<
  typeof useClientGetPaymentByIdUniqueChangeLazyQuery
>;
export type ClientGetPaymentByIdUniqueChangeSuspenseQueryHookResult =
  ReturnType<typeof useClientGetPaymentByIdUniqueChangeSuspenseQuery>;
export type ClientGetPaymentByIdUniqueChangeQueryResult = Apollo.QueryResult<
  ClientGetPaymentByIdUniqueChangeQuery,
  ClientGetPaymentByIdUniqueChangeQueryVariables
>;
export const ClientGetPrintingOrderByIdDocument = gql`
  query ClientGetPrintingOrderById($orderId: String!) {
    clientGetPrintingOrderById(order_id: $orderId) {
      PrintingOrder {
        id
        product_id
        total_price
        buyer_id
        seller_id
        address
        status
        total_quantity
        createdAt
        updatedAt
        Seller {
          name
          address
          mod_of_delivery
        }
        delivery_type
        delivery_company_name
        tracking_id
        StickerOrders {
          id
          printing_id
          model_id
          quantity
          price
          created_at
          updated_at
          ModelInfo {
            id
            user_id
            product_id
            model_name
            estimated_production_per_anum
            status
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
              id
              model_info_id
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
          }
          qr
        }
        Payments {
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
      actionLogs {
        id
        User {
          id
          name
          email
        }
        action_on
        action_type
        action_value
        reason
        action_message
        createdAt
        action_by
        updatedAt
      }
    }
  }
`;

/**
 * __useClientGetPrintingOrderByIdQuery__
 *
 * To run a query within a React component, call `useClientGetPrintingOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetPrintingOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetPrintingOrderByIdQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useClientGetPrintingOrderByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetPrintingOrderByIdQuery,
    ClientGetPrintingOrderByIdQueryVariables
  > &
    (
      | { variables: ClientGetPrintingOrderByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetPrintingOrderByIdQuery,
    ClientGetPrintingOrderByIdQueryVariables
  >(ClientGetPrintingOrderByIdDocument, options);
}
export function useClientGetPrintingOrderByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetPrintingOrderByIdQuery,
    ClientGetPrintingOrderByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetPrintingOrderByIdQuery,
    ClientGetPrintingOrderByIdQueryVariables
  >(ClientGetPrintingOrderByIdDocument, options);
}
export function useClientGetPrintingOrderByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetPrintingOrderByIdQuery,
        ClientGetPrintingOrderByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetPrintingOrderByIdQuery,
    ClientGetPrintingOrderByIdQueryVariables
  >(ClientGetPrintingOrderByIdDocument, options);
}
export type ClientGetPrintingOrderByIdQueryHookResult = ReturnType<
  typeof useClientGetPrintingOrderByIdQuery
>;
export type ClientGetPrintingOrderByIdLazyQueryHookResult = ReturnType<
  typeof useClientGetPrintingOrderByIdLazyQuery
>;
export type ClientGetPrintingOrderByIdSuspenseQueryHookResult = ReturnType<
  typeof useClientGetPrintingOrderByIdSuspenseQuery
>;
export type ClientGetPrintingOrderByIdQueryResult = Apollo.QueryResult<
  ClientGetPrintingOrderByIdQuery,
  ClientGetPrintingOrderByIdQueryVariables
>;
export const ClientGetPrintingOrdersDocument = gql`
  query ClientGetPrintingOrders(
    $productId: String!
    $filter: PrintingOrderFilterInput
    $page: Int
    $limit: Int
    $sortBy: String
    $sortOrder: String
  ) {
    clientGetPrintingOrders(
      product_id: $productId
      filter: $filter
      page: $page
      limit: $limit
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      orders {
        id
        product_id
        total_price
        buyer_id
        seller_id
        address
        status
        total_quantity
        createdAt
        updatedAt
        StickerOrders {
          id
          printing_id
          model_id
          quantity
          price
          created_at
          updated_at
          ModelInfo {
            id
            user_id
            product_id
            model_name
            status
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
              id
              model_info_id
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
          }
          qr
        }
        Payments {
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
      count
      totalPages
      currentPage
    }
  }
`;

/**
 * __useClientGetPrintingOrdersQuery__
 *
 * To run a query within a React component, call `useClientGetPrintingOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetPrintingOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetPrintingOrdersQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useClientGetPrintingOrdersQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetPrintingOrdersQuery,
    ClientGetPrintingOrdersQueryVariables
  > &
    (
      | { variables: ClientGetPrintingOrdersQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetPrintingOrdersQuery,
    ClientGetPrintingOrdersQueryVariables
  >(ClientGetPrintingOrdersDocument, options);
}
export function useClientGetPrintingOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetPrintingOrdersQuery,
    ClientGetPrintingOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetPrintingOrdersQuery,
    ClientGetPrintingOrdersQueryVariables
  >(ClientGetPrintingOrdersDocument, options);
}
export function useClientGetPrintingOrdersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetPrintingOrdersQuery,
        ClientGetPrintingOrdersQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetPrintingOrdersQuery,
    ClientGetPrintingOrdersQueryVariables
  >(ClientGetPrintingOrdersDocument, options);
}
export type ClientGetPrintingOrdersQueryHookResult = ReturnType<
  typeof useClientGetPrintingOrdersQuery
>;
export type ClientGetPrintingOrdersLazyQueryHookResult = ReturnType<
  typeof useClientGetPrintingOrdersLazyQuery
>;
export type ClientGetPrintingOrdersSuspenseQueryHookResult = ReturnType<
  typeof useClientGetPrintingOrdersSuspenseQuery
>;
export type ClientGetPrintingOrdersQueryResult = Apollo.QueryResult<
  ClientGetPrintingOrdersQuery,
  ClientGetPrintingOrdersQueryVariables
>;
export const ClientGetNewsByIdDocument = gql`
  query ClientGetNewsById($clientGetNewsByIdId: String!) {
    clientGetNewsById(id: $clientGetNewsByIdId) {
      id
      title
      content
      type
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useClientGetNewsByIdQuery__
 *
 * To run a query within a React component, call `useClientGetNewsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetNewsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetNewsByIdQuery({
 *   variables: {
 *      clientGetNewsByIdId: // value for 'clientGetNewsByIdId'
 *   },
 * });
 */
export function useClientGetNewsByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetNewsByIdQuery,
    ClientGetNewsByIdQueryVariables
  > &
    (
      | { variables: ClientGetNewsByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetNewsByIdQuery,
    ClientGetNewsByIdQueryVariables
  >(ClientGetNewsByIdDocument, options);
}
export function useClientGetNewsByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetNewsByIdQuery,
    ClientGetNewsByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetNewsByIdQuery,
    ClientGetNewsByIdQueryVariables
  >(ClientGetNewsByIdDocument, options);
}
export function useClientGetNewsByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetNewsByIdQuery,
        ClientGetNewsByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetNewsByIdQuery,
    ClientGetNewsByIdQueryVariables
  >(ClientGetNewsByIdDocument, options);
}
export type ClientGetNewsByIdQueryHookResult = ReturnType<
  typeof useClientGetNewsByIdQuery
>;
export type ClientGetNewsByIdLazyQueryHookResult = ReturnType<
  typeof useClientGetNewsByIdLazyQuery
>;
export type ClientGetNewsByIdSuspenseQueryHookResult = ReturnType<
  typeof useClientGetNewsByIdSuspenseQuery
>;
export type ClientGetNewsByIdQueryResult = Apollo.QueryResult<
  ClientGetNewsByIdQuery,
  ClientGetNewsByIdQueryVariables
>;
export const ClientGetSettingsByKeyDocument = gql`
  query ClientGetSettingsByKey($key: String!) {
    clientGetSettingsByKey(key: $key) {
      id
      key
      value
      createdAt
      updatedAt
      voucher_enabled
      voucher_type
      voucher_validity
      voucher_status
      voucher_imageurl
    }
  }
`;

/**
 * __useClientGetSettingsByKeyQuery__
 *
 * To run a query within a React component, call `useClientGetSettingsByKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetSettingsByKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetSettingsByKeyQuery({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useClientGetSettingsByKeyQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetSettingsByKeyQuery,
    ClientGetSettingsByKeyQueryVariables
  > &
    (
      | { variables: ClientGetSettingsByKeyQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetSettingsByKeyQuery,
    ClientGetSettingsByKeyQueryVariables
  >(ClientGetSettingsByKeyDocument, options);
}
export function useClientGetSettingsByKeyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetSettingsByKeyQuery,
    ClientGetSettingsByKeyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetSettingsByKeyQuery,
    ClientGetSettingsByKeyQueryVariables
  >(ClientGetSettingsByKeyDocument, options);
}
export function useClientGetSettingsByKeySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetSettingsByKeyQuery,
        ClientGetSettingsByKeyQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetSettingsByKeyQuery,
    ClientGetSettingsByKeyQueryVariables
  >(ClientGetSettingsByKeyDocument, options);
}
export type ClientGetSettingsByKeyQueryHookResult = ReturnType<
  typeof useClientGetSettingsByKeyQuery
>;
export type ClientGetSettingsByKeyLazyQueryHookResult = ReturnType<
  typeof useClientGetSettingsByKeyLazyQuery
>;
export type ClientGetSettingsByKeySuspenseQueryHookResult = ReturnType<
  typeof useClientGetSettingsByKeySuspenseQuery
>;
export type ClientGetSettingsByKeyQueryResult = Apollo.QueryResult<
  ClientGetSettingsByKeyQuery,
  ClientGetSettingsByKeyQueryVariables
>;
export const ClientGetStatusDocument = gql`
  query ClientGetStatus($productId: String!) {
    clientGetStatus(product_id: $productId) {
      model {
        id
        model_name
        size
        colour
        rating
        has_ps_mark
        specify_number
        energy_consumption_details
        estimated_annual_production
        company_brochure
        product_brochure
        status
        reason
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
      modelPayment {
        id
        payment_type
        amount
        payment_date
        pay_order_number
        demand_draft
        status
        reason
        createdAt
      }
      productPayment {
        id
        payment_type
        amount
        payment_date
        pay_order_number
        demand_draft
        status
        reason
        createdAt
      }
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
        createdAt
        updatedAt
      }
      userProduct {
        id
        user_id
        product_id
        status
      }
    }
  }
`;

/**
 * __useClientGetStatusQuery__
 *
 * To run a query within a React component, call `useClientGetStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetStatusQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useClientGetStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetStatusQuery,
    ClientGetStatusQueryVariables
  > &
    (
      | { variables: ClientGetStatusQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClientGetStatusQuery, ClientGetStatusQueryVariables>(
    ClientGetStatusDocument,
    options
  );
}
export function useClientGetStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetStatusQuery,
    ClientGetStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetStatusQuery,
    ClientGetStatusQueryVariables
  >(ClientGetStatusDocument, options);
}
export function useClientGetStatusSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetStatusQuery,
        ClientGetStatusQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetStatusQuery,
    ClientGetStatusQueryVariables
  >(ClientGetStatusDocument, options);
}
export type ClientGetStatusQueryHookResult = ReturnType<
  typeof useClientGetStatusQuery
>;
export type ClientGetStatusLazyQueryHookResult = ReturnType<
  typeof useClientGetStatusLazyQuery
>;
export type ClientGetStatusSuspenseQueryHookResult = ReturnType<
  typeof useClientGetStatusSuspenseQuery
>;
export type ClientGetStatusQueryResult = Apollo.QueryResult<
  ClientGetStatusQuery,
  ClientGetStatusQueryVariables
>;
export const ClientGetStepperDocument = gql`
  query ClientGetStepper($productId: String!, $stepperType: String!) {
    clientGetStepper(product_id: $productId, stepper_type: $stepperType) {
      id
      count
      success
      message
      product_id
      stepper_type
      current_step
      steps_info {
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
          refrigerator {
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
            energy_efficiency_features
            specify_number
          }
          motor {
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
            model_name
            rating
            size_capacity
            colors
            ps_mark
            energy_efficiency_features
            specify_number
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
            energy_efficiency_features
            specify_number
          }
          createdAt
        }
      }
    }
  }
`;

/**
 * __useClientGetStepperQuery__
 *
 * To run a query within a React component, call `useClientGetStepperQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetStepperQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetStepperQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      stepperType: // value for 'stepperType'
 *   },
 * });
 */
export function useClientGetStepperQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetStepperQuery,
    ClientGetStepperQueryVariables
  > &
    (
      | { variables: ClientGetStepperQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClientGetStepperQuery, ClientGetStepperQueryVariables>(
    ClientGetStepperDocument,
    options
  );
}
export function useClientGetStepperLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetStepperQuery,
    ClientGetStepperQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetStepperQuery,
    ClientGetStepperQueryVariables
  >(ClientGetStepperDocument, options);
}
export function useClientGetStepperSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetStepperQuery,
        ClientGetStepperQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetStepperQuery,
    ClientGetStepperQueryVariables
  >(ClientGetStepperDocument, options);
}
export type ClientGetStepperQueryHookResult = ReturnType<
  typeof useClientGetStepperQuery
>;
export type ClientGetStepperLazyQueryHookResult = ReturnType<
  typeof useClientGetStepperLazyQuery
>;
export type ClientGetStepperSuspenseQueryHookResult = ReturnType<
  typeof useClientGetStepperSuspenseQuery
>;
export type ClientGetStepperQueryResult = Apollo.QueryResult<
  ClientGetStepperQuery,
  ClientGetStepperQueryVariables
>;
export const ClientGetAllPaymentsDocument = gql`
  query ClientGetAllPayments(
    $productId: String!
    $page: Int!
    $limit: Int!
    $filter: PaymentFilterInput
    $sortBy: String
    $sortOrder: String
  ) {
    clientGetAllPayments(
      product_id: $productId
      page: $page
      limit: $limit
      filter: $filter
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      payments {
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
      count
      totalPages
      currentPage
    }
  }
`;

/**
 * __useClientGetAllPaymentsQuery__
 *
 * To run a query within a React component, call `useClientGetAllPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetAllPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetAllPaymentsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useClientGetAllPaymentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetAllPaymentsQuery,
    ClientGetAllPaymentsQueryVariables
  > &
    (
      | { variables: ClientGetAllPaymentsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetAllPaymentsQuery,
    ClientGetAllPaymentsQueryVariables
  >(ClientGetAllPaymentsDocument, options);
}
export function useClientGetAllPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetAllPaymentsQuery,
    ClientGetAllPaymentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetAllPaymentsQuery,
    ClientGetAllPaymentsQueryVariables
  >(ClientGetAllPaymentsDocument, options);
}
export function useClientGetAllPaymentsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetAllPaymentsQuery,
        ClientGetAllPaymentsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetAllPaymentsQuery,
    ClientGetAllPaymentsQueryVariables
  >(ClientGetAllPaymentsDocument, options);
}
export type ClientGetAllPaymentsQueryHookResult = ReturnType<
  typeof useClientGetAllPaymentsQuery
>;
export type ClientGetAllPaymentsLazyQueryHookResult = ReturnType<
  typeof useClientGetAllPaymentsLazyQuery
>;
export type ClientGetAllPaymentsSuspenseQueryHookResult = ReturnType<
  typeof useClientGetAllPaymentsSuspenseQuery
>;
export type ClientGetAllPaymentsQueryResult = Apollo.QueryResult<
  ClientGetAllPaymentsQuery,
  ClientGetAllPaymentsQueryVariables
>;
export const ClientGetAllLabsDocument = gql`
  query ClientGetAllLabs(
    $country: String
    $labType: String
    $productId: String
    $labOrigin: String
    $labCategory: String
  ) {
    clientGetAllLabs(
      country: $country
      lab_type: $labType
      product_id: $productId
      lab_origin: $labOrigin
      lab_category: $labCategory
    ) {
      id
      name
      phone
      email
      country
      cnic
      father_name
      profile_picture
      role
      status
      sticker_cost
      lab_type
    }
  }
`;

/**
 * __useClientGetAllLabsQuery__
 *
 * To run a query within a React component, call `useClientGetAllLabsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetAllLabsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetAllLabsQuery({
 *   variables: {
 *      country: // value for 'country'
 *      labType: // value for 'labType'
 *      productId: // value for 'productId'
 *      labOrigin: // value for 'labOrigin'
 *      labCategory: // value for 'labCategory'
 *   },
 * });
 */
export function useClientGetAllLabsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClientGetAllLabsQuery,
    ClientGetAllLabsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClientGetAllLabsQuery, ClientGetAllLabsQueryVariables>(
    ClientGetAllLabsDocument,
    options
  );
}
export function useClientGetAllLabsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetAllLabsQuery,
    ClientGetAllLabsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetAllLabsQuery,
    ClientGetAllLabsQueryVariables
  >(ClientGetAllLabsDocument, options);
}
export function useClientGetAllLabsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetAllLabsQuery,
        ClientGetAllLabsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetAllLabsQuery,
    ClientGetAllLabsQueryVariables
  >(ClientGetAllLabsDocument, options);
}
export type ClientGetAllLabsQueryHookResult = ReturnType<
  typeof useClientGetAllLabsQuery
>;
export type ClientGetAllLabsLazyQueryHookResult = ReturnType<
  typeof useClientGetAllLabsLazyQuery
>;
export type ClientGetAllLabsSuspenseQueryHookResult = ReturnType<
  typeof useClientGetAllLabsSuspenseQuery
>;
export type ClientGetAllLabsQueryResult = Apollo.QueryResult<
  ClientGetAllLabsQuery,
  ClientGetAllLabsQueryVariables
>;
export const ClientGetProfileDocument = gql`
  query ClientGetProfile {
    clientGetProfile {
      user {
        id
        name
        phone
        email
        profile_picture
        role
        status
        country
        lab_type
        father_name
        cnic
      }
      applicantInfo {
        id
        user_id
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
        registration_number
        registration_year
        member_of_association
        membership_name
        membership_number
        membership_year
        sales_network_regions
        company_brochure
        product_brochure
        user_agreement
      }
    }
  }
`;

/**
 * __useClientGetProfileQuery__
 *
 * To run a query within a React component, call `useClientGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useClientGetProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClientGetProfileQuery,
    ClientGetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClientGetProfileQuery, ClientGetProfileQueryVariables>(
    ClientGetProfileDocument,
    options
  );
}
export function useClientGetProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetProfileQuery,
    ClientGetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetProfileQuery,
    ClientGetProfileQueryVariables
  >(ClientGetProfileDocument, options);
}
export function useClientGetProfileSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetProfileQuery,
        ClientGetProfileQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetProfileQuery,
    ClientGetProfileQueryVariables
  >(ClientGetProfileDocument, options);
}
export type ClientGetProfileQueryHookResult = ReturnType<
  typeof useClientGetProfileQuery
>;
export type ClientGetProfileLazyQueryHookResult = ReturnType<
  typeof useClientGetProfileLazyQuery
>;
export type ClientGetProfileSuspenseQueryHookResult = ReturnType<
  typeof useClientGetProfileSuspenseQuery
>;
export type ClientGetProfileQueryResult = Apollo.QueryResult<
  ClientGetProfileQuery,
  ClientGetProfileQueryVariables
>;
export const ClientGetDashboardDocument = gql`
  query ClientGetDashboard($productId: String!) {
    clientGetDashboard(product_id: $productId) {
      modelInfoCounts {
        total
        pending
        approved
        rejected
      }
      labReportCounts {
        total
        pending
        approved
        rejected
      }
      recentPayments {
        id
        payment_type
        amount
        payment_date
        pay_order_number
        demand_draft
        status
        reason
        createdAt
      }
      recentModels {
        id
        model_name
        size
        colour
        rating
        has_ps_mark
        specify_number
        energy_consumption_details
        estimated_annual_production
        company_brochure
        product_brochure
        status
        reason
      }
      annualCashInData {
        month
        amount
      }
    }
  }
`;

/**
 * __useClientGetDashboardQuery__
 *
 * To run a query within a React component, call `useClientGetDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetDashboardQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useClientGetDashboardQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetDashboardQuery,
    ClientGetDashboardQueryVariables
  > &
    (
      | { variables: ClientGetDashboardQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetDashboardQuery,
    ClientGetDashboardQueryVariables
  >(ClientGetDashboardDocument, options);
}
export function useClientGetDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetDashboardQuery,
    ClientGetDashboardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetDashboardQuery,
    ClientGetDashboardQueryVariables
  >(ClientGetDashboardDocument, options);
}
export function useClientGetDashboardSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetDashboardQuery,
        ClientGetDashboardQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetDashboardQuery,
    ClientGetDashboardQueryVariables
  >(ClientGetDashboardDocument, options);
}
export type ClientGetDashboardQueryHookResult = ReturnType<
  typeof useClientGetDashboardQuery
>;
export type ClientGetDashboardLazyQueryHookResult = ReturnType<
  typeof useClientGetDashboardLazyQuery
>;
export type ClientGetDashboardSuspenseQueryHookResult = ReturnType<
  typeof useClientGetDashboardSuspenseQuery
>;
export type ClientGetDashboardQueryResult = Apollo.QueryResult<
  ClientGetDashboardQuery,
  ClientGetDashboardQueryVariables
>;
export const ClientGetModelsDocument = gql`
  query ClientGetModels(
    $productId: String!
    $page: Int!
    $limit: Int!
    $filter: ModelInfoFilterInput
    $sortBy: String
    $sortOrder: String
  ) {
    clientGetModels(
      product_id: $productId
      page: $page
      limit: $limit
      filter: $filter
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      models {
        id
        user_id
        product_id
        model_name
        estimated_production_per_anum
        status
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
          energy_efficiency_features
          specify_number
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
          energy_efficiency_features
          specify_number
        }
        ac {
          id
          model_info_id
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
          energy_efficiency_features
          specify_number
        }
        createdAt
      }
      count
      totalPages
      currentPage
    }
  }
`;

/**
 * __useClientGetModelsQuery__
 *
 * To run a query within a React component, call `useClientGetModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetModelsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useClientGetModelsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetModelsQuery,
    ClientGetModelsQueryVariables
  > &
    (
      | { variables: ClientGetModelsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClientGetModelsQuery, ClientGetModelsQueryVariables>(
    ClientGetModelsDocument,
    options
  );
}
export function useClientGetModelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetModelsQuery,
    ClientGetModelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetModelsQuery,
    ClientGetModelsQueryVariables
  >(ClientGetModelsDocument, options);
}
export function useClientGetModelsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetModelsQuery,
        ClientGetModelsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetModelsQuery,
    ClientGetModelsQueryVariables
  >(ClientGetModelsDocument, options);
}
export type ClientGetModelsQueryHookResult = ReturnType<
  typeof useClientGetModelsQuery
>;
export type ClientGetModelsLazyQueryHookResult = ReturnType<
  typeof useClientGetModelsLazyQuery
>;
export type ClientGetModelsSuspenseQueryHookResult = ReturnType<
  typeof useClientGetModelsSuspenseQuery
>;
export type ClientGetModelsQueryResult = Apollo.QueryResult<
  ClientGetModelsQuery,
  ClientGetModelsQueryVariables
>;
export const ClientGetModelByIdDocument = gql`
  query ClientGetModelById($productId: String!, $modelId: String!) {
    clientGetModelById(product_id: $productId, model_id: $modelId) {
      modelInfo {
        id
        user_id
        product_id
        model_name
        estimated_production_per_anum
        status
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
          id
          model_info_id
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
      }
      labReports {
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
      payments {
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
      certificates {
        id
        User {
          id
          name
          email
        }
        ApplicantInfo {
          id
          company_name
          company_country
          company_address
          company_city
        }
        ModelInfo {
          id
          model_name
          size
          colour
          rating
          service_value
          start_rating
        }
        Product {
          id
          name
        }
        status
        expiry_date
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useClientGetModelByIdQuery__
 *
 * To run a query within a React component, call `useClientGetModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetModelByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      modelId: // value for 'modelId'
 *   },
 * });
 */
export function useClientGetModelByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetModelByIdQuery,
    ClientGetModelByIdQueryVariables
  > &
    (
      | { variables: ClientGetModelByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetModelByIdQuery,
    ClientGetModelByIdQueryVariables
  >(ClientGetModelByIdDocument, options);
}
export function useClientGetModelByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetModelByIdQuery,
    ClientGetModelByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetModelByIdQuery,
    ClientGetModelByIdQueryVariables
  >(ClientGetModelByIdDocument, options);
}
export function useClientGetModelByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetModelByIdQuery,
        ClientGetModelByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetModelByIdQuery,
    ClientGetModelByIdQueryVariables
  >(ClientGetModelByIdDocument, options);
}
export type ClientGetModelByIdQueryHookResult = ReturnType<
  typeof useClientGetModelByIdQuery
>;
export type ClientGetModelByIdLazyQueryHookResult = ReturnType<
  typeof useClientGetModelByIdLazyQuery
>;
export type ClientGetModelByIdSuspenseQueryHookResult = ReturnType<
  typeof useClientGetModelByIdSuspenseQuery
>;
export type ClientGetModelByIdQueryResult = Apollo.QueryResult<
  ClientGetModelByIdQuery,
  ClientGetModelByIdQueryVariables
>;
export const ClientGetPaymentByIdDocument = gql`
  query ClientGetPaymentById($paymentId: String!) {
    clientGetPaymentById(payment_id: $paymentId) {
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
      model_info {
        id
        user_id
        product_id
        model_name
        status
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
          energy_efficiency_features
          specify_number
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
          energy_efficiency_features
          specify_number
        }
        ac {
          id
          model_info_id
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
          energy_efficiency_features
          specify_number
        }
        createdAt
      }
    }
  }
`;

/**
 * __useClientGetPaymentByIdQuery__
 *
 * To run a query within a React component, call `useClientGetPaymentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetPaymentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetPaymentByIdQuery({
 *   variables: {
 *      paymentId: // value for 'paymentId'
 *   },
 * });
 */
export function useClientGetPaymentByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ClientGetPaymentByIdQuery,
    ClientGetPaymentByIdQueryVariables
  > &
    (
      | { variables: ClientGetPaymentByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetPaymentByIdQuery,
    ClientGetPaymentByIdQueryVariables
  >(ClientGetPaymentByIdDocument, options);
}
export function useClientGetPaymentByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetPaymentByIdQuery,
    ClientGetPaymentByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetPaymentByIdQuery,
    ClientGetPaymentByIdQueryVariables
  >(ClientGetPaymentByIdDocument, options);
}
export function useClientGetPaymentByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetPaymentByIdQuery,
        ClientGetPaymentByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetPaymentByIdQuery,
    ClientGetPaymentByIdQueryVariables
  >(ClientGetPaymentByIdDocument, options);
}
export type ClientGetPaymentByIdQueryHookResult = ReturnType<
  typeof useClientGetPaymentByIdQuery
>;
export type ClientGetPaymentByIdLazyQueryHookResult = ReturnType<
  typeof useClientGetPaymentByIdLazyQuery
>;
export type ClientGetPaymentByIdSuspenseQueryHookResult = ReturnType<
  typeof useClientGetPaymentByIdSuspenseQuery
>;
export type ClientGetPaymentByIdQueryResult = Apollo.QueryResult<
  ClientGetPaymentByIdQuery,
  ClientGetPaymentByIdQueryVariables
>;
export const ClientGetProductsDocument = gql`
  query ClientGetProducts {
    clientGetProducts {
      id
      name
      description
      image
      steppers {
        id
        user_id
        product_id
        current_step
        stepper_type
        steps_info {
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
            createdAt
            updatedAt
          }
          modelInfo {
            id
            user_id
            product_id
            model_name
            status
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
              energy_efficiency_features
              specify_number
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
              model_name
              rating
              size_capacity
              colors
              ps_mark
              energy_efficiency_features
              specify_number
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
              energy_efficiency_features
              specify_number
            }
            createdAt
          }
        }
      }
      count
    }
  }
`;

/**
 * __useClientGetProductsQuery__
 *
 * To run a query within a React component, call `useClientGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useClientGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClientGetProductsQuery,
    ClientGetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ClientGetProductsQuery,
    ClientGetProductsQueryVariables
  >(ClientGetProductsDocument, options);
}
export function useClientGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClientGetProductsQuery,
    ClientGetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ClientGetProductsQuery,
    ClientGetProductsQueryVariables
  >(ClientGetProductsDocument, options);
}
export function useClientGetProductsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ClientGetProductsQuery,
        ClientGetProductsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ClientGetProductsQuery,
    ClientGetProductsQueryVariables
  >(ClientGetProductsDocument, options);
}
export type ClientGetProductsQueryHookResult = ReturnType<
  typeof useClientGetProductsQuery
>;
export type ClientGetProductsLazyQueryHookResult = ReturnType<
  typeof useClientGetProductsLazyQuery
>;
export type ClientGetProductsSuspenseQueryHookResult = ReturnType<
  typeof useClientGetProductsSuspenseQuery
>;
export type ClientGetProductsQueryResult = Apollo.QueryResult<
  ClientGetProductsQuery,
  ClientGetProductsQueryVariables
>;
export const PublicGetNewsByIdDocument = gql`
  query PublicGetNewsById($publicGetNewsByIdId: String!) {
    publicGetNewsById(id: $publicGetNewsByIdId) {
      id
      title
      content
      type
      createdAt
      updatedAt
    }
  }
`;

/**
 * __usePublicGetNewsByIdQuery__
 *
 * To run a query within a React component, call `usePublicGetNewsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicGetNewsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicGetNewsByIdQuery({
 *   variables: {
 *      publicGetNewsByIdId: // value for 'publicGetNewsByIdId'
 *   },
 * });
 */
export function usePublicGetNewsByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicGetNewsByIdQuery,
    PublicGetNewsByIdQueryVariables
  > &
    (
      | { variables: PublicGetNewsByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicGetNewsByIdQuery,
    PublicGetNewsByIdQueryVariables
  >(PublicGetNewsByIdDocument, options);
}
export function usePublicGetNewsByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicGetNewsByIdQuery,
    PublicGetNewsByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicGetNewsByIdQuery,
    PublicGetNewsByIdQueryVariables
  >(PublicGetNewsByIdDocument, options);
}
export function usePublicGetNewsByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PublicGetNewsByIdQuery,
        PublicGetNewsByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PublicGetNewsByIdQuery,
    PublicGetNewsByIdQueryVariables
  >(PublicGetNewsByIdDocument, options);
}
export type PublicGetNewsByIdQueryHookResult = ReturnType<
  typeof usePublicGetNewsByIdQuery
>;
export type PublicGetNewsByIdLazyQueryHookResult = ReturnType<
  typeof usePublicGetNewsByIdLazyQuery
>;
export type PublicGetNewsByIdSuspenseQueryHookResult = ReturnType<
  typeof usePublicGetNewsByIdSuspenseQuery
>;
export type PublicGetNewsByIdQueryResult = Apollo.QueryResult<
  PublicGetNewsByIdQuery,
  PublicGetNewsByIdQueryVariables
>;
export const PublicGetAllModelsDocument = gql`
  query PublicGetAllModels(
    $productIds: [String]
    $filter: PublicModelInfoFilterInput
    $page: Int
    $limit: Int
    $sortBy: String
    $sortOrder: String
  ) {
    publicGetAllModels(
      product_ids: $productIds
      filter: $filter
      page: $page
      limit: $limit
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      models {
        id
        user_id
        product_id
        model_name
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
          id
          model_info_id
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
      }
      count
      totalPages
      currentPage
    }
  }
`;

/**
 * __usePublicGetAllModelsQuery__
 *
 * To run a query within a React component, call `usePublicGetAllModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicGetAllModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicGetAllModelsQuery({
 *   variables: {
 *      productIds: // value for 'productIds'
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function usePublicGetAllModelsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PublicGetAllModelsQuery,
    PublicGetAllModelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicGetAllModelsQuery,
    PublicGetAllModelsQueryVariables
  >(PublicGetAllModelsDocument, options);
}
export function usePublicGetAllModelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicGetAllModelsQuery,
    PublicGetAllModelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicGetAllModelsQuery,
    PublicGetAllModelsQueryVariables
  >(PublicGetAllModelsDocument, options);
}
export function usePublicGetAllModelsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PublicGetAllModelsQuery,
        PublicGetAllModelsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PublicGetAllModelsQuery,
    PublicGetAllModelsQueryVariables
  >(PublicGetAllModelsDocument, options);
}
export type PublicGetAllModelsQueryHookResult = ReturnType<
  typeof usePublicGetAllModelsQuery
>;
export type PublicGetAllModelsLazyQueryHookResult = ReturnType<
  typeof usePublicGetAllModelsLazyQuery
>;
export type PublicGetAllModelsSuspenseQueryHookResult = ReturnType<
  typeof usePublicGetAllModelsSuspenseQuery
>;
export type PublicGetAllModelsQueryResult = Apollo.QueryResult<
  PublicGetAllModelsQuery,
  PublicGetAllModelsQueryVariables
>;
export const PublicGetAllNewsDocument = gql`
  query PublicGetAllNews(
    $page: Int
    $limit: Int
    $search: String
    $sort: String
    $sortBy: String
    $sortOrder: String
  ) {
    publicGetAllNews(
      page: $page
      limit: $limit
      search: $search
      sort: $sort
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      totalCount
      currentPage
      totalPages
      news {
        id
        title
        content
        type
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __usePublicGetAllNewsQuery__
 *
 * To run a query within a React component, call `usePublicGetAllNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicGetAllNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicGetAllNewsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      sort: // value for 'sort'
 *      sortBy: // value for 'sortBy'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function usePublicGetAllNewsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PublicGetAllNewsQuery,
    PublicGetAllNewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublicGetAllNewsQuery, PublicGetAllNewsQueryVariables>(
    PublicGetAllNewsDocument,
    options
  );
}
export function usePublicGetAllNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicGetAllNewsQuery,
    PublicGetAllNewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicGetAllNewsQuery,
    PublicGetAllNewsQueryVariables
  >(PublicGetAllNewsDocument, options);
}
export function usePublicGetAllNewsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PublicGetAllNewsQuery,
        PublicGetAllNewsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PublicGetAllNewsQuery,
    PublicGetAllNewsQueryVariables
  >(PublicGetAllNewsDocument, options);
}
export type PublicGetAllNewsQueryHookResult = ReturnType<
  typeof usePublicGetAllNewsQuery
>;
export type PublicGetAllNewsLazyQueryHookResult = ReturnType<
  typeof usePublicGetAllNewsLazyQuery
>;
export type PublicGetAllNewsSuspenseQueryHookResult = ReturnType<
  typeof usePublicGetAllNewsSuspenseQuery
>;
export type PublicGetAllNewsQueryResult = Apollo.QueryResult<
  PublicGetAllNewsQuery,
  PublicGetAllNewsQueryVariables
>;
export const PublicGetAllProductsDocument = gql`
  query PublicGetAllProducts {
    publicGetAllProducts {
      products {
        id
        name
        description
        image
      }
    }
  }
`;

/**
 * __usePublicGetAllProductsQuery__
 *
 * To run a query within a React component, call `usePublicGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublicGetAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PublicGetAllProductsQuery,
    PublicGetAllProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicGetAllProductsQuery,
    PublicGetAllProductsQueryVariables
  >(PublicGetAllProductsDocument, options);
}
export function usePublicGetAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicGetAllProductsQuery,
    PublicGetAllProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicGetAllProductsQuery,
    PublicGetAllProductsQueryVariables
  >(PublicGetAllProductsDocument, options);
}
export function usePublicGetAllProductsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PublicGetAllProductsQuery,
        PublicGetAllProductsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PublicGetAllProductsQuery,
    PublicGetAllProductsQueryVariables
  >(PublicGetAllProductsDocument, options);
}
export type PublicGetAllProductsQueryHookResult = ReturnType<
  typeof usePublicGetAllProductsQuery
>;
export type PublicGetAllProductsLazyQueryHookResult = ReturnType<
  typeof usePublicGetAllProductsLazyQuery
>;
export type PublicGetAllProductsSuspenseQueryHookResult = ReturnType<
  typeof usePublicGetAllProductsSuspenseQuery
>;
export type PublicGetAllProductsQueryResult = Apollo.QueryResult<
  PublicGetAllProductsQuery,
  PublicGetAllProductsQueryVariables
>;
export const PublicGetModelByIdDocument = gql`
  query PublicGetModelById($productId: String!, $modelId: String!) {
    publicGetModelById(product_id: $productId, model_id: $modelId) {
      modelInfo {
        id
        user_id
        product_id
        model_name
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
          id
          model_info_id
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
      }
      payments {
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
      labReports {
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
        createdAt
        updatedAt
      }
      certificates {
        id
        User {
          id
          name
          email
        }
        ApplicantInfo {
          id
          company_name
          company_country
          company_address
        }
        ModelInfo {
          id
          model_name
          size
          colour
          rating
        }
        Product {
          id
          name
        }
        status
        expiry_date
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __usePublicGetModelByIdQuery__
 *
 * To run a query within a React component, call `usePublicGetModelByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicGetModelByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicGetModelByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      modelId: // value for 'modelId'
 *   },
 * });
 */
export function usePublicGetModelByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicGetModelByIdQuery,
    PublicGetModelByIdQueryVariables
  > &
    (
      | { variables: PublicGetModelByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicGetModelByIdQuery,
    PublicGetModelByIdQueryVariables
  >(PublicGetModelByIdDocument, options);
}
export function usePublicGetModelByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicGetModelByIdQuery,
    PublicGetModelByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicGetModelByIdQuery,
    PublicGetModelByIdQueryVariables
  >(PublicGetModelByIdDocument, options);
}
export function usePublicGetModelByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PublicGetModelByIdQuery,
        PublicGetModelByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PublicGetModelByIdQuery,
    PublicGetModelByIdQueryVariables
  >(PublicGetModelByIdDocument, options);
}
export type PublicGetModelByIdQueryHookResult = ReturnType<
  typeof usePublicGetModelByIdQuery
>;
export type PublicGetModelByIdLazyQueryHookResult = ReturnType<
  typeof usePublicGetModelByIdLazyQuery
>;
export type PublicGetModelByIdSuspenseQueryHookResult = ReturnType<
  typeof usePublicGetModelByIdSuspenseQuery
>;
export type PublicGetModelByIdQueryResult = Apollo.QueryResult<
  PublicGetModelByIdQuery,
  PublicGetModelByIdQueryVariables
>;
export const PublicVerifyCertificateDocument = gql`
  query PublicVerifyCertificate($publicVerifyCertificateId: String!) {
    PublicVerifyCertificate(id: $publicVerifyCertificateId) {
      status
    }
  }
`;

/**
 * __usePublicVerifyCertificateQuery__
 *
 * To run a query within a React component, call `usePublicVerifyCertificateQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicVerifyCertificateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicVerifyCertificateQuery({
 *   variables: {
 *      publicVerifyCertificateId: // value for 'publicVerifyCertificateId'
 *   },
 * });
 */
export function usePublicVerifyCertificateQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicVerifyCertificateQuery,
    PublicVerifyCertificateQueryVariables
  > &
    (
      | { variables: PublicVerifyCertificateQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicVerifyCertificateQuery,
    PublicVerifyCertificateQueryVariables
  >(PublicVerifyCertificateDocument, options);
}
export function usePublicVerifyCertificateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicVerifyCertificateQuery,
    PublicVerifyCertificateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicVerifyCertificateQuery,
    PublicVerifyCertificateQueryVariables
  >(PublicVerifyCertificateDocument, options);
}
export function usePublicVerifyCertificateSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PublicVerifyCertificateQuery,
        PublicVerifyCertificateQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PublicVerifyCertificateQuery,
    PublicVerifyCertificateQueryVariables
  >(PublicVerifyCertificateDocument, options);
}
export type PublicVerifyCertificateQueryHookResult = ReturnType<
  typeof usePublicVerifyCertificateQuery
>;
export type PublicVerifyCertificateLazyQueryHookResult = ReturnType<
  typeof usePublicVerifyCertificateLazyQuery
>;
export type PublicVerifyCertificateSuspenseQueryHookResult = ReturnType<
  typeof usePublicVerifyCertificateSuspenseQuery
>;
export type PublicVerifyCertificateQueryResult = Apollo.QueryResult<
  PublicVerifyCertificateQuery,
  PublicVerifyCertificateQueryVariables
>;
export const PublicVerifyStickerDocument = gql`
  query PublicVerifySticker($qr: String!) {
    publicVerifySticker(qr: $qr) {
      success
      message
      qr_count
      quantity
    }
  }
`;

/**
 * __usePublicVerifyStickerQuery__
 *
 * To run a query within a React component, call `usePublicVerifyStickerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicVerifyStickerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicVerifyStickerQuery({
 *   variables: {
 *      qr: // value for 'qr'
 *   },
 * });
 */
export function usePublicVerifyStickerQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublicVerifyStickerQuery,
    PublicVerifyStickerQueryVariables
  > &
    (
      | { variables: PublicVerifyStickerQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PublicVerifyStickerQuery,
    PublicVerifyStickerQueryVariables
  >(PublicVerifyStickerDocument, options);
}
export function usePublicVerifyStickerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicVerifyStickerQuery,
    PublicVerifyStickerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PublicVerifyStickerQuery,
    PublicVerifyStickerQueryVariables
  >(PublicVerifyStickerDocument, options);
}
export function usePublicVerifyStickerSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PublicVerifyStickerQuery,
        PublicVerifyStickerQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PublicVerifyStickerQuery,
    PublicVerifyStickerQueryVariables
  >(PublicVerifyStickerDocument, options);
}
export type PublicVerifyStickerQueryHookResult = ReturnType<
  typeof usePublicVerifyStickerQuery
>;
export type PublicVerifyStickerLazyQueryHookResult = ReturnType<
  typeof usePublicVerifyStickerLazyQuery
>;
export type PublicVerifyStickerSuspenseQueryHookResult = ReturnType<
  typeof usePublicVerifyStickerSuspenseQuery
>;
export type PublicVerifyStickerQueryResult = Apollo.QueryResult<
  PublicVerifyStickerQuery,
  PublicVerifyStickerQueryVariables
>;
