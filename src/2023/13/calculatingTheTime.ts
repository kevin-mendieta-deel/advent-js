export function calculateTime(deliveries: string[]): string {
  const formatTimeDigits = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };
  const MIN_IN_SECS = 60;
  const HOUR_IN_SECS = 60 * MIN_IN_SECS;
  const LIMIT_IN_SECS = 25200;

  let totalDeliveryTimeInSecs = 0;
  for (const deliverie of deliveries) {
    const [hours, minutes, seconds] = deliverie.split(":");
    totalDeliveryTimeInSecs += +seconds;
    totalDeliveryTimeInSecs += +minutes * MIN_IN_SECS;
    totalDeliveryTimeInSecs += +hours * HOUR_IN_SECS;
  }

  totalDeliveryTimeInSecs -= LIMIT_IN_SECS;
  const isNegative = totalDeliveryTimeInSecs < 0;
  totalDeliveryTimeInSecs = Math.abs(totalDeliveryTimeInSecs);

  const resultHours = Math.floor(totalDeliveryTimeInSecs / HOUR_IN_SECS);
  totalDeliveryTimeInSecs %= HOUR_IN_SECS;
  const resultMins = Math.floor(totalDeliveryTimeInSecs / MIN_IN_SECS);
  totalDeliveryTimeInSecs %= MIN_IN_SECS;

  const formattedHours = formatTimeDigits(resultHours);
  const formattedMins = formatTimeDigits(resultMins);
  const formattedSecs = formatTimeDigits(totalDeliveryTimeInSecs);

  let resultTime = isNegative ? "-" : "";
  resultTime += formattedHours;
  resultTime += `:${formattedMins}`;
  resultTime += `:${formattedSecs}`;
  return resultTime;
}
