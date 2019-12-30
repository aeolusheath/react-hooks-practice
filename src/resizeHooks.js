import React, { Component, useState, useCallback, useEffect } from 'react';
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
  console.log('----')




  
  useEffect(()=>{
    console.log('abcdefg----->>>>>>>>>')
    window.addEventListener('resize', onRezise)
    return ()=> {
      window.removeEventListener('resize', onRezise)
    }
  }, [onRezise])
  return size
}

export default useWinsize