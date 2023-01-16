let string = "";
let operator="";
let ans;

function zerobtn(){
    string+=0;
    document.getElementById("input1").value=string;
}

function onebtn(){
    string+=1;
    document.getElementById("input1").value=string;
}

function twobtn(){
    string+=2;
    document.getElementById("input1").value=string;
}

function threebtn(){
    string+=3;
    document.getElementById("input1").value=string;
}

function fourbtn(){
    string+=4;
    document.getElementById("input1").value=string;
}

function fivebtn(){
    string+=5;
    document.getElementById("input1").value=string;
}

function sixbtn(){
    string+=6;
    document.getElementById("input1").value=string;
}

function sevenbtn(){
    string+=7;
    document.getElementById("input1").value=string;
}

function eightbtn(){
    string+=8;
    document.getElementById("input1").value=string;
}

function ninebtn(){
    string+=9;
    document.getElementById("input1").value=string;
}

function mult(){
    string+='*';
    //operator="*";
    document.getElementById("input1").value=string;
}

function add(){
    string+=document.getElementById("btn+").innerText;
    document.getElementById("input1").value=string;
}

function sub(){
    string+=document.getElementById("btn-").innerText;
    document.getElementById("input1").value=string;
}

function divide(){
    string+=document.getElementById("btn/").innerText;
    document.getElementById("input1").value=string;
}

function equal(){
    ans=eval(string);
    document.getElementById("input1").value=ans;
}

function c(){
    string="";
    document.getElementById("input1").value=string;
}