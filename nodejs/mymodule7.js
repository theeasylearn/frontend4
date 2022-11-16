module.exports = function(name,surname){
    this.name = name;
    this.surname = surname;
    this.fullname = function(){
        return this.name  + ' ' + this.surname;
    }
}