import '@testing-library/jest-dom'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const vi = (globalThis as typeof globalThis & { vi: any }).vi
if (typeof vi !== 'undefined') {
  vi.mock('next/navigation', () => ({
    useRouter() {
      return {
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        refresh: vi.fn(),
      }
    },
    useSearchParams() {
      return new URLSearchParams()
    },
    usePathname() {
      return '/'
    },
  }))

  vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      // eslint-disable-next-line @next/next/no-img-element
      return React.createElement('img', props)
    },
  }))

  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
} 