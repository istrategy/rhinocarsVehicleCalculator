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
    if(isNaN(tvar))
    {
        retval = 0;
    }
    else
    {
        retval = tvar;
    }
    return retval;
}


function calcform()
{
    // alert("Calckform");
    // alert(document.getElementById("amount").value);
    amount = checkNumber(document.getElementById("amount").value);
    deposit = checkNumber(document.getElementById("deposit").value);
    trade_in = checkNumber(document.getElementById("trade_in").value);
    amount_financed = amount - deposit - trade_in;
    if (amount_financed < 0)
    {
        amount_financed = 0;
    }
    nfObject  = new Intl.NumberFormat('en-US');
    amount_financed_display = nfObject.format(amount_financed); 
    
    document.getElementById("amount_financed").value = amount_financed_display;
    // calculate 

    // get payment term
    selbox  = document.getElementById("payment_term");
    idx = selbox.selectedIndex;
    payment_term = selbox.options[idx].value;
    // get interest rate
    interest_rate  = checkNumber(document.getElementById("interest").value);
    if (interest_rate > 100 || interest_rate < 0)
    {
        document.getElementById("interest").value = 12;
    }


    // monInt = interest_rate / 1200,
    // calculation = ((monInt + (monInt / (Math.pow((1 + monInt), payment_term) -1))) * (amount_financed)).toFixed(2);
    
    // monInt = interest_rate / 1200,
    // calculation = ((monInt + (monInt / (Math.pow((1 + monInt), payment_term) -1))) * (amount - (down || 0))).toFixed(2);


    // i = interest_rate/100;
    // calculation_v2 = amount_financed * (i/12)*Math.pow((1+i/12),payment_term) /(Math.pow((1+i/12),payment_term)-1);

    // calculation_v3 = amount_financed * (i/12)*Math.pow((1+i/12),payment_term)/ (Math.pow((1+i/12),payment_term)-1);

//    calculation_v4

    // interest_monthly = (amount_financed *(interest_rate* 0.01))/ payment_term;
    // calculation_v4 = ((amount_financed/payment_term)+interest_monthly).toFixed(2);

// calculation_v5
    // alert("v5");
    var principal = amount_financed;
    // alert(principal);
    var interest = interest_rate / 100 / 12;
    // alert(interest);
    var payments = payment_term ;
    // alert(payments);
    // compute the monthly payment figure
    var x = Math.pow(1 + interest, payments); //Math.pow computes powers
    alert(x);
    var calculation_v5 = (principal*x*interest)/(x-1);
    // alert(calculation_v5);
    calculation_display = nfObject.format(calculation_v5); 
    
    document.getElementById("payment").value = calculation_display;
    
}


function cf()
{
    doneTypingInterval = 500;
    typingTimer = setTimeout(calcform, doneTypingInterval);
}


// alert("test");
function myFunction() {
    var loan = $('#amount').val(),
        month = $('#months').val(),
        int = $('#interest').val(),
        years = $('#years').val(),
        down = $('#down').val(),
        amount = parseInt(loan),
        months = parseInt(month),
        down = parseInt(down),
        annInterest = parseFloat(int),
        monInt = annInterest / 1200,
        calculation = ((monInt + (monInt / (Math.pow((1 + monInt), months) -1))) * (amount - (down || 0))).toFixed(2);
  
    document.getElementById("output").innerHTML = calculation;
}


$(function(){
	var month = $(this).val(),
      doneTypingInterval = 500,
      months = parseInt(month),
      typingTimer;

  $('#months').keyup(function(){
      month = $(this).val();
      months = parseInt(month);
  
      clearTimeout(typingTimer);
      if (month) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  function doneTyping () {
    $('#years').val(months/12);  
  }
})

$(function(){
	var month = $(this).val(),
      doneTypingInterval = 500,
      months = parseInt(month),
      typingTimer;

  $('#months').keyup(function(){
      month = $(this).val();
      months = parseInt(month);
  
      clearTimeout(typingTimer);
      if (month) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  function doneTyping () {
    $('#years').val(months/12);  
  }
})

$(function(){
	var year = $(this).val(),
      doneTypingInterval = 500,
      years = parseInt(year),
      typingTimer;

  $('#years').keyup(function(){
      year = $(this).val();
      myears = parseInt(year);
  
      clearTimeout(typingTimer);
      if (year) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  function doneTyping () {
    $('#months').val(year * 12);  
  }
})


