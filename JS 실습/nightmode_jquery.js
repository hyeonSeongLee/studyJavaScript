var body = {
    setColor:function (inputColor) {
    // var target = document.querySelector('body')
    // target.style.color=inputColor
    $('body').css("color",inputColor)
    },
    setBackgroundColor:function (inputColor) {
    // var target = document.querySelector('body')
    // target.style.backgroundColor=inputColor
    $('body').css("backgroundColor",inputColor)
    }

}
var link = {
    setColor: function (inputColor) {
    // var alist = document.querySelectorAll('a')
    // var i = 0
    // while (i<alist.length) {
    // alist[i].style.color=inputColor
    // i=i+1 }
    $('a').css("color", inputColor)
    }
}
function nightDayHandler (self) {
var target = document.querySelector('body')
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