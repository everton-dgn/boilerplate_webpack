import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import Home from '..'

describe('[Page] Home', () => {
  const user = userEvent.setup({ delay: null })

  it('should render a page with a title, two images and a button', () => {
    renderWithProviders(<Home />)

    const logoRsPack = screen.getByRole('img', {
      name: /logo webpack/i
    })
    const logoReact = screen.getByRole('img', {
      name: /logo react/i
    })
    const title = screen.getByRole('heading', {
      name: 'Webpack + React'
    })
    const button = screen.getByRole('button', {
      name: 'COUNT: 0'
    })

    expect(logoRsPack).toBeInTheDocument()
    expect(logoReact).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it('should render count in button when clicked', async () => {
    renderWithProviders(<Home />)

    const countButton0 = screen.getByRole('button', {
      name: 'COUNT: 0'
    })
    await user.click(countButton0)
    const countButton1 = screen.getByRole('button', {
      name: 'COUNT: 1'
    })

    expect(countButton1).toBeInTheDocument()

    await user.click(countButton1)
    const countButton2 = screen.getByRole('button', {
      name: 'COUNT: 2'
    })

    expect(countButton2).toBeInTheDocument()
  })
})
