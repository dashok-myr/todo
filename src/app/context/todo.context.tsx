"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface ITodo {
  todo: string;
  isDone: boolean;
}

export const TodoContext = createContext<{
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}>({
  todos: [],
  setTodos: () => {},
});

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
