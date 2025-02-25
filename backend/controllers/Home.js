import Animes from "../models/AnimeModel.js";
import Users from "../models/UserModels.js";
import Genres from "../models/GenreModel.js";
import Episodes from "../models/EpisodeModel.js";
import { Op } from "sequelize";

export const homeAnimes = async (req, res) => {

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
                attributes:['uuid','title','deskripsi','image', 'genreId','status'],
                include:[{
                    model: Genres,
                    attributes:['name']
                },{
                    model: Episodes,
                    attributes:['uuid','episode']
                },{
                    model: Users,
                    attributes:['name']
                }]
            })
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

export const homeAnimeById = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const offset = limit * page;
    const totalRows = await Animes.count({
        where:{
            uuid: req.params.id
        },
        include:[{
            model:Episodes,
            attributes:['episode']
        }]
    })
    const totalPage = Math.ceil(totalRows / limit);

    try {
        const anime = await Animes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!anime) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        let response;
            response = await Animes.findOne({
                attributes:['uuid','title','deskripsi','image', 'genreId','status'],
                where:{
                    id: anime.id
                },
                include:[{
                    model: Genres,
                    attributes:['name']
                },{
                    model: Episodes,
                    attributes:['uuid','episode','createdAt'],
                    offset: offset,
                    limit: limit,
                    order: [
                    ['episode', 'DESC']
                    ],
                },{
                    model: Users,
                    attributes:['name']
                }]
            })
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

export const homeGenres = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await Genres.count({
        where: {
            [Op.or]: [{name: {
                [Op.like]: '%'+search+'%'
            }}]
        }
    })
    const totalPage = Math.ceil(totalRows / limit);
    try {
        let response;
            response = await Genres.findAll({
                where: {
                    [Op.or]: [{name: {
                        [Op.like]: '%'+search+'%'
                    }}]
                },
                offset: offset,
                limit: limit,
                order: [
                    ['id', 'DESC']
                ],
                attributes:['uuid','name'],
                include:[{
                    model: Animes,
                    attributes:['title']
                },{
                    model: Users,
                    attributes:['name']
                }]
            })
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

export const homeGenreById = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const offset = limit * page;
    const totalRows = await Genres.count({
        where:{
            uuid: req.params.id
        },
        include:[{
            model:Animes,
        }]
    })
    const totalPage = Math.ceil(totalRows / limit);
    try {
        const genre = await Genres.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!genre) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        let response;
            response = await Genres.findOne({
                attributes:['uuid','name'],
                where:{
                    id: genre.id
                },
                include:[{
                    model: Animes,
                    attributes:['uuid','title','image'],
                    offset: offset,
                    limit: limit
                },{
                    model: Users,
                    attributes:['name']
                }]
            })
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

export const homeEpisodes = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = parseInt(req.query.search_query) || "";
    const offset = limit * page;
    const totalRows = await Episodes.count({
        where: {
            [Op.or]: [{episode: {
                [Op.like]: '%'+search+'%'
            }}]
        }
    })
    const totalPage = Math.ceil(totalRows / limit);
    try {
        let response;
            response = await Episodes.findAll({
                where: {
                    [Op.or]: [{episode: {
                [Op.like]: '%'+search+'%'
                }}]
                },
                offset: offset,
                limit: limit,
                order: [
                    ['id', 'DESC']
                ],
                attributes:['uuid','animeId', 'episode', 'createdAt', 'video_link','video_link1','video_link2','video_link3','video_link4','video_link5'],
                include:[{
                    model: Animes,
                    attributes:['title','image']
                },{
                    model: Users,
                    attributes:['name']
                }]
            })
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

export const homeEpisodeById = async (req, res) => {
    try {
        const episode = await Episodes.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!episode) return res.status(404).json({msg: "Data Tidak Ditemukan"})

        let response;
            response = await Episodes.findOne({
                attributes:['uuid', 'animeId', 'episode', 'createdAt','video_link','video_link1','video_link2','video_link3','video_link4','video_link5'],
                where:{
                    id: episode.id
                },
                include:[{
                    model: Animes,
                    attributes:['uuid','title','deskripsi','image', 'status'],
                    include:[{
                        model: Episodes,
                        attributes:['uuid','episode','createdAt'],
                    },{
                        model: Genres,
                        attributes:['name']
                    }]
                },{
                    model: Users,
                    attributes:['name']
                }]
            })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

