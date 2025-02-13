import express from "express";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/Databases.js";

import SequelizeStore from "connect-session-sequelize";

import UserRoute from "./routes/UserRoute.js";
import AnimeRoute from "./routes/AnimeRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import GenreRoute from "./routes/GenreRoute.js";
import EpisodeRoute from "./routes/EpisodeRoute.js";


import HomeRoute from "./routes/HomeRoute.js";


dotenv.config();

const app = express();

const port = process.env.APP_PORT;

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

//(async()=>{
//    await db.sync();
//})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials:true,
    origin:[process.env.CORS_ORIGIN_1,process.env.CORS_ORIGIN_2]
}));
app.use(express.json());

app.use(UserRoute);
app.use(AnimeRoute);
app.use(AuthRoute);
app.use(GenreRoute);
app.use(EpisodeRoute);

app.use(HomeRoute)

//store.sync();



app.listen(port, ()=>{
    console.log(`Server Running... Port : ${port}`);
});