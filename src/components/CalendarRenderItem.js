import dayjs from "dayjs";
import CalendarColumn from "./CalendarColumn";

const CalendarRenderItem = ({ item: date }) => {
  const now = dayjs();
  const dateText = dayjs(date).get("date");
  const day = dayjs(date).get("day");
  const color = getDayColor(day);
  const isCurrentMonth = dayjs(date).isSame(now, "month");

  return <CalendarColumn text={dateText} color={color} opacity={isCurrentMonth ? 1 : 0.4} />;
};

export default CalendarRenderItem;
