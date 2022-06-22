const { path } = require('@vuepress/shared-utils');
const axios = require('axios');

const plugin = (options = {}, ctx) => {
  const {
    isDebugger, // Debugger
    isConsole, // 控制台打印
    syncLocal, // 同步到本地
    asyncKey = "github-file",
  } = options;

  return {
    name: '@langnang/vuepress-plugin-todolist',
    additionalPages(app) {
      const { base, ClientComputedMixinm, isProd, markdown, options, pages } = app;
      let addPages = [];
      return addPages;
    },
  };
};

module.exports = plugin;
