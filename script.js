function fn(){
    let count = 0;

    var endo = document.getElementById("endometriosis");
    var tube = document.getElementById("fallopian");
    var gene = document.getElementById("genetic");
    var miss = document.getElementById("pregloss");
    var fail = document.getElementById("ivfattempt");
    var othr = document.getElementById("iuimethod");
    var ntrl = document.getElementById("naturalmethod");
    var pcos = document.getElementById("pcos");
    var men1 = document.getElementById("inherit");
    var men2 = document.getElementById("infertility");

    let Wage = document.getElementById("Wage").value
    let Mage = document.getElementById("Mage").value
    
    if (Wage < 20 || Wage > 70 || Mage < 20 || Mage > 70) {
        result.innerHTML = "Please enter a valid age between 20 and 70 (inclusive) and try again.";
    }
    else {

        if(endo.checked == true){
            count = count - 5;
        }

        if(tube.checked == true){
            count = count - 9;
        }

        if(gene.checked == true){
            count = count - 6;
        }

        if(miss.checked == true){
            count = count - 6;
        }

        if(fail.checked == true){
            count = count + 13;
        }

        if(othr.checked == true){
            count = count - 10;
        }

        if(ntrl.checked == true){
            count = count - 3;
        }
        
        if(pcos.checked == true){
            count = count - 6;
        }

        if(men1.checked == true){
            count = count - 5;
        }

        if(men2.checked == true){
            count = count - 9;
        }

        count = count + 25;
        console.log(count);

        result = document.getElementById("result");

        if (count > 0){
            result.innerHTML = "Yes, you can get an IVF!";
        }
        else {
            result.innerHTML = "No, getting an IVF is not recommended."
        }
    }    
}

