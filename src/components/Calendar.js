import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import dayjs from "dayjs";
import { getCalendarColumns, getDayColor, getDayText } from "../helper/util";

import CalendarColumn from "./CalendarColumn";
import CalendarArrowButton from "./CalendarArrowButton";

const Calendar = ({ toDoList, selectedDate, onPressLeftArrow, onPressRightArrow, onPressHeaderDate, onPressDate }) => {
  const colums = getCalendarColumns(selectedDate);

  const CalendarRenderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => onPressDate(date);
    const isSelected = dayjs(date).isSame(selectedDate, "date");
    const hasToDo = toDoList.find((toDo) => dayjs(toDo.date).isSame(dayjs(date), "date"));

    return <CalendarColumn text={dateText} color={color} opacity={isCurrentMonth ? 1 : 0.4} onPress={onPress} isSelected={isSelected} hasToDo={hasToDo} />;
  };

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD");
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <CalendarArrowButton onPress={onPressLeftArrow} iconName={"arrow-left"} />
          <TouchableOpacity onPress={onPressHeaderDate}>
            <Text style={{ fontSize: 20, color: "#404040" }}>{currentDateText}</Text>
          </TouchableOpacity>
          <CalendarArrowButton onPress={onPressRightArrow} iconName={"arrow-right"} />
        </View>

        <View style={{ flexDirection: "row" }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            return <CalendarColumn key={`day-${day}`} text={getDayText(day)} color={getDayColor(day)} opacity={1} disabled={true} />;
          })}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={colums}
      scrollEnabled={false}
      keyExtractor={(_, index) => `column-${index}`}
      renderItem={CalendarRenderItem}
      numColumns={7}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default Calendar;
