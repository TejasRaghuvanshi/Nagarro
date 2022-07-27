let btn = $('#copy_btn')
let textbox = $('#textbox_1')

btn.click(function(){
    textbox.select()
    document.execCommand('copy')
})