export function formatPercent (value) {
  return value + '%'
}

export function addTimestampToUrl (url) {
  if (url.indexOf('?') !== -1) {
    return `${url}&${new Date().getTime()}`
  }
  return `${url}?${new Date().getTime()}`
}
