
function num(value){
    document.querySelector('input').value += value
}
function operator(value){
        document.querySelector('input').value += value
    }
   
function del(){
    let input = document.querySelector('input').value
    document.querySelector('input').value = input.slice(0, -1)
}
function Clear(){
    document.querySelector('input').value = "";
}

function equal(){
    let input = document.querySelector('input').value;
        let calculate = eval(input);
        document.querySelector('input').value = calculate;
    }