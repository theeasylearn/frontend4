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
em.on('SwitchOnEvent',SwitchOn);
em.addListener('SwitchOffEvent',SwitchOff);

//generate event
em.emit('SwitchOnEvent','IPhone');
em.emit('SwitchOnEvent','Laptop');
em.removeListener('SwitchOnEvent',SwitchOn)

em.emit('SwitchOnEvent','AC');

em.emit('SwitchOffEvent','IPhone');
em.emit('SwitchOffEvent','Laptop');
em.removeListener('SwitchOffEvent',SwitchOff);
em.emit('SwitchOffEvent','AC');
