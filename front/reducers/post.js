export const intialState = { //초기 스테이트
   mainPosts:[],
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