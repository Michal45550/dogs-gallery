import {ADD_DOG_IMG, INCREMENT_IMAGE_LIKE, INIT_ALL_BREEDS, SET_LOADING} from './actions'

const initialState = {
    loading: false,
    breeds: [],
    dogsImages: [],
    summary: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case INIT_ALL_BREEDS:
            return {
                ...state,
                loading: false,
                breeds: Object.keys(action.payload).map(b => {
                    return {
                        breed: b,
                        count: 0,
                        likes: 0
                    }
                })
            }
        case ADD_DOG_IMG:
            return {
                ...state,
                loading: false,
                breeds: state.breeds.map(b => b.breed === action.payload.breed ? {...b, count: b.count + 1} : b),
                dogsImages: [...state.dogsImages, {...action.payload, likes: 0}]
            }
        case INCREMENT_IMAGE_LIKE:
            return {
                ...state,
                breeds: state.breeds.map(b => b.breed === action.payload.breed ? {...b, likes: b.likes + 1} : b),
                dogsImages: state.dogsImages.map(d => d.image === action.payload.image ? {...d, likes: d.likes + 1} : d)
            }
        default:
            return state;
    }
};

export default Reducer;
