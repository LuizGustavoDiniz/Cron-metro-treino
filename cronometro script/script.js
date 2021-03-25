
var display = document.querySelector('#display')

var minutos = document.querySelector('#minutos')

var segundos = document.querySelector('#segundos')

var comecar = document.querySelector('#comecar')

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var intervalo;

for(var i = 0;i <=60; i++){
    minutos.innerHTML+='<option value="'+i+'"> '+i+' </option>';
}

for(var i = 1;i <=60; i++){
    segundos.innerHTML+='<option value="'+i+'"> '+i+' </option>';
}

comecar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+ segundoAtual;

    intervalo = setInterval(function(){

        segundoAtual--;
        if(segundoAtual <=0){
            if(minutoAtual >0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                alert("Acabou!");
                document.querySelector('#sound').play();
                clearInterval(intervalo);
            }
        }

        display.childNodes[1].innerHTML = minutoAtual + ":"+ segundoAtual;
    },1000)})