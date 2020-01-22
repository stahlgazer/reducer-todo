import { useReducer } from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Use some reducers",
    completed: false,
    id: 3892987590
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    case "REMOVE_TODO":
      return state.filter(todo => !todo.completed);
      
    default:
      return state;
  }
};
