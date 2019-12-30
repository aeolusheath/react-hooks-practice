import React, { useContext } from 'react';
import {ColorContext} from './Color'


function ShowArea(props) {
  
  let { color } = useContext(ColorContext)

  // let color = 'blur'
  return (

    <div style={{color: color}}> 当前显示的颜色是: {color} </div>
  )

}

export default ShowArea