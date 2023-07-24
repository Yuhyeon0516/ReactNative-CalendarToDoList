import { FlatList, StyleSheet, View, Text, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { useCalendar } from "./src/hooks/useCalendar";
import { useToDoList } from "./src/hooks/useToDoList";
import Calendar from "./src/components/Calendar";
import Margin from "./src/components/Margin";
import AddToDoInput from "./src/components/AddToDoInput";

export default function App() {
  const now = dayjs();
  const { selectedDate, setSelectedDate, isDatePickerVisible, showDatePicker, hideDatePicker, handleConfirm, subtractOneMonth, addOneMonth } = useCalendar(now);
  const { toDoList, addToDo, deleteToDo, toggleToDo, input, setInput } = useToDoList(selectedDate);

  useEffect(() => {}, [selectedDate]);

  const onPressLeftArrow = subtractOneMonth;
  const onPressRightArrow = addOneMonth;
  const onPressHeaderDate = showDatePicker;
  const onPressDate = setSelectedDate;

  const ToDoRenderItem = ({ item: toDo }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          width: 220,
          alignSelf: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.2,
          borderBottomColor: "#A6A6A6",
        }}
      >
        <Text style={{ flex: 1, fontSize: 14, color: "#595959" }}>{toDo.content}</Text>
        <Ionicons name="ios-checkmark" size={17} color={toDo.isSuccess ? "#595959" : "#BFBFBF"} />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
          }}
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />
        <SafeAreaView style={styles.container}>
          <Calendar
            selectedDate={selectedDate}
            onPressLeftArrow={onPressLeftArrow}
            onPressRightArrow={onPressRightArrow}
            onPressHeaderDate={onPressHeaderDate}
            onPressDate={onPressDate}
          />
          <Margin height={15} />
          <View style={{ width: 4, height: 4, borderRadius: 4 / 2, backgroundColor: "#A3A3A3", alignSelf: "center" }} />
          <Margin height={15} />
          <FlatList data={toDoList} renderItem={ToDoRenderItem} />
          <AddToDoInput />
          <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
