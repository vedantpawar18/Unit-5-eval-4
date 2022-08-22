// NOTE: use this store variable to create a store.
import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";

const customMiddleware = (store) => next => action =>{
    if (typeof action=== "function")
    {
        return action(store.dispatch)
    }
    else if(typeof action === "object")
    {
        return next(action)
    }
}

const store= legacy_createStore(reducer, applyMiddleware(customMiddleware));

export {store}

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
