let slides = $('.slide')
let dots = $('.dot')

let len = 3

function show_slides(){
    if (slide_num > len){
        slide_num = 1
    }

    if (slide_num < 1){
        slide_num = len
    }

    for (let i = 0; i < len; i++){
        slides[i].style.display = 'none'
    }

    for (let i = 0; i < len; i++) {
        // ' active' because will be appended at end of ssy, 'dot one'
        // so that we get 'dot one active'
        dots[i].className = dots[i].className.replace(' active', '')
    }

    console.log(slide_num)
    slides[slide_num-1].style.display = "block"
    // ' active' because will be appended at end of ssy, 'dot one'
    // so that we get 'dot one active'
    dots[slide_num-1].className += ' active'
}

function change_slide(n){
    slide_num += n
    show_slides()
}

function current_slide(n){
    slide_num = n
    show_slides()
}

let slide_num = 1;
show_slides()


$('.prev').click(function(){change_slide(-1)})
$('.next').click(function(){change_slide(1)})


$('.one').click(function(){current_slide(1)})
$('.two').click(function(){current_slide(2)})
$('.three').click(function(){current_slide(3)})
