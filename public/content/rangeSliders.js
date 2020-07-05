

const rangeSlidersObj = {
    sliders: [
        {
            id: 1,
            container: 1,
            min: 0,
            max: 8,
            itemNumber: 'Item1',
            sectionName: 'Width',
            unit: 'mm',
            values: [
                {   id: 0,
                    size: '500',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 1,
                    size: '600',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 2,
                    size: '700',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 3,
                    size: '750',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 4,
                    size: '800',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 5,
                    size: '900',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 6,
                    size: '1000',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 7,
                    size: '1100',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 8,
                    size: '1200',
                    price: 0,
                    sliderId: 0
                }
            ],
        },
        {
            id: 2,
            container: 1,
            min: 0,
            max: 10,
            itemNumber: 'Item1',
            sectionName: 'Length',
            unit: 'mm',
            values: [
                {
                    id: 0,
                    size: '600',
                    price: 0,
                    sliderId: 1
                }, 
                {
                    id: 1,
                    size: '750',
                    price: 0,
                    sliderId: 1
                }, 
                {
                    id: 2,
                    size: '800',
                    price: 0,
                    sliderId: 1
                }, 
                {
                    id: 3,
                    size: '900',
                    price: 0,
                    sliderId: 1
                }, 
                {
                    id: 4,
                    size: '1000',
                    price: 0,
                    sliderId: 1
                }, 
                {
                    id: 5,
                    size: '1100',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 6,
                    size: '1200',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 7,
                    size: '1300',
                    price: 0,
                    sliderId: 0
                }, 
                {
                    id: 8,
                    size: '1400',
                    price: 0,
                    sliderId: 0
                },
                {
                    id: 9,
                    size: '1600',
                    price: 0,
                    sliderId: 0
                },
                {
                    id: 10,
                    size: '2500',
                    price: 0,
                    sliderId: 0
                }
            ],
        },
        {
            id: 3,
            container: 1,
            min: 0,
            max: 2,
            itemNumber: 'Item1',
            sectionName: 'Height',
            unit: 'mm',
            values: [
                {
                    id: 0,
                    size: '355',
                    price: 0,
                    sliderId: 2
                }, 
                {
                    id: 1,
                    size: '425',
                    price: 0,
                    sliderId: 2
                    
                }, 
                {
                    id: 2,
                    size: '485',
                    price: 0,
                    sliderId: 2
                }
            ],
        }
    ]
}

const priceCombinations = {
   'width': [
       {
            minWidth: 300,
            maxWidth: 750,
            price: 60
        },
        {
            minWidth: 751,
            maxWidth: 1200,
            price: 95
        },
        {
            minWidth: 1201,
            maxWidth: 1400,
            price: 105
        },
        {
            minWidth: 1401,
            maxWidth: 1600,
            price: 120
        },
        {
            minWidth: 1601,
            maxWidth: 5000,
            price: 240
        }
    ],
    'length': [
        {
             minLength: 300,
             maxLength: 750,
             price: 60
         },
         {
             minLength: 751,
             maxLength: 800,
             price: 95
         },
         {
             minLength: 801,
             maxLength: 1000,
             price: 105
         },
         {
             minLength: 801,
             maxLength: 1000,
             price: 120
         },
         {
             minLength: 1001,
             maxLength: 5000,
             price: 240
         }
     ]
}

function stepSliderOneDown(sliderId, outputId){

    document.getElementById(sliderId).stepDown(1);

    const sliderObj = rangeSlidersObj.sliders.find((slider) => 
            slider.id == sliderId
        );
    const content = sliderObj.values.find((valueObj) => valueObj.id == $(`#${sliderId}`).val() );
    
    $(`#${outputId}`).text(content.size);

    $(`#${sliderId}`).trigger('change');
}
function stepSliderOneUp(sliderId, outputId){
    document.getElementById(sliderId).stepUp(1);

    const sliderObj = rangeSlidersObj.sliders.find((slider) => 
            slider.id == sliderId
        );
    const content = sliderObj.values.find((valueObj) => valueObj.id == $(`#${sliderId}`).val() );

        $(`#${outputId}`).text(content.size);


    

    $(`#${sliderId}`).trigger('change');
}


function handleRangeChange(sliderId) {
    const sliderObj =  rangeSlidersObj.sliders.find((slider) => slider.id == sliderId);
    const inputValue = $(`#${sliderId}`).val();
    const value = sliderObj.values.find((val) => val.id ==  inputValue);

    const optionObj = {
        id: value.id,
        sectionName: sliderObj.sectionName,
        size: value.size
    };

    
    let plusPrice = 0
    let widthPrice = 0;
    let lengthPrice = 0;

    if(optionObj.sectionName === 'Width' || optionObj.sectionName === 'Length'){
        const lengthOption = optionsApplied.find(option => option.sectionName === 'Length');
        const widthOption = optionsApplied.find(option => option.sectionName === 'Width');
        // console.log('length/width:', lengthOption, widthOption);
        
        if(optionObj.sectionName === "Width"){
            
             widthPrice = 0;
             lengthPrice = 0;
            $.each(priceCombinations['width'], (idex, widthLimit) => {
                if(optionObj.size >= widthLimit.minWidth && optionObj.size <= widthLimit.maxWidth){
                    widthPrice = widthLimit.price;
                    // console.log('widthPrice updated: ', widthPrice);
                    return false; // function stops at lowest(first) price. If delete this line, price will be highest(last match)
                }
                
            });

            
                $.each(priceCombinations['length'], (idex, lengthLimit) => {
                    if(lengthOption.size >= lengthLimit.minLength && lengthOption.size <= lengthLimit.maxLength){
                        lengthPrice = lengthLimit.price;
                        // console.log('lengthPrice: ', lengthPrice);
                        return false; // function stops at lowest(first) price. If delete this line, price will be highest(last match)
                    }
                });
            
                let isRectangleObj = optionsApplied.find((option) => option.sectionName === "isRectangle")
                if(optionObj.size === lengthOption.size){
                    isRectangle = false;
                    isRectangleObj['isRectangle'] = false
                }else{
                    isRectangle = true;
                    isRectangleObj['isRectangle'] = true;
                }

            // if(lengthPrice >= widthPrice){
            //     lengthOption.price = 0;
            //     widthPrice = 0
            // }else{
            //     lengthOption.price = 0;
            //     lengthPrice = 0;
            // }
            // if(lengthPrice === widthPrice){
            //     widthPrice = 0;
            //     optionObj.price = 0;
            // }
        }

        if(optionObj.sectionName === "Length"){
            


             widthPrice = 0;
             lengthPrice = 0;

            $.each(priceCombinations['length'], (idex, lengthLimit) => {
                if(optionObj.size >= lengthLimit.minLength && optionObj.size <= lengthLimit.maxLength){
                    lengthPrice = lengthLimit.price;
                    return false; // function stops at lowest(first) price. If delete this line, price will be highest(last match)
                }
            });
            
                $.each(priceCombinations['width'], (idex, widthLimit) => {
                    if(widthOption.size >= widthLimit.minWidth && widthOption.size <= widthLimit.maxWidth){
                        widthPrice = widthLimit.price;
                        return false; // function stops at lowest(first) price. If delete this line, price will be highest(last match)
                    }
                });

                
                
            
            let isRectangleObj = optionsApplied.find((option) => option.sectionName === "isRectangle")
            
            if(optionObj.size === widthOption.size){
                isRectangle = false;
                isRectangleObj['isRectangle'] = false;
            }else{
                isRectangle = true;
                isRectangleObj['isRectangle'] = true;
            }
            
            // if(widthPrice >= lengthPrice){
            //     widthOption.price = 0;
            //     // console.log('asdfasdfadjfiuaydfuaib')
            //     lengthPrice = 0
            // }else{
            //     widthOption.price = 0;
            //     widthPrice = 0
            // }
            
            // if(lengthPrice === widthPrice){
            //     lengthPrice = 0;
            //     optionObj.price = 0;
            // }


        }

        // if(widthPrice > lengthPrice){
        //     plusPrice = widthPrice;
        // }else{
        //     plusPrice = lengthPrice;
        // }
        // if(plusPrice === widthOption.price){
        //     lengthOption.price = 0
        // }else if( plusPrice === lengthOption.price)
        //     widthOption.price = 0
        
        // optionObj.price += plusPrice;
        
    }
    
    
    // console.log("optionsApplied: ",optionsApplied)


        let appliedLegs = optionsApplied.find((option) => option.sectionName === 'legs');
        
        const minPrice = appliedLegs.minPrice;
        const maxPrice = appliedLegs.maxPrice;
        // console.log('----------------------------------')
        const maxChoices = Number(sliderObj.max) + 1;
        let inputValueNumber = Number(inputValue)+1;
        totalPrice = maxPrice - minPrice;
        // console.log('totalPrice: ', totalPrice/3);
        
        let percentVal = ((inputValueNumber*100)/maxChoices);
        widthPrice = ((percentVal*(totalPrice/3))/100).toFixed(2)

        // console.log(widthPrice);
    


        // console.log('isRectangle: ', isRectangle);
    let shouldAddOption = true;

    $.map(optionsApplied, (option) => {
        if(option.id === optionObj.id && option.sectionName === optionObj.sectionName){
            shouldAddOption = false
        }
        if(option.sectionName === optionObj.sectionName && shouldAddOption){
            option.id = value.id;
            option.price = widthPrice;
            option.size = value.size;
            addToFinalObject(sliderObj, value);
            shouldAddOption = false;
        }
    });

    if(shouldAddOption){
        optionsApplied.push(optionObj);
        addToFinalObject(sliderObj, value);
    }

    // console.log('optionAopplied: ', optionsApplied);
    
    PubSubManager.optionsApplied(optionsApplied);
    // console.log("---------", optionsApplied);
    handleOverviewChange(sliderObj.sectionName, value);
    handleChangePrevImage();
    updatePrice(sliderId);


    
    
}


function tableSizesContent(){
    let snapOutput;
    $.map(rangeSlidersObj.sliders, (slider, index) => {
        // debugger;
        if( slider.sectionName === "Width" || slider.sectionName === "Length" || slider.sectionName === "Height" ){
            let entry = slider.sectionName.toLowerCase();
            snapOutput = optionsAppliedObj[entry].size;
            
        }
        // console.log('slider.container: ',slider.container);

        $(`.second-column__select-area #container${slider.container}` ).prepend(`
            <div class='sliderControls'>
                <button onclick="stepSliderOneDown('${slider.id}', 'output_slider_${slider.id}')" class="minusButton"> </button>
                <div>${slider.sectionName} <span class="rangeOutput outputSliderOne" id="output_slider_${slider.id}">  ${snapOutput}  </span> ${slider.unit}</div>
                <button onclick="stepSliderOneUp('${slider.id}', 'output_slider_${slider.id}')" class="plusButton"> </button>
            </div>
            <input
                type="range" 
                min="${slider.min}" max="${slider.max}" 
                list="myList"
                class="rangeSlider"
                id="${slider.id}"
                onchange="handleRangeChange(${slider.id})"
            />
        `);
        // console.log(snapOutput);

    });


    
    
    

    $('.tableSizeContainer input').on("change", function() {
        let sliderId = $(this).attr('id')[$(this).attr('id').length-1];


        const sliderObj = rangeSlidersObj.sliders.find((slider) => 
            slider.id == sliderId
        );
        

        const content = sliderObj.values.find((valueObj) => valueObj.id == $(this).val() );
        // let content = $(this).val();
        $(`#output_slider_${sliderId}`).text(content.size);
        verifyIfRectangle();



        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
        $(this).css('background-image',
                    '-webkit-gradient(linear, left top, right top, '
                    + 'color-stop(' + val + ', #494856), '
                    + 'color-stop(' + val + ', white)'
                    + ')'
                    );
        
        
    });
}