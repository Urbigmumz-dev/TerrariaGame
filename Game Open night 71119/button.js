class Button{
  constructor(x, y, action){
    this.pos = createVector(x, y);
    this.w = 20;
    this.action = action;
    this.itemType;
  }

  show(){
    fill(255);
    rect(this.pos.x, this.pos.y, this.w, this.w);
    if(this.itemType == "grass"){
      fill('#006600');
    }else if (this.itemType == "dirt"){
      fill('#654321');
    }else if (this.itemType == "stone"){
      fill('#838383');
    }else if (this.itemType == "wood"){
      fill('#b5651d');
    }else if (this.itemType == "leaves"){
      fill('#316250');
    }
  }
}
