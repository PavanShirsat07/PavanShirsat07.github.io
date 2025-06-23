import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Todos: [{ id: 1, text: "Pavan Hello" }]
};

export const TodoSlice = createSlice({
  name: 'Todo',
  initialState, // ✅ Correct capitalization
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.Todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload); // ✅ Fixed return
    }
  }
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
