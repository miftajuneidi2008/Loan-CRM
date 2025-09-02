import { z } from "zod";


// Define the file size limit and accepted file types as constants
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];

export const formSchema = z.object({
  full_name: z
    .string({ message: "Name is required" })
    .min(3, "Name should be at least 3 characters"),
  marital_status: z
    .string()
    .min(4, "Marital Status should be at least 10 characters long"),

    residence_address_id: z
      .string({ message: "Residence Adress is required" })
      .min(3, "Residence Address should be at least 3 characters long"),
        customer_type: z
      .string({ message: "Customer Type is required" })
      .min(3, "Customer Type should be at least 3 characters long"),
       mobile: z
      .string({ message: "Mobile is required" })
      .min(3, "Mobile should be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    amount_requested: z
      .number({ message: "Amount Requested is required" })
      .min(100, "Amount Requested must be at least 100"),
  photo: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Image size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      `Only the following image types are allowed: ${ACCEPTED_IMAGE_TYPES.join(
        ", "
      )}.`
    )
,

//Bussiness Information Schema
 business_sector:z.string().min(3,"Business Sector should be at least 3 characters long").max(20),
 finance_category_id: z.string().min(3,"Finance Category should be at least 3 characters long").max(20),
 business_history: z.string().min(3,"Business History should be at least 3 characters long").max(20),
 established_year:z.date(), 
 tin_no: z.string().min(3,"Tin Number should be at least 3 characters long").max(20),
 vat_registration_no: z.string().min(3,"Vat Registration Number should be at least 3 characters long").max(20),
 business_form: z.string().min(3,"Business Form should be at least 3 characters long").max(20),
 shareholder_of_zamzam_bank: z.string().min(3,"Shareholder of ZamZam Bank should be at least 3 characters long").max(20),
 main_products_services: z.string().min(3,"Main Products/Services should be at least 3 characters long").max(100),
 business_license_no: z.string().min(3,"Business License Number should be at least 3 characters long").max(20),

//Fiance Purpose Schema
finance_purpose: z.string().min(3,"Finance Purpose should be at least 3 characters long").max(100),
priority_level:z.string(),
duration_of_finance: z.string().min(3,"Duration of Finance should be at least 3 characters long").max(20),
repayment_source: z.string().min(3,"Repayment Source should be at least 3 characters long").max(100),
installment_mode: z.string().min(3,"Installment Mode should be at least 3 characters long").max(100),

//Collateral Schema

collateral_type:z.string().min(3,"Collateral Type should be at least 3 characters long").max(20),
collateral_value:z.number().min(0,"Collateral Value should be a positive number"),
collateral_description:z.string().min(3,"Collateral Description should be at least 3 characters long").max(100),
collateral_dd_number:z.string().min(3,"Collateral DD Number should be at least 3 characters long").max(20),
collateral_location:z.string().min(3,"Collateral Location should be at least 3 characters long").max(100),
collateral_owner:z.string().min(3,"Collateral Owner should be at least 3 characters long").max(50),
collateral_owner_mobile:z.string().min(3,"Collateral Owner Mobile should be at least 3 characters long").max(20),
collateral_owner_email:z.string().email("Invalid email address"),

//Previous Credit Schema
financing_institution:z.string().min(3,"Financing Institution should be at least 3 characters long").max(50),
finance_type: z.string().min(3,"Finance Type should be at least 3 characters long").max(50),
amount: z.number().min(0,"Amount should be a positive number"),
date_granted: z.string().min(3,"Date Granted should be at least 3 characters long").max(50),
expiry_date: z.string().min(3,"Expiry Date should be at least 3 characters long").max(50),
remark: z.string().min(3,"Remark should be at least 3 characters long").max(100),




});


export type FormSchema = z.infer<typeof formSchema>;