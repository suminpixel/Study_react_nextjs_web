//DB 관련
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

//시퀄라이즈 : sql문을 쓰지 않고 디비를 컨트롤
//시퀄라이즈 config 세팅 (config.js)
const sequelize = new Sequelize(config.database, config.username, config.password, config);

//나머지 모델(디비)들 연결
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Auth = require('./auth')(sequelize, Sequelize);
db.sequelize = sequelize;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
