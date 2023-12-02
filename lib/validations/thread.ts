import * as z from 'zod';


export const ThreadValidation = z.object({
    thread: z.string()
})