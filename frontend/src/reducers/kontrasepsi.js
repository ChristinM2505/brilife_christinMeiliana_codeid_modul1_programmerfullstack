import {
    //SAVE_KONTRASEPSI_REQUEST,SAVE_KONTRASEPSI_SUCCESS,SAVE_KONTRASEPSI_FAILURE,
    FIND_KONTRASEPSI_REQUEST,FIND_KONTRASEPSI_SUCCESS,FIND_KONTRASEPSI_FAILURE,
} from '../action/constant';

const defaultState = {data:null,loading:false,error:null};

// export function saveKontrasepsi(state = defaultState,action){
//     switch(action.type){
//         case SAVE_KONTRASEPSI_REQUEST:
//             return{
//                 ...state,
//                 loading:true,
//                 error:null
//             };
//         case SAVE_KONTRASEPSI_SUCCESS:
//             return{
//                 data : action.data,
//                 loading:false,
//                 error:null
//             };
//         case SAVE_KONTRASEPSI_FAILURE:
//             return{
//                 ...state,
//                 loading:false,
//                 error:action.error
//             };
//         default:
//         return state;
//     }
// }
      
export function findKontrasepsi(state = defaultState,action){
    switch(action.type){
        case FIND_KONTRASEPSI_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            };
        case FIND_KONTRASEPSI_SUCCESS:
            return{
                data : action.data,
                loading:false,
                error:null
            };
        case FIND_KONTRASEPSI_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.error
            };
        default:
        return state;
    }
}
