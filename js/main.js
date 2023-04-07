let disocuntCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



function calculateServicePrice(event){
    event.preventDefault();


    let selectedTypeWork = document.getElementById("work-type").value;
    console.log(selectedTypeWork);

    switch(selectedTypeWork){
        case "backend":
          workPrice = 20.50
                break;
        case "frontend":
            price += 15.30;
                break;
        case "projectanalyst":
            price += 33.60;
                break;
    }

}