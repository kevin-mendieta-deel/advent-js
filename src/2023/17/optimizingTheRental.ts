export function optimizeIntervals(
  intervals: [number, number][],
): [number, number][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const optimizedIntervals: [number, number][] = [];
  let tempInterval = intervals[0];
  for (let index = 1; index < intervals.length; index++) {
    const [currentStart, currentEnd] = intervals[index];
    const [tempStart, tempEnd] = tempInterval;

    if (currentStart > tempEnd) {
      optimizedIntervals.push(tempInterval);
      tempInterval = intervals[index];
    } else {
      tempInterval = [
        Math.min(currentStart, tempStart),
        Math.max(currentEnd, tempEnd),
      ];
    }
  }
  optimizedIntervals.push(tempInterval);
  return optimizedIntervals;
}
