var path = require('path');
var entryPoint = require.resolve('font-awesome');

var faDir = path.dirname(entryPoint);

var sassDir = path.join(faDir, 'scss');
var fontDir = path.join(faDir, 'fonts', '*');

module.exports = {
  scssPath:  sassDir,
  fontPath: fontDir
}
