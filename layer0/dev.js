const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: '[Brunch]',
    command: (port) => `npx brunch watch --server --port ${port}`,
    ready: [/output at:/i],
  })
}
