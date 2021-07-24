const hasAllKeys = (obj, array) => {
  let objKeys = Object.keys(obj);

  for ( let i = 0; i < objKeys.length; i++) {
    if (objKeys[i] !== array[i]) {
      return false
    }
  }
  return true
}

module.exports = {
  hasAllKeys
}