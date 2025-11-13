# DataV-Vue3-App 大屏可视化框架模板

## 一、安装pnpm（若未安装pnpm）

1. 通用安装方式（推荐）
```bash
# 用 npm 安装
npm install -g pnpm

# 或用 yarn 安装
yarn global add pnpm
```

2. 独立安装脚本（更纯净，推荐用于生产环境）
```bash
# Windows（PowerShell）
iwr https://get.pnpm.io/install.ps1 -useb | iex

# macOS/Linux（bash/zsh）
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

3. 验证安装
```bash
pnpm -v
```


## 二、使用`@jxh1997/datav-core` 本地包
核心是让 `@jxh1997/datav-core` 成为一个可被识别的包
1. 通用安装方式（推荐）
```plaintext
dataV-Vue3-App/
├── packages/
│   └── core/               # 你的包目录
│       ├── package.json    # 包的配置文件
│       └── src/*
└── projects/               # 工程代码
    └── demo                # demo项目
```

2. 配置 `@jxh1997/datav-core` 包
   
   在 `packages/core/package.json` 中正确配置包信息：

    ```json
    {
        "name": "@jxh1997/datav-core",  // 包名（必须与你要访问的名称一致）
        "version": "1.0.0",
        "main": "src/index.js",         // 包的入口文件路径（重要）
        "private": true                 // 本地包建议设为 private，避免发布
    }
    ```

3. 在项目中访问该包

    通过 `npm link` 或 `yarn link` 本地链接

    适合需要像使用真实 npm 包一样通过包名 `@jxh1997/datav-core` 引用的场景。

   
- 链接包到全局：进入 `/packages/core` 目录，执行链接命令：
    ```bash
    cd packages/core
    npm link   # 或 yarn link
    # 这会在全局 npm 目录中创建一个指向该包的软链接。
    ```

- 在项目中关联该包：
回到项目根目录，将全局链接的包关联到当前项目：
    ```bash
    cd datav-vue3-app  # 项目根目录
    npm link @jxh1997/datav-core   # 或 yarn link @jxh1997/datav-core
    ```

- 在代码中直接通过包名引用：
使用方式见：projects/demo/src/main.less
