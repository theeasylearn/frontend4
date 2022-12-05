var event = require('events');
var em = new event.EventEmitter();

//create function 
var SwitchOn = function(data){
    console.log("SwitchOn event triggered for " + data);
}
var SwitchOff = function(data){
    console.log("SwitchOff event triggered for " + data);
}

//set event handler
em.once('SwitchOnEvent',SwitchOn);
em.once('SwitchOffEvent',SwitchOff);

//generate event
em.emit('SwitchOnEvent','IPhone');
em.emit('SwitchOnEvent','Laptop');
em.emit('SwitchOnEvent','AC');

em.emit('SwitchOffEvent','IPhone');
em.emit('SwitchOffEvent','Laptop');
em.emit('SwitchOffEvent','AC');
