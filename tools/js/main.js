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

const AI_RUBBERBAND_VALUES = [];
const AI_MAX_THROTTLE_VALUES = [];

for(const [displayValue, value] of Object.entries(FLOAT_VALUES)){

    const display = `${displayValue} - (${(displayValue * 100).toFixed(2)}%)`;

    AI_RUBBERBAND_VALUES.push({
        "displayValue": display , "value": value
    });

    AI_MAX_THROTTLE_VALUES.push({
        "displayValue": display, "value": value
    });
    
}

function sortByDisplayValue(a, b){
    a = a.displayValue;
    b = b.displayValue;

    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}

AI_RUBBERBAND_VALUES.sort(sortByDisplayValue);
AI_MAX_THROTTLE_VALUES.sort(sortByDisplayValue);

const ADDRESSES = {
    "cash": {"displayValue": "Money", "address": "0098967F", "selected": null},
    "power": {"displayValue": "Global Power Multiplier", "address": "20351Cb8", "selected": null},
    "aiRubberband1": {"displayValue": "AI Rubberband #1", "address": "21FC0460", "selected": null},
    "aiRubberband2": {"displayValue": "AI Rubberband #2", "address": "21FC1B3C", "selected": null},
    "aiRubberband3": {"displayValue": "AI Rubberband #3", "address": "21FC5FD0", "selected": null},
    "aiRubberband4": {"displayValue": "AI Rubberband #4", "address": "21FC3218", "selected": null},
    "aiRubberband5": {"displayValue": "AI Rubberband #5", "address": "21FC48F4", "selected": null},
    "aiMaxThrottle1": {"displayValue": "AI MAX Throttle #1", "address": "21FC438C", "selected": null},
    "aiMaxThrottle2": {"displayValue": "AI MAX Throttle #2", "address": "21FBFEF8", "selected": null},
    "aiMaxThrottle3": {"displayValue": "AI MAX Throttle #3", "address": "21FC15D4", "selected": null},
    "aiMaxThrottle4": {"displayValue": "AI MAX Throttle #4", "address": "21FC2CB0", "selected": null},
    "aiMaxThrottle5": {"displayValue": "AI MAX Throttle #5", "address": "21FC5A68", "selected": null},
};


function writeCheat(description, address, value){

    let string = `// ${description}\n`;
    string += `patch=1,EE,${address},extended,${value}\n`;

    return `${string}\n`;
}


function createOption(elem, displayValue, value){

    const option = document.createElement("option");
    option.value = value;
    option.innerHTML = displayValue;
    elem.appendChild(option);
}

const DEFAULT_OUTPUT = `gametitle=Gran Turismo 3 [SCES_502.94;1]PAL [B590CE04]\n\n`;

function setOutput(){

    const elem = document.querySelector("#output");

    let string = DEFAULT_OUTPUT;

    if(ADDRESSES.power.selected !== null){

        const v = ADDRESSES.power;

        string += writeCheat(
            `Global Car Power Multiplier: ${v.selected.displayValue}`, 
            v.address,
            v.selected.value
        );
    }

    if(ADDRESSES.cash.selected !== null){

        const v = ADDRESSES.cash;
        
        string += writeCheat(
            `Career CASH: ${v.selected.displayValue}`, 
            v.address,
            v.selected.value
        );
    }

    for(let i = 1; i < 6; i++){

        const key = `aiRubberband${i}`;

        if(ADDRESSES[key].selected !== null){

            const v = ADDRESSES[key];
        
            string += writeCheat(
                `AI Rubberband #${i}: ${v.selected.displayValue}`, 
                ADDRESSES[key].address,
                v.selected.value
            );
        }
    }

    for(let i = 1; i < 6; i++){

        const key = `aiMaxThrottle${i}`;

        if(ADDRESSES[key].selected !== null){

            const v = ADDRESSES[key];
        
            string += writeCheat(
                `AI Max Throttle #${i}: ${v.selected.displayValue}`, 
                ADDRESSES[key].address,
                v.selected.value
            );
        }
    }

    elem.innerHTML = string.replaceAll("\n","<br/>");
}

function setDropDown(id, options, selectedCheatsKey){

    const elem = document.querySelector(id);

    for(let i = 0; i < options.length; i++){

        const {displayValue, value} = options[i];

        createOption(elem, displayValue, value);
    }

    elem.addEventListener("change", (e) =>{

        const selectedIndex = e.target.selectedIndex - 1;

        if(selectedIndex < 0){
            ADDRESSES[selectedCheatsKey].selected = null;      
        }else{

            ADDRESSES[selectedCheatsKey].selected = {
                "displayValue": options[selectedIndex].displayValue, 
                "value": e.target.value
            };

        }
        setOutput();
    }); 
}

(() =>{

    setDropDown("#power-multiplier", POWER_MULTIPLIERS, "power");
    setDropDown("#cash", CASH_VALUES, "cash");

    setDropDown("#rb-1", AI_RUBBERBAND_VALUES, "aiRubberband1");
    setDropDown("#rb-2", AI_RUBBERBAND_VALUES, "aiRubberband2");
    setDropDown("#rb-3", AI_RUBBERBAND_VALUES, "aiRubberband3");
    setDropDown("#rb-4", AI_RUBBERBAND_VALUES, "aiRubberband4");
    setDropDown("#rb-5", AI_RUBBERBAND_VALUES, "aiRubberband5");

    setDropDown("#mf-1", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle1");
    setDropDown("#mf-2", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle2");
    setDropDown("#mf-3", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle3");
    setDropDown("#mf-4", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle4");
    setDropDown("#mf-5", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle5");

    setOutput();

})();