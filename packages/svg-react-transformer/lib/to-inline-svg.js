'use strict';

const SVGO = require('svgo');
const cuid = require('cuid');
const applySvgoPluginDefaults = require('./apply-svgo-plugin-defaults');

// See docs in README.
function toInlineSvg(svg, options) {
  options = options || {};
  if (!options.id) options.id = cuid();
  options.svgoPlugins = applySvgoPluginDefaults(
    options.svgoPlugins,
    options.id
  );

  const svgo = new SVGO({
    plugins: options.svgoPlugins
  });

  return svgo.optimize(svg).then(result => result.data);
}

module.exports = toInlineSvg;
