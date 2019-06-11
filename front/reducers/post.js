export const intialState = { //초기 스테이트
//TODO 서버에서 받아야할 더미데이터
   mainPosts : [
      //첫번째 유저의 포스팅
      {
         User:{
            id:1,
            nickname:'제로초',
         },
         content:'첫번 째 게시글',
         img: 'https://i.pinimg.com/originals/d9/82/f4/d982f4ec7d06f6910539472634e1f9b1.png'
      }
   ],
   imagePaths : [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
   type:ADD_POST,
};

const addDummy = {
   type:ADD_DUMMY,
   data: {
      content : 'hello',
      UserId : 1,
      User: {
         nickname : '제로초'
      }
   }
};

const reducer = (state = intialState, action) => {
   switch (action.type) {
      case ADD_POST : {
         return {
            ...state,
         }
      }
      case ADD_DUMMY : {
         return {
            ...state,
            mainPosts: [action.data, ...state.mainPosts],
         }
      }
      default:{
         return {
            ...state,
         }
      }
   }
};

export default reducer;