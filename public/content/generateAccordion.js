const accordition = {
    items: [
        {   id: 0,
            name: "Select Model",
            class: "tableTypeContainer"
        },
        {
            id: 1,
            name: "Customize Sizes",
            class: "tableSizeContainer"
        },
        
        {
            id: 0,
            name: "Save Configuration",
            class: "tableSaveContainer"
        },
        {
            id: 0,
            name: "Start New",
            class: "tableStartNewContainer"
        },
        {
            id: 0,
            name: "Choose Language",
            class: "tableChooseLanguageContainer"
        },
    ]
}


function tableTypeContent(){
        const accordionItemObj = accordition.items.find((item) => item.class === "tableTypeContainer");
        tableTypeClass = accordionItemObj.class;

        if(tableTypeClass){
            $(`.${tableTypeClass}`).append(`
                                                <div class="tableTypeOption four_legs_area">
                                                    <div class="tableTypeOption__image four_legs_image"></div>
                                                    <div class="tableTypeOption__info">
                                                        <span>table </span> (four legs)
                                                    </div>
                                                </div>
                                                <div class="tableTypeOption one_leg_area">
                                                    <div class="tableTypeOption__image one_legs_image"></div>
                                                    <div class="tableTypeOption__info">
                                                        <span>side table</span> (one leg)
                                                    </div>
                                                </div>
                                            `);
        }
}

function tableSaveContent(){
    const accordionItemObj = accordition.items.find((item) => item.class === "tableSaveContainer");
        tableSaveClass = accordionItemObj.class;

        if(tableSaveClass){
            $(`.${tableSaveClass}`).append(`
                                                <div class="tableSaveOption ">
                                                    <div class="tableSaveOption__image tableSaveOption_pdf ">
                                                        <span>PDF</span>
                                                    </div>
                                                </div>
                                                <div class="tableSaveOption ">
                                                    <div class="tableSaveOption__image tableSaveOption_qr">
                                                        <span>QR-Code</span>
                                                    </div>
                                                </div>
                                                <div class="tableSaveEmail">
                                                        <span>Enter Your E-Mail</span>
                                                        <input type="email" name="email" placeholder="example@example.com"/>
                                                </div>
                                            `);
        }
}

function tableStartNewContent(){
    const accordionItemObj = accordition.items.find((item) => item.class === "tableStartNewContainer");
        tableSaveClass = accordionItemObj.class;

        if(tableSaveClass){
            $(`.${tableSaveClass}`).append(`
                                                <div class="saveTableOptionContainer saveTableOptionContainerYes">
                                                    <div class="saveTableOption saveTableOptionYes"> Yes </div>
                                                </div>
                                                <div class="saveTableOptionContainer saveTableOptionContainerNo">
                                                    <div class="saveTableOption saveTableOptionNo"> No </div>
                                                </div>
                                            `);
        }
}

function chooseLanguageContent(){
    const accordionItemObj = accordition.items.find((item) => item.class === "tableChooseLanguageContainer");
        tableSaveClass = accordionItemObj.class;

        if(tableSaveClass){
            $(`.${tableSaveClass}`).append(`
                                                <div class="languageOption">
                                                    German
                                                </div>
                                                <div class="languageOption">
                                                    French
                                                </div>
                                                <div class="languageOption">
                                                    English
                                                </div>
                                                <div class="languageOption">
                                                    Spanish
                                                </div>
                                                <div class="languageOption">
                                                    Italian
                                                </div>
                                            `);
        }
}

function accordionContent(){
    tableTypeContent();
    tableSizesContent();
    tableSaveContent();
    tableStartNewContent();
    chooseLanguageContent();
    
}


$(() => {
    const items = accordition.items;

    $.map(items, (item, index) => {
        $('#accordion').append(`
                                    <div class="accordionButton">
                                        <div class='top-area-accordition-button'>
                                            <div></div>
                                        </div> 
                                        ${item.name}
                                    </div>

                                    <div>
                                        <div class="second-column__select-area">
                                            <div class="sliderContainer ${item.class}" id="container${index}">
                    
                                            
                                            </div>
                                            
                                        </div>
                                    </div>`
                            );
    });

    $( "#accordion" ).accordion({
        collapsable: false,
        heightStyle: "content",
        animate:{
            duration: 150
        }
    });
    // $("#accordion").accordion("refresh");
    
    $('.accordionButton').click((el) => {
        // console.log(el);
        let element;
        element = $(`#${el.target.id}`).next().next();
        if(el.target.classList[0] === 'top-area-accordition-button'){
            element = $(`#${el.currentTarget.id}`).next().next();
        }
        
        elemArray = $('.weiter-area');
        for(let i=0; i < elemArray.length; i++){
            if(elemArray[i] != element){
                $(elemArray[i]).find('.top-area-accordition-button').css('display', 'none');
                $(elemArray[i]).removeClass('weiter-area');
            }
        }
        
        element.addClass('weiter-area');
        element.find('.top-area-accordition-button').css('display', 'flex');
    });

    $('.accordionButton:nth-of-type(1)').trigger('click');


    accordionContent();
    

});


