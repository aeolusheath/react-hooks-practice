import React from 'react';
import { useReducer } from 'react'

function UseReducerExample() {

  let [count, dispatch] = useReducer(
    /**类似 reducer */
    (state = 0, action)=> {
      if (action.type == 'add') {
        return state + 1
      }
      if (action.type == 'sub') {
        return state - 1
      }
    },
    /**count的初始化值 */
    0 
  )



  return (
      <div>
          <h4> {count} </h4>
          <hr/>
          <button onClick={ ()=> { dispatch({ type: 'add' }) } }> Increment </button>
          <button onClick={ ()=> { dispatch({ type: 'sub' }) } }> Decrement </button>

      </div>
  )


}

export default UseReducerExample