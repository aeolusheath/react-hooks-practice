import React, { useRef, createRef } from 'react';


// useRef 和 class 声明组件的 createRef是一样
// 参考文档： https://react.docschina.org/docs/refs-and-the-dom.html
// 作用： 1， 引用dom元素
// 作用： 2， 引用React组件

let count = 0
function E8 (props) {
  let refInput = useRef(null) // 

  return(
    <>
      <input ref= {refInput} />
      <button onClick={
        ()=>{
            refInput.current.value = (++count) + ' items'

        }
      }> click me to get timee </button>
    </>
  )

}

export default E8;