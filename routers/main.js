import mongoose from 'mongoose';

export const createCollection = (nameCollection,schema) => {
     mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

    const Collection = mongoose.model(nameCollection, schema)   

    return Collection
};
