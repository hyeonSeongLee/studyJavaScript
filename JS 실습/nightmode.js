var body = {
    setColor:function (inputColor) {
    var target = document.querySelector('body')
    target.style.color=inputColor
    },
    setBackgroundColor:function (inputColor) {
    var target = document.querySelector('body')
    target.style.backgroundColor=inputColor
    }

}
var link = {
    setColor: function (inputColor) {
    var alist = document.querySelectorAll('a')
    var i = 0
    while (i<alist.length) {
    alist[i].style.color=inputColor
    i=i+1 }
    }
}
function nightDayHandler (self) {
if(self.value === 'night')
{
    body.setBackgroundColor('black')
    body.setColor('aquamarine')
    document.querySelector('#night-day').value= 'day'
    link.setColor('aquamarine')
}
else
{
    body.setBackgroundColor('white')
    body.setColor ('teal')
    document.querySelector('#night-day').value= 'night'
    link.setColor('teal')
}
}