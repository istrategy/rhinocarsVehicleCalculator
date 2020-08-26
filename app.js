/*
    Author: GC van Eeden
    e-mail: gertvaneeden@gmail.com
*/
function cf()
{
    doneTypingInterval = 500;
    typingTimer = setTimeout(calcform, doneTypingInterval);
}

function checkNumber(tvar)
{
    if(isNaN(tvar) || tvar =='')
    {
        retval = 0;
    }
    else
    {
        retval = tvar;
    }
    // alert(retval);
    return retval;
}

function calcform()
{
    // alert("Calckform");
    // alert(document.getElementById("amount").value);
    loan_amount = checkNumber(document.getElementById("loan_amount").value);
    deposit = checkNumber(document.getElementById("deposit").value);
    trade_in = checkNumber(document.getElementById("trade_in").value);
    
    
    balloon = checkNumber(document.getElementById("balloon").value);
    // alert(deposit);
    amount_financed = loan_amount - deposit - trade_in;
    
    if (amount_financed < 0)
    {
        amount_financed = 0;
    }
    nfObject  = new Intl.NumberFormat('en-US');
    amount_financed_display = nfObject.format(amount_financed); 
    // alert(amount_financed);
    // alert(amount_financed_display);
    // alert(amount_financed_display);
    document.getElementById("amount_financed").value = amount_financed_display;
    document.getElementById("amount").value = amount_financed;

    // Balloon amount
    // alert("balloon");

    selbox  = document.getElementById("balloon_percentage");
    idx = selbox.selectedIndex;
    balloon_percentage = selbox.options[idx].value;
    // alert(balloon_percentage);
    balloon_amount = amount_financed * (balloon_percentage/100)
    // alert(balloon_amount);
    // nfObject  = new Intl.NumberFormat('en-US');
    nfObject1  = new Intl.NumberFormat('en-US');
    balloon_amount_display = nfObject1.format(balloon_amount);
    
    document.getElementById("balloon").value = balloon_amount;
    document.getElementById("balloon_display").value = balloon_amount_display;
    



  
    // alert("Calckform1");
    // calculate 
    computeResults(document.getElementById("loan-form"));
    // alert("Calckform2");
    
    
}

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults() {
  // UI
  const UIamount = document.getElementById("amount").value;
  const UIinterest = document.getElementById("interest").value;

  // Calculate
  balloon = document.getElementById("balloon").value;

  principal =  parseFloat(UIamount - balloon);     

  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  selbox  = document.getElementById("payment_term");
  idx = selbox.selectedIndex;
  payment_term = selbox.options[idx].value;
  var calculatedPayments = parseFloat(payment_term);
  
  //Compute monthly Payment
  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  monthlywith_balloon = monthly + (balloon *CalculateInterest);

  const monthlyPayment = monthlywith_balloon.toFixed(2);
  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

//   const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results
  nfObject  = new Intl.NumberFormat('en-US');
  monthlyPayment_display = nfObject.format(monthlyPayment); 

  document.getElementById("monthlyPayment").innerHTML = "R" + monthlyPayment_display;

  // document.getElementById("totalInterest").innerHTML = "%" + totalInterest;

  // document.getElementById("totalPayment").innerHTML = "R" + totalPayment;

  e.preventDefault();
}
