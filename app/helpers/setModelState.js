export const formatData = function(dataArr) {
  const formattedData = dataArr.reduce( (dataToChange, currData) => {
    dataToChange[currData.name] = currData.value;
    return dataToChange;
  }, {});
  return formattedData;
}

const setModelState = function(e){
  e.preventDefault();
  const arrOfData = this.$el.serializeArray();
  const formattedData = formatData(arrOfData);
  this.model.save(formattedData);
}



export default setModelState;