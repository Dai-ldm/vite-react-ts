import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import 'antd/dist/antd.css'
import RouteDom from '@/routes'

ReactDOM.render(
  <React.StrictMode>
    <RouteDom/>
  </React.StrictMode>,
  document.getElementById('root')
)
