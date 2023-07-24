import dayjs from "dayjs";
import { useState } from "react";

const defaultToDoList = [
  {
    id: 1,
    content: "운동하기",
    date: dayjs(),
    isSuccess: true,
  },
  {
    id: 2,
    content: "공부하기",
    date: dayjs(),
    isSuccess: false,
  },
  {
    id: 3,
    content: "RN 공부하기",
    date: dayjs(),
    isSuccess: true,
  },
];

export const useToDoList = (selectedDate) => {
  const [toDoList, setToDoList] = useState(defaultToDoList);
  const [input, setInput] = useState("");

  const addToDo = () => {
    const toDoListLen = toDoList.length;
    const lastId = toDoListLen === 0 ? 0 : toDoList[toDoListLen - 1].id;
    const newToDoList = [
      ...toDoList,
      {
        id: lastId + 1,
        content: input,
        date: selectedDate,
        isSuccess: false,
      },
    ];
    setToDoList(newToDoList);
  };

  const deleteToDo = (toDoId) => {
    const newToDoList = toDoList.filter((todo) => todo.id !== toDoId);

    setToDoList(newToDoList);
  };

  const toggleToDo = (toDoId) => {
    const newToDoList = toDoList.map((toDo) => {
      if (toDo.id !== toDoId) return toDo;
      return {
        ...toDo,
        isSuccess: !toDo.isSuccess,
      };
    });

    setToDoList(newToDoList);
  };

  const resetInput = () => setInput("");

  return {
    toDoList,
    addToDo,
    deleteToDo,
    toggleToDo,
    input,
    setInput,
    resetInput,
  };
};
