function dark(){
    document.documentElement.classList.toggle('darklight');
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
                                   `Interest: $${interest.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}\nhello brp`;
                                        } let submit = document.getElementById('submit');
                                                            {
                                   
                                                            };



