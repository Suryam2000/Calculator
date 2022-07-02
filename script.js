var clear = document.getElementById('clear');
var sign = document.getElementById('sign');
var percent = document.getElementById('percent');
var divide = document.getElementById('divide');

var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var multiply = document.getElementById('multiply');

var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var minus = document.getElementById('minus');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var plus = document.getElementById('plus');

var zero = document.getElementById('zero');
var cancel = document.getElementById('cancel');
var equal = document.getElementById('equal');


var value = document.getElementById('value');


var arg = 0;
var op = '';
var res = 0;
var point = 0.0;



clear.addEventListener('click',function(){
    arg=0;
    op='';
    res=0;
    value.innerText="0";
});


zero.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+0;
        value.innerText+=0;
    }
    else{
        arg=0;
        value.innerText=0;
    } 
    
});

one.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+1;
        value.innerText+=1;
    }
    else{
        arg=1;
        value.innerText=1;
    } 
});

two.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+2;
        value.innerText+=2;
    }
    else{
        arg=2;
        value.innerText=2;
    } 
});

three.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+3;
        value.innerText+=3;
    }
    else{
        arg=3;
        value.innerText=3;
    } 
});

four.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+4;
        value.innerText+=4;
    }
    else{
        arg=4;
        value.innerText=4;
    } 
});

five.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+5;
        value.innerText+=5;
    }
    else{
        arg=5;
        value.innerText=5;
    } 
});

six.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+6;
        value.innerText+=6;
    }
    else{
        arg=6;
        value.innerText=6;
    } 
});

seven.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+7;
        value.innerText+=7;
    }
    else{
        arg=7;
        value.innerText=7;
    } 
});

eight.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+8;
        value.innerText+=8;
    }
    else{
        arg=8;
        value.innerText=8;
    } 
});

nine.addEventListener('click',function(){
    if(arg!=0||op!=''){
        arg = arg*10+9;
        value.innerText+=9;
    }
    else{
        arg=9;
        value.innerText=9;
    } 
});



sign.addEventListener('click',function(){
    if(res!=0){
        res *= -1;
        value.innerText = res;
    }
    else{
        arg *= -1;
        value.innerText = arg;
    }
});

percent.addEventListener('click',function(){
    if(res!=0){
        res /= 100;
        value.innerText = res;
    }
    else{
        arg /= 100;
        value.innerText = arg;
    }
});


divide.addEventListener('click',function(){
    op = '/';
    if(res==0){
        res = arg;
    }
    arg=0;
    value.innerText += op;
});

multiply.addEventListener('click',function(){
    op = '*';
    if(res==0){
        res = arg;
    }
    arg=0;
    value.innerText += op;
});

minus.addEventListener('click',function(){
    op = '-';
    if(res==0){
        res = arg;
    }
    arg=0;
    value.innerText += op;
});

plus.addEventListener('click',function(){
    op = '+';
    if(res==0){
        res = arg;
    }
    arg=0;
    value.innerText += op;
});


cancel.addEventListener('click',function(){
    value.innerText = value.innerText.slice(0,-1);
    if(value.innerText==''){
        arg=0;
        value.innerText=0;
    }
    if(op!=''&&arg!=0){
        arg=0;
    }
    else{
        op='';
    }
});



equal.addEventListener('click',function(){
    if(op=='/'){
        res /= arg;
    }
    else if(op=='*'){
        res *= arg;
    }
    else if(op=='-'){
        res -= arg;
    }
    else if(op=='+'){
        res += arg;
    }
    value.innerText=res;
    arg=0;
    op='';
});
