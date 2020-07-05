var optionsApplied = [];

let optionsAppliedObj = {
    // basic/default values
    isRectangle: false,
    glass: {
        name: 'Float ',
        price: 0,
        thickness: 15
    },
    legs: {
        name: 'Wild Oak',
        price: 0
    },
    application: {
        name: 'High Chrome Finish',
        price: 0,
    },
    width: {
        size: 800,
        price: 0,

    },
    length: {
        size: 1100,
        price: 0,
        
    },
    height: {
        size: 425,
        price: 0,
    }
};

function verifyIfRectangle(){
    if (optionsAppliedObj.width.size === optionsAppliedObj.length.size){
        optionsAppliedObj.isRectangle = true;
    }else{
        optionsAppliedObj.isRectangle = false;
    }
}

function addToFinalObject(sectionObj, valueObj){
    
    switch (sectionObj.sectionName){
        case "glass":
            optionsAppliedObj.glass = valueObj;
            break;
        case "legs":
            optionsAppliedObj.legs = valueObj;
            break;
        case "application":
            optionsAppliedObj.application = valueObj;
            break;
        case "Height":
            optionsAppliedObj.height = valueObj;
            break;
        case "Length":
            optionsAppliedObj.length = valueObj;
            break;
        case "Width":
            optionsAppliedObj.width = valueObj;
            break;
    }
    verifyIfRectangle();
}