import React from "react";
import { Input } from "../ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

export type Register = UseFormRegister<{
  full_name: string;
  marital_status: string;
  residence_address_id: string;
  customer_type: string;
  mobile: string;
  email: string;
  amount_requested: number;

  //bussiness Information
  business_sector: string;
  finance_category_id: string;
  business_history: string;
  established_year: Date;
  tin_no: string;
  vat_registration_no: string;
  business_form: string;
  shareholder_of_zamzam_bank: string;
  main_products_services: string;
  business_license_no: string;

  //Financial Request
  finance_purpose: string;
  priority_level: string;
  duration_of_finance: string;
  repayment_source: string;
  installment_mode: string;

  //Collateral Information
  collateral_type: string;
  collateral_value: string;
  collateral_description: string;
  collateral_dd_number: string;
  collateral_location: string;
  collateral_owner: string;
  collateral_owner_mobile: string;
  collateral_owner_email: string;

  // Previous Credit Information
  financing_institution: string;
  finance_type: string;
  amount: number;
  date_granted: string;
  expiry_date: string;
  remark: string;

  //Sister Company Information
  company_name: string;
  your_role: string;
  shares: number;
  share_value: number;

    //Attachement
  attachment_id:string;
    document: File,
    document_filename:string,
    checklist_yes: boolean,
    checklist_no: boolean
}>;

export type Errors = FieldErrors<{
  full_name: string;
  marital_status: string;
  residence_address_id: string;
  customer_type: string;
  mobile: string;
  email: string;
  amount_requested: number;
  photo: File;

  //bussiness Information
  business_sector: string;
  finance_category_id: string;
  business_history: string;
  established_year: Date;
  tin_no: number;
  vat_registration_no: string;
  business_form: string;
  shareholder_of_zamzam_bank: string;
  main_products_services: string;
  business_license_no: string;

  //Financial Request
  finance_purpose: string;
  priority_level: string;
  duration_of_finance: string;
  repayment_source: string;
  installment_mode: string;

  //Collateral Information
  collateral_type: string;
  collateral_value: string;
  collateral_description: string;
  collateral_dd_number: string;
  collateral_location: string;
  collateral_owner: string;
  collateral_owner_mobile: string;
  collateral_owner_email: string;

  // Previous Credit Information
  financing_institution: string;
  finance_type: string;
  amount: number;
  date_granted: string;
  expiry_date: string;
  remark: string;

  //Sister Company Information
  company_name: string;
  your_role: string;
  shares: number;
  share_value: number;

  //Attachement
  attachment_id:string;
    document: File,
    document_filename:string,
    checklist_yes: boolean,
    checklist_no: boolean
}>;

const PersonalInfo = ({
  register,
  error,
}: {
  register: Register;
  error: Errors;
}) => {
  return (
    <div>
      <p className="text-xl font-bold py-4">Personal Information</p>
      <div className="md:flex gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("full_name")}
            type="text"
            name="full_name"
            required
            placeholder="Applicant Name"
            className={cn({ "border-red-500": error.full_name })} // Add error class
          />
          <p className="text-red-500">
            {error.full_name && error.full_name.message}
          </p>
          <Input
            {...register("marital_status")}
            type="text"
            name="marital_status"
            required
            placeholder="Marital Status"
            className={cn({ "border-red-500": error.marital_status })}
          />
          <p className="text-red-500">
            {error.marital_status && error.marital_status.message}
          </p>
          <Input
            {...register("residence_address_id")}
            type="text"
            name="residence_address_id"
            required
            placeholder="Residence Address"
            className={cn({ "border-red-500": error.residence_address_id })}
          />
          <p className="text-red-500">
            {error.residence_address_id && error.residence_address_id.message}
          </p>
          <Input
            {...register("customer_type")}
            type="text"
            name="customer_type"
            required
            placeholder="Customer Type"
            className={cn({ "border-red-500": error.customer_type })}
          />
          <p className="text-red-500">
            {error.customer_type && error.customer_type.message}
          </p>
        </div>
        <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("mobile")}
            type="text"
            name="mobile"
            required
            placeholder="Applicant Phone"
            className={cn({ "border-red-500": error.mobile })}
          />
          <p className="text-red-500">{error.mobile && error.mobile.message}</p>
          <Input
            {...register("email")}
            type="email"
            name="email"
            required
            placeholder="Applicant Email"
            className={cn({ "border-red-500": error.email })}
          />
          <p className="text-red-500">{error.email && error.email.message}</p>
          <Input
            {...register("amount_requested")}
            type="text"
            name="amount_requested"
            required
            placeholder="Amount Requested"
            className={cn({ "border-red-500": error.amount_requested })}
          />
          <p className="text-red-500">
            {error.amount_requested && error.amount_requested.message}
          </p>
          <Input type="file" name="photo" required placeholder="Photo" />
          <p className="text-red-500">{error.photo && error.photo.message}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
