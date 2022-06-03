var today = new Date();
var person = {
    firstName: "Max"
};
var Color = /** @class */ (function () {
    function Color() {
        this.blue = "blue";
    }
    return Color;
}());
var newColor = new Color();
console.log(newColor.blue);
var apple = "apple"; // type annotation
var orange = 1; // type inference
var nothing = null;
