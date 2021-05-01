// it's also works module.exports.getDate = getDate;  function getDate(){}
exports.getDate = function () {
    var today = new Date();
    var option = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    return today.toLocaleDateString("en-US", option);
    
}
exports.getDay = function () {
    var today = new Date();
    var option = {
        weekday: "long" 
    };
    return today.toLocaleDateString("en-US", option);
    
}