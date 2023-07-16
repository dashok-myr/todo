import Image from "next/image";
import deleteIcon from "../images/icon-cross.svg";
import React, { useContext, useState } from "react";
import { ITodo, TodoContext } from "@/app/context/todo.context";
import CompletedIcon from "@/app/components/CompletedIcon";
import classNames from "classnames";
import {
  ETodosFilter,
  TodoFilterContext,
} from "@/app/context/todoFilterContext";
import TodoInput from "@/app/components/Input";

function calculateActiveTodos(todos: ITodo[]) {
  const activeTodos = todos.filter((todo) => !todo.isDone);
  return activeTodos.length;
}

function generateTodosLeftText(activeTodos: number) {
  if (activeTodos === 0) {
    return "no todos!";
  }
  if (activeTodos === 1) {
    return "1 item left";
  }
  return `${activeTodos} items left`;
}

export default function Todos() {
  const { todos, setTodos } = useContext(TodoContext);
  const { todoFilter, setTodoFilter } = useContext(TodoFilterContext);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    setTodos([...todos, { todo: inputValue, isDone: false }]);
    setInputValue("");
  }

  function deleteTodo(index: number) {
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  }

  function toggleCompleteTodo(index: number) {
    const todosCopy = [...todos];
    const todoObj = todosCopy[index];
    todoObj.isDone = !todoObj.isDone;
    setTodos(todosCopy);
  }

  const filteredTodos = todos.filter((todo) => {
    if (todoFilter === ETodosFilter.ALL) {
      return true;
    } else if (todoFilter === ETodosFilter.ACTIVE) {
      return !todo.isDone;
    }
    return todo.isDone;
  });

  return (
    <div className="mt-36">
      <TodoInput
        onValueChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        onButtonClick={addTodo}
      />
      <div className="h-auto md:h-auto rounded-lg bg-white dark:bg-desaturated-blue drop-shadow-2xl">
        <div className="overflow-y-auto flex flex-col justify-start h-80 md:w-[480px] md:mx-auto">
          {filteredTodos.length === 0 && (
            <p className="flex text-very-dark-grayish-blue dark:text-light-grayish-blue justify-center items-center h-full">
              Let&apos;s plan your day! Add a todo!
            </p>
          )}
          {filteredTodos.map((todo, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex justify-between items-center gap-4 p-4 border-b border-very-dark-grayish-blue dark:border-dark-grayish-blue1">
                  {todo.isDone ? (
                    <CompletedIcon
                      onCompletedIconClick={() => toggleCompleteTodo(index)}
                    />
                  ) : (
                    <button
                      onClick={() => toggleCompleteTodo(index)}
                      className="h-5 w-6 rounded-full cursor-pointer border border-very-dark-grayish-blue hover:border-indigo-500"
                    ></button>
                  )}
                  <div
                    className={classNames(
                      "w-full text-desaturated-blue dark:text-light-grayish-blue",
                      {
                        "line-through text-very-dark-grayish-blue dark:text-very-dark-grayish-blue":
                          todo.isDone,
                      }
                    )}
                  >
                    {todo.todo}
                  </div>
                  <button onClick={() => deleteTodo(index)}>
                    <Image className="w-3 h-3" src={deleteIcon} alt="search" />
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-between text-xs p-4 text-very-dark-grayish-blue font-semibold border-t border-dark-grayish-blue1">
          <div className="hover:text-light-grayish-blue cursor-pointer">
            {generateTodosLeftText(calculateActiveTodos(todos))}
          </div>
          <div className="flex gap-2 cursor-pointer">
            <button
              onClick={() => setTodoFilter(ETodosFilter.ALL)}
              className="hover:text-light-grayish-blue"
            >
              All
            </button>
            <button
              onClick={() => setTodoFilter(ETodosFilter.ACTIVE)}
              className="hover:text-light-grayish-blue"
            >
              Active
            </button>
            <button
              onClick={() => setTodoFilter(ETodosFilter.COMPLETED)}
              className="hover:text-light-grayish-blue"
            >
              Completed
            </button>
          </div>
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.isDone))}
            className="hover:text-light-grayish-blue cursor-pointer"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}
