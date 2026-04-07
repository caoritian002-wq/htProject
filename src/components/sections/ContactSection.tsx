'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { ContactFormSchema, type ContactFormValues } from '@/lib/schemas'
import { submitContactForm } from '@/app/actions/contact'
import CTAButton from '@/components/ui/CTAButton'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface ContactSectionProps {
  recipientHint?: string
}

export default function ContactSection({
  recipientHint = '我们的团队将在 1 个工作日内回复您',
}: ContactSectionProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  })

  const onSubmit = async (values: ContactFormValues) => {
    setFormState('submitting')
    const result = await submitContactForm(values)
    if (result.success) {
      setFormState('success')
      setServerMessage(result.message)
    } else {
      setFormState('error')
      setServerMessage(result.error)
      if (result.fieldErrors) {
        Object.entries(result.fieldErrors).forEach(([field, msg]) => {
          setError(field as keyof ContactFormValues, { message: msg ?? '' })
        })
      }
    }
  }

  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-white/40 font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Start Your Health Journey</h2>
          <p className="mt-4 text-white/55">{recipientHint}</p>
        </AnimatedSection>

        {formState === 'success' ? (
          <AnimatedSection className="text-center py-12">
            <CheckCircle className="mx-auto w-16 h-16 text-green-400 mb-4" />
            <p className="text-lg font-medium">{serverMessage}</p>
          </AnimatedSection>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            {formState === 'error' && serverMessage && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {serverMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="姓名 *" error={errors.name?.message}>
                <input
                  {...register('name')}
                  placeholder="您的姓名"
                  className={inputClass(!!errors.name)}
                  autoComplete="name"
                />
              </Field>
              <Field label="邮箱 *" error={errors.email?.message}>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass(!!errors.email)}
                  autoComplete="email"
                />
              </Field>
            </div>

            <Field label="电话（可选）" error={errors.phone?.message}>
              <input
                {...register('phone')}
                type="tel"
                placeholder="+1 (000) 000-0000"
                className={inputClass(!!errors.phone)}
                autoComplete="tel"
              />
            </Field>

            <Field label="联系意向 *" error={errors.inquiry?.message}>
              <textarea
                {...register('inquiry')}
                rows={4}
                placeholder="请简要描述您的健康需求或问题..."
                className={cn(inputClass(!!errors.inquiry), 'resize-none')}
              />
            </Field>

            <Field label="" error={errors.consent?.message}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  {...register('consent')}
                  type="checkbox"
                  value="true"
                  className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-white"
                />
                <span className="text-sm text-white/55">
                  我已阅读并同意{' '}
                  <a href="#" className="text-white/80 underline underline-offset-2">
                    隐私政策
                  </a>
                </span>
              </label>
            </Field>

            <div className="pt-2">
              <CTAButton
                type="submit"
                variant="primary"
                loading={formState === 'submitting'}
                className="w-full sm:w-auto"
              >
                发送消息
              </CTAButton>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors',
    'focus:border-white/40 focus:bg-white/8',
    hasError ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-white/70">{label}</label>}
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
