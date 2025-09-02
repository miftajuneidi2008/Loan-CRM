import React from 'react'
import { Input } from '../ui/input'
import { Errors, Register } from './PersonalInfo'
import { cn } from '@/lib/utils'

const CollateralInformation = ({register, error}:{register:Register, error:Errors}) => {
  return (
   <div>
      <p className="text-xl font-bold py-4">Personal Information</p>
    <div className="md:flex gap-3">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <Input
          {...register("full_name")}
          type="text"
          name="full_name"
          required
          placeholder="Collateral Type"
          className={cn({ "border-red-500": error.full_name })} // Add error class
        />
        <p className="text-red-500">{error.full_name && error.full_name.message}</p>
        <Input
          {...register("marital_status")}
          type="text"
          name="marital_status"
          required
          placeholder="Collateral Value"
           className={cn({ "border-red-500": error.marital_status })}
        />
          <p className="text-red-500">{error.marital_status && error.marital_status.message}</p>
        <Input
           {...register("residence_address_id")}
          type="text"
          name="residence_address_id"
          required
          placeholder="Description"
           className={cn({ "border-red-500": error.residence_address_id })}
        />
          <p className="text-red-500">{error.residence_address_id && error.residence_address_id.message}</p>
        <Input
           {...register("customer_type")}
          type="text"
          name="customer_type"
          required
          placeholder="DD Number/Ownership"
           className={cn({ "border-red-500": error.customer_type })}
        />
          <p className="text-red-500">{error.customer_type && error.customer_type.message}</p>
    
      </div>
      <div className="mt-2 md:mt-0 w-full md:w-1/2 flex flex-col gap-4">
          <Input
           {...register("mobile")}
          type="text"
          name="mobile"
          required
          placeholder="Collateral Location"
           className={cn({ "border-red-500": error.mobile })}
        />
          <p className="text-red-500">{error.mobile && error.mobile.message}</p>
        <Input
           {...register("email")}
          type="email"
          name="email"
          required
            placeholder="Collateral Owner"
           className={cn({ "border-red-500": error.email })}
        />
          <p className="text-red-500">{error.email && error.email.message}</p>
        <Input
           {...register("amount_requested")}
          type="text"
          name="amount_requested"
          required
          placeholder="Collateral Owner Mobile"
           className={cn({ "border-red-500": error.amount_requested })}
        />
          <p className="text-red-500">{error.amount_requested && error.amount_requested.message}</p>
        <Input type="email"  name="photo" required placeholder="Collateral Owner Email" />
          <p className="text-red-500">{error.photo && error.photo.message}</p>
      </div>
    </div>
    </div>
  )
}

export default CollateralInformation
