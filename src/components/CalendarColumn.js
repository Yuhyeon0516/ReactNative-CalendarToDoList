import { Text, TouchableOpacity } from "react-native";

const CalendarColumn = ({ text, color, opacity, disabled, onPress, isSelected }) => {
  const columnsSize = 35;

  return (
    <TouchableOpacity
      style={{
        width: columnsSize,
        height: columnsSize,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "#C2C2C2" : "transparent",
        borderRadius: columnsSize / 2,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color: color, opacity: opacity }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CalendarColumn;
