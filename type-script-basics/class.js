var MobilePhone = /** @class */ (function () {
    // screenSize:string;
    // ram:string;
    // processor:string;
    // camera:number;
    // battery:number;
    // operatingsystem:string;
    function MobilePhone(screenSize, ram, processor, camera, battery, operatingsystem) {
        var _this = this;
        this.screenSize = screenSize;
        this.ram = ram;
        this.processor = processor;
        this.camera = camera;
        this.battery = battery;
        this.operatingsystem = operatingsystem;
        this.getOperatingSystem = function () {
            return _this.operatingsystem;
        };
        this.screenSize = screenSize;
        this.ram = ram;
        this.processor = processor;
        this.camera = camera;
        this.battery = battery;
        this.operatingsystem = operatingsystem;
    }
    return MobilePhone;
}());
var phone = new MobilePhone("6 inch", "3Gb", "snapdragin712", 16, 5000, "android");
console.log(phone.operatingsystem);
