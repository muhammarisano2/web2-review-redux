const initialState = {
  data: [],
  pagination: {
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0,
  },
  preview: {},
  isLoading: false
};
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_PENDDING':
            return{
                ...state,
                isLoading: true
            }
        case 'SET_PRODUCT_SUCCESS':
            console.log(action.payload);
            return{
                ...state,
                data: action.payload.data,
                pagination: action.payload.pagination,
                isLoading: false
            }
            case 'SET_DETAIL_PENDDING':
                return{
                    ...state,
                    isLoading: true
                }
            case 'SET_DETAIL_SUCCESS':
                return{
                    ...state,
                    detail: action.payload,
                    isLoading: false
                }
        default:
            return state;
    }
  
};
export default productReducer;
