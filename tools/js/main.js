const FLOAT_VALUES = {
    0.1: "3dcccccd",
    0.2: "3e4ccccd",
    0.25: "3e800000",
    0.3: "3e99999a",
    0.4: "3ecccccd",
    0.5:  "3f000000",
    0.6: "3f19999a",
    0.7: "3f400000",
    0.8: "3f4ccccd",
    0.9: "3f666666",
    1: "3f800000",
    1.05: "3f866666",
    1.1: "3f8ccccd",
    1.15: "3f933333",
    1.2: "3f99999a",
    1.25: "3fa00000",
    1.3: "3fa66666",
    1.4: "3fb33333",
    1.5:"3fc00000",
    1.75: "3fe00000",
    2: "40000000",
    2.5: "40200000",
    3: "40400000",
    3.5: "40600000",
    4: "40800000",
    4.5: "40900000",
    5: "40a00000",
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
    {"displayValue": "500 Times Power", "value": "45992000"},
    {"displayValue": "1000 Times Power", "value": "46192000"},
    {"displayValue": "1337 Times Power", "value": "464cba67"},
    {"displayValue": "2000 Times Power", "value": "46992000"},
    {"displayValue": "3000 Times Power", "value": "46e5b000"},
    {"displayValue": "4000 Times Power", "value": "47192000"},
    {"displayValue": "5000 Times Power", "value": "473f6800"},
    {"displayValue": "10000 Times Power", "value": "47bf6800"},
    {"displayValue": "100000 Times Power", "value": "496f4200"},
    {"displayValue": "1000000 Times Power", "value": "4b158940"},
];

const CASH_VALUES = [
    {"displayValue": "9,999,999", "value": "0098967F"}
];

//default 0.1000000015
const DRAG_VALUES = [//be4ccccd

    {"displayValue": "-10.0", "value": "c1200000"},
    {"displayValue": "-9.0", "value": "c1100000"},
    {"displayValue": "-8.0", "value": "c1000000"},
    {"displayValue": "-7.0", "value": "c0e00000"},
    {"displayValue": "-6.0", "value": "c0c00000"},
    {"displayValue": "-5.0", "value": "c0a00000"},
    {"displayValue": "-4.5", "value": "c0900000"},
    {"displayValue": "-4.0", "value": "c0800000"},
    {"displayValue": "-3.5", "value": "c0600000"},
    {"displayValue": "-3.0", "value": "c0400000"},
    {"displayValue": "-2.5", "value": "c0200000"},
    {"displayValue": "-2.0", "value": "c0000000"},
    {"displayValue": "-1.5", "value": "3e19999a"},
    {"displayValue": "-1.0", "value": "bf800000"},
    {"displayValue": "0", "value": "00000000"},
    {"displayValue": "Normal (0.1000000015)", "value": "3dcccccd"},
    {"displayValue": "1", "value": "3f800000"},
    {"displayValue": "2", "value": "40000000"},
    {"displayValue": "3", "value": "40400000"},
    {"displayValue": "4", "value": "40800000"},
    {"displayValue": "5", "value": "40a00000"},
];

const gearDefault = 0.001000000047;
const gripDefault = 0.001000000047;

const GEAR_VALUES = [//be4ccccd
    {"displayValue": `Default`, "value": "3a83126f"},
    {"displayValue": `90%`, "value": "3a6bedfb"},
    {"displayValue": `80%`, "value": "3a51b718"},
    {"displayValue": `70%`, "value": "3a378035"},
    {"displayValue": `60%`, "value": "3a1d4952"},
    {"displayValue": "50%", "value": "3a03126f"},
    {"displayValue": "40%", "value": "39d1b718"},
    {"displayValue": "30%", "value": "399d4952"},
    {"displayValue": "25%", "value": "3983126f"},
    {"displayValue": "10%", "value": "38d1b717"},
];
//9800
const TYRE_WEAR_SCALE_VALUES = [
    {"displayValue": "10000% Scale", "value": "42c40000"},
    {"displayValue": "1000% Scale", "value": "44750000"},
    {"displayValue": "Default", "value": "46192000"},//value might be wrong(hex i mean)
    {"displayValue": "90% Scale", "value": "4609d000"},
    {"displayValue": "80% Scale", "value": "45f50000"},
    {"displayValue": "70% Scale", "value": "45d66000"},
    {"displayValue": "60% Scale", "value": "45b7c000"},
    {"displayValue": "50% Scale", "value": "45992000"},
    {"displayValue": "40% Scale", "value": "45750000"},
    {"displayValue": "30% Scale", "value": "4537c000"},
    {"displayValue": "20% Scale", "value": "44f50000"},
    {"displayValue": "10% Scale", "value": "47bf6800"},
    {"displayValue": "1% Scale", "value": "496f4200"},
];

const GRAVITY_VALES = [
    {"displayValue": "Earth", "value": "411ce979"},
    {"displayValue": "Sun", "value": "43890000"},
    {"displayValue": "Moon", "value": "3fcf5c29"},
    {"displayValue": "Jupiter", "value": "41c651ec"},
    {"displayValue": "Double Sun", "value": "44090000"},
    {"displayValue": "4x Sun", "value": "44890000"},
    {"displayValue": "8x Sun", "value": "45090000"},
    //44090000
];

const GRIP_VALUES = [
    {"displayValue": "25%", "value": "3983126f"},//
    {"displayValue": "50%", "value": "3a03126f"},//
    {"displayValue": "75%", "value": "3a449ba6"},//
    {"displayValue": "Normal", "value": "3a83126f"},//
    {"displayValue": "125%", "value": "3aa3d70b"},//
    {"displayValue": "150%", "value": "3ac49ba6"},//
    {"displayValue": "175%", "value": "3ae56042"},//
    {"displayValue": "200%", "value": "3b03126f"},//
    {"displayValue": "300%", "value": "3b449ba6"},//
    {"displayValue": "400%", "value": "3b83126f"},//
    {"displayValue": "500%", "value": "3ba3d70b"},//3bc49ba6
    {"displayValue": "600%", "value": "3bc49ba6"},//
    {"displayValue": "700%", "value": "3be56042"},//
    {"displayValue": "800%", "value": "3c03126f"},//
    {"displayValue": "900%", "value": "3c1374bd"},//
    {"displayValue": "1000%", "value": "3c23d70b"},//
    {"displayValue": "2000%", "value": "3ca3d70b"},//
    {"displayValue": "3000%", "value": "3cf5c290"},//
    {"displayValue": "4000%", "value": "3d23d70b"},//
    {"displayValue": "5000%", "value": "3d4ccccd"},//
    {"displayValue": "10000%", "value": "3dcccccd"},//

    //
];

const GAME_REGIONS = [
    {"displayValue": "PAL", "value": "pal"},
    {"displayValue": "NTSC", "value": "ntsc"},
];

const WALL_VALUES = [];

const WEIGHT_VALUES = [
    {"displayValue": "1KG", "value": "3f800000"},
];

const TARGET_LAPS = [];

for(let i = 1; i <= 200; i++){

    let hex = i.toString(16);

    const hLength = hex.length;

    for(let x = 0; x < 8 - hLength; x++){

        hex = `0${hex}`;
    }

    TARGET_LAPS.push({"displayValue": `${i} Lap${(i > 1) ? "s" : ""}`, "value": hex.toUpperCase()});
}



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

let _region = "ntsc";
const _groups = {
    "aiThrottleAsGroup" : false,
    "aiRubberbandAsGroup" : false,
};

const ADDRESSES = {
    //PAL 209539F8 NTSC //20958EF8
    "cash": {
        "displayValue": "Money", 
        "address": {"pal": "209539F8", "ntsc": "20958EF8"}, 
        "selected": null,
        "info": "Career cash value",
        "options": CASH_VALUES
    },
    // PAL 20351Cb8  9.800000191 // NTSC 2035032C // 
    "power": {
        "displayValue": "Global Power Multiplier", 
        "address": {"pal": "20351Cb8", "ntsc": "2035032C"}, 
        "selected": null,
        "info": "Global power scale, higher the value the more power every car will have.",
        "options": POWER_MULTIPLIERS
    },
    //203501D4 //default 0.001000000047
    "grip": {
        "displayValue": "Global Grip Multiplier", 
        "address": {"pal": null, "ntsc": "203501D4"}, 
        "selected": null,
        "info": "Car grip multiplier",
        "options": GRIP_VALUES
    },
    //9800 default value // PAL 20351B5c NTSC 203501D0 // offset 6540
    "tyreWear": {
        "displayValue": "Global Tyre Wear Multiplier", 
        "address": {"pal": "20351B5c", "ntsc": "203501D0"}, 
        "selected": null,
        "info": "This affects all cars tyre wear, the lower the percentage the longer the tyres last.",
        "options": TYRE_WEAR_SCALE_VALUES
    },
    //default value 0.1000000015
    "drag": {
        "displayValue": "Global Drag", 
        "address": {"pal": "20351B70", "ntsc": "203501E4"}, 
        "selected": null,
        "info": "Global drag force applied to all cars, if you use a negative value cars will speed up the faster they go until the game crashes, higher values make it harder to reach max speeds.",
        "warning": "Don&apos;t go too crazy on maps with longer straights as the game will crash if you are unlucky.",
        "options": DRAG_VALUES
    },
    //default value 0.001000000047 // PAL 20351d0c // NTSC 20350380
    "gearScale": {
        "displayValue": "Global Gear Scale", 
        "address": {"pal": "20351d0c", "ntsc": "20350380"}, 
        "selected": null,
        "info": "This affects all cars gear ratios, the lower the percentage the longer the gears will be, I recommened 80% or 90% if you use a power multiplier > 200%.",
        "options": GEAR_VALUES
    },
    //doesn't effect HUD display
    "targetLaps": {
        "displayValue": "Single Race Target Laps", 
        "address": {"pal": "", "ntsc": "01FCBB55"}, 
        "selected": null,
        "info": "Set the target amount of laps for races to this value(does not effect hud display, does not work in Championship races).",
        "options": TARGET_LAPS,
    },
    //default value 9.800000191, PAL 20351ED4 NTSC 20350544 //offset of 6544
    "gravity": {
        "displayValue": "Gravity",
        "address": {"pal": "20351ED4", "ntsc": "20350544"}, 
        "selected": null,
        "info": "Global Gravity",
        "options": GRAVITY_VALES
    },

    //default value -1.049999952
   /* "wallThing":{
        "displayValue": "Wall Pushback",
        "address": {"pal": "20352054", "ntsc": ""}, 
        "selected": null,
        "info": "Force applied when hitting walls",
        "options": WALL_VALUES
    },*/

    "licenseTestCarWeight":{
        "displayValue": "License Test Car Weight",
        "address": {"pal": "", "ntsc": "21FF14D4"}, 
        "selected": null,
        "info": "Set the cars weight for license tests.",
        "options": WEIGHT_VALUES
    },
    "singleRaceCarWeight":{
        "displayValue": "Single Race Car Weight",
        "address": {"pal": "", "ntsc": "21FBD934"}, 
        "selected": null,
        "info": "Set the cars weight for single race events.",
        "options": WEIGHT_VALUES
    },
    "aiRubberbandAll": {
        "displayValue": "ALL AI Rubberband", 
        //"address": {"pal": "21FBFEF8", "ntsc": "21FC15D4"}, 
        "selected": null,
        "bIgnore": true
    },

    //PAL 21FC0460 //NTSC 21FC0460
    "aiRubberband1": {
        "displayValue": "AI Rubberband #1", 
        "address": {"pal": "21FC0460", "ntsc": "21FC0460"}, 
        "selected": null,
        "info": "The higher the number the faster the AI will be.",
        "warning": "Do not use if you want to do the license tests, it will crash the game on the NTSC version.",
        "options": AI_RUBBERBAND_VALUES,
        "group": "ai_rubber",
        "groupTitle": "AI Rubberband"
    },
    //PAL 21FC1B3C //NTSC 21FC1B3C
    "aiRubberband2": {
        "displayValue": "AI Rubberband #2", 
        "address": {"pal": "21FC1B3C", "ntsc": "21FC1B3C"}, 
        "selected": null,
        "options": AI_RUBBERBAND_VALUES,
        "group": "ai_rubber"
    },
    //PAL 21FC3218 //NTSC 21FC48F4
    "aiRubberband3": {
        "displayValue": "AI Rubberband #3", 
        "address": {"pal": "21FC3218", "ntsc": "21FC3218"}, 
        "selected": null,
        "options": AI_RUBBERBAND_VALUES,
        "group": "ai_rubber"
    },
    //PAL 21FC48F4 //NTSC 21FC5FD0
    "aiRubberband4": {
        "displayValue": "AI Rubberband #4", 
        "address": {"pal": "21FC48F4", "ntsc": "21FC48F4"}, 
        "selected": null,
        "options": AI_RUBBERBAND_VALUES,
        "group": "ai_rubber"
    },
    //PAL 21FC5FD0 //NTSC 21FC3218
    "aiRubberband5": {
        "displayValue": "AI Rubberband #5", 
        "address": {"pal": "21FC5FD0", "ntsc": "21FC5FD0"}, 
        "selected": null,
        "options": AI_RUBBERBAND_VALUES,
        "group": "ai_rubber"
    },
    
    
    //PAL 21FBFEF8  //NTSC 21FC15D4
    "aiMaxThrottleAll": {
        "displayValue": "ALL AI MAX Throttle", 
        //"address": {"pal": "21FBFEF8", "ntsc": "21FC15D4"}, 
        "selected": null,
        "bIgnore": true
    },
    "aiMaxThrottle1": {
        "displayValue": "AI MAX Throttle #1", 
        "address": {"pal": "21FBFEF8", "ntsc": "21FC15D4"}, 
        "selected": null,
        "info": `In easier events the AI cars will not use 100&percnt; throttle to make it easier for the player, setting it to 100&percnt; stops this from happening.
        You can also set it to more than 100&percnt; but it will not affect turbo cars.`,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "ai_throttle",
        "groupTitle": "AI Max Throttle"
    },
    //PAL 21FC15D4  //NTSC 21FC2CB0
    "aiMaxThrottle2": {
        "displayValue": "AI MAX Throttle #2", 
        "address": {"pal": "21FC15D4", "ntsc": "21FC2CB0"}, 
        "selected": null,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "ai_throttle"
        
    },
    //PAL 21FC2CB0  //NTSC 21FC438C
    "aiMaxThrottle3": {
        "displayValue": "AI MAX Throttle #3", 
        "address": {"pal": "21FC2CB0", "ntsc": "21FC438C"}, 
        "selected": null,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "ai_throttle"
    },
    //PAL 21FC438C  //NTSC 21FBFEF8
    "aiMaxThrottle4": {
        "displayValue": "AI MAX Throttle #4", 
        "address": {"pal": "21FC438C", "ntsc": "21FBFEF8"}, 
        "selected": null,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "ai_throttle"
    }, 
    //PAL 21FC5A68  //NTSC 21FC5A68
    "aiMaxThrottle5": {
        "displayValue": "AI MAX Throttle #5", 
        "address": {"pal": "21FC5A68", "ntsc": "21FC5A68"}, 
        "selected": null,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "ai_throttle"
    },
    "arcadeAiRubberband1": {
        "displayValue": "AI Rubberband #1", 
        "address": {"pal": "", "ntsc": "21FBE340"}, 
        "selected": null,
        "info": "The higher the number the faster the AI will be.",
        "options": AI_RUBBERBAND_VALUES,
        "group": "arcade_ai_rubber",
        "groupTitle": "Arcade AI Rubberband"
    },
    "arcadeAiRubberband2": {
        "displayValue": "AI Rubberband #2", 
        "address": {"pal": "", "ntsc": "21FBFA1C"}, 
        "selected": null,
        "info": "The higher the number the faster the AI will be.",
        "options": AI_RUBBERBAND_VALUES,
        "group": "arcade_ai_rubber",
        "groupTitle": "Arcade AI Rubberband"
    },
    "arcadeAiRubberband3": {
        "displayValue": "AI Rubberband #3", 
        "address": {"pal": "", "ntsc": "21FC10F8"}, 
        "selected": null,
        "info": "The higher the number the faster the AI will be.",
        "options": AI_RUBBERBAND_VALUES,
        "group": "arcade_ai_rubber",
        "groupTitle": "Arcade AI Rubberband"
    },
    "arcadeAiRubberband4": {
        "displayValue": "AI Rubberband #4", 
        "address": {"pal": "", "ntsc": "21FC27D4"}, 
        "selected": null,
        "info": "The higher the number the faster the AI will be.",
        "options": AI_RUBBERBAND_VALUES,
        "group": "arcade_ai_rubber",
        "groupTitle": "Arcade AI Rubberband"
    },
    "arcadeAiRubberband5": {
        "displayValue": "AI Rubberband #5", 
        "address": {"pal": "", "ntsc": "21FC3EB0"}, 
        "selected": null,
        "info": "The higher the number the faster the AI will be.",
        "options": AI_RUBBERBAND_VALUES,
        "group": "arcade_ai_rubber",
        "groupTitle": "Arcade AI Rubberband"
    },
    "arcadeAiMaxThrottle1": {
        "displayValue": "AI MAX Throttle #1", 
        "address": {"pal": "", "ntsc": "21FBDDD8"}, 
        "selected": null,
        "info": `In easier events the AI cars will not use 100&percnt; throttle to make it easier for the player, setting it to 100&percnt; stops this from happening.
        You can also set it to more than 100&percnt; but it will not affect turbo cars.`,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "arcade_ai_throttle",
        "groupTitle": "Arcade AI Max Throttle"
    },
    "arcadeAiMaxThrottle2": {
        "displayValue": "AI MAX Throttle #2", 
        "address": {"pal": "", "ntsc": "21FBF4B4"}, 
        "selected": null,
        "info": `In easier events the AI cars will not use 100&percnt; throttle to make it easier for the player, setting it to 100&percnt; stops this from happening.
        You can also set it to more than 100&percnt; but it will not affect turbo cars.`,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "arcade_ai_throttle",
        "groupTitle": "Arcade AI Max Throttle"
    },
    "arcadeAiMaxThrottle3": {
        "displayValue": "AI MAX Throttle #3", 
        "address": {"pal": "", "ntsc": "21FC0B90"}, 
        "selected": null,
        "info": `In easier events the AI cars will not use 100&percnt; throttle to make it easier for the player, setting it to 100&percnt; stops this from happening.
        You can also set it to more than 100&percnt; but it will not affect turbo cars.`,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "arcade_ai_throttle",
        "groupTitle": "Arcade AI Max Throttle"
    },
    "arcadeAiMaxThrottle4": {
        "displayValue": "AI MAX Throttle #4", 
        "address": {"pal": "", "ntsc": "21FC226C"}, 
        "selected": null,
        "info": `In easier events the AI cars will not use 100&percnt; throttle to make it easier for the player, setting it to 100&percnt; stops this from happening.
        You can also set it to more than 100&percnt; but it will not affect turbo cars.`,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "arcade_ai_throttle",
        "groupTitle": "Arcade AI Max Throttle"
    },
    "arcadeAiMaxThrottle5": {
        "displayValue": "AI MAX Throttle #5", 
        "address": {"pal": "", "ntsc": "21FC3948"}, 
        "selected": null,
        "info": `In easier events the AI cars will not use 100&percnt; throttle to make it easier for the player, setting it to 100&percnt; stops this from happening.
        You can also set it to more than 100&percnt; but it will not affect turbo cars.`,
        "options": AI_MAX_THROTTLE_VALUES,
        "group": "arcade_ai_throttle",
        "groupTitle": "Arcade AI Max Throttle"
    },
    
    
    //PAL 21FBFEF8  //NTSC 21FC15D4
   /* "aiMaxThrottleAll": {
        "displayValue": "ALL AI MAX Throttle", 
        //"address": {"pal": "21FBFEF8", "ntsc": "21FC15D4"}, 
        "selected": null,
        "bIgnore": true
    },*/
    
};


function writeCheat(description, address, value){

    let string = `// ${description}\n`;
    string += `patch=1,EE,${address},extended,${value}\n`;

    return `${string}\n`;
}

function writeGroupCheat(description, addresses, value){

    let string = `// ${description}\n`;

    for(let i = 0; i < addresses.length; i++){
        string += `patch=1,EE,${addresses[i]},extended,${value}\n`;
    }

    return `${string}\n`;

}

function createOption(elem, displayValue, value){

    const option = document.createElement("option");
    option.value = value;
    option.innerHTML = displayValue;
    elem.appendChild(option);
}

const DEFAULT_OUTPUT = `gametitle=Gran Turismo 3 [SCES_502.94;1]PAL [B590CE04]\n\n`;
const NTSC_DEFAULT_OUTPUT = `gametitle=Gran Turismo 3 [PBPX_955.03;1]NTSC [8AA991B0]\n\n`;


function updateDownload(data, region){

    const download = document.querySelector("#download");

    if(region === "ntsc"){
        fileName = "8AA991B0";
    }else if(region === "pal"){
        fileName = "B590CE04";
    }else{
        fileName = "Unknown";
    }


    const rawData = new Blob([data]);

    download.download = `${fileName}.pnach`;

    download.href = URL.createObjectURL(rawData);
}

/**
 * 
 * @param {*} region 
 * @param {*} key 
 * @param {*} comment 
 * @param {*} forceTargetKey only used for groups, basically make the function use the value stored in that address key instead of the normal key
 * @returns 
 */
function createCheatLine(region, key, comment, forceTargetKey){

    if(ADDRESSES[key] === undefined){
        throw new Error(`ADDRESSES[${key}] is undefined.`);
    }

    let value = 0;
    let displayValue = "";

    const address = ADDRESSES[key];
    if(address.selected == null && forceTargetKey === undefined) return "";

    if(address.selected != undefined){
        value = address.selected.value ?? 0;
        displayValue = address.selected.displayValue;
    }

    if(forceTargetKey !== undefined){

        if(ADDRESSES[forceTargetKey].selected === null) return;
        value = ADDRESSES[forceTargetKey].selected.value;
        displayValue = ADDRESSES[forceTargetKey].selected.displayValue;
    }


    if(address.address[region] === undefined){
        throw new Error(`ADDRESSES[${key}].${region} is undefined`);
    }

    return writeCheat(
        `${comment}: ${displayValue}`, 
        address.address[region],
        value
    );
}

function setOutput(){

    const elem = document.querySelector("#output");

    let string = "";

    if(_region === "pal"){
        string = DEFAULT_OUTPUT;
    }else if(_region === "ntsc"){
        string = NTSC_DEFAULT_OUTPUT;
    }

    for(const [key, value] of Object.entries(ADDRESSES)){

        if(value.bIgnore) continue;

        string += createCheatLine(_region, key, value.displayValue) ?? "";
    }

    elem.innerHTML = string.replaceAll("\n","<br/>");

    updateDownload(string, _region);
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

function createToggleGroupButton(parent, text, valueKey, groupElem, allElem, setOutput){

    parent = document.querySelector(parent);

    const wrapper = document.createElement("div");
    wrapper.className = "toggle-group";

    const header = document.createElement("div");
    header.className = "toggle-info";
    header.innerHTML = text;

    const button = document.createElement("div");
    button.className = "toggle-button";
    button.innerHTML = "False";

    button.addEventListener("click", () =>{

        _groups[valueKey] = !_groups[valueKey];
        const value = _groups[valueKey];
        

        if(value){
            button.className = `toggle-button toggle-enabled`;
            button.innerHTML = "True";
            groupElem.className = "hidden";
            allElem.className = "";
        }else{
            button.className = `toggle-button toggle-disabled`;
            button.innerHTML = "False";
            groupElem.className = "";
            allElem.className = "hidden";
        }

        setOutput();
    });


    wrapper.appendChild(header);
    wrapper.appendChild(button);
    parent.appendChild(wrapper);
}

function createSelectBox(cheatKey, cheat){

    const selectBox = document.createElement("select");
    
    //let selectOptions = `<option value="">-</option>`;

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerHTML = "-";

    selectBox.appendChild(defaultOption);

    for(let i = 0; i < cheat.options.length; i++){

        const o = cheat.options[i];

        const elem = document.createElement("option");
        elem.value = o.value;
        elem.innerHTML = o.displayValue;

        selectBox.appendChild(elem);

        //selectOptions += `<option value="${o.value}">${o.displayValue}</option>`;
    }

    selectBox.addEventListener("change", (e) =>{

        const selectedIndex = e.target.selectedIndex - 1;

        if(selectedIndex < 0){
            ADDRESSES[cheatKey].selected = null;      
        }else{

            ADDRESSES[cheatKey].selected = {
                "displayValue": cheat.options[selectedIndex].displayValue, 
                "value": e.target.value
            };

        }
        setOutput();
    }); 

    return selectBox;
}

function createDropDown(selectedCheatsKey, parentElem){

    const parent = document.querySelector(parentElem);

    const cheat = ADDRESSES[selectedCheatsKey];


    const wrapper = document.createElement("div");
    wrapper.className = "form-wrapper";

    const formInfo = document.createElement("div");
    formInfo.className = "form-info";

    const iHead = document.createElement("div");
    iHead.className = "form-info-header";
    iHead.innerHTML = cheat.displayValue ?? "Missing displayValue";

    const iContent = document.createElement("div");
    iContent.className = "form-info-content";
    iContent.innerHTML = cheat.info ?? "Missing info";



    const fItem = document.createElement("div");
    fItem.className = "form-item";

    const selectBox = createSelectBox(selectedCheatsKey, cheat); 
    /*const selectBox = document.createElement("select");
    
    let selectOptions = `<option value="">-</option>`;

    for(let i = 0; i < cheat.options.length; i++){

        const o = cheat.options[i];

        selectOptions += `<option value="${o.value}">${o.displayValue}</option>`;
    }

    selectBox.innerHTML = selectOptions;*/

    fItem.appendChild(selectBox);

    formInfo.appendChild(iHead);
    formInfo.appendChild(iContent);
    wrapper.appendChild(formInfo);
    if(cheat.warning !== undefined){

        const warn = document.createElement("div");
        warn.className = "warning";
        warn.innerHTML = cheat.warning;
        wrapper.appendChild(warn);
        
    }
    wrapper.appendChild(fItem);
    parent.appendChild(wrapper);
}

function createGroup(cheat){

    //create drop downs ehre inside a group elem

    const root = document.querySelector("#root");

    const elem = document.createElement("div");

    elem.id = cheat.group;
    elem.className = "group-wrapper";

    const header = document.createElement("div");
    header.className = "group-header";
    header.innerHTML = cheat.groupTitle ?? "Group title not set";
    

    const infoElem = document.createElement("div");
    infoElem.className = "group-info";
    infoElem.innerHTML = cheat.info;


    elem.appendChild(header);
    elem.appendChild(infoElem);

    if(cheat.warning !== undefined){

        const warning = document.createElement("div");
        warning.className = "warning";
        warning.innerHTML = cheat.warning;
        elem.appendChild(warning);
    }

    
    root.appendChild(elem);  
}

function addDropDownToGroup(parentElem, cheatKey, data){

    const parent = document.querySelector(parentElem);

    const wrapper = document.createElement("div");
    wrapper.className = "form-row";

    const label = document.createElement("div");
    label.className = "form-label";
    label.innerText = JSON.parse(JSON.stringify(data.displayValue));

    const item = document.createElement("div");
    item.className = "form-item";

    wrapper.appendChild(label);
    wrapper.appendChild(item);


    const selectBox = createSelectBox(cheatKey, data);
    item.appendChild(selectBox);

    parent.appendChild(wrapper);
}

function renderDropDowns(){


    const createdGroups = [];

    let i = 0;

    for(const [key, value] of Object.entries(ADDRESSES)){

        i++;

        if(value.bIgnore) continue;

        let targetElem = "#dummy";

        /*if(Array.isArray(value)){
            console.log("ASFDSAFSA");

            createGroup(value);
            continue;
        }*/
        

 

        if(value.group !== undefined){

            if(createdGroups.indexOf(value.group) === -1){
                createdGroups.push(value.group);
                createGroup(value);
            }

            targetElem = `#${value.group}`;
            
            addDropDownToGroup(targetElem, key, value);
            continue;
        }


        //replace #dummy with group id if it exists
        createDropDown(key, targetElem);
    }
}

(() =>{

    const rElem = document.querySelector("#region");

    rElem.addEventListener("change", (e) =>{
        _region = e.target.value;
        setOutput();
        iDontKnowWhatToCallThis();
    });
   
    const throttleGroup = document.querySelector("#throttle-default");
    const throttleAll = document.querySelector("#throttle-all");

    const rubberbandGroup = document.querySelector("#rubberband-default");
    const rubberbandAll = document.querySelector("#rubberband-all");

    renderDropDowns();


    /*setDropDown("#rb-all", AI_RUBBERBAND_VALUES, "aiRubberbandAll");
    setDropDown("#rb-1", AI_RUBBERBAND_VALUES, "aiRubberband1");
    setDropDown("#rb-2", AI_RUBBERBAND_VALUES, "aiRubberband2");
    setDropDown("#rb-3", AI_RUBBERBAND_VALUES, "aiRubberband3");
    setDropDown("#rb-4", AI_RUBBERBAND_VALUES, "aiRubberband4");
    setDropDown("#rb-5", AI_RUBBERBAND_VALUES, "aiRubberband5");

    setDropDown("#mf-all", AI_MAX_THROTTLE_VALUES, "aiMaxThrottleAll");
    setDropDown("#mf-1", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle1");
    setDropDown("#mf-2", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle2");
    setDropDown("#mf-3", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle3");
    setDropDown("#mf-4", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle4");
    setDropDown("#mf-5", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle5");*/

   // createToggleGroupButton("#ai-throttle-group", "One value for all the AI Cars Max Throttle", "aiThrottleAsGroup", throttleGroup, throttleAll, setOutput);
    //createToggleGroupButton("#ai-rubberband-group", "One value for all the AI Cars Rubberband", "aiRubberbandAsGroup", rubberbandGroup, rubberbandAll, setOutput);

    setOutput();

    
})();