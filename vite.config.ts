import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
// 支持svg直接使用
import reactSvgPlugin from 'vite-plugin-react-svg'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),reactSvgPlugin()],
  // 静态资源
  publicDir:"static",
  resolve:{
    alias:[
      //简化路径访问配置
      { find:"@",replacement:resolve(__dirname,"src") },
      { find:"@a",replacement:resolve(__dirname,"src/assets") },
      { find:"@b",replacement:resolve(__dirname,"src/businessCom")},
      { find:"@c",replacement:resolve(__dirname,"src/components") },
      { find:"@g",replacement:resolve(__dirname,"src/global") },
      { find:"@p",replacement:resolve(__dirname,"src/page") },
      { find:"@s",replacement:resolve(__dirname,"src/server") }
    ],
  },
  build:{
    outDir:"build",
    cssCodeSplit:true,
    assetsInlineLimit:20,
    chunkSizeWarningLimit:20,
    rollupOptions:{
      output:{
        manualChunks(id){
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  json:{
    stringify:true //压缩json文件
  },
  css:{
    modules:{

    },
    //样式预处理
    preprocessorOptions:{
      less:{
        javascriptEnabled: true,
        modifyVars: import('./src/global/style.json'),
      }
    }
  },
  server:{
    port:8080,
    proxy:{
      '/api':{
        target:"htt[://baidu.com",
        changeOrigin:true,
      }
    }
  }
})
