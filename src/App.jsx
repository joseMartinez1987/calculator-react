/* eslint no-eval:0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import Number from './components/Number'
import Function from './components/Functions'
import MathOperations from './components/MathOperation'
import './App.css'



const App = () => {

    const [stack,setStack ] = useState("");

    const items = words(stack,/[^-^+^*^/]+/g)

    const value = items[items.length -1 ] > 0 ? items[items.length -1 ] : '0'

    const clickHadlerFunction = text => {
        console.log(text)
    }

    return (
        <main className="react-calculator">
            <Result value={value}/>
            <Number onClickNumber={number => {
                setStack(`${stack}${number}`);
            }}
                />

            <Function
            onContentClear={ () => {
                console.log('content clear')
                setStack('')
            }}
            onDelete={value => {
                if(stack.length > 0) {
                    const newStack = stack.substring(0,stack.length-1)
                    setStack(newStack )
                }
            }}
            />

           <MathOperations  
           onClickOperation={operation => {
            setStack(`${stack}${operation}`)
        }} 
           onClickEqual={equal => {
            setStack(eval(stack).toString())
        }}
            />
        </main>
    )
}

export default App