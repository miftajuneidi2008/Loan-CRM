import React from "react";
import { Input } from "../ui/input";
import { Errors, Register } from "./PersonalInfo";
import { cn } from "@/lib/utils";

const SisterCompanies = ({
  register,
  error,
}: {
  register: Register;
  error: Errors;
}) => {
  return (
    <div>
      <p className="text-xl font-bold py-4">Sister Companies</p>
      <div className="md:flex gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("company_name")}
            type="text"
            name="company_name"
            required
            placeholder="Company Name"
            className={cn({ "border-red-500": error.company_name })} // Add error class
          />
          <p className="text-red-500">
            {error.company_name && error.company_name.message}
          </p>
          <Input
            {...register("your_role")}
            type="text"
            name="your_role"
            required
            placeholder="Your Role"
            className={cn({ "border-red-500": error.your_role })}
          />
          <p className="text-red-500">
            {error.your_role && error.your_role.message}
          </p>
          <Input
            {...register("shares")}
            type="number"
            name="shares"
            required
            placeholder="Shares"
            className={cn({ "border-red-500": error.shares })}
          />

          <p className="text-red-500">{error.shares && error.shares.message}</p>
        </div>
        <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("share_value")}
            type="text"
            name="share_value"
            required
            placeholder="Share Value"
            className={cn({ "border-red-500": error.share_value })}
          />
          <p className="text-red-500">
            {error.share_value && error.share_value.message}
          </p>
          <Input
            {...register("remark")}
            type="text"
            name="remark"
            required
            placeholder="Remark"
            className={cn({ "border-red-500": error.remark })}
          />
          <p className="text-red-500">{error.remark && error.remark.message}</p>
        </div>
      </div>
    </div>
  );
};

export default SisterCompanies;
