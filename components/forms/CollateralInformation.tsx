import React from "react";
import { Input } from "../ui/input";
import { Errors, Register } from "./PersonalInfo";
import { cn } from "@/lib/utils";

const CollateralInformation = ({
  register,
  error,
}: {
  register: Register;
  error: Errors;
}) => {
  return (
    <div>
      <p className="text-xl font-bold py-4">Collateral Information</p>
      <div className="md:flex gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("collateral_type")}
            type="text"
            name="collateral_type"
            required
            placeholder="Collateral Type"
            className={cn({ "border-red-500": error.collateral_type })} // Add error class
          />
          <p className="text-red-500">
            {error.collateral_type && error.collateral_type.message}
          </p>
          <Input
            {...register("collateral_value")}
            type="text"
            name="collateral_value"
            required
            placeholder="Collateral Value"
            className={cn({ "border-red-500": error.collateral_value })}
          />
          <p className="text-red-500">
            {error.collateral_value && error.collateral_value.message}
          </p>
          <Input
            {...register("collateral_description")}
            type="text"
            name="collateral_description"
            required
            placeholder="Collateral Description"
            className={cn({ "border-red-500": error.collateral_description })}
          />
          <p className="text-red-500">
            {error.collateral_description &&
              error.collateral_description.message}
          </p>
          <Input
            {...register("collateral_dd_number")}
            type="text"
            name="collateral_dd_number"
            required
            placeholder="DD Number/Ownership"
            className={cn({ "border-red-500": error.collateral_dd_number })}
          />
          <p className="text-red-500">
            {error.collateral_dd_number && error.collateral_dd_number.message}
          </p>
        </div>
        <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("collateral_location")}
            type="text"
            name="collateral_location"
            required
            placeholder="Collateral Location"
            className={cn({ "border-red-500": error.collateral_location })}
          />
          <p className="text-red-500">
            {error.collateral_location && error.collateral_location.message}
          </p>
          <Input
            {...register("collateral_owner")}
            type="text"
            name="collateral_owner"
            required
            placeholder="Collateral Owner"
            className={cn({ "border-red-500": error.collateral_owner })}
          />
          <p className="text-red-500">
            {error.collateral_owner && error.collateral_owner.message}
          </p>
          <Input
            {...register("collateral_owner_mobile")}
            type="text"
            name="collateral_owner_mobile"
            required
            placeholder="Collateral Owner Mobile"
            className={cn({ "border-red-500": error.collateral_owner_mobile })}
          />
          <p className="text-red-500">
            {error.collateral_owner_mobile &&
              error.collateral_owner_mobile.message}
          </p>
          <Input
            {...register("collateral_owner_email")}
            type="email"
            name="collateral_owner_email"
            required
            placeholder="Collateral Owner Email"
            className={cn({ "border-red-500": error.collateral_owner_email })}
          />
          <p className="text-red-500">
            {error.collateral_owner_email &&
              error.collateral_owner_email.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollateralInformation;
