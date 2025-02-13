import Episodes from "../models/EpisodeModel.js";
import Users from "../models/UserModels.js";
import Animes from "../models/AnimeModel.js";
import { Op } from "sequelize";

export const getEpisodes = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = parseInt(req.query.search_query) || "";
    const offset = limit * page;
    const totalRows = await Episodes.count({
        where: {
            [Op.or]: [{animeId: {
                [Op.like]: '%'+search+'%'
            }}]
        }
    })
    const totalPage = Math.ceil(totalRows / limit);
    try {
        let response;
        if(req.role === "admin") {
            response = await Episodes.findAll({
                where: {
                    [Op.or]: [{animeId: {
                        [Op.like]: '%'+search+'%'
                    }}]
                },
                offset: offset,
                limit: limit,
                order: [
                    ['id', 'DESC']
                ],
                attributes:['id','uuid', 'episode', 'createdAt','video_link','video_link1','video_link2','video_link3','video_link4','video_link5','animeId'],
                include:[{
                    model: Animes,
                    attributes:['id','title']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }else{
            response = await Episodes.findAll({
                where: {
                    [Op.or]: [{animeId: {
                        [Op.like]: '%'+search+'%'
                    }}]
                },
                offset: offset,
                limit: limit,
                order: [
                    ['id', 'DESC']
                ],
                attributes:['id','uuid', 'episode','createdAt','video_link','video_link1','video_link2','video_link3','video_link4','video_link5','animeId'],
                include:[{
                    model: Animes,
                    attributes:['id','title']
                },{
                    model: Users,
                    attributes:['name','email']
                }]
            })
        }
        res.status(200).json({
            data: response,
            page: page,
            limit: limit,
            totalRows: totalRows,
            totalPage: totalPage
        });
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getEpisodeById = async (req, res) => {
    try {
        const episode = await Episodes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!episode) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        let response;
        if(req.role === "admin") {
            response = await Episodes.findOne({
                attributes:['id','uuid', 'episode','video_link','video_link1','video_link2','video_link3','video_link4','video_link5','animeId'],
                where:{
                    id: episode.id
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
            response = await Episodes.findOne({
                attributes:['id','uuid', 'episode','video_link','video_link1','video_link2','video_link3','video_link4','video_link5','animeId'],
                where: {
                    [Op.and]: [{id: episode.id}]
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

export const createEpisode = async (req, res) => {
   const { episode, video_link, video_link1, video_link2, video_link3, video_link4, video_link5, animeId} = req.body;
    try {
        await Episodes.create({
            episode: episode,
            video_link: video_link,
            video_link1: video_link1,
            video_link2: video_link2,
            video_link3: video_link3,
            video_link4: video_link4,
            video_link5: video_link5,
            animeId: animeId,
            userId: req.userId
        });
        res.status(201).json({msg: "Episode Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateEpisode = async (req, res) => {
    try {
        const episodes = await Episodes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!episodes) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        const { episode, video_link, video_link1, video_link2, video_link3, video_link4, video_link5, animeId} = req.body;
        if(req.role === "admin") {
           await Episodes.update({
            episode: episode,
            video_link: video_link,
            video_link1: video_link1,
            video_link2: video_link2,
            video_link3: video_link3,
            video_link4: video_link4,
            video_link5: video_link5,
            animeId: animeId,
            userId: req.userId
           },{
            where:{
                id: episodes.id
            }
           });
        }else{
            if(req.userId !== episodes.userId) return res.status(403).json({msg: "Akses Terbatas"});
            await Episodes.update({
            episode: episode,
            video_link: video_link,
            video_link1: video_link1,
            video_link2: video_link2,
            video_link3: video_link3,
            video_link4: video_link4,
            video_link5: video_link5,
            animeId: animeId,
            userId: req.userId
            },{
                where: {
                    [Op.and]: [{id: episodes.id},{userId: req.userId}]
                },
               });
        }
        res.status(200).json({msg: "Episode Updated Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteEpisode = async (req, res) => {
    try {
        const episodes = await Episodes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!episodes) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        if(req.role === "admin") {
           await Episodes.destroy({
            where:{
                id: episodes.id
            }
           });
        }else{
            if(req.userId !== episodes.userId) return res.status(403).json({msg: "Akses Terbatas"});
            await Episodes.destroy({
                where: {
                    [Op.and]: [{id: episodes.id},{userId: req.userId}]
                },
               });
        }
        res.status(200).json({msg: "Episode Deleted Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}