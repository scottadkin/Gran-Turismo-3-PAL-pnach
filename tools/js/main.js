const FLOAT_VALUES = {
    0.1: "3dcccccd",
    0.25: "3e800000",
    0.3: "3e99999a",
    0.4: "3ecccccd",
    0.5:  "3f000000",
    0.6: "3f19999a",
    0.7: "3f400000",
    0.8: "3f4ccccd",
    0.9: "3f666666",
    1: "3f800000",
    1.1: "3f8ccccd",
    1.25: "3fa00000",
    1.5:"3fc00000",
    1.75: "3fe00000",
    2: "40000000",
};

//default power value as a float 9.800000191
const POWER_MULTIPLIERS = [
    {"displayValue": "10% Power", "value": "3f7ae148"},
    {"displayValue": "20% Power", "value": "3ffae148"},
    {"displayValue": "25% Power", "value": "401ccccd"},
    {"displayValue": "30% Power", "value": "403c28f6"},
    {"displayValue": "40% Power", "value": "407ae148"},
    {"displayValue": "50% Power", "value": "409ccccd"},
    {"displayValue": "60% Power", "value": "40bc28f6"},
    {"displayValue": "70% Power", "value": "40db851f"},
    {"displayValue": "75% Power", "value": "40eb3334"},
    {"displayValue": "80% Power", "value": "40fae148"},
    {"displayValue": "90% Power", "value": "410d1eb9"},
    {"displayValue": "Normal Power", "value": "411ccccd"},
    {"displayValue": "110% Power", "value": "412c7ae2"},
    {"displayValue": "120% Power", "value": "413c28f6"},
    {"displayValue": "125% Power", "value": "41440000"},
    {"displayValue": "130% Power", "value": "414bd70b"},
    {"displayValue": "140% Power", "value": "415b851f"},
    {"displayValue": "150% Power", "value": "416b3334"},
    {"displayValue": "160% Power", "value": "417ae148"},
    {"displayValue": "170% Power", "value": "418547ae"},
    {"displayValue": "175% Power", "value": "41893333"},
    {"displayValue": "180% Power", "value": "418d1eb9"},
    {"displayValue": "190% Power", "value": "4194f5c3"},
    {"displayValue": "2 Times Power", "value": "419ccccd"},
    {"displayValue": "2.25 Times Power", "value": "41b06667"},
    {"displayValue": "2.5 Times Power", "value": "41c40000"},
    {"displayValue": "2.75 Times Power", "value": "41d7999a"},
    {"displayValue": "3 Times Power", "value": "41eb3334"},
    {"displayValue": "4 Times Power", "value": "421ccccd"},
    {"displayValue": "5 Times Power", "value": "42440000"},
    {"displayValue": "6 Times Power", "value": "426b3334"},
    {"displayValue": "7 Times Power", "value": "42893333"},
    {"displayValue": "8 Times Power", "value": "429ccccd"},
    {"displayValue": "9 Times Power", "value": "42b06667"},
    {"displayValue": "10 Times Power", "value": "42c40000"},
    {"displayValue": "20 Times Power", "value": "43440000"},
    {"displayValue": "25 Times Power", "value": "43750000"},
    {"displayValue": "50 Times Power", "value": "43f50000"},
    {"displayValue": "69 Times Power", "value": "44290ccd"},
    {"displayValue": "75 Times Power", "value": "4437c000"},
    {"displayValue": "100 Times Power", "value": "44750000"},
    {"displayValue": "250 Times Power", "value": "45192000"},
    {"displayValue": "420 Times Power", "value": "4580a000"},
    {"displayValue": "1337 Times Power", "value": "464cba67"},
];

const CASH_VALUES = [
    {"displayValue": "9,999,999", "value": "0098967F"}
];

const ADDRESSES = {
    "cash": {"displayValue": "Money", "address": "0098967F", "selected": null},
    "globalPower": {"displayValue": "Global Power Multiplier", "address": "20351Cb8", "selected": null},
};


function writeCheat(description, address, value){

    let string = `// ${description}\n`;
    string += `patch=1,EE,${address},extended,${value}\n`;

    return `${string}\n`;
}


const _selectedCheats = {
    "power": null,
    "cash": null
};

console.log(FLOAT_VALUES);

function createOption(elem, displayValue, value){

    const option = document.createElement("option");
    option.value = value;
    option.innerHTML = displayValue;
    elem.appendChild(option);
}

const DEFAULT_OUTPUT = `gametitle=Gran Turismo 3 [SCES_502.94;1]PAL [B590CE04]\n\n`;

function setOutput(displayValue, value){

    console.log(arguments);

    const elem = document.querySelector("#output");


    let string = DEFAULT_OUTPUT;


    if(_selectedCheats.power !== null){

        const v = _selectedCheats.power;

        string += writeCheat(
            `Global Car Power Multiplier: ${v.displayValue}`, 
            ADDRESSES.globalPower.address,
            v.value
        );
    }

    if(_selectedCheats.cash !== null){

        const v = _selectedCheats.cash;
        
        string += writeCheat(
            `Career CASH: ${v.displayValue}`, 
            ADDRESSES.cash.address,
            v.value
        );
    }

    elem.innerHTML = string.replaceAll("\n","<br/>");
}

function setPowerDropDown(){

    const elem = document.querySelector("#power-multiplier");

    for(let i = 0; i < POWER_MULTIPLIERS.length; i++){

        const {displayValue, value} = POWER_MULTIPLIERS[i];

        createOption(elem, displayValue, value);
    }

    elem.addEventListener("change", (e) =>{

        const selectedIndex = e.target.selectedIndex - 1;

        console.log(selectedIndex);

        if(selectedIndex < 0){
            _selectedCheats.power = null;      
        }else{

            _selectedCheats.power = {
                "displayValue": POWER_MULTIPLIERS[selectedIndex].displayValue, 
                "value": e.target.value
            };

        }

        setOutput();
    }); 
}


function setCashDropDown(){

    const elem = document.querySelector("#cash");

    for(let i = 0; i < CASH_VALUES.length; i++){

        const {displayValue, value} = CASH_VALUES[i];

        createOption(elem, displayValue, value);
    }

    elem.addEventListener("change", (e) =>{

        const selectedIndex = e.target.selectedIndex - 1;

        console.log(selectedIndex);

        if(selectedIndex < 0){
            _selectedCheats.cash = null;      
        }else{

            _selectedCheats.cash = {
                "displayValue": CASH_VALUES[selectedIndex].displayValue, 
                "value": e.target.value
            };

        }

        setOutput();
    }); 
}


//TODO: create a generic function for setting dropdowns and their events


(() =>{

    setPowerDropDown();
    setCashDropDown();
    setOutput();

})();