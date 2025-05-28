export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };
    
    case 'ADD_TRANSACTION':
        return {
        ...state,
        transactions: [action.payload,...state.transactions]
        } 
    
    default:
      return state;
  }
};


/**
🧠 What's a Reducer?
A reducer is just a function that:

Takes in the current state.

Takes in an action (which says what we want to do).

Returns a new state based on the action.

Reducers are used with useReducer (or Redux) to update state in a structured and predictable way.

🧩 Let's explain each part of your code:
🔹 export default (state, action) => { ... }
This is an arrow function being exported as the default function from the file.

It will be imported and used in your GlobalProvider with useReducer.

It takes in two arguments:

state: the current state (e.g., your transactions list).

action: an object that tells the reducer what to do (e.g., add or delete something).

🔹 switch(action.type) { ... }
action.type is the type of action we want to perform.

switch is like an if-else ladder — we check the value of action.type, and handle it.

Right now, there's only one case:

js
Copy
Edit
default:
    return state;
This means: if no matching action type is found, just return the current state unchanged.

📦 So what does this reducer do now?
👉 Nothing yet – it just returns the existing state no matter what.



 */