export const todoReducer = (initialState=[], action) =>{

    switch (action.type) {
        case '[TODO] Add Todo':
            //en caso tengamos una accion que aun no implementamos
            //throw new Error('Action.type ABC no esta implementado')
            return [
                ...initialState,
                action.payload
            ]
        case '[TODO] Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload)
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id===action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return initialState
    }
}