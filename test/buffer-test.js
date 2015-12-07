var assert = require('assert')
import { splitBuffer, buffersLength, bufferFindStringIndex, concatBuffers } from '../src/buffer'

describe('buffer.js', () =>  {
  describe('#splitBuffer()',  () =>  {
    it('splits buffer',  () =>  {
      const [start, end] = splitBuffer(new Buffer('0123456789'), 5)
      assert.equal(start.toString(), '01234')
      assert.equal(end.toString(), '56789')
    })
  })
  describe('#buffersLength()',  () =>  {
    it('returns the combined length',  () =>  {
      const len = buffersLength(new Buffer('12345'), new Buffer('678'), new Buffer('90'))
      assert.equal(len, 10)
    })
  })

  describe('#bufferFindStringIndex()',  () =>  {
    it('finds index',  () =>  {
      const index = bufferFindStringIndex(new Buffer('0123456789</head> yyyyy'), '</head>')
      assert.equal(index, 10)
    })

    it('dosnt find index',  () =>  {
      const index = bufferFindStringIndex(new Buffer('hallo welt'), 'o wl')
      assert.equal(index, -1)
    })
  })

  describe('#concatBuffers()',  () =>  {
    it('it concat buffers',  () =>  {
      const buffConcat = concatBuffers(new Buffer('concated'), new Buffer(' string '), new Buffer('yo'))
      assert.equal(buffConcat.toString(), 'concated string yo')
    })
  })
})
