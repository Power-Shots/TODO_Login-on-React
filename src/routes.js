import Login from "./_components/Login/Login";
import TodoList from "./_components/Todos/TodoList/TodoList";

export const publicRoutes = [
  {
    path: '/login', component: Login
  },
]

export const privateRoutes = [
  {
    path: '/todo-list', component: TodoList
  }
]