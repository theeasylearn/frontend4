class Box{
    constructor(length,width,height)
    {
        this.length = parseInt(length);
        this.width = parseInt(width);
        this.height = parseInt(height);
    }
    getArea=function()
    {
        var area = this.length * this.width;
        return area;
    }
    getVolume = function()
    {
        var volume = this.length * this.width * this.height;
        return volume;
    }
}
module.exports = Box;