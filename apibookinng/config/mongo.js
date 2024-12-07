import mongoose from 'mongoose';

export function connectdb(){
    mongoose.connect('mongodb://127.0.0.1:27017/api_booking')
.then(() => console.log('Connected!'))
.catch(err => console.error("Connection error:", err));
}
