import { prisma } from "../lib/prisma"

export const getContacts = async () =>{
    try{
        const contacts = await prisma.contact.findMany()
        return contacts
    }catch(error){
        throw new Error("Failed to fetch contact Data ")
    }
}
export const getContactsByID = async (id : string) =>{
    try{
        const contact = await prisma.contact.findUnique({where : { id},})
        return contact
    }catch(error){
        throw new Error("Failed to fetch contact Data ")
    }
}