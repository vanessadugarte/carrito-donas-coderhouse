$(document).ready(function(){
    let counter = 0;

    function counterUpdate (){
        $("#contador").text(counter)
    }
    
    $("#add").click(function(){
        counter++;
        if (counter > 12){
            alert("La cantidad no puede ser mayor a 12");
            counter = 12;

        } 
        counterUpdate()
    }
    )

    $("#subtract").click(function(){
        counter--;
        if (counter < 0){
            alert("La cantidad no puede ser menor a 0");
            counter = 0;

        }

        counterUpdate()
    }
    )

    let counterArequipe = 0;

    function counterUpdateArequipe (){
        $("#contadorArequipe").text(counterArequipe)
    }
    
    $("#addArequipe").click(function(){
        counterArequipe++;
        if (counterArequipe > 12){
            alert("La cantidad no puede ser mayor a 12");
            counterArequipe = 12;

        } 
        counterUpdateArequipe()
    }
    )

    $("#subtractArequipe").click(function(){
        counterArequipe--;
        if (counterArequipe < 0){
            alert("La cantidad no puede ser menor a 0");
            counterArequipe = 0;

        }

        counterUpdateArequipe()
    }
    )

    let counterFresa = 0;
    
    function counterUpdateFresa (){
        $("#contadorFresa").text(counterFresa)
    }
    
    $("#addFresa").click(function(){
        counterFresa++;
        if (counterFresa > 12){
            alert("La cantidad no puede ser mayor a 12");
            counterFresa = 12;

        } 
        counterUpdateFresa()
    }
    )

    $("#subtractFresa").click(function(){
        counterFresa--;
        if (counterFresa < 0){
            alert("La cantidad no puede ser menor a 0");
            counterFresa = 0;

        }

        counterUpdateFresa()
    }
    )

    let counterCookies = 0;
    
    function counterUpdateCookies (){
        $("#contadorCookies").text(counterCookies)
    }
    
    $("#addCookies").click(function(){
        counterCookies++;
        if (counterCookies > 12){
            alert("La cantidad no puede ser mayor a 12");
            counterCookies = 12;

        } 
        counterUpdateCookies()
    }
    )

    $("#subtractCookies").click(function(){
        counterCookies--;
        if (counterCookies < 0){
            alert("La cantidad no puede ser menor a 0");
            counterCookies = 0;

        }

        counterUpdateCookies()
    }
    )

    function totalDona (precioUnitario, cantidad){
        let totalDona = 0;
        for(let i=0; i<cantidad; i++)
        {
          totalDona = precioUnitario + totalDona
        }
        return totalDona;
    }
    
    $("#pay").click(function (){
        let totalChocolate =  totalDona(1500, counter)
        let totalArequipe =  totalDona(1600, counterArequipe)
        let totalFresa =  totalDona(1200, counterFresa)
        let totalCookies =  totalDona(1300, counterCookies)

        let total = totalChocolate + totalArequipe + totalFresa + totalCookies
        
        alert("El total es: $" + total + " CLP")
    })
})







      
       