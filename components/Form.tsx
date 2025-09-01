"use client"
import React, { use, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import PersonalInfo from "./forms/PersonalInfo";
import BussenessInfo from "./forms/BussenessInfo";
import FinancialRequest from "./forms/FinancialRequest";
import { formSchema, FormSchema } from "@/validation/FormValidation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const [step,setStep] = useState(1)

  const handleStep = (type:string)=> 
  {
   
    if (type==="prev")
    {
      if (step>1)
      {
        setStep(prev=>prev-1)
      }
    }
    else{
      if (step<7)
      {
        setStep(prev=>prev+1)
      }
    }
  }
    const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { photo: undefined },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

   const onSubmitForm: SubmitHandler<FormSchema> = async (data) => {
    // call the server action
    console.log(data)
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full h-full ">
        <form onSubmit={handleSubmit(onSubmitForm)} className="w-full h-full flex justify-center ">
        <Card className="w-full  mx-auto h-max">
          <CardHeader>
            <CardTitle className="text-xl">New</CardTitle>
            <CardContent>
               <PersonalInfo  register={register} error = {form.formState.errors} />
              <div className="flex gap-4 flex-wrap items-center mt-4">
                <p className={cn(step===1 && "font-bold")}>Bussiness Information</p>
                <p  className={cn(step===2 && "font-bold")}>Financial Request</p>
                <p  className={cn(step===3 && "font-bold")}>Collateral Information</p>
                <p  className={cn(step===4 && "font-bold")}>Previous Credit Facility</p>
                <p  className={cn(step===5 && "font-bold")}>Sister Companies</p>
                <p  className={cn(step===6 && "font-bold")}>File Attachement</p>
                <p  className={cn(step===7 && "font-bold")}>Letter Attachement</p>
              </div>
               {step===1 && <BussenessInfo  />}
               {
                step===2 && <FinancialRequest/>

               }
               {step===3 && <Button type="submit">Submit</Button>}

              <div className="w-full flex justify-between my-2">
              <Button variant="outline" disabled={step===1} className="cursor-pointer" onClick={()=>handleStep("prev")}><ChevronLeft /></Button>
              <Button variant="outline" type="button" disabled={step===7} className="cursor-pointer" onClick={()=>handleStep("next")}><ChevronRight /></Button>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        </form>
      </div>
    </div>
  );
};

export default Form;
