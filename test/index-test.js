import assert from 'assert'
import { asyncTemplate }                      from '../src/templates'
import { hasHtmlPostfix, addGoogleAnalytics } from '../src/index'

describe('index.js', () =>  {
  describe('#hasHtmlPostfix()',  () =>  {
    it('matches',  () =>  {
      assert(hasHtmlPostfix('touhastu,.html'))
    })
    it('doesnt match',  () =>  {
      assert(!hasHtmlPostfix('touhastu,.htl'))
    })
  })

  describe('#addGoogleAnalytics()',  () =>  {
    it('is correct',  () =>  {
      const surrounding = x => {
        x = x || ''
        return `xxxxxxxxxxxxxxxx${x}</head>yyyyyyyyyyyyy yyyyy`
      }
      const buffer = new Buffer(surrounding(), 'utf-8')
      const result = addGoogleAnalytics(buffer, { propertyId: 'x', asyncScript: true, filename: 'baset.html' })

      assert.equal(result.toString(), surrounding(asyncTemplate('x')))
    })
  })
})

