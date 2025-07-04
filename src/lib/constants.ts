export const APP_NAME = "Digital Subscription Manager"
export const APP_DESCRIPTION = "Administra todas tus suscripciones digitales en un solo lugar"

export const SUBSCRIPTION_CATEGORIES = [
  { value: "streaming", label: "Streaming", icon: "🎬" },
  { value: "software", label: "Software", icon: "💻" },
  { value: "gaming", label: "Gaming", icon: "🎮" },
  { value: "music", label: "Música", icon: "🎵" },
  { value: "fitness", label: "Fitness", icon: "💪" },
  { value: "education", label: "Educación", icon: "📚" },
  { value: "productivity", label: "Productividad", icon: "⚡" },
  { value: "security", label: "Seguridad", icon: "🔒" },
  { value: "other", label: "Otros", icon: "📦" },
] as const

export const BILLING_CYCLES = [
  { value: "weekly", label: "Semanal", multiplier: 4.33 },
  { value: "monthly", label: "Mensual", multiplier: 1 },
  { value: "quarterly", label: "Trimestral", multiplier: 0.33 },
  { value: "yearly", label: "Anual", multiplier: 0.083 },
] as const

export const SUBSCRIPTION_STATUSES = [
  { value: "active", label: "Activa", color: "green" },
  { value: "paused", label: "Pausada", color: "yellow" },
  { value: "cancelled", label: "Cancelada", color: "red" },
] as const

export const CURRENCIES = [
  { value: "USD", label: "USD - Dólar Estadounidense", symbol: "$" },
  { value: "EUR", label: "EUR - Euro", symbol: "€" },
  { value: "MXN", label: "MXN - Peso Mexicano", symbol: "$" },
  { value: "COP", label: "COP - Peso Colombiano", symbol: "$" },
  { value: "ARS", label: "ARS - Peso Argentino", symbol: "$" },
  { value: "CLP", label: "CLP - Peso Chileno", symbol: "$" },
  { value: "PEN", label: "PEN - Sol Peruano", symbol: "S/" },
  { value: "BRL", label: "BRL - Real Brasileño", symbol: "R$" },
] as const

export const THEMES = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
  { value: "system", label: "Sistema" },
] as const

export const NOTIFICATION_TYPES = {
  payment_reminder: { label: "Recordatorio de Pago", icon: "💰" },
  price_change: { label: "Cambio de Precio", icon: "📈" },
  renewal: { label: "Renovación", icon: "🔄" },
  system: { label: "Sistema", icon: "⚙️" },
} as const

export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  subscriptions: "/subscriptions",
  add: "/subscriptions/add",
  edit: "/subscriptions/[id]/edit",
  settings: "/settings",
  profile: "/profile",
} as const

export const LOCAL_STORAGE_KEYS = {
  theme: "subscription-manager-theme",
  user: "subscription-manager-user",
  subscriptions: "subscription-manager-subscriptions",
} as const 