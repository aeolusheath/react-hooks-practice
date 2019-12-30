

import React, { Component, useState, useEffect, useCallback } from 'react';

// BAD
// function ListItem(props) {
//   let addItem = props.addItem
//   useEffect(()=>{
//     console.log('子组件ListItem 加载')
//   },[])
//   useEffect(()=>{
//     console.log('子组件render')
//   })
//   return (
//     <div onClick={ addItem }> { props.children } </div>
//   )
// }

// GOOD shouldComponentUpdate
const ListItem = React.memo((props)=> {
  let addItem = props.addItem
  useEffect(()=>{
    console.log('子组件ListItem 加载')
  },[])
  useEffect(()=>{
    console.log('子组件render')
  })
  return (
    <div onClick={ addItem }> { props.children } </div>
  )
})

let count = 0
function List(props) {

  let [list, setList] = useState([])

  let [name, setName] = useState('Kevin')
  useEffect(()=>{
    setList([
      '6点起床',
      '7点上班',
      '8点早会'
    ])
  }, [])

  const addI = useCallback(()=>{
    list.push('行程 '+ count)
    setList([...list])
  }, [list])

  const modifyName = () => {
    setName('K3VIN' + (++count))
  }
  
  return (
    <>
      {
        list.map((item, index) => {

            return <ListItem key={index} addItem = { addI }> 
                    {item} 
                </ListItem>

        })
      }
      
      现在的名字： {name}  <button onClick={modifyName}> 点击修改名字 </button>
    </>

  )


}

export default List