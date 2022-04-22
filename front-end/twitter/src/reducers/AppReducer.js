export default function reducer(state, action) {
    switch(action.type) {
        case 'CURRENT_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'GET_ALL_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case 'UPDATE_POST':
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post._id === action.payload._id) {
                        return action.payload;
                    }
                    return post;
                }
            )};
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
            default:
            return state;
        }
}