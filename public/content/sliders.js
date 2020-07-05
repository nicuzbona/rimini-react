const firstSliderContent = {
    title: 'Choose your floor for animation:'
};

const secondSliderContent = {
    linkList: ['Glas', 'Table Legs', 'Application'],
    slidersContent: [
        {   
            sectionName: 'glass',
            images: [
                        {
                            id: 0,
                            src: './images/glass/glass_float.png',
                            price: 90,
                            section: 'glass',
                            name: 'Float',
                            thickness: 15
                        },
                        {
                            id: 1,
                            src: './images/glass/glass_smoked.png',
                            price: 90,
                            section: 'glass',
                            name: 'Smoked ',
                            thickness: 12
                        },
                        {
                            id: 2,
                            src: './images/glass/glass_clear.png',
                            price: 90,
                            section: 'glass',
                            name: 'Extra Clear Glass Optiwhite ',
                            thickness: 12
                        },
                        
                        // {
                        //     id: 3,
                        //     src: './images/glass/glass_milk.png',
                        //     price: 80,
                        //     section: 'glass',
                        //     name: 'Milk ',
                        //     thickness: 10
                        // },
                        {
                            id: 4,
                            src: './images/glass/glass_optiwhite_satinato_10.png',
                            price: 90,
                            section: 'glass',
                            name: 'Extra Clear Satin Glass Optiwhite Satinato ',
                            thickness: 10
                        },
                        // {
                        //     id: 5,
                        //     src: './images/glass/glass_float_19.png',
                        //     price: 0,
                        //     section: 'glass',
                        //     name: 'Float ',
                        //     thickness: 15
                        // }
            ]
        },
        {   
            sectionName: 'legs',
            images: [
                        // {
                        //     id: 0,
                        //     src: './images/legs/legs_walnut.png',
                        //     price: 0,
                        //     minPrice: 244,
                        //     maxPrice: 596,
                        //     section: 'legs',
                        //     name: 'Walnut '
                        // },
                        // {
                        //     id: 1,
                        //     src: './images/legs/legs_beech_hearthwood.png',
                        //     price: 0,
                        //     minPrice: 244,
                        //     maxPrice: 596,
                        //     section: 'legs',
                        //     name: 'Beech Heartwood '
                        // },
                        {
                            id: 2,
                            src: './images/legs/legs_natural_beech.png',
                            price: 0,
                            minPrice: 244,
                            maxPrice: 596,
                            section: 'legs',
                            name: 'Natural Beech '
                        },
                        // {
                        //     id: 3,
                        //     src: './images/legs/legs_wenge_oak.png',
                        //     price: 244,
                        //     section: 'legs',
                        //     name: 'Wenge Oak '
                        // },
                        // {
                        //     id: 4,
                        //     src: './images/legs/legs_natural_oak.png',
                        //     price: 244,
                        //     section: 'legs',
                        //     name: 'Natural Oak '
                        // },
                        // {
                        //     id: 5,
                        //     src: './images/legs/legs_walnut_heartwood.png',
                        //     price: 244,
                        //     section: 'legs',
                        //     name: 'Walnut Heartwood '
                        // },
                        // {
                        //     id: 6,
                        //     src: './images/legs/legs_wild_oak.png',
                        //     price: 244,
                        //     section: 'legs',
                        //     name: 'Wild Oak '
                        // },
                        // {
                        //     id: 7,
                        //     src: './images/legs/legs_cherry.png',
                        //     price: 244,
                        //     section: 'legs',
                        //     name: 'Cherry '
                        // },
                        // {
                        //     id: 8,
                        //     src: './images/legs/legs_rustic_oak.png',
                        //     price: 244,
                        //     section: 'legs',
                        //     name: 'Rustic Oak '
                        // },
                        // {
                        //     id: 9,
                        //     src: './images/legs/legs_bianco_oak.png',
                        //     price: 244,
                        //     section: 'legs',
                        //     name: 'Bianco Oak '
                        // },
                        {
                            id: 10,
                            src: './images/legs/legs_high_gloss_chrome_finish.png',
                            price: 0,
                            minPrice: 278,
                            maxPrice: 646,
                            section: 'legs',
                            name: 'High Gloss Chrome Finish '
                        },
                        // {
                        //     id: 11,
                        //     src: './images/legs/legs_matt_nickel_finish.png',
                        //     price: 239,
                        //     section: 'legs',
                        //     name: 'Matt Nickel Finish '
                        // },
                        {
                            id: 12,
                            src: './images/legs/legs_titanium_silver_painted.png',
                            price: 0,
                            minPrice: 219,
                            maxPrice: 547,
                            section: 'legs',
                            name: 'Titanium '
                        },
                        {
                            id: 13,
                            src: './images/legs/ral.png',
                            price: 0,
                            minPrice: 239,
                            maxPrice: 604,
                            section: 'legs',
                            name: 'RAL colors'
                        }
            ]
        },
        {   
            sectionName: 'application',
            images: [
                        {
                            id: 0,
                            src: './images/application/application_high_chrome.png',
                            price: 90,
                            section: 'application',
                            name: 'Highgloss Chrome Finish Faceted'
                        },
                        {
                            id: 1,
                            src: './images/application/application_golden_painted.png',
                            price: 0,
                            section: 'application',
                            name: 'Golden Painted'
                        },
                        // {
                        //     id: 2,
                        //     src: './images/application/application_brilliant_gold_painted.png',
                        //     price: 90,
                        //     section: 'application',
                        //     name: 'Brilliant Gold Finish '
                        // },
                        {
                            id: 3,
                            src: './images/application/application_brilliant_gold_finish.png',
                            price: 90,
                            section: 'application',
                            name: 'Brilliant Gold Finish Faceted'
                        },
                        {
                            id: 4,
                            src: './images/application/application_titanium_painted.png',
                            price: 0,
                            section: 'application',
                            name: 'Titanium Silver Painted'
                        },
                        // {
                        //     id: 5,
                        //     src: './images/application/application_high_gloss_chrome_finish.png',
                        //     price: 90,
                        //     section: 'application',
                        //     name: 'Highgloss Chrome Finish'
                        // }
            ]
        },
        {   
            sectionName: 'legs_colors',
            images: [
                        {
                            id: 0,
                            src: './images/legs/ral/red.jpg',
                            price: 0,
                            minPrice: 239,
                            maxPrice: 604,
                            section: 'legs_colors',
                            name: 'Red'
                        },
                        {
                            id: 1,
                            src: './images/legs/ral/blue.jpg',
                            price: 0,
                            minPrice: 239,
                            maxPrice: 604,
                            section: 'legs_colors',
                            name: 'Blue'
                        },
                        {
                            id: 2,
                            src: './images/legs/ral/green.jpeg',
                            price: 0,
                            minPrice: 239,
                            maxPrice: 604,
                            section: 'legs_colors',
                            name: 'Green '
                        },
                        {
                            id: 3,
                            src: './images/legs/ral/purple.jpg',
                            price: 0,
                            minPrice: 239,
                            maxPrice: 604,
                            section: 'legs_colors',
                            name: 'Purple '
                        },
            ]
        },
    ],
    slidersContentFloor: [
        {   
            sectionName: 'floor',
            images: [
                        {
                            id: 0,
                            src: './images/floor/stones.jpg',
                            price: 0,
                            section: 'floor',
                            name: 'Stones Floor'
                        },
                        {
                            id: 1,
                            src: './images/floor/carpet.jpg',
                            price: 0,
                            section: 'floor',
                            name: 'Carpet Floor'
                        },
                        {
                            id: 3,
                            src: './images/floor/wood.png',
                            price: 0,
                            section: 'floor',
                            name: 'Wood Floor'
                        },
                        {
                            id: 2,
                            src: './images/floor/concrete.jpg',
                            price: 0,
                            section: 'floor',
                            name: 'Concrete Floor'
                        }
                        
            ]
        },
    ]
};













// Change second slider link color when active
function changeLinkColor(id){
    var links = $('.second-slider__title a');

    $.map(links, (link) => {
        if (link.id != id){
            $(`#${link.id}`).removeClass('linkActive')
        }
    });
    $(`#${id}`).addClass("linkActive");
}




const tableImage = {
    hotspots: [
        {
            name: 'Glass',
            buttonId: 'tableGlassButton'
        }, 
        {
            name: 'Legs',
            buttonId: 'tableLegsButton'
        }, 
        {
            name: 'Application',
            buttonId: 'tableApplicationButton'
        }
    ]
};

// Render first slider title
$(() => ( 
        $('.first-slider__title').text(firstSliderContent.title)
    )
);


// Render second slider title links
$(() => {
    $.map(secondSliderContent.linkList, (link, index) => {
        $('.second-slider__title').append(`<span> 
                                                <a 
                                                    onclick="triggerHotspot('link${index}')" 
                                                    id="link${index}" 
                                                    href="#${index}">${link}
                                                </a> 
                                            </span>`
        );
    });
});




function updatePrice(sliderId){

    // console.log('slider ID: ', sliderId)
    
    
    
    // console.log('optionsApplied: ', optionsApplied);
    let appliedLegs = optionsApplied.find((option) => option.sectionName === 'legs');

    let heightPrice = 0;
    let lengthPrice = 0;
    let widthPrice = 0;
    
    const minPrice = appliedLegs.minPrice;
    const maxPrice = appliedLegs.maxPrice;


    if(!!Number(sliderId)){
        let sliderObj = rangeSlidersObj.sliders.find((slider) => slider.id === sliderId);
    }else{
        // console.log('not range sliders');
    }

    // console.log('minPrice: ', minPrice, ' maxPrice: ', maxPrice);
    let optionsPrice = 0;
    let glassPrice = 0;
    let legsPrice = 0;
    let applicationPrice = 0;
    $.map(optionsApplied, (option) => {
        if(option.sectionName === "glass"){
            glassPrice = 90;
        }
        if(option.sectionName === 'legs'){
            // complex logic here!!
            legsPrice = option.minPrice;
        }
        if(option.sectionName === 'application'){
            applicationPrice = 90;
        }
        if(option.sectionName === "Width"){
            optionsPrice += Number(option.price);
        }
        if(option.sectionName === "Height"){
            optionsPrice += Number(option.price);
        }
        if(option.sectionName === "Length"){
            optionsPrice += Number(option.price);
        }


        
    });

        
    optionsPrice += glassPrice + legsPrice + applicationPrice;

    // console.log('optionsPrice: ', optionsPrice);
    totalBoxContent.price = Number(optionsPrice).toFixed(2);
    
    totalPriceRenderContent();
}



function handleSliderImageClick(sectionName, id){
    // if($(`.sliderItem button`).hasClass('fr-no-click')){
    //     console.log('should not click');
    //     return false;
    // };
    let sectionObj = secondSliderContent.slidersContent.find((section) => section.sectionName === sectionName);
    if(sectionObj === undefined){
        sectionObj = secondSliderContent.slidersContentFloor.find((section) => section.sectionName === sectionName);
    }
    const image = sectionObj.images.find((image) => image.id === id);

    if(image.name === 'RAL colors'){
        generateColorsSlider();
    }


    
    
    
    const optionObj = {
        id: id,
        name: image.name,
        sectionName: sectionName,
        thickness: image.thickness ? image.thickness : '',
        src: image.src,
        price: 0,
        minPrice: image.minPrice,
        maxPrice: image.maxPrice
    };

    let shouldAddOption = true;
    $.map(optionsApplied, (option) => {
            // debugger;
            if(option.id === optionObj.id && option.sectionName === optionObj.sectionName){
                shouldAddOption = false
            }
            if(option.sectionName === optionObj.sectionName && shouldAddOption){
                option.id = id;
                option.name = image.name;
                option.minPrice = image.minPrice,
                option.maxPrice = image.maxPrice,
                option.thickness = image.thickness;
                option.src = image.src;
                option.price = 0;
                addToFinalObject(sectionObj, image);
                shouldAddOption = false;
            }
    });
    if(shouldAddOption){
        optionsApplied.push(optionObj);
        addToFinalObject(sectionObj, image);
    }

    // Tomorow: - slider image info font-size change to look cool
    //          - slider image info width change to look cool
    //          - floor slider is changing price

    
    

    
    PubSubManager.optionsApplied(optionsApplied);
    handleOverviewChange(sectionObj.sectionName, image);
    updatePrice();
    //  working

    handleChangePrevImage();

}



function generateColorsSlider(){
    let sliderToRender = secondSliderContent.slidersContent.find((slider) => slider.sectionName === 'legs_colors');
    sliderToRender = sliderToRender.images;

    $('#film_roll2').empty();
    $('#film_roll2').append("<div class='secondSlider' id='secondSlider3' ></div>");

    $.map(sliderToRender, (image, index) => {
        $('#secondSlider3').append(`
                            <div class="sliderItem ">
                                <button 
                                    onclick="handleSliderImageClick('${image.section}', ${image.id})"
                                >
                                    <img class="film_roll__image" src="${image.src}" />
                                    <div class="film_roll_image__info">${image.name} </div>
                                    
                                </button>
                            </div>  
                        `);


    });

    $(() => {
        fgr = new FilmRoll({
          container: '#secondSlider3',
          configure_load: true,
          scroll: false,
          force_buttons: true,
          height: '100%',
          vertical_center: true,
          no_css: true,
          interval: 1000
        });
    });
    

    // console.log(sliderToRender);
}


function handleHotspotClick(id){

    changeLinkColor(`link${id}`)


    const sliderToRender = secondSliderContent.slidersContent[id].images;

    $('#film_roll2').empty();
    
    $('#film_roll2').append("<div class='secondSlider' id='secondSlider2' ></div>");
    
    $.map(sliderToRender, (image, index) => {
        $('#secondSlider2').append(`
                            <div class="sliderItem ">
                                <button 
                                    onclick="handleSliderImageClick('${image.section}', ${image.id})"
                                >
                                    <img class="film_roll__image" src="${image.src}" />
                                    <div class="film_roll_image__info">${image.name} </div>
                                    
                                </button>
                            </div>  
                        `);
    });

    $(() => {
        fgr = new FilmRoll({
          container: '#secondSlider2',
          configure_load: true,
          scroll: false,
        //   force_buttons: true,
          height: '100%',
          vertical_center: true,
          no_css: true,
          interval: 1000
        });
    });

};

function renderFirstSlider(){
    const slider = secondSliderContent.slidersContentFloor.find((slider) => slider.sectionName === "floor");
    
    $('#film_roll1').empty();
    $('#film_roll1').append("<div class='secondSlider' id='secondSlider1' ></div>");
    $.map(slider.images, (image) => {
        $('#secondSlider1').append(`
                            <div class="sliderItem ">
                                <button 
                                    onclick="handleSliderImageClick('${image.section}', ${image.id})"
                                >
                                    <img class="film_roll__image" src="${image.src}" />
                                    <div class="film_roll_image__info">${image.name}</div>
                                </button>
                            </div>  
                        `);
    });
    
    $(() => {
        fr = new FilmRoll({
            container: '#secondSlider1',
            scroll: false,
            // force_buttons: true,
            height: '100%',
            vertical_center: true,
            force_rotate: true,
            firstSlider: true,
            interval: 1000
        //  no_css: true
           
        });

    });
}


// Render default hotspots sliders
$(() => {
    
    renderFirstSlider();
    handleHotspotClick(0);
    //
});

// Render Hotspots buttons
$(() => {
    var hotspots = tableImage.hotspots;
    $.map(hotspots, ( hotspot, index) => {
        $('.image-area__img').append(`<button
                                        onclick="handleHotspotClick('${index}')" 
                                        class="hotspotButton"
                                        id="${hotspot.buttonId}">
                                        <div class="hotspotButtonInner"> </div>

                                    </button>`)
    });
});










// Styling Links

function triggerHotspot(e) {
    

    changeLinkColor(e);
    
    const id = e[e.length-1];
    handleHotspotClick(id);
    
}



$(() => {
    

    // console.log('optionApplied: ', optionsApplied);
    updatePrice();
    var listValues = Array.from($('#myList option')).map(v => v.value);

    var slider = $('#sliderOne');
    
    slider.oninput = (e) => {
        if( listValues.some(val => val === slider.val )){
            $('.outputSliderOne').text(slider.val);
        }else{
            slider.val = 0;
        }
    }
})





