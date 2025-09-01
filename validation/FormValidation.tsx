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
 business_sector:z.string().min(3,"Business Sector should be at least 3 characters long").max(20),
 finance_type: z.string().min(3,"Finance Type should be at least 3 characters long").max(20)

});


export type FormSchema = z.infer<typeof formSchema>;