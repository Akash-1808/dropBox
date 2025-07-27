import * as z from "zod"

export const signUpSchema = z
.object({
    email:z
            .string()
            .email({message:"Please enter a vaild email"})
            .min(1,{message:"Email is required"}),
    
     password:z
     .string()
     .min(1,{message:"Password is required"}) 
     .min(8,{message:"password should be minimum of * characters"}),
     passwordConfirmation:z
     .string()
     .min(1,{message:"Please confirm your password"}),
      })
      .refine((data)=>data.password === data.passwordConfirmation,{
        message:"Password do not match",
        path:["passwordConfiiramtion"]
      })