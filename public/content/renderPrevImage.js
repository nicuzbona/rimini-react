
var isRectangle = true;
function loadDefaults(){
    const defaulLengthObj = {id: 5, sectionName: "Length", price: 65.19, size: "1100"}
    const defaulWidthObj = {id: 4, sectionName: "Width", price: 64.00, size: "800"}
    const defaulHeightObj = {id: 1, sectionName: "Height", price: 78.22, size: "425"};
    const defaultGlassObtionObj = {id: 5, name: "Float", sectionName: "glass", thickness: 15, price: 90};
    const defaultLegsObtionObj = {id: 214, name: "Natural Beech ", minPrice: 244, maxPrice: 596, sectionName: "legs", thickness: "", price: 0};
    const defaultApplicationObtionObj = {id: 1, name: "Golden Painted", sectionName: "application", thickness: "", price: 90};
    const defaultTableType = {id: 0, isRectangle: true, sectionName: "isRectangle", thickness: "", price: 0};
    const defaultFloor = {id: 1, name: "Carpet Floor", src: './textures/carpet.jpg', sectionName: "floor", thickness: undefined, price: 0,};
    optionsApplied.push(defaulLengthObj);
    optionsApplied.push(defaulWidthObj);
    optionsApplied.push(defaulHeightObj);

    optionsApplied.push(defaultGlassObtionObj);
    optionsApplied.push(defaultLegsObtionObj);
    optionsApplied.push(defaultApplicationObtionObj);

    optionsApplied.push(defaultTableType);

    optionsApplied.push(defaultFloor);

    

    // update data to react
    PubSubManager.optionsApplied(optionsApplied);


    // console.log('options', optionsApplied);
}

function handleChangePrevImage(){
    const isRectangleObj = optionsApplied.find((option) =>  option.sectionName === "isRectangle");
    let isRectangle = isRectangleObj['isRectangle'];

    let isRalObj = optionsApplied.find((option) => option.name === "RAL colors");
    if(!!isRalObj){
        isRalObj = true;
    }else{
        isRalObj = false;
    }
    
    
    // console.log(isRectangle);

    // console.log("optionApplied: ", optionsApplied);
    let image_name = '';
    let dir_name = './images/prev/';
    let dir_name_1 = '';
    let ral_name = '';
    let wait = false;
    
    $.map(optionsApplied, (option) => {

        

        if(option.sectionName === "legs"){
            if(option.name === "RAL colors"){
                wait = true;
                return false;
            }
            let name = option.name.split(" ").join("");
            image_name += name;
            image_name += "-";
        }
        // if(option.sectionName === "")
    });
    $.map(optionsApplied, (option) => {
        if(option.sectionName === "glass"){
            let name = option.name.split(" ").join("");
            image_name += name + "Glass";
            image_name += option.thickness + "mm";
            image_name += "-";
        }
    });
    $.map(optionsApplied, (option) => {
        if(option.sectionName === "application"){
            let name = option.name.split(" ").join("");
            image_name += name;
            image_name += ".txt";
        }
    });




    dir_name_1 += image_name.split('-').slice(0, 1).join('-');
    dir_name_1 += '/';
    dir_name += dir_name_1;
    dir_name += image_name.split('-').slice(0, 2).join('-');

    if(!!isRalObj){
        $.map(optionsApplied, (option1) => {
            if(option1.sectionName === "legs_colors"){
                let name = option1.name.split(" ").join("");
                ral_name += name;
                wait = false;
    
            };
    
        });
    }

    if(isRectangle){
        $('#tableLegsButton').css('left', '76%');
        $('#tableApplicationButton').css('left', '19%');
        $('#tableApplicationButton').css('top', '45%')
        dir_name += '/Rectangle/';
    }else{
        $('#tableLegsButton').css('left', '62%');
        $('#tableApplicationButton').css('left', '33%');
        $('#tableApplicationButton').css('top', '43%')
        dir_name += '/Square/';
    }

    
    let full_link = dir_name + image_name;
    if(!!isRalObj){
        full_link = './images/prev/'
        if(isRectangle){
            full_link += ral_name + '/' + ral_name + '-' + image_name.split('-').slice(0,1).join('-') + '/Rectangle/' + ral_name + '-' + image_name

        }else{
            full_link += ral_name + '/' + ral_name + '-' + image_name.split('-').slice(0,1).join('-') + '/Square/' + ral_name + '-' + image_name 
        }
    }
    
    // console.log("Full Link: ", full_link)
    
    


    // /images/prev/NaturalBeach-FloatGlass15mm/Rectangle/NaturalBeech-FloatGlass15mm-GoldenPainted.txt

    
    // if( !wait){
    //     let image = $.get(`${full_link}`, function(data) {
    //         $('.image-area__img').css('background', `url(data:image/jpeg;base64,${data}) 100% 100% no-repeat`);
    //         $('.image-area__img').css('background-size', `100% 100%`);
    //         // console.log(data)
    //      }, 'text');

    // }else{
    //     // console.log('waiting');
    // }
    
    
    
    


};


function loadPrevImage(){
    
    handleChangePrevImage();
    
    
    
    
    

    //  logic: price calc for legs and glass: If (condition) {image.price += price_corespondent } else if (condition) ...tot asa...
}

loadDefaults();
loadPrevImage();

