import React from "react";
import { Input } from "../ui/input";
import { Errors, Register } from "./PersonalInfo";
import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Attachement = ({
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
          <Select {...register("attachment_id")} name="attachment_id">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Trade License</SelectItem>
              <SelectItem value="2">Bank Statement</SelectItem>
            </SelectContent>
          </Select>
          <Input
            {...register("document")}
            type="file"
            name="document"
            required
            placeholder="Trade License"
            className={cn({ "border-red-500": error.document })} // Add error class
          />
          <p className="text-red-500">
            {error.document && error.document.message}
          </p>
          <Input
            {...register("document_filename")}
            type="text"
            name="document_filename"
            required
            placeholder="Document Filename"
            className={cn({ "border-red-500": error.document_filename })}
          />
          <p className="text-red-500">
            {error.document_filename && error.document_filename.message}
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
              <Checkbox id="checklist_yes" defaultChecked {...register("checklist_yes")}/>
              <Label htmlFor="checklist_yes">Document is Correct</Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="checklist_no-2" {...register("checklist_no")}/>
              <div className="grid gap-2">
                <Label htmlFor="checklist_no-2">Document is Not Correct</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
          <Select {...register("attachment_id")} name="attachment_id">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Trade License</SelectItem>
              <SelectItem value="2">Bank Statement</SelectItem>
            </SelectContent>
          </Select>
          <Input
            {...register("document")}
            type="file"
            name="document"
            required
            placeholder="Trade License"
            className={cn({ "border-red-500": error.document })} // Add error class
          />
          <p className="text-red-500">
            {error.document && error.document.message}
          </p>
          <Input
            {...register("document_filename")}
            type="text"
            name="document_filename"
            required
            placeholder="Document Filename"
            className={cn({ "border-red-500": error.document_filename })}
          />
          <p className="text-red-500">
            {error.document_filename && error.document_filename.message}
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
              <Checkbox id="checklist_yes" defaultChecked {...register("checklist_yes")}/>
              <Label htmlFor="checklist_yes">Document is Correct</Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="checklist_no-2" {...register("checklist_no")}/>
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

export default Attachement;
