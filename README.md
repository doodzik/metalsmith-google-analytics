# metalsmith-google-analytics

A Metalsmith plugin to add the google analytics code to all html files

## Installation

```
$ npm install --save metalsmith-google-analytics
```

## Example

```javascript
var Metalsmith      = require('metalsmith')
var googleAnalytics = require('metalsmith-google-analytics')

Metalsmith(__dirname)

  // Build your full site here...

  .use(googleAnalytics('API-KEY'))

  .build()
```

### Options

### googleAnalytics(apiKey [,asyncScript])

#### `asyncScript` (optional)

( default: true )

- specify if you want to load the synchronous or asynchronous script
  (doesn't support ie9)
