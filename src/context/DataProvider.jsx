import React, { useState } from 'react'
import { createContext } from 'react'

export const ValuesContext = createContext()

export default function DataProvider(props) {

    const [expenses, setExpenses] = useState([

    ]) 

    return (
        <ValuesContext.Provider value={[expenses, setExpenses]}>
            {props.children}
        </ValuesContext.Provider>
    )
}
