import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "RESERVATIONS",
        })
        .then(() => {
            console.log("Connected to database successfully!");
        })
        .catch((err) => {
            console.log(`Some error occured while conecting to database! ${err}`);
        });
};