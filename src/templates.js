export const asyncTemplate = propertyId => {
return new Buffer(`<!-- Google Analytics -->
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '${propertyId}', 'auto');
ga('send', 'pageview');
</script>
<script async src='//www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->`)
}

export const syncTemplate = propertyId => {
return new Buffer(`<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '${propertyId}', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->`)
}

export default (id, asyncScript) => (asyncScript) ? asyncTemplate(id) : syncTemplate(id)
