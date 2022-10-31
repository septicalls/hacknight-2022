let count = 0;

function fn(){

    var endo = document.getElementById("endometriosis");
    var tube = document.getElementById("fallopian");
    var gene = document.getElementById("genetic");
    var miss = document.getElementById("pregloss");
    var fail = document.getElementById("ivfattempt");
    var other = document.getElementById("iuimethod");
    var nautral = document.getElementById("naturalmethod");
    var pcos = document.getElementById("pcos");
    var men1 = document.getElementById("inherit");
    var men2 = document.getElementById("infertility");
    


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

    if(other.checked == true){
        count = count - 10;
    }

    if(nautral.checked == true){
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

