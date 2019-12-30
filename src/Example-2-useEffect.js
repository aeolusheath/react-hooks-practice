import React, { useEffect } from 'react';
import { useState } from 'react';
// import { BrowserRouter as Router, Route , Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


function Index(props) {
  useEffect(()=>{
    console.log('进入了index页面')
    return ()=>{
      console.log('离开了index页面')
    }
  }, []) // 不加第二个参数， 每一次Re-Render都会调用这个方法 相当于componentWillUdpdate

  // 加一个[] 表示只是在第一加载，以及销毁的时候调用这个方法, 也就是以前的componentDidMount / componentWillUnmount
  return (
    <h3> index </h3>
  )
}

function List(props) {
  useEffect(()=>{
    console.log('进入了list页面')
    return ()=>{
      console.log('离开了list页面')
    }
  })
  return (
    <h3> list </h3>
  )
}



function Example2(props) {

  let [count , setCount] = useState(0)


  // 不加第二个参数，页面只要re-render，都会执行这个函数
  useEffect(()=> {
    console.log(`useEffect ---> You clicked button ${ count } times` )
  })
  return (
    <div>
      <h4> You clicked button { count } times </h4>
      <button onClick={() => { setCount(++count) } }>Click me</button>
      <hr/>


      <Router>
          <ul>
            <li> <Link to="/"> 首页</Link> </li>
            <li> <Link to="/list"> 列表</Link> </li>
          </ul>

          {/** 错误写法： */ }
          {/* <Route path="/" exact component={Index}> </Route>
          <Route path="/list"  component={List}> </Route> */}


          <Route path="/" exact component={Index} />
          <Route path="/list/" component={List} />


      </Router>

    </div>
  )
}

export default Example2