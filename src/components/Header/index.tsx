import React from "react";
import {bearStore} from '@/store';
import {Button} from 'antd'
const Header:React.FC = ()=>{
  const addBear = bearStore(state => {
    return state.addBear
  })
  const bears = bearStore(state=>{
    return state.bears
  })
  const addBearFunc = ()=>{
    addBear()
  }
  return (<>
    <Button type="primary" onClick={()=>{addBearFunc()}}>{bears}Header</Button>
  </>)
}
export default Header
