let lst = document.querySelector('ul')
let inp = document.querySelector('input')
let add_btn = document.querySelector('.add_button')

function add_item(){
    let text = inp.value
    if(text.length == 0){
        // Do nothing if no text in input
    }
    else{
        let item = document.createElement('li')
        let textbox = document.createElement('span')
        textbox.style.display = 'inline-block'
        textbox.style.height = '100%' // RELATIVE TO PARENT
        textbox.style.width = '70%' // RELATIVE TO PARENT
        textbox.style.overflow = 'scroll'
        textbox.innerText += text
        item.appendChild(textbox)

        let delete_btn = document.createElement('button')
        delete_btn.innerText += "Delete"
        delete_btn.setAttribute('class', 'id_buttons delete_button')

        delete_btn.onclick = function(){
            let curr_item = this.parentElement
            lst.removeChild(curr_item)
        }

        let completed_btn = document.createElement('button')
        completed_btn.innerText += "Incomplete"
        completed_btn.setAttribute('class', 'id_buttons completed_button')

        completed_btn.onclick = function(){
            let curr_item = this.parentElement;
            if(completed_btn.innerText == "Incomplete"){
                completed_btn.style.backgroundColor = 'greenyellow'
                completed_btn.innerText = "Completed"
                curr_item.style.backgroundColor = 'lightgreen'
            }
            else{
                completed_btn.style.backgroundColor = 'lightcoral'
                completed_btn.innerText = "Incomplete"
                curr_item.style.backgroundColor = ''
            }         
        }

        let edit_btn = document.createElement('button')
        edit_btn.innerText += "Edit"
        edit_btn.setAttribute('class', 'id_buttons edit_button')

        edit_btn.onclick = function(){
            let curr_item = this.parentElement
            let curr_textbox = curr_item.firstChild
            if(edit_btn.innerText == "Edit"){
                curr_textbox.contentEditable = true
                edit_btn.innerText = "Done"
                curr_textbox.addEventListener('keydown', function(e){
                    if(curr_textbox.value.length == 0){
                        // Do nothing if no text in input
                    }
                    else if(e.which == 13){
                        curr_textbox.contentEditable = false
                        curr_textbox.innerText = "PRESSED ENTER"
                        edit_btn.innerText = "Edit"
                    }
                })
            }
            else{
                curr_textbox.contentEditable = false
                edit_btn.innerText = "Edit"
            }
        }

        item.appendChild(delete_btn)
        item.appendChild(completed_btn)
        item.appendChild(edit_btn)

        lst.appendChild(item)
        inp.value = ""
    }
}

add_btn.addEventListener('click', add_item)

inp.addEventListener('keydown' , function(e){
    if(inp.value.length == 0){
        // Do nothing if no text in input
    }
    else if(e.which == 13){
        add_btn.click(add_item)
        inp.value = ""
    }
})

// let delete_btns = document.getElementsByClassName('delete_button')

// for (i = 0; i < delete_btns.length; i++){
//     delete_btns[i].onclick = function(){
//         let curr_item = this.parentElement;
//         lst.removeChild(curr_item);
//     }
// }