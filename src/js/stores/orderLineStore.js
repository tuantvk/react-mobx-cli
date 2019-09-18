import { observable, computed } from 'mobx';

class OrderLine {

  @observable price = 3000;
  @observable amount = 1;


  @computed get total() {
    return this.price * this.amount;
  }


};

const self = new OrderLine();
export default self;