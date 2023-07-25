module.exports = (Sequelize, DataTypes) => {
    const Book = Sequelize.define("Book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place_of_publication: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Book;
}