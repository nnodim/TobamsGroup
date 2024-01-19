import { connect } from 'mongoose';
async function connectToDatabase() {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (MONGODB_URI === undefined) {
        throw new Error('MONGODB_URI environment variable is not defined');
    }
    try {
        await connect(MONGODB_URI);
    }
    catch (error) {
        console.log(error);
        throw new Error('Could not Connect To MongoDB');
    }
}
export { connectToDatabase };
//# sourceMappingURL=dbConn.js.map