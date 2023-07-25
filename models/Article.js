module.exports = (Sequelize, DataTypes) => {
    const Article = Sequelize.define("Article", {
        article_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        journal_title: {
           type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })

    return Article;
}