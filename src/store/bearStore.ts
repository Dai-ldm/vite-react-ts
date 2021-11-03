import create from 'zustand'
const getData =  ()=>{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name:"daidai"
      });
    }, 2000);
  });
}
const useStore = create((set:any)=>({
  bears:0,
  data:null,
  // 添加
  addBear:()=>set((state:any)=>{
    return {
      bears: state.bears + 1
    }
  }),
  //异步数据
  asyncGet:async (pond:any)=>{
    const data = await getData()
    set({
      data:data
    })
    return data
  },
  // 设置
  setBear:()=>set((state:any)=>{
    return {
      bears:state.bears
    }
  })
}))
export default useStore
