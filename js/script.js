
function generateNumber(){

    const min = Math.ceil(document.querySelector('.input-min').value)

    const max = Math.floor(document.querySelector('.input-max').value)

    if(min >= max){
        alert("O valor minimo dever ser MENOR que o valor maximo")
    }else{
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById('res').innerHTML = result;
    }    
    // alert('O número Sorteado é  ' + result);
}










