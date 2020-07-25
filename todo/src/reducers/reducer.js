export const initialState = [
{
    task: 'Create To do App',
    id: 1528817084359,
    completed: false
},
{
    task: 'Finish Project',
    id: 1528817077286,
    completed: false
},
{
    task: 'Study',
    id: 1528817084358,
    completed: false
},
{
    task: 'Walk Dog',
    id: 1528817084355,
    completed: false
}
]

export const reducer = (state, action) => {
    switch(action.type) {
        case  "SET_TODO":
            const newItem = {
                task: action.payload,
                id: Date.now(),
                completed: false
            }
      return [
        ...state,
        newItem
      ]
      case "CHANGE_KEY":

        return [
            ...state.map(todo => action.payload === todo.id ? {...todo, completed: !todo.completed} : todo)
        ]
        case "CLEAR_COMPLETED":
            
        return [
            ...state.filter(item => !item.completed)
        ]

    default:
      return state;
  }
 };





