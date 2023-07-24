import dayjs from "dayjs";
import { useState } from "react";

export const useToDoList = (selectedDate) => {
  const [toDoList, setToDoList] = useState([]);
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

  const filteredToDoList = toDoList.filter((toDo) => {
    const isSameDate = dayjs(toDo.date).isSame(selectedDate, "date");
    return isSameDate;
  });

  return {
    toDoList,
    filteredToDoList,
    addToDo,
    deleteToDo,
    toggleToDo,
    input,
    setInput,
    resetInput,
  };
};
