import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>Hello Custom !</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to google'

// }

const AnotherElement = (
  
  <a href="https://google.com" target='_blank'>VIST GOOGLE</a>
)

const anotherUser = "Sahil"


const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit google',
  anotherUser
)


createRoot(document.getElementById('root')).render(

  reactElement
)
