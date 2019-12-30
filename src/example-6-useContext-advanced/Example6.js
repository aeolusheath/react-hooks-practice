import React from 'react';
import Buttons from './Button';
import ShowArea from './ShowArea';
import Color from './Color'
// 使用createContext useContext useReducer【dispatch , state】 模拟一个简易redux


function Example6 (props) {


  return (
    <>
      <Color>
        <Buttons/>
        <ShowArea/>
      </Color>
    </>
  )
}

export default Example6