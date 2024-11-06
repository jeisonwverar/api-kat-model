import z from 'zod';

export const newGalerySchema = z.object({
  name_galery: z.string({}).trim().min()
});
