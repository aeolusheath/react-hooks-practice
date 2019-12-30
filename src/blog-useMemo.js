import React, { useState, useMemo } from 'react';

function Info(props) {
  let [personalInfo , setPersonalInfo] = useState({
    name: 'kevin kang',
    gender: 'male'
  })

  function formatGender(gender) {
    console.log('---调用了翻译性别的方法---')
    return gender === 'male' ? '男' : '女'
  }


  // 不使用useMemo的情况下，修改其他属性，也会重新调用formatGender方法，浪费计算资源
  // 使用useMemo的情况，在gender没有发生变化的情况下，formatGender方法不会调用
  // let gender =  formatGender(personalInfo.gender)
  let gender = useMemo(()=>{
    return formatGender(personalInfo.gender)
  }, 
  [personalInfo.gender])

  return (
    <>
        <div>
          姓名： {personalInfo.name} -- 性别:  { gender } <br/>
          <button onClick={ 
            ()=> { 
              setPersonalInfo({
                ...personalInfo,
                name: 'Will Kang'
              }) 
            }  
          }> 点击修改名字</button>
        </div>
    </>
  )
}

export default Info