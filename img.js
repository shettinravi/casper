var casper = require('casper').create();
var src;

function getSrc() {
// Scrape the links from top-right nav of the website
    var src = document.querySelectorAll('img');
    return Array.prototype.map.call(src, function (e) {
        return e.getAttribute('src')
    });
}

// Opens casperjs homepage
casper.start('http://www.2adpro.com/');

casper.then(function () {
    src = this.evaluate(getSrc);
});

casper.run(function () {
    for(var i in src) {
        console.log(src[i]);
    }
});
