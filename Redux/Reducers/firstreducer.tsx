export const firstReducer= (state:any,action:any)=> {
    switch(action.type) {
        case "QUOTE_ACTION": 
              return {quote: action.data}
        default: 
              return {quote: "This is the default quote"}
    }
}