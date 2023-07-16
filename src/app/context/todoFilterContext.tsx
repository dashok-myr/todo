"use client";
import {
  SetStateAction,
  Dispatch,
  createContext,
  useState,
  ReactNode,
} from "react";

export enum ETodosFilter {
  ALL,
  ACTIVE,
  COMPLETED,
}

export const TodoFilterContext = createContext<{
  todoFilter: ETodosFilter;
  setTodoFilter: Dispatch<SetStateAction<ETodosFilter>>;
}>({
  todoFilter: ETodosFilter.ALL,
  setTodoFilter: () => {},
});

export const TodoFilterProvider = ({ children }: { children: ReactNode }) => {
  const [todoFilter, setTodoFilter] = useState<ETodosFilter>(ETodosFilter.ALL);

  return (
    <TodoFilterContext.Provider value={{ todoFilter, setTodoFilter }}>
      {children}
    </TodoFilterContext.Provider>
  );
};
