import Animes from "../models/AnimeModel.js";
import Users from "../models/UserModels.js";
import Genres from "../models/GenreModel.js";
import { Op } from "sequelize";

export const getAnimes = async (req, res) => {

    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await Animes.count({
        where: {
            [Op.or]: [{title: {
                [Op.like]: '%'+search+'%'
            }}]
        }
    })
    const totalPage = Math.ceil(totalRows / limit);

    try {
        let response;
        if(req.role === "admin") {
            response = await Animes.findAll({
                where: {
                    [Op.or]: [{title: {
                        [Op.like]: '%'+search+'%'
                    }}]
                },
                offset: offset,
                limit: limit,
                order: [
                    ['id', 'DESC']
                ],
                attributes:['id','uuid','title','deskripsi','image', 'genreId','status'],
                include:[{
                    model: Genres,
                    attributes:['name']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }else{
            response = await Animes.findAll({
                where: {
                    [Op.or]: [{title: {
                        [Op.like]: '%'+search+'%'
                    }}]
                },
                offset: offset,
                limit: limit,
                order: [
                    ['id', 'DESC']
                ],
                attributes:['id','uuid','title','deskripsi','image', 'genreId','status'],
                include:[{
                    model: Genres,
                    attributes:['name']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }
        res.status(200).json({
            data:response,
            page: page,
            limit: limit,
            totalRows: totalRows,
            totalPage: totalPage
        });
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAnimesById = async (req, res) => {
    try {
        const anime = await Animes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!anime) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        let response;
        if(req.role === "admin") {
            response = await Animes.findOne({
                attributes:['id','uuid','title','deskripsi','image', 'genreId','status'],
                where:{
                    id: anime.id
                },
                include:[{
                    model: Genres,
                    attributes:['name']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }else{
            response = await Animes.findOne({
                attributes:['id','uuid','title','deskripsi','image', 'genreId','status'],
                where: {
                    [Op.and]: [{id: anime.id}]
                },
                include:[{
                    model: Genres,
                    attributes:['name']
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

export const createAnimes = async (req, res) => {
    const {title, deskripsi, image, genreId, status} = req.body;
    try {
        await Animes.create({
            title: title,
            deskripsi: deskripsi,
            image: image,
            status: status,
            genreId: genreId,
            userId: req.userId
        });
        res.status(201).json({msg: "Anime Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateAnimes = async (req, res) => {
    try {
        const anime = await Animes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!anime) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        const {title, deskripsi, image, genreId, status} = req.body;
        if(req.role === "admin") {
           await Animes.update({title, deskripsi, image, genreId, status},{
            where:{
                id: anime.id
            }
           });
        }else{
            if(req.userId !== anime.userId) return res.status(403).json({msg: "Akses Terbatas"});
            await Animes.update({title, deskripsi, image, genreId, status},{
                where: {
                    [Op.and]: [{id: anime.id},{userId: req.userId}]
                },
               });
        }
        res.status(200).json({msg: "Anime Updated Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteAnimes = async (req, res) => {
    try {
        const anime = await Animes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!anime) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        if(req.role === "admin") {
           await Animes.destroy({
            where:{
                id: anime.id
            }
           });
        }else{
            if(req.userId !== anime.userId) return res.status(403).json({msg: "Akses Terbatas"});
            await Animes.destroy({
                where: {
                    [Op.and]: [{id: anime.id},{userId: req.userId}]
                },
               });
        }
        res.status(200).json({msg: "Anime Deleted Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}