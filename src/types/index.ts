export interface Subscription {
  id: string
  name: string
  description?: string
  price: number
  currency: string
  billingCycle: "monthly" | "yearly" | "quarterly" | "weekly"
  nextBillingDate: Date
  category: SubscriptionCategory
  status: "active" | "paused" | "cancelled"
  autoRenew: boolean
  website?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export type SubscriptionCategory = 
  | "streaming"
  | "software"
  | "gaming"
  | "music"
  | "fitness"
  | "education"
  | "productivity"
  | "security"
  | "other"

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  preferences: UserPreferences
  createdAt: Date
  updatedAt: Date
}

export interface UserPreferences {
  currency: string
  timezone: string
  notifications: {
    email: boolean
    push: boolean
    reminders: boolean
  }
  theme: "light" | "dark" | "system"
}

export interface Payment {
  id: string
  subscriptionId: string
  amount: number
  currency: string
  date: Date
  status: "completed" | "pending" | "failed"
  method?: string
}

export interface DashboardStats {
  totalSubscriptions: number
  monthlySpending: number
  yearlySpending: number
  upcomingPayments: number
  activeSubscriptions: number
  categories: Record<SubscriptionCategory, number>
}

export interface Notification {
  id: string
  type: "payment_reminder" | "price_change" | "renewal" | "system"
  title: string
  message: string
  read: boolean
  createdAt: Date
  subscriptionId?: string
} 