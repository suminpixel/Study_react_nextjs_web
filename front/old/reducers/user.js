const dummyUser = {
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers: [],
    id: 1,
};
/*

해당 리덕스문서가 사용하는 스테이트 중앙 통제실
웹을 대표하는 모든 상태값을 가지고 있음
설계가 가장 중요

*/
export const initialState = {
    isLoggedIn: false, // 로그인 여부
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 실패 사유
    signedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null, // 내 정보
    followingList: [], // 팔로잉 리스트
    followerList: [], // 팔로워 리스트
    userInfo: null, // 남의 정보
};

//액션 이름 세팅
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';


//리듀서 세팅
export default (state = initialState, action) => {
    switch (action.type) {

        case LOG_IN_REQUEST : { //만약 액션타입이 로그인 액션이면...
            return{
                ...state, //다음스테이트를 이렇게 같이 세탕한다. 스프레드 문법 : 새 객체를 새ㅔㅇ성해야 불변성 이전 객체와 차이점을 알 수 있
                isLoggedIn: true,
                user: dummyUser,
                logInErrorReason: '',
                //user: action.data,
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: dummyUser,
                isLoading: false,
            };
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                logInErrorReason: action.error,
                me: null,
            };
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            };
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                isSigningUp: true,
                isSignedUp: false,
                signUpErrorReason: '',
            };
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: true,
            };
        }
        case SIGN_UP_FAILURE: {
            return {
                ...state,
                isSigningUp: false,
                signUpErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};