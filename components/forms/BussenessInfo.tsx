import React from "react";
import { Input } from "../ui/input";
import { Errors, Register } from "./PersonalInfo";
import { cn } from "@/lib/utils";

const BussenessInfo = ({
  register,
  error,
}: {
  register: Register;
  error: Errors;
}) => {
  return (
    <div>
      <p className="text-xl font-bold pb-4 mt-6">Bussiness Information</p>
      <div className="md:flex gap-2 mt-4">
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <Input
            type="text"
            {...register("finance_type")}
            name="finance_type"
            required
            placeholder="Finance Type"
            className={cn({ "border-red-500": error.finance_type })}
          />
          <p className="text-red-500">
            {error.business_sector && error.business_sector.message}
          </p>
          <Input
            {...register("business_sector")}
            type="text"
            name="business_sector"
            required
            placeholder="Bussiness Sector"
          />
          <Input
            {...register("established_year")}
            type="date"
            name="established_year"
            required
            placeholder="Established Year"
          />
          <Input
            {...register("business_license_no")}
            type="number"
            name="business_license_no"
            required
            placeholder="Business License Number"
          />
          <Input
            {...register("tin_no")}
            type="number"
            name="tin_no"
            required
            placeholder="Tin Number"
          />
          <Input
            {...register("vat_registration_no")}
            type="number"
            name="vat_registration_no"
            required
            placeholder="Vat Registration  Number"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <Input
            {...register("business_form")}
            type="text"
            name="business_form"
            required
            placeholder="Bussiness Form"
          />
          <Input
            {...register("shareholder_of_zamzam_bank")}
            type="text"
            name="shareholder_of_zamzam_bank"
            required
            placeholder="Shareholder of ZamZam Bank"
          />
          <Input
            {...register("business_history")}
            type="text"
            name="business_history"
            required
            placeholder="Business History"
          />
          <Input
            {...register("main_products_services")}
            type="text"
            name="main_products_services"
            required
            placeholder="Main Products/Services and Marketing Strategy"
          />
        </div>
      </div>
    </div>
  );
};

export default BussenessInfo;
