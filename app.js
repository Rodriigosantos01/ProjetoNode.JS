import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';

(async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://rodriigosantos01:869588123@cluster0.kzeb3.mongodb.net/grades?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB");
    }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('API iniciada');
});