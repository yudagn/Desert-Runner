class Skeleton {
    constructor (x, y, ctx, gameSpeed) {
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 51;

        this.gameSpeed = gameSpeed;

        this.xDir = -gameSpeed;
        this.ctx = ctx;
        this.sprite = new Image ();
        this.sprite.src = "src/assets/Tiles/png/Objects/Skeleton.png";
        
    }

    move (hitboxes) {
        this.x += this.xDir;
        this.xDir = -this.gameSpeed;
        this.draw(hitboxes);
      }

    draw (hitboxes) {
        this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height); 
    
        if (hitboxes) {
            this.ctx.beginPath();
            this.ctx.lineWidth = "1";
            this.ctx.strokeStyle = "black";
            this.ctx.rect(this.x, this.y, this.width, this.height);
            this.ctx.stroke();
        }
    }
}

export default Skeleton;