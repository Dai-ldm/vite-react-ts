import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import reactSvgPlugin from 'vite-plugin-react-svg'
import legacy from '@vitejs/plugin-legacy'
import globalStyleJSON from "./src/global/style.json";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=>{
    return {
      base:"./",
      plugins: [legacy({
        targets:["ie>=11"],
        additionalLegacyPolyfills:["regenerator-runtime/runtime"]
      }),react(),reactSvgPlugin()],
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
        cssCodeSplit:false, //是否禁止呗拆分
        assetsDir:"./static",
        assetsInlineLimit:500,
        chunkSizeWarningLimit:500,
        manifest:true,
        sourcemap:false, //是否开启map，生产环境最好关闭
        emptyOutDir:true, //重新构建的时候清空原产物
        brotliSize:false, //构建后的压缩报错
        minify: 'esbuild',//作用？
        rollupOptions:{
          output:{
            manualChunks(id){
              if (id.includes('node_modules')) {
                const fileName = 'chunk-'+id.toString().split('node_modules/')[1].split('/')[0].toString()
                return fileName
              }
            },
            // entryFileNames: '[name]-[hash].[ext]',
            // chunkFileNames: 'assets/js/[name]-[hash].js',
            // assetFileNames: 'assets/[ext]/[name]-[hash][extname]'
          }
        },
        // 依赖优化项
        optimizeDeps: {
          entries: "",
          include: [],
          exclude: [],
          keepNames: false, //  true 重命名符号避免冲突
        }
      },
      css:{
        modules:{

        },
        //样式预处理
        preprocessorOptions:{
          less:{
            javascriptEnabled: true,
            modifyVars: globalStyleJSON
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
  }
})
