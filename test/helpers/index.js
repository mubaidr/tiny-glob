const isWin = process.platform === 'win32';

// unixify path for cross-platform testing
function unixify(str) {
  console.log(str);
  str = str.replace(/\/|\\/g, '/');
  console.log(str);
  return str;
}

function toIgnore(str) {
  return !str.includes('.DS_Store');
}

function order(arr) {
  return arr.filter(toIgnore).map(unixify).sort();
}

module.exports = { unixify, order };
