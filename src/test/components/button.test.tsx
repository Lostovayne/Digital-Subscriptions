/// <reference types="vitest/globals" />
import { render, screen } from '@/test/utils/test-utils'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renderiza el texto correctamente', () => {
    render(<Button>Hola</Button>)
    expect(screen.getByRole('button', { name: /hola/i })).toBeInTheDocument()
  })

  it('aplica la clase de variante destructive', () => {
    render(<Button variant="destructive">Eliminar</Button>)
    const btn = screen.getByRole('button', { name: /eliminar/i })
    expect(btn.className).toMatch(/destructive/)
  })
}) 