import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext()

export const UPDATE_COLOR = 'UPDATE_COLOR'

const colorReducers = (state , action ) =>{
    switch (action.type) {
        case UPDATE_COLOR:
          return action.color 

        default:
          return state
    }

}

function Color(props) {
  // step 1, Context 共享color数据给子组件

  // step 2, Context 除了共享color,也共享 reducer的dispatch对象给子组件
  const [color , dispatch] = useReducer(colorReducers, 'lightblue')
  

  // 换种思路，其实这个组件可以有自己的state， 使用useState一样可以 将数据和setStateObj传入给子组件



  return (
    // step 1
    <ColorContext.Provider value={{color, dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}

export default Color;