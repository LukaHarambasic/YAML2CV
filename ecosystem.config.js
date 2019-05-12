const { join } = require('path')

module.exports = {
  apps: [{
    name:       "app",
    script:     "./node_modules/nuxt-start/bin/nuxt-start.js",
    exec_mode:  "cluster",
    watch:      false,
    instances:  "max",
    merge_logs: true,
    log_type:   "raw",
    cwd:        "./",
    args:       `-c ${join(__dirname, 'nuxt.config.js')}`
  }]
};
