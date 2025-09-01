import React from "react";
import { Input } from "../ui/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

export type Register=UseFormRegister<{
    full_name: string;
    marital_status: string;
    residence_address_id: string;
    customer_type: string;
    mobile: string;
    email: string;
    amount_requested: number;
    business_sector: string;
}>

export type Errors = FieldErrors<{
    full_name: string;
    marital_status: string;
    residence_address_id: string;
    customer_type: string;
    mobile: string;
    email: string;
    amount_requested: number;
    photo: File;
    business_sector:string
}>

const PersonalInfo = ({register, error}:{register:Register, error:Errors}) => {
  return (
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
        <p className="text-red-500">{error.full_name && error.full_name.message}</p>
        <Input
          {...register("marital_status")}
          type="text"
          name="marital_status"
          required
          placeholder="Marital Status"
           className={cn({ "border-red-500": error.marital_status })}
        />
          <p className="text-red-500">{error.marital_status && error.marital_status.message}</p>
        <Input
           {...register("residence_address_id")}
          type="text"
          name="residence_address_id"
          required
          placeholder="Residence Address"
           className={cn({ "border-red-500": error.residence_address_id })}
        />
          <p className="text-red-500">{error.residence_address_id && error.residence_address_id.message}</p>
        <Input
           {...register("customer_type")}
          type="text"
          name="customer_type"
          required
          placeholder="Customer Type"
           className={cn({ "border-red-500": error.customer_type })}
        />
          <p className="text-red-500">{error.customer_type && error.customer_type.message}</p>
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
      </div>
      <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
        <Input
           {...register("amount_requested")}
          type="text"
          name="amount_requested"
          required
          placeholder="Amount Requested"
           className={cn({ "border-red-500": error.amount_requested })}
        />
          <p className="text-red-500">{error.amount_requested && error.amount_requested.message}</p>
        <Input type="file"  name="photo" required placeholder="Photo" />
          <p className="text-red-500">{error.photo && error.photo.message}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
