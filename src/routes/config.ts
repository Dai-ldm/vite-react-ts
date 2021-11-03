import React from 'react'
export interface IRoute{
    name?:string;
    component?:any,
    comPath?:string;
    path?:string;
    redirect?:string;
    access?:any;
    exact?:boolean;
    meta?:{
        name?:string;
        icon?:string;
    },
    children?:IRoute[]
}
export const LazyCom = (reactNode:Promise<{ default:React.FC<any>; }>,isLazy:boolean=true)=>{
    if(isLazy){
        return React.lazy(()=>reactNode)
    }else{
        return reactNode
    }
}
const router:IRoute[] = [
  {//欢迎
      name:"欢迎",
      exact:true,
      component:LazyCom(import('@/pages/welcome')),
      path:"/"
  },
  {//欢迎
      name:"欢迎",
      exact:true,
      component:LazyCom(import('@/pages/welcome')),
      path:"/welcome"
  },
  {//无权限
      name:"NOtAccess",
      component:React.lazy(()=>import('@/pages/403')),
      path:"/403"
  },
  {//未发现
      access:"NotFound",
      component:React.lazy(()=>import('@/pages/404')),
  },
]
export default router
