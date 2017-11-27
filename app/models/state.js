import {Model} from 'backbone';

const State = Model.extend({
  defaults: {
    size: 'Small',
    color: 'Black',
    quantity: 1,
    fullName: '',
    address: '',
    city: '',
    state: 'Alabama',
    zip: '',
    country: 'United States'
  }
});

const state = new State();

export default state;