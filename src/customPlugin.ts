import unified = require('unified')

interface MyCustomPlugin {}

interface MyCustomPluginOptions {
  custom?: 'strict_type'
}

declare module 'unified' {
  interface Processor {
    use(plugin: MyCustomPlugin, options: MyCustomPluginOptions): Processor
  }
}

const customPlugin: MyCustomPlugin = {}

unified().use(customPlugin, {
  custom: 'strict_type'
})

unified().use(customPlugin, {
  custom: 'wrong_type'
})