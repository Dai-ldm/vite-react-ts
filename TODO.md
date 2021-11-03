# 当前遗留问题

1. 在分包后，会产生的空文件,对应文件含有什么作用未知，如无用如何移除？
2. 以下配置未生效
   `
     entryFileNames: '[name]-[hash].[ext]',  
     chunkFileNames: 'assets/js/[name]-[hash].js',
     assetFileNames: 'assets/[ext]/[name]-[hash][extname]'
    `
