import Genres from "../models/GenreModel.js";
import Users from "../models/UserModels.js";
import Animes from "../models/AnimeModel.js";
import { Op } from "sequelize";

export const getGenres = async (req, res) => {
    try {
        let response;
        if(req.role === "admin") {
            response = await Genres.findAll({
                attributes:['id','uuid','name'],
                include:[{
                    model: Animes,
                    attributes:['title']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }else{
            response = await Genres.findAll({
                attributes:['id','uuid','name'],

                include:[{
                    model: Animes,
                    attributes:['title']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getGenreById = async (req, res) => {
    try {
        const genre = await Genres.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!genre) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        let response;
        if(req.role === "admin") {
            response = await Genres.findOne({
                attributes:['id','uuid','name'],
                where:{
                    id: genre.id
                },
                include:[{
                    model: Animes,
                    attributes:['title']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }else{
            response = await Genres.findOne({
                attributes:['id','uuid','name'],
                where: {
                    [Op.and]: [{id: genre.id},{userId: req.userId}]
                },
                include:[{
                    model: Animes,
                    attributes:['title']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createGenre = async (req, res) => {
   const {name} = req.body;
    try {
        await Genres.create({
            name: name,
            userId: req.userId
        });
        res.status(201).json({msg: "Genre Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateGenre = async (req, res) => {
    try {
        const genre = await Genres.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!genre) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        const {name} = req.body;
        if(req.role === "admin") {
           await Genres.update({name},{
            where:{
                id: genre.id
            }
           });
        }else{
            if(req.userId !== genre.userId) return res.status(403).json({msg: "Akses Terbatas"});
            await Genres.update({name},{
                where: {
                    [Op.and]: [{id: genre.id},{userId: req.userId}]
                },
               });
        }
        res.status(200).json({msg: "Genre Updated Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteGenre = async (req, res) => {
    try {
        const genre = await Genres.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!genre) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        if(req.role === "admin") {
           await Genres.destroy({
            where:{
                id: genre.id
            }
           });
        }else{
            if(req.userId !== genre.userId) return res.status(403).json({msg: "Akses Terbatas"});
            await Genres.destroy({
                where: {
                    [Op.and]: [{id: genre.id},{userId: req.userId}]
                },
               });
        }
        res.status(200).json({msg: "Genre Deleted Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}