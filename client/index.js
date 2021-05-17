

//global var
var datainfo = {}
var explanation = {}
var score = {
    "P":0,
    "C":0,
    "R":0,
    "S":0,
    "M":0,
    "E":0,
}

function drawChart(canvas_id,type){
    var element = document.getElementById(canvas_id)
    var order = ["P","C","R","S","M","E"]
    var keys = order.map(function(key){
        return explanation[key].category
    })
    var values = order.map(function(key){
        return score[key]
    })

    //create chart.js object
    var chart = new Chart(element,{
        type: type,
        data: {
            labels: keys,
            datasets: [
                {
                    labels:"score",
                    data:values
                }
            ]
        },
        options: {
            legend: {
                display: false
            }
        }
    });
}

function clean(){
    global_chart_id=0
    main_chart_id
    main_insight_key = ''
    sheet_num = 1
    curr_sheet_num=1
    //curr_dataset = ""
    seq_views = {}
    tree_structures = {"generate":{}}
    chart_datas = {"generate":{}}
    

    //clean sheet container
    //$('.ui.internally.celled.two.grid.column').remove()
    $('#chart_temp').children().remove()
}

$(document).ready(function(){   
    $('.checkbox').checkbox()
    
    // read file
    $.ajax({
        type: 'GET',
        url:"http://127.0.0.1:5000/get_datasets",

    }).done(function(responce){
        // insert card
        datainfo = responce.datainfo
        explanation = responce.explanation

        var ques_list =document.getElementById('ques_list') 
        datainfo.forEach(function(question_data){
            addQuestion(ques_list,question_data)
        })
    });

    // subbmit button
    $('#subbmit').click(function(){
        //clean dic
        score = {
            "P":0,
            "E":0,
            "M":0,
            "C":0,
            "R":0,
            "S":0,
        }
        
        // get result
        var n_question = datainfo.length
        for(var i=0; i<n_question; i++){
            var answers = $("input[name='frequency_" + (i+1).toString()+ "']:checked");
            
            $.each(answers, function(idx,ans){
                var result = datainfo[i].result[ans.value]
                // calculate result
                Object.keys(result).forEach(function(key){
                    score[key] += result[key]
                })
            });
        }
        
        // show result
        drawChart("myBar","bar")
        drawChart("myRadar","radar")

        //
        var explanation_list =document.getElementById('explanation_list') 
        Object.keys(explanation).forEach(function(key){
            addExplanation(explanation_list,explanation[key])
        })
        
    })
})