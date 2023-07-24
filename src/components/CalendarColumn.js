import { View, Text } from "react-native";

const CalendarColumn = ({ text, color, opacity }) => {
  const columnsSize = 35;

  return (
    <View style={{ width: columnsSize, height: columnsSize, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: color, opacity: opacity }}>{text}</Text>
    </View>
  );
};

export default CalendarColumn;
