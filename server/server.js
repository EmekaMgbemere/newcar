const express = require("express");
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Blog = require('./models/Blog');
const User = require('../server/models/Blog.js');
const Car = require('../server/models/Car.js')
const Mockapi = require('../server/models/Mockapi.js');
const Token = require('../server/models/Token.js');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const carRoutes = require('../server/routes/carRoutes.js');
const userRoutes = require('../server/routes/userRoutes.js');


dotenv.config();
app.use(cors());


const URL = "mongodb://127.0.0.1:27017/cars";

const port = process.env.PORT;

app.use(morgan('tiny'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ parameterLimit: 50000, extended: false, limit: '50mb' }));

mongoose.connect(URL,{ 
  useNewUrlParser:true,
  useUnifiedTopology:true 
})
mongoose.connection.on('open',()=>console.log("Mongodb Connected"))
mongoose.connection.on('error',(e)=> console.log(e))

mongoose.set('strictQuery', false);


app.get("/", function (req, res) {
    res.send("Welcome to MyShop Server");
  });

app.post("/signupuser", async(req, res) => {
  try {
    const formData  = req.body;
    console.log(formData)

      if ( !formData) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
      else{
            const salt = await bcrypt.genSalt(10);
            formData.password = await bcrypt.hash(formData.password, salt);
            
              const newUser = new User(formData);
              await newUser.save(); 

              return res.status(201).json({ message:'Registration Successful'});
            }

  } catch (error) {
    console.error('Error during user signup:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();  

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    res.status(200).json(users);  

  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post("/loginuser", async(req, res) => {
  const { email, password } = req.body;

  console.log(email, password)

  try {
    if (!email || !password) {
      return res.json({ message: 'Username and password are required' });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: 'Invalid Credentials: Please try again' });
    }

else{ 
const payload = {
user: {
  id: user.id,
},
};

jwt.sign(
payload,
process.env.jwtSecret,
{ expiresIn: '1d' },
async (err, token) => {
  if (err) throw err;

  try {
    const newToken = new Token({token: token });
    await newToken.save();
    console.log(`Token saved to the database.`);
    
    res.json({ token, user });

    console.log(`Login token: ${token} and userID: ${UserId}`);
  } catch (error) {
    return res.json({ message: 'Failed to save token to the database.' });
  }
}
);
}

  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

  app.post("/logoutuser", async(req, res) => {
  const {Utoken} = req.body;
  Token.findOneAndDelete({ Utoken }, (err, doc) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred during logout' });
    } else if (!doc) {
      res.status(404).json({ message: 'Token not found or already expired' });
    } else {
      res.json({ message: 'Logout successful' });
    }
  });
});

app.delete("/deleteuser", async(req, res) => {

    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userId);
      
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
    app.get("/finduser", async(req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  
  app.put("/updateuser", async(req, res) => {
   
      let result = await User.updateOne(
        { _id : req.params.id}, 
        { $set: req.body  }
      )
     res.send({ result });
  })

app.post("/regcar", async(req, res) => {
  try {
    const carform = req.body;
    console.log(carform)

      if ( !carform) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
      else{
      const newCar = new Car(carform);
      await newCar.save(); 

      res.status(201).send('Registration Successful');
      }

    
  } catch (error) {
    console.error('Error during user signup:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

app.post('/blog',  async (req, res) => {
  const { customerID, BlogID, BlogImage, BlogViews, BlogPostImage, BlogTitle, BlogAuthor, BlogCategory, BlogMessage  } = req.body;
  try{
    let blog = await Blog.findOne({blog});
    if(blog){
      res.json("Blog Already exists");
    }
    else{
          blog = new Blog({customerID, BlogID, BlogImage, BlogViews, BlogPostImage, BlogTitle, BlogAuthor, BlogCategory, BlogMessage});
          await blog.save();
          res.json(blog);
          console.log(`Blog Elements: ${blog}`)
  }
  
  } catch (err) {
    console.error(err.message)
    res.json('An error occurred');
  }
})

// app.use('/api/cars', carRoutes);

// app.use('/api/user', userRoutes);


app.listen(port, error => {
      if (error) throw error;
      console.log('Your Car Server is running on port 6969');
    });

