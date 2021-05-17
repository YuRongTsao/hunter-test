///// define html elements of interface widgets //////

option_num = 10 // for the index of radio system

function setAttributes(el, options) {
    Object.keys(options).forEach(function(attr) {
      el.setAttribute(attr, options[attr]);
    })
 }

function addExplanation(list,explanation_data){
    var item = document.createElement("div")
    setAttributes(item,{class:"item",style:"padding-bottom: 5%;"})

    var cards = document.createElement("div")
    setAttributes(cards,{class:"ui cards"})

    //a card(a chart)
    var card = document.createElement("div")
    setAttributes(card,{class:"ui card", style:"width:100%"})
    
    // content
    var content = document.createElement("div")
    setAttributes(content,{class:"content"})

    var header = document.createElement("div")
    setAttributes(header,{class:"header"})
    header.innerHTML = explanation_data.category

    var description = document.createElement("div")
    setAttributes(description,{class:"description"})
    description.innerHTML=explanation_data.explanation

    var extra_content = document.createElement("div")
    setAttributes(extra_content,{class:"extra content"})

    var ui_form = document.createElement("div")
    setAttributes(ui_form,{class:"ui form"})

    var fields = document.createElement("div")
    setAttributes(fields,{class:"inline fields", style:"justify-content: center"})

    list.appendChild(item)
    item.appendChild(cards)
    cards.appendChild(card)
    card.appendChild(content)  
    content.appendChild(header)
    content.appendChild(description)
    card.appendChild(extra_content)  
    extra_content.appendChild(ui_form)
    ui_form.appendChild(fields)

    explanation_data.example.forEach(function(name){
        var field = document.createElement("div")
        setAttributes(field,{class:"field"})
        
        var box = document.createElement("div")
        setAttributes(field,{style:"display:block"})
        var label = document.createElement("label")
        label.innerHTML = name
        //var image = document.createElement("img")
        //setAttributes(image,{style:"height:50px;width:50px", src:"images/thiso.jpg"})
        
        fields.appendChild(field)
        field.appendChild(box)
        box.appendChild(label)
        //box.appendChild(image)
    })
}


function addQuestion(list,question_data){
    var item = document.createElement("div")
    setAttributes(item,{class:"item",style:"padding-bottom: 5%;"})

    var cards = document.createElement("div")
    setAttributes(cards,{class:"ui cards"})

    //a card(a chart)
    var card = document.createElement("div")
    setAttributes(card,{class:"ui card", style:"width:100%"})
    
    // content
    var content = document.createElement("div")
    setAttributes(content,{class:"content"})

    var header = document.createElement("div")
    setAttributes(header,{class:"header"})
    header.innerHTML = "Q"+question_data.id.toString()

    var description = document.createElement("div")
    setAttributes(description,{class:"description"})
    description.innerHTML=question_data.question

    var extra_content = document.createElement("div")
    setAttributes(extra_content,{class:"extra content"})

    var ui_form = document.createElement("div")
    setAttributes(ui_form,{class:"ui form"})

    var fields = document.createElement("div")
    setAttributes(fields,{class:"inline fields", style:"justify-content: center"})

    list.appendChild(item)
    item.appendChild(cards)
    cards.appendChild(card)
    card.appendChild(content)  
    content.appendChild(header)
    content.appendChild(description)
    card.appendChild(extra_content)  
    extra_content.appendChild(ui_form)
    ui_form.appendChild(fields)

    Object.keys(question_data.answer).forEach(function(ans){
        var field = document.createElement("div")
        setAttributes(field,{class:"field"})
        var box = document.createElement("div")

        let class_name = (question_data.type=="single") ? "ui radio checkbox": "ui checkbox"
        let type_name = (question_data.type=="single") ? "radio": "checkbox"


        setAttributes(box,{class:class_name})
        var radio = document.createElement("input")
        setAttributes(radio,{type:type_name,name:"frequency_"+question_data.id.toString(),value:ans})
        var label = document.createElement("label")
        label.innerHTML = ans+"  "+question_data.answer[ans]
        
        fields.appendChild(field)
        field.appendChild(box)
        box.appendChild(radio)
        box.appendChild(label)
    })
} 
