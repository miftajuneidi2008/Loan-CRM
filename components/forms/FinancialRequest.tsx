import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FinancialRequest = () => {
  return (
    <div className="md:flex gap-2 mt-4">
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <Input type="text" name="a" required placeholder="Financial Purpose" />
        <Select>
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
        <Input type="text" name="c" required placeholder="Duration of Finance" />
     
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
      
        <Input
          type="text"
          name="h"
          required
          placeholder="Repayment Source"
        />
        <Input type="text" name="i" required placeholder="Installment Mode" />
      
      </div>
    </div>
  );
};

export default FinancialRequest;
