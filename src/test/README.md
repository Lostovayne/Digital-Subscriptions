# Configuración de Testing - Vitest + React Testing Library

Configuración inicial lista para crear tests en tu proyecto Next.js 15.

## Scripts Disponibles

```bash
bun test        # Ejecuta tests en modo watch
bun test:ui     # Abre la interfaz gráfica de Vitest
bun test:run    # Ejecuta tests una vez
```

## Estructura de Archivos

```
src/test/
├── setup.ts           # Configuración global (mocks de Next.js)
├── utils/
│   └── test-utils.tsx # Render personalizado con ThemeProvider
└── example.test.tsx   # Ejemplo básico de test
```

## Cómo Crear Tests

1. **Crear archivo de test**: `nombre.test.tsx` o `nombre.spec.tsx`
2. **Usar el render personalizado**: `import { render, screen } from '@/test/utils/test-utils'`
3. **Seguir la estructura de carpetas del proyecto**

## Ejemplo Básico

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/utils/test-utils'

describe('Mi Componente', () => {
  it('debería renderizar correctamente', () => {
    render(<div>Hola Mundo</div>)
    expect(screen.getByText('Hola Mundo')).toBeInTheDocument()
  })
})
```

## Mocks Incluidos

- Next.js Router (`useRouter`, `useSearchParams`, `usePathname`)
- Next.js Image
- ResizeObserver y matchMedia
- ThemeProvider (automático en test-utils)

¡Listo para empezar a crear tests! 