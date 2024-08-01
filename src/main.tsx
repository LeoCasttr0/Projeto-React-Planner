import React from 'react'
//representação do html, integração com a web
import ReactDOM from 'react-dom/client'
import {App} from './app'
//Tailwind css
import './index.css'


//chamada de uma função
//dentro desta div (root) eu quero renderizar (mostrar em tela) o meu app (função que mostra meu html)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
