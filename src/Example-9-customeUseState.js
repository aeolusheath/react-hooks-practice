import React, { useState, useCallback, useEffect } from 'react';


// 定义： 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook

let temp = null
function useWinsize() {
  // 窗口尺寸state，并且设定默认值
  let [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  // useMemo 缓存状态/属性 
  // useCallback 缓存函数

  // GOOD
  const onRezise = useCallback(()=>{
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])


  // BAD 
  // const onRezise = ()=>{
  //   setSize({
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight
  //   })
  // }

  console.log(temp === onRezise) // 使用useCallback之后除了第一次，都是true，不使用全都是false
  temp = onRezise
  

  useEffect(()=>{
    console.log('abcdefg----->>>>>>>>>')
    window.addEventListener('resize', onRezise)
    return ()=> {
      window.removeEventListener('resize', onRezise)
    }
  }, [onRezise])
  return size
}


function E9() {
  const size = useWinsize()
  return(
    <h4>
      width: {size.width} <br/>
      height: {size.height}  
    </h4>
  )
}

export default E9;
