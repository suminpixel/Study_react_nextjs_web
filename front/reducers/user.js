export const intialState = { //초기 스테이트
    isLoggedIn: false,
    user : {},
};

//액션세
const LOG_IN = 'LOG_IN';//액션의 이름
const LOG_OUT = 'LOG_OUT';//액션의 이름
const loginAction = {
    type: LOG_IN,
    data: {
        nickname: '제로초'
    },
};
const logoutAction = {
    type: LOG_OUT
};

//리듀서 세
const reducer = (state = intialState, action) => {
    switch (action.type) {

        case LOG_IN : { //만약 액션타입이 로그인 액션이면...
            return{
                ...state, //다음스테이트를 이렇게 같이 세탕한다. 스프레드 문법 : 새 객체를 새ㅔㅇ성해야 불변성 이전 객체와 차이점을 알 수 있
                isLoggedIn: true,
                user: action.data,
            }
        }
        case LOG_OUT : { //만약 액션타입이 로그아웃이면...
            return{
                ...state, //다음스테이트를 이렇게 같이 세탕한
                isLoggedIn: false,
                user: null,
            }
        }
        default:{
            return {
                state,
            }
        }
    }
};

export default reducer;