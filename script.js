//John Gray
//This is a simple interest rate calculator for IBM Full-Stack Software Dev

function compute()
{   
    //Variables created by user input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //Interest and date calculations best on user input
    var interest = principal*years* rate/100;
    var year =new Date().getFullYear()+parseInt(years);

    //positive input varification if/else 
    if(principal == undefined || principal <= 0){
        alert("Enter a Positive Number");
        //takes user back to "princpal" input feild
        document.getElementById("principal").focus();
        
        return
    }else{

        // Displays calculation results with descriptive text
        var endPrincipal = "If you deposit <mark>" + principal +",</mark><br>";
        var endRate = "at an interest rate of <mark>"+ rate +" %,</mark><br>";
        var endInterest ="You will receive an amount of <mark>" +interest + ",</mark><br>";
        var endYear ="in the year <mark>"+year +"</mark>";

        document.getElementById("result").innerHTML=endPrincipal+endRate+endInterest+endYear;

    }
    

   }
   //Updates the Rate value of the slider
   function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        