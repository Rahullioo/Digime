import { Sequelize } from "sequelize";
import db from "../config/Databases.js";
import Users from "./UserModels.js";
import Genres from "./GenreModel.js";
import Episodes from "./EpisodeModel.js";

const {DataTypes} = Sequelize;


const Animes = db.define('animes',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    deskripsi: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len:[3, 100]
        }
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
},{
    freezeTableName: true,
});

Users.hasMany(Animes);
Animes.belongsTo(Users, {
    foreignKey: 'userId'
});

Genres.hasMany(Animes,{
    onDelete: 'RESTRICT'
});
Animes.belongsTo(Genres, {
    foreignKey: 'genreId'
});

Animes.hasMany(Episodes);
Episodes.belongsTo(Animes, {
    foreignKey: 'animeId'
});

Users.hasMany(Episodes);
Episodes.belongsTo(Users, {
    foreignKey: 'userId'
});

Users.hasMany(Genres);
Genres.belongsTo(Users, {
    foreignKey: 'userId'
});
export default Animes;