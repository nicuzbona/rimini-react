const basicInfo = {
    price: 484.14,
    currency: 'Euro'
}



$(() => {
    $('.right-title-content span:nth-child(2)').text(basicInfo.price + " " + basicInfo.currency);
    // console.log('axios test');

    // axios('https://api.coindesk.com/v1/bpi/currentprice.json', {
    //     method: 'GET',
    // }).then((res) => {
    //     console.log(res.data.bpi);
    // });


    
    // console.log('rimini req:')
    // axios('https://www.vieco.de/en/rimini/intermediate/tray/predefined/materials/', {
    //     method: 'GET',
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
    //         "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    //     }
    // }).then((res) => {
    //     console.log(res);
    // });


    // HTTP 200 OK
    // Allow: GET, HEAD, OPTIONS
    // Content-Type: application/json
    // Vary: Accept

    // {
    //     "ralcolors": "https://www.vieco.de/en/rimini/ralcolors/",
    //     "glasstop/predefined/forms": "https://www.vieco.de/en/rimini/glasstop/predefined/forms/",
    //     "predefined/materials": "https://www.vieco.de/en/rimini/predefined/materials/",
    //     "glasstop/predefined/materials": "https://www.vieco.de/en/rimini/glasstop/predefined/materials/",
    //     "table/legs/predefined/materials": "https://www.vieco.de/en/rimini/table/legs/predefined/materials/",
    //     "table/predefined/heights": "https://www.vieco.de/en/rimini/table/predefined/heights/",
    //     "applications/predefined/materials": "https://www.vieco.de/en/rimini/applications/predefined/materials/",
    //     "basepanel/predefined/materials": "https://www.vieco.de/en/rimini/basepanel/predefined/materials/",
    //     "intermediate/tray/predefined/materials": "https://www.vieco.de/en/rimini/intermediate/tray/predefined/materials/"
    // }



    





    
    
    
});