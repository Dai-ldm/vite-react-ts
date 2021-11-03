import React from 'react'
import styles from './App.module.less'
// import SVGTest from '@a/logo.svg'
import Header from '@c/Header'
import Test from '@c/Test'
const App:React.FC = ()=>{
  return (<div className={styles.system_wrap}>App
    <Test/>
    <Header/>
    {/* <SVGTest/> */}
  </div>)
}
export default App
