import React, { useState, useEffect, useMemo } from 'react';

export function formatTime(t) {
	return t.replace("T", " ").replace("Z", "").replace(/\+\d*\:00/, "");
}

function Example7 (){
  let [xiaohong, setXiaohong] = useState('小红待客状态')
  let [zhilinng, setZhiling] = useState('志玲待客状态')
  let [count, setCount] = useState(0)
  return (
    <>
      <button onClick = { ()=> { setXiaohong(formatTime(new Date().toString())  + ' - 小红') } }> 小红 </button>
      <button onClick = { ()=> { setZhiling(formatTime(new Date().toString()) + ' - 志玲') } }> 志玲 </button>
      <button onClick = { ()=> { setCount(++count)} }> 添加Count -- {count} </button> <br/>
      <h4> 当前的count: {count} </h4>


      <ChildrenCom name = {xiaohong}> {zhilinng} </ChildrenCom>

    </>
  )
}


function ChildrenCom ({ name, children }) {

  // componendidMount and componentwillUnmount  只要页面加载，和销毁【需要return一个函数】那么肯定会执行这个方法
  useEffect(()=> {
    console.log('load ChildrenCom component')
  },[])

  // componentdidMount and componentdidUpdate   只要页面render，那么肯定会执行这个方法
  useEffect(()=>{
    console.log('render ChildrenCom component')
  })


  // 问题在这里，我们修改chidren的值的时候，并没有修改name属性，但是还是调用了changeName方法  这是优化的点
  function changeName(name) {
    console.log('小红--->> ------>>>')
    return name + ', 她来了'
  }
  // 优化前
  // const result = changeName(name)

  // 优化后
  const result = useMemo(()=>{changeName(name)}, [name])

  return (
    <>
      <div> {result}  </div>
      <div> {children} </div>
    </>
  )


}

export default Example7

