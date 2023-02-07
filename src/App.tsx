import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globlo'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Olá</h1>

      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
