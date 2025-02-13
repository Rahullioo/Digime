import { Sequelize } from "sequelize";
import db from "../config/Databases.js";

const {DataTypes} = Sequelize;

const Episodes = db.define ('episodes',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    episode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    video_link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    video_link1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    video_link2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    video_link3: {
        type: DataTypes.STRING,
        allowNull: true
    },
    video_link4: {
        type: DataTypes.STRING,
        allowNull: true
    },
    video_link5: {
        type: DataTypes.STRING,
        allowNull: true
    },
    animeId: {
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

export default Episodes;