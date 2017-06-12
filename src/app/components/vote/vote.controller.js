export default class Vote {

  constructor() {
    this.rating = 0;
  }

  rate(x){
    if(x == 1){
      if(!this.up && !this.down){
        this.up = true;
        this.rating++;
      }
      if(this.down && !this.up){
        this.rating++;
        this.down = false;
      }
    }
    if(x == -1){
      if(!this.down && !this.up){
        this.down = true;
        this.rating--;
      }
      if(this.up && !this.down){
        this.rating--;
        this.up = false;
      }
    }
  }


}
