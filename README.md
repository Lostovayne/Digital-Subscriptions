# 📱 Digital Subscription Manager

Un administrador de suscripciones digitales moderno y profesional, construido con Next.js 15, TypeScript y Tailwind CSS.

## ✨ Características

- 🎯 **Gestión Completa de Suscripciones** - Administra todas tus suscripciones digitales en un solo lugar
- 📊 **Dashboard Intuitivo** - Visualiza gastos, próximos pagos y estadísticas
- 🔔 **Notificaciones Inteligentes** - Recibe alertas de pagos próximos y renovaciones
- 📱 **Diseño Responsivo** - Funciona perfectamente en desktop, tablet y móvil
- 🎨 **UI Moderna** - Interfaz elegante y accesible con componentes de alta calidad
- 🔒 **Seguridad** - Autenticación segura y protección de datos
- ⚡ **Rendimiento Optimizado** - Carga rápida y experiencia fluida

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15 con App Router
- **Lenguaje:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Formularios:** React Hook Form + Zod
- **Estado:** Zustand
- **Datos:** TanStack Query
- **Iconos:** Lucide React
- **Notificaciones:** React Hot Toast

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ o Bun
- Git

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/digital-subscription-manager.git
   cd digital-subscription-manager
   ```

2. **Instala las dependencias**
   ```bash
   bun install
   # o
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   bun dev
   # o
   npm run dev
   ```

5. **Abre tu navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── (auth)/            # Rutas protegidas
│   ├── dashboard/         # Panel principal
│   ├── subscriptions/     # Gestión de suscripciones
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── forms/            # Formularios específicos
│   └── layout/           # Componentes de layout
├── lib/                  # Utilidades y configuraciones
│   ├── utils.ts          # Funciones utilitarias
│   ├── validations.ts    # Esquemas de validación
│   └── store.ts          # Estado global
├── hooks/                # Custom hooks
└── types/                # Definiciones de tipos TypeScript
```

## 🎯 Funcionalidades Principales

### 📋 Gestión de Suscripciones
- Agregar nuevas suscripciones
- Editar información existente
- Categorización por tipo de servicio
- Historial de pagos

### 📊 Dashboard Analítico
- Resumen de gastos mensuales
- Gráficos de tendencias
- Próximos pagos
- Alertas de renovación

### 🔔 Sistema de Notificaciones
- Recordatorios de pagos
- Alertas de cambios de precio
- Notificaciones de renovación automática

### 👤 Gestión de Usuarios
- Autenticación segura
- Perfiles personalizables
- Preferencias de notificación

## 🚀 Scripts Disponibles

```bash
# Desarrollo
bun dev          # Servidor de desarrollo
bun build        # Construcción para producción
bun start        # Servidor de producción
bun lint         # Linting del código
bun type-check   # Verificación de tipos TypeScript
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda, no dudes en:

- 📧 Abrir un issue en GitHub
- 💬 Contactar al equipo de desarrollo
- 📖 Revisar la documentación

---

**Desarrollado con ❤️ para simplificar la gestión de suscripciones digitales**
