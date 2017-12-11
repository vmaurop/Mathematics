function factorial() {

    var i, no, fact;
    fact = 1;
    no = $("#num").val(); //  no=document.getElementById("num").value;
    if (no % 1 == 0 && no >= 1) {
        for (i = 1; i <= no; i++) {
            fact = fact * i;
        }

        alert(no + "!=" + fact);
    }
    else if (no == 0) {
        alert("0!=" + 1);
    }
    else {
        alert("only positive integers for factorial")
    }
}


function sqrt() {
    var x, y;
    x = $("#num1").val();             //x=document.getElementById("num1").value;
    y = Math.sqrt(x);
    alert(y);

}


function quadratic_equations() {

    var D, x1, x2;
    var a = $("#a").val();    //παρε απο το id=a την τιμη(που εχει στο κουτι(εναλακτικα document.getElementById("b").value;
    var b = $("#b").val();
    var c = $("#c").val();

  



  //  $('#myForm').get(0).reset(); //μηδενιζει τα δεδομενα που εχουμε εισαγει!!
    // document.getElementById('myFormId').reset();


    if ($.isNumeric(a) && $.isNumeric(b) && $.isNumeric(c) && a != 0) //jquery check if is number
    {

     //   $("#input").html("<br>" + a + "x<sup>2</sup>" + "+" + b + "x" + "+" + c + "=0<br><br>");
        D = Math.pow(b, 2) - 4 * a * c;

        if (D > 0) {
            x1 = (-b + Math.sqrt(D)) / (2 * a);
            x2 = (-b - Math.sqrt(D)) / (2 * a);



            $("#results").html("<br> Discriminant:D=" + D + ">0" + "<br>The solution of the quadratic equation: X<sub>1</sub>=" + x1 + " ή X<sub>2</sub>=" + x2);


        }
        else if (D == 0) {
            x1 = (-b + Math.sqrt(D)) / (2 * a);




            $("#results").html("<br> Discriminant:D=" + D + "=0" + "<br>Repeated or Double root : X<sub>1,2</sub>=" + x1);
            //document.getElementById("results").innerHTML = "<br><br> Διακρίνουσα:Δ="+D+"=0"+"<br>Έχουμε μια διπλή λύση: X<sub>1,2</sub>="+x1;


        }

        else {


            $("#results").html("<br> Discriminant:D=" + D + "<0" + "<br>the are no solutions in real numbers");
        }

    }

    else if (a == "" && b == "" && c == "") {
        alert("There is no data input");
        

      
    }

    else {
        alert("Incorrect data input");
       

    }


}







