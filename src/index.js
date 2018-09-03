'use strict'

import App from './app.js'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'


const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp/>
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        renderApp(NextApp)
    })
}