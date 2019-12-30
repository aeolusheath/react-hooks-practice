// 使用useContext 共享数据

import React, { createContext, useContext } from 'react';
import { useState } from 'react';





let CountContext = createContext()




function ChildComponent(props) {
  let count = useContext(CountContext)
  return (
    <div> 
      来自祖先元素的count: {count}
    </div>
  )

}

function Example2(props) {

  let [count , setCount] = useState(0)

 
  return (
    <div>
      <h4> You clicked button { count } times </h4>
      <button onClick={() => { setCount(++count) } }>Click me</button>
      <hr/>

      <CountContext.Provider value = {count}>
        <ChildComponent />
      </CountContext.Provider>

    </div>
  )
}

export default Example2