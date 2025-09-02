import React from "react";
import { Input } from "../ui/input";
import { Errors, Register } from "./PersonalInfo";
import { cn } from "@/lib/utils";

const PrevousCredit = ({
  register,
  error,
}: {
  register: Register;
  error: Errors;
}) => {
     // Previous Credit Information
  
 
  
  
  
  
  return (
    <div>
      <p className="text-xl font-bold py-4">Previous Credit Information</p>
      <div className="md:flex gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("financing_institution")}
            type="text"
            name="financing_institution"
            required
            placeholder="Financing Institution"
            className={cn({ "border-red-500": error.financing_institution })} // Add error class
          />
          <p className="text-red-500">
            {error.financing_institution && error.financing_institution.message}
          </p>
          <Input
            {...register("finance_type")}
            type="text"
            name="finance_type"
            required
            placeholder="Financed Type"
            className={cn({ "border-red-500": error.finance_type })}
          />
          <p className="text-red-500">
            {error.finance_type && error.finance_type.message}
          </p>
          <Input
            {...register("amount")}
            type="number"
            name="amount"
            required
            placeholder="Amount"
            className={cn({ "border-red-500": error.amount })}
          />
          <p className="text-red-500">
            {error.amount && error.amount.message}
          </p>
          <Input
            {...register("date_granted")}
            type="text"
            name="date_granted"
            required
            placeholder="Date Granted"
            className={cn({ "border-red-500": error.date_granted })}
          />
          <p className="text-red-500">
            {error.date_granted && error.date_granted.message}
          </p>
        </div>
        <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
          <Input
            {...register("expiry_date")}
            type="text"
            name="expiry_date"
            required
            placeholder="Expired Date"
            className={cn({ "border-red-500": error.expiry_date })}
          />
          <p className="text-red-500">
            {error.expiry_date && error.expiry_date.message}
          </p>
          <Input
          
            type="text"
            name="collateral_owner"
            required
            placeholder="Date Settled"
           
          />
       
          <Input
            {...register("remark")}
            type="text"
            name="remark"
            required
            placeholder="Remark"
            className={cn({ "border-red-500": error.remark })}
          />
          <p className="text-red-500">
            {error.remark && error.remark.message}
          </p>
       
        </div>
      </div>
    </div>
  );
};




export default PrevousCredit