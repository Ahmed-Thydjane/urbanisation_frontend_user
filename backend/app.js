const express= require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors = require("cors");
const Users=require('./models/user');
const cookieParser = require('cookie-parser');



app.use(cookieParser());
app.use(bodyparser.json());
app.use(cors({origin:'http://127.0.0.1:4200',credentials: true}));

/*URL de la base de donne*/
const db_url='mongodb+srv://cheick:3AXse281qibWcFVL@cluster0.f51yr.mongodb.net/vhome?retryWrites=true&w=majority';
const port=3000;


/*La connection se fait avec ORM mongoose */
mongoose.connect(db_url,{UseNewUrlParser: true})
.then((result)=>app.listen(port, ()=>console.log("**** db connected then connection on socket 3000 ****")))
.catch((err)=>console.log(err)) ;


app.use(express.static('public'));

//*Chemin des routes
const{sendError, sendMessage} = require("./message");
const sign_up=require('./sign_up');
const checkLogin=require('./checkLogin');
const sign_up_advertiser=require('./sign_up_advertiser');
const sign_up_admin=require('./sign_up_admin');
const add_new_movie=require('./add_new_movie');
const add_new_playlist=require('./add_new_playlist');
const getAllUsers = require('./getAllUsers');
const getAllPlaylists = require('./getAllPlaylists');
const update_password = require('./update_password');
const modifyPermission=require('./modifyPermission');
const getAllAds=require('./getAllAds');
const addAd=require('./addAd');
const getOnePlaylist=require('./getOnePlaylist');


/*  ========================================================================================
    =                                    ROUTES                                            =
    ======================================================================================== */
    
app.post('/sign_in',(req,res) => {sign_up.sign_up(req,res)});

app.post('/sign_up',(req,res) => {sign_up.sign_up(req,res)})

app.post('/sign_up_advertiser',(req,res) => {sign_up_advertiser.sign_up_advertiser(req,res)});

app.post('/sign_up_admin',(req,res) => {sign_up_admin.sign_up_admin(req,res)});

app.post('/checkLogin',(req,res) => {checkLogin.checklogin(req,res)});

app.post('/add_new_movie',(req,res) => {add_new_movie.add_new_movie(req,res)});

app.post('/add_new_playlist',(req,res) => {add_new_playlist.add_new_playlist(req,res)});

app.post('/getAllUsers',(req,res) => {getAllUsers.getAllUsers(req,res)});

app.post('/getAllPlaylists',(req,res) => {getAllPlaylists.getAllPlaylists(req,res)});

app.post('/update_password',(req,res) => {update_password.update_password(req,res)});

app.post('/modifyPermission',(req,res) => {modifyPermission.modifyPermission(req,res)});

app.post('/getAllAds',(req,res) => {getAllAds.getAllAds(req,res)});

app.post('/addAd',(req,res) => {addAd.addAd(req,res)});

app.post('/getOnePlaylist',(req,res) => {getOnePlaylist.getOnePlaylist(req,res)});




