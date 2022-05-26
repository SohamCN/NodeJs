const object = {name:"Soham",
                work:["coding","blinking","otherThings"],
                passion:["music","coding","sports",96]
}
let {name, work, passion:alu} = object;

let acha = work.map(item=>item.length<=6?"Word length within 6":"Word length greater than 6");
let bacha = alu.filter(item=>item==="music")
console.log(alu[3]);
console.log(...acha);
console.log(bacha);