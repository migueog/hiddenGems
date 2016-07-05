import { Mongo } from 'meteor/mongo';

// This exports Tasks Mongo Collection. const refers that Tasks can't be reassigned
// But it is mutable.
export const Items = new Mongo.Collection('items');


