import {Collection} from 'backbone';
import {stateData, sizeData, colorData} from '../helpers/collectionData';

const SelectCollection = Collection.extend({

});

export const stateSelectCollection = new SelectCollection(stateData);
export const sizeSelectCollection = new SelectCollection(sizeData);
export const colorSelectCollection = new SelectCollection(colorData);