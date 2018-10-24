/* site.js */
//Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');
//Build text change
$(document).ready(function changeBuildText() {
    var buildWords = ['apps', 'front-ends', 'back-ends', 'websites', 'services', 'bots', 'friendships', 'fun stuff!']
    var letterCount = 1;
    var x = 1;
    var visible = true;
    var waiting = false;
    var bElem = document.getElementById("build-text");
    var cElem = document.getElementById("console-icon");
    window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            bElem.innerHTML = buildWords[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedWord = buildWords.shift();
                buildWords.push(usedWord)
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === buildWords[0].length + 1 && waiting === false) {
            waiting = true
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            bElem.innerHTML = buildWords[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
            cElem.classList.add('hidden');
            visible = false;
        } else {
            cElem.classList.remove('hidden');
            visible = true;
        }
    }, 400)
})