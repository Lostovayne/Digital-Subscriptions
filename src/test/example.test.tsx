/// <reference types="vitest/globals" />
import { render, screen } from '@/test/utils/test-utils'

// Ejemplo de test básico
describe('Example Test', () => {
  it('should work correctly', () => {
    expect(true).toBe(true)
  })

  it('should render a simple div', () => {
    render(<div data-testid="test-element">Hello World</div>)
    expect(screen.getByTestId('test-element')).toBeInTheDocument()
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
}) 