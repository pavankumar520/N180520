
function validate(){
    var err=1;
    var j=document.getElementById('userName');
    var t=/^F[a-z]{3,8}$/i
    if(!t.test(j.value)){
        j.style.backgroundColor='red';
        return false;
    }

    var j=document.getElementById('mail');
    var t=/^.*@[a-z]+(\.[a-z]+)?.((com)|(in)|(net)|(edu))$/i

    if(!t.test(j.value)){
        j.style.backgroundColor='red';
        return false;
    }

    var j=document.getElementById('mobile');
    var t=/^((977\d{7})|(\d{4}-\d{4}-\d{4}))$/i

    if(!t.test(j.value)){
        j.style.backgroundColor='red';
        return false;
    }

    var j=document.getElementById('pType');
    var t=/^((SBIN\d{7})|(\d{11}))$/i

    if(!t.test(j.value)){
        j.style.backgroundColor='red';
        return false;
    }
    var j=0;
    for(let i=1;i<4;i++){
        if(document.getElementById('c'+i).checked){
            j++;
        }
        if(j>1){
            document.getElementById('warn').innerText='MultipleElements Selected';
            return false;
        }
    }
    return true;
}


function norm(k){
    k.style.backgroundColor='';
}
document.getElementById('userName').addEventListener("keyup",trans,false);
document.getElementById('country').addEventListener('blur',foreign,false);
document.getElementById('c1').addEventListener('click',cost,false);
document.getElementById('c2').addEventListener('click',cost,false);
document.getElementById('c3').addEventListener('click',cost,false);
document.getElementById('c4').addEventListener('click',cost,false);
document.getElementById('daysStay').addEventListener('keyup',cost,false);
// document.getElementById('c1').addEventListener('click',show);
// document.getElementById('c1').addEventListener('click',show);
// document.getElementById('c1').addEventListener('click',show);
// document.getElementById('c1').addEventListener('click',show);

function trans(){
    document.getElementById('userName').value=document.getElementById('userName').value.toUpperCase(); 
}

function foreign(){
    var j=document.getElementById('country').value;
    if(j!='India' & j!='Representatives of RGUKT'){
        document.getElementById('f').style.display='inline-block';
        document.getElementById('f').innerHTML="<input type='checkbox' id='for'>Do you wish for Beer";
    }else{
        document.getElementById('f').style.display='none';
    }
}

function cost(){
    var j=0,cost=0,t=[0,2000,2000,3000,3000];
    for(let i=1;i<=4;i++){
        if(document.getElementById('c'+i).checked){
            cost+=document.getElementById('daysStay').value*t[i];
        }
    }
    document.getElementById('cost').value=cost;
}

