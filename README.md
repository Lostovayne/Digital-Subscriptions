# 💰 WalletIQ - Digital Subscription Manager

A modern and professional digital subscription management platform built with Next.js 15, TypeScript, and Tailwind CSS. Take control of your digital subscriptions with intelligent insights and smart notifications.

## ✨ Features

- 🎯 **Complete Subscription Management** - Manage all your digital subscriptions in one place
- 📊 **Intelligent Dashboard** - Visualize expenses, upcoming payments, and spending analytics
- 🔔 **Smart Notifications** - Get alerts for upcoming payments and renewals
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Elegant and accessible interface with high-quality components
- 🔒 **Secure Authentication** - Safe login and data protection
- ⚡ **Optimized Performance** - Fast loading and smooth experience
- 📈 **Spending Analytics** - Track your subscription spending with detailed insights
- 🎮 **Multi-Category Support** - Organize subscriptions by streaming, gaming, software, and more
- 🔄 **Auto-Renewal Tracking** - Never miss a renewal or unexpected charge
- 💱 **Multi-Currency Support** - Support for USD, EUR, MXN, COP, ARS, CLP, PEN, BRL
- 🌙 **Dark/Light Theme** - Choose your preferred theme or follow system settings

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router and Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Radix UI
- **Forms:** React Hook Form + Arktype schemas
- **Authentication:** Clerk
- **API Layer:** tRPC
- **Data Fetching:** TanStack Query
- **State Management:** React hooks + Local Storage
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Charts:** Recharts
- **Testing:** Vitest + Testing Library
- **Package Manager:** Bun (recommended) / npm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/walletiq.git
   cd walletiq
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Protected routes
│   ├── dashboard/         # Main dashboard
│   ├── subscriptions/     # Subscription management
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base components (shadcn/ui)
│   ├── forms/            # Form-specific components
│   └── layout/           # Layout components
├── modules/              # Feature modules
│   ├── auth/             # Authentication module
│   │   └── ui/
│   │       ├── components/
│   │       └── views/
│   │   └── dashboard/        # Dashboard module
│   │       └── ui/
│   │           └── components/
├── lib/                  # Utilities and configurations
│   ├── utils.ts          # Utility functions
│   ├── validations.ts    # Arktype validation schemas
│   └── constants.ts      # App constants
├── server/               # tRPC server setup
│   ├── api/             # API routes and procedures
│   └── trpc/            # tRPC configuration
├── hooks/                # Custom React hooks
│   ├── use-mobile.ts     # Mobile detection hook
│   └── useLocalStorage.ts # Local storage hook
├── types/                # TypeScript type definitions
└── test/                 # Test files
    ├── components/       # Component tests
    ├── modules/          # Module tests
    └── utils/            # Test utilities
```

## 🎯 Core Features

### 📋 Subscription Management
- Add new subscriptions with detailed information
- Edit existing subscription details
- Categorize by service type (Streaming, Gaming, Software, etc.)
- Track payment history and billing cycles
- Set auto-renewal preferences
- Real-time data synchronization with TanStack Query

### 📊 Analytics Dashboard
- Monthly and yearly spending overview
- Spending trends and visualizations
- Upcoming payments calendar
- Category-based spending breakdown
- Subscription status overview

### 🔔 Smart Notifications
- Payment reminders before due dates
- Price change alerts
- Auto-renewal notifications
- System updates and announcements

### 👤 User Management
- Secure authentication with Clerk
- Customizable user profiles
- Notification preferences
- Theme preferences (Light/Dark/System)
- Social login integration (Google, GitHub, etc.)

### 💱 Multi-Currency Support
- USD - US Dollar
- EUR - Euro
- MXN - Mexican Peso
- COP - Colombian Peso
- ARS - Argentine Peso
- CLP - Chilean Peso
- PEN - Peruvian Sol
- BRL - Brazilian Real

## 🚀 Available Scripts

```bash
# Development
bun dev              # Development server with Turbopack
bun build            # Production build
bun start            # Production server
bun lint             # Code linting
bun type-check       # TypeScript type checking

# Testing
bun test             # Run tests
bun test:ui          # Run tests with UI
bun test:run         # Run tests once
bun test:coverage    # Run tests with coverage
```

## 🧪 Testing

The project uses Vitest for testing with comprehensive test coverage:

- **Component Testing:** Using React Testing Library
- **Unit Testing:** Isolated function and utility testing
- **Integration Testing:** Module and feature testing
- **API Testing:** tRPC procedure testing
- **Test Coverage:** Detailed coverage reports

## 🎨 UI Components

Built with shadcn/ui and Radix UI primitives:

- **Form Components:** Input, Select, Checkbox, Radio, etc.
- **Layout Components:** Card, Dialog, Sheet, Drawer, etc.
- **Navigation:** Breadcrumb, Navigation Menu, Tabs, etc.
- **Feedback:** Alert, Toast, Progress, Skeleton, etc.
- **Data Display:** Table, Calendar, Chart, etc.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=WalletIQ
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-publishable-key
CLERK_SECRET_KEY=sk_test_your-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database (if using external database)
DATABASE_URL=your-database-url
```

### Tailwind Configuration

The project uses Tailwind CSS v4 with custom configuration for:

- Color schemes (light/dark mode)
- Typography scales
- Spacing and layout
- Component variants

### tRPC Configuration

The project uses tRPC for type-safe API development:

- **Type Safety:** End-to-end type safety between client and server
- **Procedures:** Organized API procedures for subscriptions, users, and analytics
- **Middleware:** Authentication and validation middleware
- **Error Handling:** Centralized error handling and type-safe error responses

### Arktype Schemas

Form validation using Arktype for enhanced type safety:

- **Runtime Validation:** Type-safe form validation at runtime
- **Type Inference:** Automatic TypeScript type inference from schemas
- **Performance:** Fast validation with minimal bundle size
- **Integration:** Seamless integration with React Hook Form

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the project**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write comprehensive tests for new features
- Use conventional commit messages
- Ensure responsive design for all components
- Follow accessibility guidelines
- Use tRPC procedures for all API calls
- Implement Arktype schemas for form validation
- Follow Clerk authentication patterns

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Support

If you have questions or need help:

- 📧 Open an issue on GitHub
- 💬 Contact the development team
- 📖 Check the documentation
- 🐛 Report bugs with detailed information

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔮 Roadmap

- [ ] **Real-time Sync** - Cloud synchronization across devices
- [ ] **Export Features** - CSV/PDF export of subscription data
- [ ] **Budget Alerts** - Spending limit notifications
- [ ] **Family Sharing** - Multi-user subscription management
- [ ] **API Integration** - Connect with banking APIs for automatic tracking
- [ ] **Mobile App** - Native mobile applications
- [ ] **Advanced Analytics** - Machine learning insights and predictions
- [ ] **Webhook Integration** - Real-time updates from subscription providers
- [ ] **Advanced tRPC Features** - Subscription and real-time subscriptions

---

**Built with ❤️ to simplify digital subscription management**

*WalletIQ - Your intelligent subscription companion*
