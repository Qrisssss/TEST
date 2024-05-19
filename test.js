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


function calculateInterest() {
        let principal = parseFloat(document.getElementById('principal').value);
            let rate = parseFloat(document.getElementById('rate').value);
                let time = parseFloat(document.getElementById('time').value);

                    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
                            document.getElementById('result').innerText = "Please enter valid numbers.";
                                    return;
                                        }

                                            let interest = principal * (rate / 100) * time;
                                                let totalAmount = principal + interest;

                                                    document.getElementById('result').innerText = 
                                                            `Interest: $${interest.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`;
                                                            } let submit = document.getElementById('submit');
                                                                                                                        {
                                                            
                                                            };



