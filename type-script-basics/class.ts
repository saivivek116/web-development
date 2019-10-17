class MobilePhone{
  // screenSize:string;
  // ram:string;
  // processor:string;
  // camera:number;
  // battery:number;
  // operatingsystem:string;
  constructor(public screenSize:string,public ram:string,public processor:string,public camera:number,public battery:number,public operatingsystem:string){
    this.screenSize=screenSize;
    this.ram=ram;
    this.processor=processor
    this.camera=camera
    this.battery=battery
    this.operatingsystem=operatingsystem

  }
  getOperatingSystem=()=>{//never ue function keyword during methods
    return this.operatingsystem;
  }


}
let phone=new MobilePhone("6 inch","3Gb","snapdragin712",16,5000,"android")
console.log(phone.operatingsystem)