import React from "react";
import { Input } from "../ui/input";


const PersonalInfo = () => {
  return (
    <div className="md:flex gap-3">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <Input
          type="text"
    
          name="full_name"
          required
          placeholder="Applicant Name"
        />
        <Input
          type="text"
          name="marital_status"
          required
          placeholder="Marital Status"
        />
        <Input
          type="text"
          name="residence_address_id"
          required
          placeholder="Residence Address"
        />
        <Input
          type="text"
          name="customer_type"
          required
          placeholder="Customer Type"
        />
        <Input
          type="text"
          name="mobile"
          required
          placeholder="Applicant Phone"
        />
        <Input
          type="email"
          name="email"
          required
          placeholder="Applicant Email"
        />
      </div>
      <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
        <Input
          type="text"
          name="amount_requested"
          required
          placeholder="Amount Requested"
        />
        <Input type="file" name="photo" required placeholder="Photo" />
      </div>
    </div>
  );
};

export default PersonalInfo;
