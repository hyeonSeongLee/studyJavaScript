function bodyBackgroundColor(color){
    var target = document.querySelector('body')
    target.style.backgroundColor=color
}

function bodyColor(color){
    var target = document.querySelector('body')
    target.style.color=color
}

function setLinkColor(color){
    var link = document.querySelectorAll('a')
    var i = 0
    while (i<link.length) {
        link[i].style.color=color
        i = i+1
    }
}

var Body = { handler:function(self){
    if (self.value === 'NIGHT') {
        bodyBackgroundColor('black')
        bodyColor('powderblue')
        setLinkColor('powderblue')
        self.value='DAY'
        }
        else {
        bodyBackgroundColor('white')
        bodyColor('navy')
        setLinkColor('navy')
        self.value ='NIGHT'
        }
}
}


// var body = {
//     handler: function(self){
//         if (self.value === 'NIGHT') {
//             bodyBackgroundColor('black')
//             bodyColor('powderblue')
//             setLinkColor('powderblue')
//             self.value='DAY'
//             }
//             else {
//             bodyBackgroundColor('white')
//             bodyColor('navy')
//             setLinkColor('navy')
//             self.value ='NIGHT'
//             }
//     }
// }


// const button = document.querySelector("button");
// button.addEventListener("click", function() {
//   if (this.value === 'NIGHT') {
//     bodyBackgroundColor('black')
//     bodyColor('powderblue')
//     linkColor('powderblue')
//     this.value = 'DAY'
//   } else {
//     bodyBackgroundColor('white')
//     bodyColor('navy')
//     linkColor('navy')
//     this.value = 'NIGHT'
//   }

// })