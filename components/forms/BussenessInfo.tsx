import React from "react";
import { Input } from "../ui/input";

const BussenessInfo = () => {
  return (
    <div className="md:flex gap-2 mt-4">
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <Input type="text"      
           name="a" required placeholder="Finance Category" />
        <Input type="text" name="b" required placeholder="Bussiness Sector" />
        <Input type="date" name="c" required placeholder="Established Year" />
        <Input type="number" name="d" required placeholder="Bussiness License Number" />
        <Input type="number" name="e" required placeholder="Tin Number" />
        <Input type="number" name="f" required placeholder="Vat Registration  Number" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <Input type="text" name="g" required placeholder="Bussiness Form" />
        <Input type="text" name="h" required placeholder="Shareholder of ZamZam Bank" />
        <Input type="text" name="i" required placeholder="SBussiness History" />
        <Input type="text" name="j" required placeholder="Main Products/Services and Marketing Strategy" />
      </div>
    </div>
  );    
};

export default BussenessInfo;
