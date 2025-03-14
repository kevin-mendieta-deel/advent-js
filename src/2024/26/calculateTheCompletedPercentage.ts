const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

function convertToSeconds(
  hours: number,
  minutes: number,
  seconds: number,
): number {
  return (
    hours * MINUTES_IN_HOUR * SECONDS_IN_MINUTE +
    minutes * SECONDS_IN_MINUTE +
    seconds
  );
}

export function getCompleted(timeWorked: string, totalTime: string): string {
  const [hoursWorked, minutesWorked, secondsWorked] = timeWorked
    .split(":")
    .map((time) => +time);
  const [hoursTotal, minutesTotal, secondsTotal] = totalTime
    .split(":")
    .map((time) => +time);
  const totalSecondsWorked = convertToSeconds(
    hoursWorked,
    minutesWorked,
    secondsWorked,
  );
  const totalSecondsTotal = convertToSeconds(
    hoursTotal,
    minutesTotal,
    secondsTotal,
  );

  const percentage = Math.round((totalSecondsWorked / totalSecondsTotal) * 100);
  return `${percentage}%`;
}
