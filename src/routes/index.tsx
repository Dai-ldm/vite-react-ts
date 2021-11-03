import React,{lazy, Suspense} from 'react'
import { HashRouter as Router,Switch, Route,Link } from 'react-router-dom'
import routes from "./config"
import {Button, Spin} from 'antd'
// 页面切换loading TODO:后期根据项目具体修改
function Loading() {
  return (
    <div className='fullpage-loading-box'>
      <Spin size='large' tip="加载中"/>
    </div>
  )
}

const RouteDom:React.FC = ()=>{
  return (<>
    <Button type="primary">1212</Button>
    <Router>
      <Link  to={'/403'}>403</Link>
      <Link  to={'/welcome'}>welcome</Link>
      <Suspense fallback={Loading()}>
        <Switch>
          {routes.map((item, index) => {
            return (<Route key={index+"_"+item.path} exact path={item.path}
            component={item.component}/> )
          })}
        </Switch>
      </Suspense>
    </Router>
    </>)
}
export default RouteDom
