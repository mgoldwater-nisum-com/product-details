const setModelState = function(e){
  e.preventDefault();
  const arrOfData = this.$el.serializeArray();
  const formattedData = arrOfData.reduce( (dataToChange, currData) => {
    dataToChange[currData.name] = currData.value;
    return dataToChange;
  }, {});
  this.model.save(formattedData);
}

export default setModelState;