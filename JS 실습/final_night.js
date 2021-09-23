function bodyBackgroundColor(color){
    var target = document.querySelector('body')
    target.style.backgroundColor=color
}

function bodyColor(color){
    var target = document.querySelector('body')
    target.style.color=color
}

function linkColor(color){
    var link = document.querySelectorAll('a')
    var i = 0
    while (i<link.length) {
        link[i].style.color=color
        i = i+1
    }
}