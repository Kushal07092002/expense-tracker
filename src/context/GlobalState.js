import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'

//inital state
const initialState = {
    transactions: []
}

//create context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider=({children})=>{
    const [state,dispatch]= useReducer(AppReducer,initialState);
    //Action
    function deleteTransaction(id){
        dispatch(
            {type:'DELETE_TRANSACTION',
            payload:id})
    }
    function addTransaction(transaction){
        dispatch(
            {type:'ADD_TRANSACTION',
            payload:transaction})
    }


    return (
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
}
/**
 * ✅ Step 1: Import what you need
js
Copy
Edit
import React, { createContext, useReducer } from "react";
React is needed to write any React component.

createContext lets you create a Context, which is like a box that can carry data and be shared across components.

useReducer is a React hook for managing more complex state logic — better than useState when your app grows.

✅ Step 2: Create initial state
js
Copy
Edit
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: 100 },
        { id: 2, text: 'Salary', amount: 2000 },
        { id: 3, text: 'Books', amount: 100 },
        { id: 4, text: 'Camera', amount: -130 }
    ]
}
This is your default starting data.

It's just a list of transactions — each with an id, a text (description), and an amount.

Positive amounts = money coming in, negative = money going out.

✅ Step 3: Create a context
js
Copy
Edit
export const GlobalContext = createContext(initialState);
You're creating a context called GlobalContext.

This is the "container" where your global data (state) will live.

The initialState is being used just to set the default structure (optional here — you’ll override this in the provider anyway).

✅ Step 4: Build a Provider component
js
Copy
Edit
export const GlobalProvider = ({ children }) => {
A Provider is a component that gives access to the global state to all components inside it.

{ children } is just a fancy way of saying: “whatever is inside this provider when used”.

✅ Step 5: Hook up the reducer
js
Copy
Edit
const [state, dispatch] = useReducer(AppReducer, initialState);
You’re using useReducer to manage your app's state.

AppReducer is a function you will define separately — it decides how state changes when an action happens.

dispatch is the function you’ll use to send actions like “delete transaction” or “add income”.

✅ Step 6: Return the Provider
js
Copy
Edit
return (
  <GlobalContext.Provider value={{
    transactions: state.transactions,
  }}>
    {children}
  </GlobalContext.Provider>
);
You're wrapping your app (or part of it) with GlobalContext.Provider.

You're saying: "Hey, any component inside here can access the transactions!"

You're passing the transactions from your state into the context's value.

children are the components inside this Provider — they now have access to this context.

✅ Final Result: What this code does
You've created a setup that:

Stores a list of transactions.

Uses Context to share this data globally across your app.

Prepares to allow components to read this data (transactions) and eventually update it using dispatch.


 */