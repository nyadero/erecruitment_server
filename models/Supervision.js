module.exports = (Sequelize, DataTypes) => {
    const Supervision = Sequelize.define("Supervision", {
        institution: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
           type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_of_students: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    });

    return Supervision;
}