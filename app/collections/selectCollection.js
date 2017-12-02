import {Collection} from 'backbone';
import stateData from '../helpers/determineSelectedState';

const SelectCollection = Collection.extend({

});

const stateSelectCollection = new SelectCollection(stateData);

export default stateSelectCollection;