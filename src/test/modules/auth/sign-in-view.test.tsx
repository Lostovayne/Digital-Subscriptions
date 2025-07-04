/// <reference types="vitest/globals" />
import { render, screen } from '@/test/utils/test-utils'

describe('SignInView', () => {
  it('renderiza el formulario de inicio de sesión', () => {
    // Este es solo un ejemplo, reemplaza con el componente real cuando esté implementado
    render(<form><input placeholder="Email" /><input placeholder="Contraseña" type="password" /><button>Iniciar sesión</button></form>)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/contraseña/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /iniciar sesión/i })).toBeInTheDocument()
  })
}) 