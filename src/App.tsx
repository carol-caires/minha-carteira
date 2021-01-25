import React from 'react'
import GlobalStyles from './styles/globalStyles'
import Dashboard from './pages/dashboard'

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <Dashboard></Dashboard>
        </>
    )
}

export default App;