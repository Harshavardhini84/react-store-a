import { dblClick } from '@testing-library/user-event/dist/click'
import React from 'react'
// for inline styles in react js use style={{backgroundColor:''}}
export default function App1() {
    let a=10
    let b=20
  return (
    <div>
        {a*b}
        <p style={{backgroundColor:"gray" , padding:50, textAlign:'center'}}>HELLO!!!!!</p>
        <p>Welcome</p> 
    </div>

  )
}
