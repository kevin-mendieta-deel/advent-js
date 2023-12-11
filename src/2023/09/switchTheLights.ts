export function adjustLights(lights: string[]): number {
  const lightsMap = new Map<string, string>();
  lightsMap.set("🟢", "🔴");
  lightsMap.set("🔴", "🟢");

  const evenLight = lights[0];
  const oddLight = lightsMap.get(evenLight);

  let adjustingLightsCount = 0;
  for (let index = 0; index < lights.length; index++) {
    const light = lights[index];
    if (
      (index % 2 === 0 && light === evenLight) ||
      (index % 2 !== 0 && light === oddLight)
    ) {
      continue;
    }
    adjustingLightsCount++;
  }
  return adjustingLightsCount;
}
