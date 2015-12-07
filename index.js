import template                                              from './templates'
import { splitBuffer, bufferFindStringIndex, concatBuffers } from './buffer'

const addGoogleAnalytics = (buffer, options) => {
    const googleAnalytics = template(...options)
    const index           = bufferFindStringIndex(buffer, '</head>')
    const [ start, end ]  = splitBuffer(buffer, index)
    return concatBuffers(start, googleAnalytics, end)
}

const main = (propertyId, asyncScript) => {
  return each(function (file, filename) {
    if(!new RegExp("/\.html$").test(filename))
      file.contents = addGoogleAnalytics(file.contents, { propertyId, asyncScript })
  }
}

export default function(propertyId, { asyncScript = true } = {}) {
  if(typeof propertyId === 'undefiend' || propertyId === null)
    throw new Error('google analytics: please provide a propertyId')
  return main(propertyId, asyncScript)
}
