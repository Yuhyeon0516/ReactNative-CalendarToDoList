import dayjs from "dayjs";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TODOLIST_KEY = "TODOLIST_KEY";

export const useToDoList = (selectedDate) => {
  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");

  const saveToDoList = (newToDoList) => {
    setToDoList(newToDoList);
    AsyncStorage.setItem(TODOLIST_KEY, JSON.stringify(newToDoList));
  };

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

    saveToDoList(newToDoList);
    resetInput();
  };

  const deleteToDo = (toDoId) => {
    const newToDoList = toDoList.filter((todo) => todo.id !== toDoId);

    saveToDoList(newToDoList);
  };

  const toggleToDo = (toDoId) => {
    const newToDoList = toDoList.map((toDo) => {
      if (toDo.id !== toDoId) return toDo;
      return {
        ...toDo,
        isSuccess: !toDo.isSuccess,
      };
    });

    saveToDoList(newToDoList);
  };

  const resetInput = () => {
    setInput("");
  };

  const filteredToDoList = toDoList.filter((toDo) => {
    const isSameDate = dayjs(toDo.date).isSame(selectedDate, "date");
    return isSameDate;
  });

  const init = async () => {
    const result = await AsyncStorage.getItem(TODOLIST_KEY);
    if (result) {
      const newToDoList = JSON.parse(result);

      setToDoList(newToDoList);
    }
  };

  useEffect(() => {
    init();
  }, []);

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
