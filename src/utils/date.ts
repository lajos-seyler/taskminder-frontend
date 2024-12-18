export function formatDate(dateString: string): string {
  const inputDate = new Date(dateString);
  const now = new Date();

  const pad = (n: number) => n.toString().padStart(2, "0");

  const isToday =
    inputDate.getDate() === now.getDate() &&
    inputDate.getMonth() === now.getMonth() &&
    inputDate.getFullYear() === now.getFullYear();

  if (isToday) {
    const hours = pad(inputDate.getHours());
    const minutes = pad(inputDate.getMinutes());
    return `${hours}:${minutes}`;
  } else {
    const day = pad(inputDate.getDate());
    const month = pad(inputDate.getMonth() + 1);
    const year = inputDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

export function toggleWeekday(weekdays: number[], day: number) {
  if (day < 0 || day > 6) {
    throw new Error("Invalid day. Please provide a number between 0 and 6.");
  }

  if (weekdays.includes(day)) {
    return weekdays.filter((d) => d !== day);
  } else {
    return [...weekdays, day];
  }
}
