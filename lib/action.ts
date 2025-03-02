"use server"

import {prisma} from "../lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { ContactSchema } from "../lib/schema";

export const SaveContact = async (prevState : any, formData : FormData) =>{
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try{
        await prisma.contact.create({
            data:{
                name: validatedFields.data.name,
                phone: validatedFields.data.phone,
            }
        })
    }catch(error){
        return {message: "Failed To Created Data"}
    }
    revalidatePath('/contact')
    redirect('/contact')
}
export const updateContact = async (id : string, prevState : any, formData : FormData) =>{
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try{
        await prisma.contact.update({
            data:{
                name: validatedFields.data.name,
                phone: validatedFields.data.phone,
            },
            where : {id}
        })
    }catch(error){
        return {message: "Failed To Update Data"}
    }
    revalidatePath('/contact')
    redirect('/contact')
}
export const deleteContact = async (id : string,) =>{
   try {
    await prisma.contact.delete({ where: { id } });
    console.log("Contact deleted successfully");
  } catch (error) {
    console.error("Failed to delete contact:", error);
  }
    revalidatePath('/contact')
}
