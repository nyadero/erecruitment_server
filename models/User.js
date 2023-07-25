const { DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("User", {
        name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        email: {
             type:DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        gender: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        date_of_birth: {
            type:DataTypes.DATE,
            allowNull: true,
        },
        marital_status: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        id_document: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        id_doc_number: {
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        primary_phone: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        alternate_phone: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        physical_address: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        nationality: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        county: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        languages: {
            type:DataTypes.JSON,
            allowNull: true,
        },
        skills: {
            type:DataTypes.JSON,
            allowNull: true,
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });


    User.associate = (models) => {
        User.hasMany(models.Book, {
            onDelete: "cascade"
        });

        User.hasMany(models.BookChapter, {
            onDelete: "cascade"
        });

         User.hasMany(models.Article, {
            onDelete: "cascade"
        });

        User.hasMany(models.Grant, {
            onDelete: "cascade"
        });

        User.hasMany(models.Supervision, {
            onDelete: "cascade"
        });
    }

    return User;
}