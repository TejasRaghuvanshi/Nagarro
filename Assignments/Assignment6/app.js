let display_screen = $('.displayscreen')

function display_on_screen(output){
    display_screen.text(output)
}

function update_values_op(){
    num1 = total
    op = next_op
    next_op = ''
    num2 = ''
    total = ''
}
function update_values_specialop_and_enter(){
    num1 = total
    op = ''
    next_op = ''
    num2 = ''
    total = ''
}


let num1 = ''
let op = ''
let next_op = ''
let num2 = ''
let total = ''


let digit_btns = $('.digit')

digit_btns.click(function(){
    if(op == ''){
        num1 += $(this).text()
        display_on_screen(num1)
    }
    else{
        num2 += $(this).text()
        display_on_screen(num1 + op + num2)
    }
})


let op_btns = $('.op')

op_btns.click(function(){
    next_op = $(this).text()

    if(num1 == ''){
        // Do nothing if num1 is empty
    }
    else if(op == ''){
        op = next_op
        display_on_screen(num1 + op)
    }
    else if(num2 == ''){
        //Do nothing if num2 is empty
    }
    else{
        // +x converts string x to int   
        switch(op){
            case '+':
                total = String(+num1 + +num2)
                break
            case '-':
                total = String(+num1 - +num2)
                break
            case '*':
                total = String(+num1 * +num2)
                break
            case '/':
                total = String(+num1 / +num2)
                break
            case '^':
                total = String(Math.pow(+num1, +num2))
                break
        }

        update_values_op()
        display_on_screen(num1 + op)
    }
})


let specialop_btns = $('.specialop')

specialop_btns.click(function(){
    next_op = $(this).text()

    if(num1 == ''){
        // Do nothing if num1 is empty
    }
    else if(op == ''){
        switch(next_op){
            case 'log10':
                num1 = String(Math.log10(+num1))
            case 'root':
                num1 = String(Math.sqrt(+num1))
        }

        display_on_screen(num1)
    }
    else if(num2 == ''){
        //Do nothing if num2 is empty
    }
    else{
        // +x converts string x to int   
        switch(op){
            case '+':
                total = String(+num1 + +num2)
                break
            case '-':
                total = String(+num1 - +num2)
                break
            case '*':
                total = String(+num1 * +num2)
                break
            case '/':
                total = String(+num1 / +num2)
                break
            case '^':
                total = String(Math.pow(+num1, +num2))
                break
        }
        
        switch(next_op){
            case 'log10':
                total = String(Math.log10(+total))
            case 'root':
                total = String(Math.sqrt(+total))
        }

        update_values_specialop_and_enter()
        display_on_screen(num1)
    }
})


clear_btn = $('.clear')
enter_btn = $('.enter')
del_btn = $('.del')


clear_btn.click(function(){
    num1 = ''
    op = ''
    next_op = ''
    num2 = ''
    total = ''

    display_on_screen('0')
})


enter_btn.click(function(){
    if(num1 == ''){
        // Do nothing if num1 is empty
    }
    else if(op == ''){
        // Do nothing if there is only num1
    }
    else if(num2 == ''){
        //Do nothing if num2 is empty
    }
    else{
        // +x converts string x to int   
        switch(op){
            case '+':
                total = String(+num1 + +num2)
                break
            case '-':
                total = String(+num1 - +num2)
                break
            case '*':
                total = String(+num1 * +num2)
                break
            case '/':
                total = String(+num1 / +num2)
                break
            case '^':
                total = String(Math.pow(+num1, +num2))
                break
        }

        update_values_specialop_and_enter()
        display_on_screen(num1)
    }
})


del_btn.click(function(){
    if(num1 == ''){
        // Do nothing if num1 is empty
    }
    else if(op == ''){
        num1 = num1.slice(0,-1)
        if(num1.length == 0){
            display_on_screen('0')
        }
        else{
            display_on_screen(num1)
        }
    }
    else if(num2 == ''){
        op = ''
        display_on_screen(num1)
    }
    else{
        num2 = num2.slice(0,-1)
        display_on_screen(num1 + op + num2)
    }
})

