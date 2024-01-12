function dark(){
    document.documentElement.classList.toggle('darklight');
}

function tapme(){
   var x = document.getElementById("calm").value;
   var y=document.getElementById("act").value;
   console.log(y)
}

function calc(){
    var m= document.getElementById("deposit").value
    var n= document.getElementById("interest").value
    n/=100
    z=(m*n)
    q=z+m
    console.log(q)
}





