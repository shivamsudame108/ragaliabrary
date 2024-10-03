const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    favorites: {
        type: DataTypes.JSON, // Store favorite ragas as a JSON array
        defaultValue: [],
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
});

User.addFavoriteRaga = async function(userId, ragaId) {
    const user = await this.findByPk(userId);
    if (user) {
        const favorites = user.favorites || [];
        if (!favorites.includes(ragaId)) {
            favorites.push(ragaId);
            user.favorites = favorites;
            await user.save();
        }
    }
};

User.removeFavoriteRaga = async function(userId, ragaId) {
    const user = await this.findByPk(userId);
    if (user) {
        const favorites = user.favorites || [];
        if (favorites.includes(ragaId)) {
            user.favorites = favorites.filter(id => id !== ragaId);
            await user.save();
        }
    }
};

User.getFavorites = async function(userId) {
    const user = await this.findByPk(userId);
    return user ? user.favorites : [];
};

module.exports = User;
