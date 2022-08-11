
function add7(num){
    return num+7
}

function multiply(num1,num2){
    return num1*num2
}

function capitalize(str){ //happy
    if(onlyLetters(str)){
        return str.toUpperCase()
    }
    else{
        return "enter only a text!"
    }
    
}

function onlyLetters(str){
    return /^[[a-zA-Z]+\s*[a-zA-Z]*]*$/.test(str)
}

function lastLetter(str){
    if(onlyLetters(str)){
    last = str.slice(-1)
    return last
    }else{
        return "enter only a text"
    }
}





document.getElementById("add7").onclick = function(){

    let user_input = Number(document.getElementById("input1").value)
    document.getElementById("console").innerHTML=add7(user_input)
}

document.getElementById("multiply").onclick = function(){

    let user_input1 = Number(document.getElementById("input1").value)
    let user_input2 = Number(document.getElementById("input2").value)
    
    document.getElementById("console").innerHTML=multiply(user_input1,user_input2)
}


document.getElementById("capitalize").onclick = function(){

    let user_input = document.getElementById("input1").value

    document.getElementById("console").innerHTML=capitalize(user_input)
}


document.getElementById("lastLetter").onclick=function(){
    let user_input = document.getElementById("input1").value
    document.getElementById("console").innerHTML=lastLetter(user_input)

}


