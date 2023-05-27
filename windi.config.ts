import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* 配置项... */
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  }
})
