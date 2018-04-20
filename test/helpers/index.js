const isWin = process.platform === 'win32';

// unixify path for cross-platform testing
function unixify(arr) {
  return isWin ? arr.map(str => str.replace(/\\/g, '/')) : arr;
}

function toIgnore(str) {
  return !str.includes('.DS_Store');
}

function order(arr) {
  return arr.filter(toIgnore).map(unixify).sort();
}

module.exports = { unixify, order };
