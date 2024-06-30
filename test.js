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
                                   `Interest: KSH${interest.toFixed(2)}\nTotal Amount: KSH${totalAmount.toFixed(2)}\nhello brp`;
                                        } let submit = document.getElementById('submit');
                                                            {
                                   
                                                            };
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
                let daily = interest / 365;
                let monthly = interest / 12;
                let weekly = daily * 7;

        document.getElementById('result').innerText =
        `Interest: KSH${interest.toFixed(2)}\n Daily Interest:KSH${daily.toFixed(2)} \n weekly Interest:KSH${weekly.toFixed(2)}\n Monthly Interest:KSH${monthly.toFixed(2)}\n TotalAmount: KSH${totalAmount.toFixed(2)}\n`;} let submit = document.getElementById('submit');
                                              {
                                   
                                                            };



