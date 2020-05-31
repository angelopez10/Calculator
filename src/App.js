import React from 'react'
import GlobalStyle from './components/styles/GlobalStyle'
import Calculator from './components/Calculator'

export default function App() {
    return (
        <div>
            <GlobalStyle/>
            <Calculator initialValue='123'/>
        </div>
    )
}
