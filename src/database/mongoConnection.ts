import mongoose from 'mongoose';
import { config } from '../config/constants';

export class mongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log('connection successful!')
        } catch (error) {
            console.log(error.message)
            process.exit(1)
        }
    }
}