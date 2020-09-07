import styled, { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const Center = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #e5e5e5;
`

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Center>
        <GlobalStyles />

        <Story />
      </Center>
    </ThemeProvider>
  )
]
