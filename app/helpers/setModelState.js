export const formatData = function(dataArr) {
  const formattedData = dataArr.reduce( (dataToChange, currData) => {
    dataToChange[currData.name] = currData.value;
    return dataToChange;
  }, {});
  return formattedData;
}

const setChildViewCollectionState = function(data, selects) {
  for (let select in selects) {
    const childViewCollection = this.getChildView(selects[select]).collection;
    for (let i = 0; i < childViewCollection.length; i++) {
      const currentModel = childViewCollection.models[i];
      if (data[select] === currentModel.get('value')) {
        currentModel.set('selected', true);
      } else {
        currentModel.set('selected', false);
      }
    }
  }
}

const setModelState = function(e, selects){
  e.preventDefault();
  const arrOfData = this.$el.serializeArray();
  const formattedData = formatData(arrOfData);
  if (selects) {
    setChildViewCollectionState.apply(this, [formattedData, selects]);
  }
  this.model.save(formattedData);
}



export default setModelState;