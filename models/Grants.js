module.exports = (Sequelize, DataTypes) => {
   const Grant = Sequelize.define("Grant", {
        grant: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
           type: DataTypes.STRING,
            allowNull: false
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: false
        }
   })

   return Grant;
}