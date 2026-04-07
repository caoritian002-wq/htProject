import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, '姓名至少 2 个字符')
    .max(50, '姓名不超过 50 个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  phone: z
    .string()
    .regex(/^[\d\s\-+()]{7,20}$/, '请输入有效的电话号码')
    .optional()
    .or(z.literal('')),
  inquiry: z
    .string()
    .min(10, '请简要描述您的需求（至少 10 个字符）')
    .max(1000, '描述不超过 1000 个字符'),
  consent: z.literal(true, '请同意隐私政策'),
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>
