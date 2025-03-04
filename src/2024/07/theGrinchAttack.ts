export function fixPackages(packages: string): string {
  const stack: number[] = [];
  const packagesList = [...packages];

  for (let index = 0; index < packages.length; index++) {
    const char = packagesList[index];
    if (char === "(") {
      stack.push(index);
      continue;
    }
    if (char === ")") {
      const start = stack.pop();
      if (start === undefined) continue;
      let left = start + 1;
      let right = index - 1;
      while (left < right) {
        [packagesList[left], packagesList[right]] = [
          packagesList[right],
          packagesList[left],
        ];
        left++;
        right--;
      }
    }
  }

  return packagesList.join("").replace(/\(|\)/g, "");
}

console.log(fixPackages("a(bc(def)g)h"));
