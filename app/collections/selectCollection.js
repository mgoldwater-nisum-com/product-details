import {Collection} from 'backbone';
import {stateData, sizeData} from '../helpers/collectionData';

const SelectCollection = Collection.extend({

});

export const stateSelectCollection = new SelectCollection(stateData);
export const sizeSelectCollection = new SelectCollection(sizeData);