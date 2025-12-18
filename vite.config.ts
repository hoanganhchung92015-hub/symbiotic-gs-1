import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Xóa mọi dòng có chứa process.cwd() hoặc path.resolve nếu có
})
