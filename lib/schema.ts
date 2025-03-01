import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(6, "Nama harus minimal 6 karakter"),
    phone: z.string().min(10, "Nomor telepon minimal 10 digit").max(15, "Nomor telepon maksimal 15 digit"),
});
