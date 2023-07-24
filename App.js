import { FlatList, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { getCalendarColumns, getDayColor, getDayText } from "./src/helper/util";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CalendarColumn from "./src/components/CalendarColumn";
import CalendarArrowButton from "./src/components/CalendarArrowButton";

export default function App() {
  const now = dayjs();
  const [selectedDate, setSelectedDate] = useState(now);
  const colums = getCalendarColumns(selectedDate);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const CalendarRenderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => {
      setSelectedDate(date);
    };

    const isSelected = dayjs(date).isSame(selectedDate, "date");

    return <CalendarColumn text={dateText} color={color} opacity={isCurrentMonth ? 1 : 0.4} onPress={onPress} isSelected={isSelected} />;
  };

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD");
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <CalendarArrowButton onPress={() => {}} iconName={"arrow-left"} />
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: "#404040" }}>{currentDateText}</Text>
          </TouchableOpacity>
          <CalendarArrowButton onPress={() => {}} iconName={"arrow-right"} />
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={colums}
          keyExtractor={(_, index) => `column-${index}`}
          renderItem={CalendarRenderItem}
          numColumns={7}
          ListHeaderComponent={ListHeaderComponent}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
