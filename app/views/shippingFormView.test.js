import ShippingFormView from './shippingFormView';
import {ShippingState} from '../models/shippingState';

describe('ShippingFormView tests', function(){
  it('sets the validity of items based on the models validation error object', function(){
    const shippingFormView = new ShippingFormView({model: new ShippingState()});
    shippingFormView.model.validationError = {addressValid: 'foo', cityValid: 'bar'}
    shippingFormView.model.trigger('invalid');
    expect(shippingFormView.model.get('fullNameValid')).toBe(true);
    expect(shippingFormView.model.get('addressValid')).toBe(false);
    expect(shippingFormView.model.get('cityValid')).toBe(false);
    expect(shippingFormView.model.get('zipValid')).toBe(true);
  })
})