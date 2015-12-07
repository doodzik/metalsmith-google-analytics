export const splitBuffer = (buffer, index) => {
    const start = buffer.slice(0, index)
    const end   = buffer.slice(index)
    return [ start, end ]
}

export const buffersLength = function (...args) {
  return [].slice.call(arguments).reduce((a, b) => a + b.length , 0)
}

// dosn't work if the firs char of str is multiple times in the query
export const bufferFindStringIndex = (buffer, str) => {
    var query       = new Buffer(str)
    var queryBuffer = new Buffer(query.byteLength).fill(0)
    var count       = 0
    var index       = -1

    const isFirstQueryLetter = c  => c === query[0]
    const shouldBuffer       = c  => !isFirstQueryLetter(c) && !!queryBuffer[0]
    const isQueryBufferFull  = () => count == query.length
    const matchQuery         = () => queryBuffer.equals(query)
    const resetQueryBuffer   = () => {
        count  = 0
        queryBuffer = new Buffer(query.byteLength).fill(0)
    }
    const calcIndex          = i => i - query.length + 1

    for (var [i, c] of buffer.entries()) {
      // buffering
      if(isFirstQueryLetter(c)) {
        queryBuffer.writeUInt32LE(c, 0)
        ++count
      } else if(shouldBuffer(c)) {
        queryBuffer.writeUInt32LE(c, count, true)
        ++count
      }
      if(isQueryBufferFull()) {
        if(matchQuery()) {
          index = calcIndex(i)
          break
        }
        resetQueryBuffer()
      }
    }
    return index
}

export const concatBuffers = function () {
  const args = Array.prototype.slice.call(arguments)
  return Buffer.concat(args, buffersLength(...args))
}
