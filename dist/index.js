import app from './app.js';
import { connectToDatabase } from './config/dbConn.js';
//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log('Server Open & Connected To Database'));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map