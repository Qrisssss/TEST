function dark(){
    document.documentElement.classList.toggle('darklight');
}

const darkModeToggle = document.getElementById('darkModeToggle');
const navbar = document.getElementById('navbar');

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    navbar.classList.add('dark-mode');
  } else {
    navbar.classList.remove('dark-mode');
  }
});


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



