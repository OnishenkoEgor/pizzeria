const initialState = {
    menu: [],
    loading: false,
    error: false,
    items: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };

        case 'MENU_ERRORED':
            return {
                ...state,
                error: true
            };
        case 'ADD_ITEM_TO_CART':
            if (state.items.find(item => item.id === action.payload)) {
                let newItems = [];
                state.items.forEach(elem => {
                    if (elem.id === action.payload) {
                        let newCount = elem.count;
                        newCount++;
                        let newElem = {
                            ...elem,
                            count: newCount
                        }
                        newItems.push(newElem)
                    } else {
                        newItems.push(elem)
                    }
                })
                return {
                    ...state,
                    items: newItems
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...state.menu.find(item => item.id === action.payload), count: 1 }]
                }
            };
        case 'DELETE_ITEM_FROM_CART':
            let newArr  =[];
            state.items.forEach(item=>{
                if(item.id===action.payload){
                    let newItem = {
                        ...item,
                        count:item.count-1
                    }
                    newArr.push(newItem);
                    
                }else{
                    newArr.push(item)
                }
                
            })

            return {
                ...state,
                items: newArr.filter(item=>item.count>0)
            };
        case 'CLEAR_CART':
            return{
                ...state,
                items:[]
            }
        default:
            return state
    }
}
export default reducer


