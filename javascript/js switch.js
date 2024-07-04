let nnpcprice =  parseInt(prompt("what is the price of nnpc"));
switch (nnpcprice){
    case 65:
        alert("buy 1000 liters");
        quant = parseint(prompt("how many liters do you want to buy"));
        total = quant * 65 ;
        if (quant > 1000 && quant < 2000){
            alert(`your total is ${total * 0.2}`);
        }
        else{
            alert("you dont qualify for a discount , total is :" + total);
        }
        break;
        case 145:
            alert("buy 800 liters");
            break;
            case 225:
                alert("buy 600 liters");
                break;
        default:
            alert("fuel too expensive");

}