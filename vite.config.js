const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  define: {
    // Some libraries use the global object, even though it is not supported in ES modules.
    // This is a workaround to make them work.
    global: 'window',
  },
  server: {
    port: 3000,
  },
})
