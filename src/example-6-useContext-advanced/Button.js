import React from 'react';
import { useContext } from 'react'
import { ColorContext } from './Color'
import { UPDATE_COLOR } from './Color'

function Buttons(props) {

    let { dispatch } = useContext(ColorContext)

    return (
      <div>
        <button onClick = { ()=> {dispatch({type: UPDATE_COLOR, color: 'green'})} }> 变绿色</button>
        <button onClick = { ()=> {dispatch({type: UPDATE_COLOR, color: 'red' })} }> 变红色</button>
      </div>
    )

}

export default Buttons