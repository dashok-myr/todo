import Image from "next/image";
import searchIcon from "../images/search-icon.svg";
import React from "react";

interface ITodoInputProps {
  value: string;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

export default function TodoInput({
  value,
  onValueChange,
  onButtonClick,
}: ITodoInputProps) {
  return (
    <div className="">
      <div className="relative flex justify-center my-8">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Image className="w-5 h-5" src={searchIcon} alt="search" />
        </div>
        <input
          onChange={onValueChange}
          className="text-desaturated-blue dark:text-light-grayish-blue bg-white dark:bg-desaturated-blue text-sm rounded-lg block w-full pl-10 p-4"
          placeholder="Add a todo"
          value={value}
        />
        {value && (
          <button
            className="absolute inset-y-0 right-6 flex items-center pl-3 text-very-dark-grayish-blue"
            onClick={onButtonClick}
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
}
