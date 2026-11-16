function sumaTR(){

    console.log("input detectado");
    let num1, num2, num3;
    num1 = document.getElementById("sum1").value;
    num2 = document.getElementById("sum2").value;
    num3 = document.getElementById("sum3").value;
    let result = parseInt(num1) + parseInt(num2) + parseInt(num3);
    console.log(result);

    document.getElementById("sumRST").textContent = result;

}

function sqrd(){

    let numS = parseInt(document.getElementById("cuadr").value);
    console.log(numS);

    let rest = document.getElementById("quad").textContent = numS **2;

}

function avg(){

    let a1, a2, a3;

    a1 = parseInt(document.getElementById("n1").value);
    a2 = parseInt(document.getElementById("n2").value);
    a3 = parseInt(document.getElementById("n3").value);

    console.log(a1*a2/a3)

    document.getElementById("avg").textContent = (a1 + a2 + a3)/3;

}

function converter(){

    let mtr;
    mtr = parseFloat(document.getElementById("origin").value);

    document.getElementById("kil").textContent = mtr + " metros son " + mtr/1000 + " kilometros";
    document.getElementById("cent").textContent = mtr + " metros son " + mtr*100 + " centimetros";

}

function compare(){

    let n1, n2, Nmenor, Nmayor, differ;
    n1 = parseInt(document.getElementById("numb1").value)
    n2 = parseInt(document.getElementById("numb2").value)

    console.log(n1-n2);
    if(n1 > n2){
                differ = n1 - n2;
                Nmayor = n1;
                Nmenor = n2;

                document.getElementById("NumM").textContent = "El número mayor es " + Nmayor;
                document.getElementById("NumMN").textContent = "El número menor es " + Nmenor;

                document.getElementById("diff").textContent = "La diferencia entre ambos números es de " 
                + differ;
    }
    else if (n1 < n2){
                differ = n2 - n1;
                Nmayor = n2;
                Nmenor = n1;
                document.getElementById("NumM").textContent = "El número mayor es " + Nmayor;
                document.getElementById("NumMN").textContent = "El número menor es " + Nmenor;
                    
                document.getElementById("diff").textContent = "La diferencia entre ambos números es de " 
                + differ;

    }
    else{

            differ = 0;
            Nmayor = 0;
            Nmenor = 0;
            document.getElementById("NumM").textContent = "No hay número mayor.";
            document.getElementById("NumMN").textContent = "Ambos números son iguales.";
            document.getElementById("diff").textContent = "La diferencia entre ambos números es de 0" ;
    }
    return true;
    /*
    switch (n1) {

        case (n1 > n2):
                differ = n1 - n2;
                Nmayor = n1;
                Nmenor = n2;

                document.getElementById("nM").textContent = "El número mayor es " + Nmayor;
                document.getElementById("nN").textContent = "El número menor es " + Nmenor;

                document.getElementById("diff").textContent = "La diferencia entre ambos números es de " 
                + differ;
            break;
            
        case (n1 < n2):
                differ = n2 - n1;
                Nmayor = n2;
                Nmenor = n1;
                document.getElementById("nM").textContent = "El número mayor es " + Nmayor;
                document.getElementById("nN").textContent = "El número menor es " + Nmenor;
                    
                document.getElementById("diff").textContent = "La diferencia entre ambos números es de " 
                + differ;
            break;

        case (n1 = n2):
            differ = 0;
            Nmayor = 0;
            Nmenor = 0;
                document.getElementById("nM").textContent = "No hay número mayor.";
                document.getElementById("nN").textContent = "Ambos números son iguales.";
                document.getElementById("diff").textContent = "La diferencia entre ambos números es de 0" 
                + differ;
            break;
        default:
            break;
    }
            */
}