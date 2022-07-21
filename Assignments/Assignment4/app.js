let lst = $('ul')
let inp = $('input')
let add_btn = $('.add_button')

function add_item(){
    let text = inp.val()
    if(text.length == 0){
        // Do nothing if no text in input
    }
    else{
        let item = $('<li/>')
        let textbox = $('<span/>').text(text)
        textbox.css({
            'display':'inline-block',
            'height':'100%',
            'width':'70%',
            'overflow':'scroll',
        })
        item.append(textbox)

        let delete_btn = $('<button/>').text("Delete")
        delete_btn.addClass('id_buttons delete_button')

        delete_btn.click(function(){
            let curr_item = $(this).parent()
            curr_item.remove()
        })

        let completed_btn = $('<button/>').text("Incomplete")
        completed_btn.addClass('id_buttons completed_button')

        completed_btn.click(function(){
            let curr_item = $(this).parent()
            if(completed_btn.text() == "Incomplete"){
                completed_btn.css({'backgroundColor': 'greenyellow'})
                completed_btn.text("Completed")
                curr_item.css({'backgroundColor': 'lightgreen'})
            }
            else{
                completed_btn.css({'backgroundColor': 'lightcoral'})
                completed_btn.text("Incomplete")
                curr_item.css({'backgroundColor': ''})
            }
        })

        let edit_btn = $('<button/>').text("Edit")
        edit_btn.addClass('id_buttons edit_button')

        edit_btn.click(function(){
            let curr_item = $(this).parent()
            let curr_textbox = curr_item.children().first()
            if(edit_btn.text() == "Edit"){
                curr_textbox.attr('contentEditable', 'true')
                edit_btn.text("Done")
                curr_textbox.keydown(function(e){
                    if(curr_textbox.val().length == 0){
                        // Do nothing if no text in input
                    }
                    else if(e.which == 13){
                        curr_textbox.attr('contentEditable', 'false')
                        edit_btn.text("Edit")
                    }
                })
            }
            else{
                curr_textbox.attr('contentEditable', 'false')
                edit_btn.text("Edit")
            } 
        })

        item.append(delete_btn)
        item.append(completed_btn)
        item.append(edit_btn)

        lst.append(item)
        inp.val("")
    }
}

add_btn.click(add_item)

inp.keydown(function(e){
    if(inp.val().length == 0){
        // Do nothing if no text in input
    }
    else if(e.which == 13){
        add_btn.click()
        inp.val("")
    }
})
