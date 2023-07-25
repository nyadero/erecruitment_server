//
 module.exports = (Sequelize, DataTypes) => {
    const BookChapter = Sequelize.define("BookChapter", {
        chapter_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        book_title: {
           type: DataTypes.STRING,
            allowNull: false
        },
        book_isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        book_publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        from_page: {
            type: DataTypes.STRING,
            allowNull: false
        },
        from_page: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return BookChapter;
}
//  