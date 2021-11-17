export function objToQueryStr(obj) {
  if (typeof obj != 'object') return
  let queryStr = ''
  for(let key in obj) {
    if(obj[key] && obj[key] != 0)
    queryStr += key + '=' + obj[key] + '&'
  }
  return queryStr.slice(0, -1)
}