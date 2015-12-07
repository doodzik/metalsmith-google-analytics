"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var asyncTemplate = exports.asyncTemplate = function asyncTemplate(propertyId) {
  return new Buffer("<!-- Google Analytics -->\n<script>\nwindow.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\nga('create', '" + propertyId + "', 'auto');\nga('send', 'pageview');\n</script>\n<script async src='//www.google-analytics.com/analytics.js'></script>\n<!-- End Google Analytics -->");
};

var syncTemplate = exports.syncTemplate = function syncTemplate(propertyId) {
  return new Buffer("<!-- Google Analytics -->\n<script>\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\nga('create', '" + propertyId + "', 'auto');\nga('send', 'pageview');\n</script>\n<!-- End Google Analytics -->");
};

exports.default = function (id, asyncScript) {
  return asyncScript ? asyncTemplate(id) : syncTemplate(id);
};
//# sourceMappingURL=templates.js.map
