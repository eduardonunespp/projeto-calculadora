

function insert(x){
    var par = document.getElementById('calc').innerHTML;
    document.getElementById('calc').innerHTML = par + x;
}
function reset(){
    document.getElementById('calc').innerHTML = '';
}
function volt(){
    let resultado = document.getElementById('calc').innerHTML;
    document.getElementById('calc').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    let resultado = document.getElementById('calc').innerHTML;
    if(resultado){
        document.getElementById('calc').innerHTML = eval(resultado);
    }
}

    //Código de Referência
    /*var body = document.querySelector('body');
    var select = document.querySelector('select');
    select.onchange = function(){
        var chose = select.value;

        switch(chose){
            case 'white':
                theme('white');
            break;
            case 'black': 
                theme('black');
            break;
            
        }
    }
        function theme(backC){
            body.style.backgroundColor = backC;
        }
    */

        //Meu código
        var body = document.querySelector('body');
        var select = document.querySelector('select');
        select.onchange = function(){
        var chose = select.value;
        if(chose == 'escuro'){
            body.style.backgroundColor = 'var(--backcolor2)';
        }
        
        if(chose == 'claro'){
            body.style.backgroundColor = 'var(--backcolor1)';
           
            }
        }