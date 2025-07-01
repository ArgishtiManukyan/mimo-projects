function Convert(){
    let el = document.getElementById("id1").value;

    const select = document.getElementById("selectName");
    if (el === "") {
        document.getElementById("div1").innerHTML = "Result:";
        return;
    }
    let result;
    if(select.value  === "Miles to kilometers"){
        result = el*0.8;
        document.getElementById("div1").innerHTML = ` Result:${el} miles are ${result} kilometers`;

    }
    else if(select.value  === "Kilometers to miles"){
        result = el*1.6;
        document.getElementById("div1").innerHTML = ` Result: ${el} kilometers are ${result} miles`;
    }

}
Convert();






