export const getFormattedTime = (time_in_secs: number) => {
  if (time_in_secs <= 0) return '00:00';

  const mins = Math.floor(time_in_secs / 60);
  const secs = time_in_secs % 60;

  const minutes = mins < 10 ? `0${mins}` : String(mins);
  const seconds = secs < 10 ? `0${secs}` : String(secs);

  return minutes + ':' + seconds;
};
