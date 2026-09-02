import z from "zod";

export interface LoginProps {}

export const credentials = z.object({
    username: z.string().nonempty().min(4, "username needs to be at least 4 chars"),
    password: z.string().nonempty().min(8),
})

export type Credentials = z.infer<typeof credentials>;