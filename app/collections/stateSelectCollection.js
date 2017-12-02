import {Collection} from 'backbone';
import stateData from '../helpers/determineSelectedState';

const StateSelectCollection = Collection.extend({

});

const stateSelectCollection = new StateSelectCollection(stateData);

export default stateSelectCollection;