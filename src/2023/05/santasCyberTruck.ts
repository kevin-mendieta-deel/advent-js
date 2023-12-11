export function cyberReindeer(road: string, time: number): string[] {
  const obstacleMap = new Map([
    ["S", "."],
    ["|", "*"],
    [".", "."],
  ]);
  const roadStates = [];

  let roadList = [...road];
  let currentTime = 1;
  let index = 0;
  while (currentTime <= time && index < roadList.length - 1) {
    roadStates.push(roadList.join(""));

    if (currentTime === 5) {
      roadList = roadList.map((item) => (item === "|" ? "*" : item));
    }

    if (roadList[index + 1] !== "|") {
      roadList[index] = obstacleMap.get(road[index]) ?? "*";
      roadList[index + 1] = "S";
      index++;
    }
    currentTime++;
  }
  return roadStates;
}
