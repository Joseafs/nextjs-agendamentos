export const calcHoursAndMinutesByMinutes = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return hours > 0
    ? `${hours > 1 ? `${hours} horas` : `${hours} hora`} ${
        minutes > 0 ? `e ${minutes} minutos` : ''
      }`
    : `${minutes > 1 ? `${minutes} minutos` : `${minutes} minuto`}`;
};
