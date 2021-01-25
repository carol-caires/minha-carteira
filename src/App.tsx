import React from 'react'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import Layout from './components/layout'

import theme from './styles/themes/dark'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles></GlobalStyles>
            <Layout></Layout>
        </ThemeProvider>
    )
}

export default App;