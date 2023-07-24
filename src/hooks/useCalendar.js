import dayjs from "dayjs";
import { useState } from "react";

export const useCalendar = (now) => {
  const [selectedDate, setSelectedDate] = useState(now);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const subtractOneMonth = () => {
    const newSelectedDate = dayjs(selectedDate).subtract(1, "month");

    setSelectedDate(newSelectedDate);
  };

  const addOneMonth = () => {
    const newSelectedDate = dayjs(selectedDate).add(1, "month");

    setSelectedDate(newSelectedDate);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };

  return {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractOneMonth,
    addOneMonth,
  };
};
