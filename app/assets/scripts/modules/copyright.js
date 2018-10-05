

import $ from "jquery";

class copyright{
  constructor(){
    this.correctYear();
  }

  correctYear(){
    $('#year').text(new Date().getFullYear());
  }
}

  export default copyright;
