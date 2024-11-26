import mongoose from "mongoose";

export default async function connect() {
    mongoose.connection("connected", () => console.log("DB connected"));
    mongoose.connection("error", (error) => console.error("DB ERROR", error))

    try {
        // Verbinden
        await mongoose.connect(process.env.DB_URI);
        console.log("Successfully connected to the Database");
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);

    }
}