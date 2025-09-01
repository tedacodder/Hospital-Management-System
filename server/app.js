// var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors=require('cors')
const pool=require('./src/bd')

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();
const PORT=5000
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get("/login",async (req,res)=>{
  try{
    const result =await pool.query('SELECT * FROM users;')
    res.json(result.rows)
  }
  catch(err){
    console.error(err.message)
    res.status(500).send("Server Error")
  }
    
})
// app.post("/login",(req,res)=>{
//     const {email,password}=res.body;
//     console.log(email,password)
//     res.send("user loging")

// })
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})

