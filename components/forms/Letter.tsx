import React from "react";
import { Input } from "../ui/input";
import { Errors, Register } from "./PersonalInfo";
import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Letter = ({
  register,
  error,
}: {
  register: Register;
  error: Errors;
}) => {
  return (
    <div>
      <p className="text-xl font-bold py-4">Attachement </p>
      <div className="md:flex gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Trade License</SelectItem>
              <SelectItem value="2">Bank Statement</SelectItem>
            </SelectContent>
          </Select>
          <Input
            {...register("company_name")}
            type="file"
            name="document"
            required
            placeholder="Trade License"
            className={cn({ "border-red-500": error.company_name })} // Add error class
          />
          <p className="text-red-500">
            {error.company_name && error.company_name.message}
          </p>
          <Input
            {...register("your_role")}
            type="text"
            name="document_filename"
            required
            placeholder="Document Filename"
            className={cn({ "border-red-500": error.document_filename })}
          />
          <p className="text-red-500">
            {error.your_role && error.your_role.message}
          </p>
          <Input
            {...register("remark")}
            type="number"
            name="remark"
            required
            placeholder="Shares"
            className={cn({ "border-red-500": error.remark })}
          />

          <p className="text-red-500">{error.shares && error.shares.message}</p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="checklist_yes" defaultChecked />
              <Label htmlFor="checklist_yes">Document is Correct</Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="checklist_no-2" />
              <div className="grid gap-2">
                <Label htmlFor="checklist_no-2">Document is Not Correct</Label>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Letter;
