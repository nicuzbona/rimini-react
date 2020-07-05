const overviewContent = {
    title: 'Overview',
    model: ['Couchtisch', 'Another Model'],
    width: '800',
    length: '1100',
    high: '425',
    legs: 'Natural Beech',
    glass: 'Float ',
    glas_thikness: 15,
    application: 'Golden Painted'
}


function handleSizeChange(sliderName, valueObj){
    if(sliderName === 'Width')
        overviewContent.width = valueObj.size;
    else if(sliderName === 'Length')
    overviewContent.length = valueObj.size;

    refreshOverview();
}

function handleHeightChange(value){
    overviewContent.high = value;
    refreshOverview();
}

function handleGlassChange(value){
    overviewContent.glass = value.name;
    overviewContent.glas_thikness = value.thickness;
    refreshOverview();
}
function handleLegsChange(value){
    overviewContent.legs = value.name
    refreshOverview();
}
function handleApplicationChange(value){
    overviewContent.application = value.name;
    refreshOverview();
}

function handleOverviewChange(sliderName, valueObj){
    // console.log(sliderName);
    if(sliderName === 'Width' || sliderName === 'Length'){
        handleSizeChange(sliderName, valueObj);
    }
    else if(sliderName === 'Height'){
        handleHeightChange(valueObj.size);
    }
    else if(sliderName === 'glass'){
        handleGlassChange(valueObj);
    }
    else if(sliderName === 'legs' || sliderName === 'legs_colors'){
        handleLegsChange(valueObj);
    }
    else if(sliderName === 'application'){
        handleApplicationChange(valueObj);
    }
}

function refreshOverview(){

    $(() => {
        $('.overview__title').text(overviewContent.title);
        $('.overview__model span').text(overviewContent.model[0]);
        $('.overview__size span').text(`${overviewContent.width}mm x ${overviewContent.length}mm`);
        $('.overview__high span').text(overviewContent.high + " " + "mm");
        $('.overview__legs span').text(overviewContent.legs);
        $('.overview__glas-thikness span').text(`${overviewContent.glass}/ ${overviewContent.glas_thikness}mm`);
        $('.overview__application span').text(overviewContent.application);
    });
}

refreshOverview();
