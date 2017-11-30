import {formatData} from './setModelState';

describe('the data is formatted appropriately before it is saved', function(){
  it('the data is formatted appropriately before it is saved', function() {
    let dataArr = [{name: 'size', value: 'Small'}, {name: 'color', value: 'Black'}, {name: 'quantity', value: 1}];
    const formattedData = formatData(dataArr);
    expect(formattedData).toEqual({size: 'Small', color: 'Black', quantity: 1})
  })
})
