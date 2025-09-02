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
import CollateralInformation from "./forms/CollateralInformation";
import PrevousCredit from "./forms/PrevousCredit";
import SisterCompanies from "./forms/SisterCompanies";
import Attachement from "./forms/Attachement";

const Form = () => {
  const [step,setStep] = useState(0)

  const handleStep = (type:string)=> 
  {
   
    if (type==="prev")
    {
      if (step>0)
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
    <div className="max-w-7xl mx-auto my-4">
      <div className="w-full h-full ">
        <form onSubmit={handleSubmit(onSubmitForm)} className="w-full h-full flex justify-center ">
        <Card className="w-full  mx-auto h-max">
          <CardHeader>
            <CardTitle className="text-xl">New</CardTitle>
            <CardContent>  
              <div className="flex gap-4 justify-between items-center mt-4">
                 <p className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===0 && "bg-black text-white")}>1</p>
                <p className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===1 && "bg-black text-white")}>2</p>
                <p  className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===2 && "bg-black text-white")}>3</p>
                <p  className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===3 && "bg-black text-white")}>4</p>
                <p  className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===4 && "bg-black text-white")}>5</p>
                <p  className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===5 && "bg-black text-white")}>6</p>
                <p  className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===6 && "bg-black text-white")}>7</p>
                <p  className={cn("h-8 w-8 flex items-center justify-center rounded-full border-2 border-black",step===7 && "bg-black text-white")}>8</p>
              </div>
              {step===0 && <PersonalInfo register={register} error = {form.formState.errors} />}
               {step===1 && <BussenessInfo register={register} error = {form.formState.errors} />}
               {
                step===2 && <FinancialRequest register={register} error = {form.formState.errors}/>

               }
                {step===3 && <CollateralInformation register={register} error = {form.formState.errors} />}
                {step===4 && <PrevousCredit register={register} error = {form.formState.errors} />}
                {step===5 && <SisterCompanies register={register} error = {form.formState.errors} />}
                {step===6 && <Attachement register={register} error = {form.formState.errors} />}

               {step===7 && <Button type="submit">Submit</Button>}

              <div className="w-full flex justify-between my-2">
              <Button variant="outline" disabled={step===0} className="cursor-pointer" onClick={()=>handleStep("prev")}><ChevronLeft /></Button>
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
