export const calcHoursAndMinutesByMinutes = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return hours > 0
    ? `${hours} horas ${minutes > 0 ? `e ${minutes} minutos` : ''}`
    : `${minutes} minutos`;
};
