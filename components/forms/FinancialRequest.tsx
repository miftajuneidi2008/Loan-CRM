import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Errors, Register } from "./PersonalInfo";

const FinancialRequest = ({register, error}:{register:Register, error:Errors}) => {
  return (
    <div className="md:flex gap-2 mt-4">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <Input  {...register("finance_purpose")} type="text" name="finance_purpose" required placeholder="Financial Purpose" />
        <Select {...register("priority_level")} name="">
          <SelectTrigger className="w-[80%]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
          </SelectContent>
        </Select>
        <Input
        {...register("duration_of_finance")}
          type="text"
          name="duration_of_finance"
          required
          placeholder="Duration of Finance"
        />
        <Input {...register("repayment_source")} type="text" name="repayment_source" required placeholder="Repayment Source" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <Input {...register("installment_mode")} type="text" name="installment_mode" required placeholder="Installment Mode" />
      </div>
    </div>
  );
};

export default FinancialRequest;
