import each                                                  from 'metalsmith-each'
import template                                              from './templates'
import { splitBuffer, bufferFindStringIndex, concatBuffers } from './buffer'

export const addGoogleAnalytics = (buffer, options) => {
    const googleAnalytics = template(options.propertyId, options.asyncScript)
    const index           = bufferFindStringIndex(buffer, '</head>')
    if(index === -1)
      throw Error(`html file dosn't have an head end tag in ${options.filename}`)
    const [ start, end ] = splitBuffer(buffer, index)
    return concatBuffers(start, googleAnalytics, end)
}

const validateArgs = propertyId => {
  if(typeof propertyId === 'undefiend' || propertyId === null)
    throw new Error('google analytics: please provide a propertyId')
}

export const hasHtmlPostfix = filename => new RegExp("\.html$").test(filename)

export default function(propertyId, { asyncScript = true } = {}) {
  validateArgs(propertyId)
  return each(function (file, filename) {
    if(hasHtmlPostfix(filename))
      file.contents = addGoogleAnalytics(file.contents, { propertyId, asyncScript, filename})
  })
}
