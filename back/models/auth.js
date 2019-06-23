//시퀄라이즈 프레임웤으로
//User 라는 테이블을 만듬
module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define('Auth', { // 테이블명
        userId: {
            type: DataTypes.STRING(20), // 20글자 이하
            allowNull: false, // 필수
            unique: true,
        },
        authCode: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글저장
    });

    Auth.associate = (db) => { }; //관련디비

    return Auth;
};