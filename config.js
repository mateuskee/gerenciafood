exports.domain = "https://gerenciafood.i3neti.com.br/api/v2";
exports.APP_SECRET=""; //Your app secret - same as in the .env file in your web project 
exports.APP_NAME="Gerencia Food";
exports.LOGO="https://i3neti.com.br/logo/Gerencia-food.png";

exports.SINGLE_MODE=false;
exports.SINGLE_MODE_ID=1;
exports.SINGLE_MODE_NAME="Restaurant Name";

exports.MULTI_CITY=true;


//Currency
exports.currency="BRL";
exports.currencySign="R$";

//COD setup
exports.enableCOD=true;  //Cash on deliver

//Stripe settup
exports.enableStripe=true; 
exports.stripePublishKey="";

//Other payment gateways
exports.enablePayPal=true; 
exports.enableMollie=true; 
exports.enablePayStack=true; 

//Date format
exports.dateTimeFormat="MMMM Do YYYY, h:mm a";
exports.dateFormat="MMMM Do YYYY";

//OneSignal APP KEY
exports.ONESIGNAL_APP_ID="";

//Google setup
exports.GOOGLE_API_KEY="AIzaSyC1Vmndf_VmickebBBVfcbZjzOE1gwlwOw";
exports.queryTypes="address"
exports.queryCountries=['br']; //{['pl', 'fr','us']}


/*
    searchRadius={500}
    searchLatitude={51.905070}
    searchLongitude={19.458834}
*/
exports.searchLatitude=null;
exports.searchLongitude=null;
exports.searchRadius=null;