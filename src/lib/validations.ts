import { z } from "zod"

export const subscriptionSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").max(100, "El nombre es muy largo"),
  description: z.string().optional(),
  price: z.number().positive("El precio debe ser positivo"),
  currency: z.string().min(3, "Moneda inválida").max(3, "Moneda inválida"),
  billingCycle: z.enum(["monthly", "yearly", "quarterly", "weekly"], {
    required_error: "Selecciona un ciclo de facturación",
  }),
  nextBillingDate: z.date({
    required_error: "La fecha del próximo pago es requerida",
  }),
  category: z.enum([
    "streaming",
    "software", 
    "gaming",
    "music",
    "fitness",
    "education",
    "productivity",
    "security",
    "other"
  ], {
    required_error: "Selecciona una categoría",
  }),
  status: z.enum(["active", "paused", "cancelled"], {
    required_error: "Selecciona un estado",
  }),
  autoRenew: z.boolean(),
  website: z.string().url("URL inválida").optional().or(z.literal("")),
  notes: z.string().optional(),
})

export const userPreferencesSchema = z.object({
  currency: z.string().min(3, "Moneda inválida").max(3, "Moneda inválida"),
  timezone: z.string().min(1, "Zona horaria requerida"),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
    reminders: z.boolean(),
  }),
  theme: z.enum(["light", "dark", "system"]),
})

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
})

export const registerSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
})

export type SubscriptionFormData = z.infer<typeof subscriptionSchema>
export type UserPreferencesFormData = z.infer<typeof userPreferencesSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema> 