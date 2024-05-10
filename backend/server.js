// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const User = require('./models/usersModel');

// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://bisenas:Ashwinisb2603@mernapp.rimeyhx.mongodb.net/?retryWrites=true&w=majority&appName=MERNApp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// // Define route to fetch users from the database
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Error fetching users' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

require('dotenv').config(); 
// eslint-disable-next-line
//import reportWebVitals from './reportWebVitals';


const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get('/',(req,res) =>{
    res.json({message:'Let us Start the journey Today!'});
})

app.use('/api/users',userRoutes)

// app.listen(process.env.PORT,() => {
//         console.log("Connected and Listening!");
// })

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(4000,() => {
            console.log("Connected and Listening!");
        })
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    })
