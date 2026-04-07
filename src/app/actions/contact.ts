'use server'

import { ContactFormSchema } from '@/lib/schemas'
import type { ContactFormResult } from '@/types'

export async function submitContactForm(data: unknown): Promise<ContactFormResult> {
  // Server-side validation
  const parsed = ContactFormSchema.safeParse(data)
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    parsed.error.issues.forEach((issue) => {
      const key = String(issue.path[0])
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    })
    return { success: false, error: '表单数据验证失败', fieldErrors }
  }

  const { name, email, phone, inquiry } = parsed.data

  try {
    // Only send email if API key is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_xxxxxxxxxxxxxxxxxxxx') {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'noreply@yourdomain.com',
        to: process.env.CONTACT_EMAIL ?? 'admin@yourdomain.com',
        subject: `New Contact: ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : '',
          `\nMessage:\n${inquiry}`,
        ]
          .filter(Boolean)
          .join('\n'),
      })
    } else {
      // Dev mode: log to console
      console.log('[Contact Form]', { name, email, phone, inquiry })
    }

    return {
      success: true,
      message: '感谢您的联系，我们将在 1 个工作日内回复您。',
    }
  } catch (err) {
    console.error('[Contact Form] send error:', err)
    return {
      success: false,
      error: '提交失败，请稍后重试或直接发送邮件联系我们。',
    }
  }
}
