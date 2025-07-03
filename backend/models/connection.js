import mongoose from 'mongoose';

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

export const createCollection = (nameCollection,schema) => {

    const Collection = mongoose.model(nameCollection, schema)   

    return Collection
};
