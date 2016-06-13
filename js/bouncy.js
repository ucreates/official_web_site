Bouncy = function()
{
    this.e = -0.4;
    var g = 0.98 * 1.5;
    this.speed = 4;
    this.defaultSpeed = this.speed;
    
    this.update = function() {
        this.speed -= g;
    };
    
    this.reset = function () {
        this.speed = this.speed * this.e;
        this.defaultSpeed = this.speed;
    };
    
    this.isLimitSpeed = function () {
        return this.defaultSpeed * -1> this.speed;
    }
};
