let totalBoxContent = {
    price: 0,
    currency: 'Euro'
};


function totalPriceRenderContent(){

    $(() => {
        $('.column-total-content span:nth-child(2)').text(totalBoxContent.price + " " + totalBoxContent.currency);
    });
};


$(() => {

    $('.check-out-button').on('click', function(){
        console.log(optionsApplied);
        
    });
});

totalPriceRenderContent();
