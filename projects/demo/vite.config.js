import {
  defineConfig
} from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],

  // 开发服务器配置
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 8080, // 开发服务器端口
    open: true, // 自动打开浏览器
    cors: true, // 允许跨域
    // 接口代理（解决开发环境跨域问题）
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 后端接口地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, '') // 移除路径中的/api前缀
      }
    }
  },

  // 构建配置
  build: {
    outDir: 'dist', // 输出目录
    assetsDir: 'assets', // 静态资源目录
    sourcemap: false, // 生产环境不生成sourcemap
    // 打包优化
    rollupOptions: {
      output: {
        // 分割代码块
        manualChunks: {
          vendor: ['vue', 'echarts'], // 第三方库单独打包
          components: ['vue-echarts'] // 组件库单独打包
        }
      }
    }
  },

  css: {
    // 使用 scale 方案
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/assets/app.variable.less";`,
      },
    },
  },

  // 配置别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  }
})