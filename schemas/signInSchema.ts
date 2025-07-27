import * as z from "zod"

export const signInSchema = z.object({
    identifier:z
        .string()
        .min(1,{message:"Email is required"})
        .email({message:"Please enter a vaild email"}),
    password:z
        .string()
        .min(1,{message:"PAssword is required "})
        .min(8,{message:"Password must be atleast 8 characters"})    
})