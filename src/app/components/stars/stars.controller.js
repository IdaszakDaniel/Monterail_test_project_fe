export default class Stars {

  constructor() {
    this.range = [1,2,3];
    this.myStyle = [];
  }

  change(a){
    this.myStyle = [];
    for(let i=0; i<a+1; i++){
      if(i<=a) this.myStyle[i] = {'background-color':'red'};
    }
  }

}
