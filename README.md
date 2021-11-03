### 目录结构

├── dist                                // 默认的生产产物输出目录
├── static                              // 静态资源文件
└── src                                 // 源码目录
    ├── assets                          // 公共的文件（如image、css、font等）
    ├── businessCom                     // 业务组件【涉及业务定制化的组件】
    ├── components                      // 项目组件
        ├── Dialog                      // 组件统一开头大写
    ├── global                          // 全局配置，比如（style.json配置的是预全局样式变量）
    ├── layout                          // 全局布局
    ├── routes                          // 路由
    ├── store                           // 状态管理器
    ├── server                          // 接口统一请求模块
    ├── utils                           // 工具库
    ├── pages                           // 页面模块
        ├── welcome                        // 欢迎页面，页面模块开头小写
        ├── ...
    ├── App.tsx                         // react顶层文件
    ├── main.ts                         // 项目入口文件
    ├── typing.d.ts                     // ts类型文件
├── .editorconfig                       // IDE格式规范
├── .eslintignore                       // eslint忽略
├── .eslintrc.js                         // eslint配置文件
├── .gitignore                          // git忽略
├── index.html                          // 项目入口文件
├── package.json                        // package
├── package-lock.json                   // package-lock
├── README.md                           // README
├── tsconfig.json                       // typescript配置文件
└── vite.config.ts                      // vite配置文件
