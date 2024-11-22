export function findTheKiller(whisper: string, suspects: string[]): string {
  const isExactName = whisper.endsWith("$");
  if (isExactName) {
    whisper = whisper.slice(0, whisper.length - 1);
  }

  suspects = suspects.filter((suspect) => {
    const isExactNameAndLength =
      isExactName && suspect.length === whisper.length;
    const notExactNameAndLength =
      !isExactName && suspect.length >= whisper.length;
    return isExactNameAndLength || notExactNameAndLength;
  });

  for (let i = 0; i < whisper.length; i++) {
    const letter = whisper[i].toLocaleUpperCase();
    suspects = suspects.filter((suspect) => {
      const suspectLetter = suspect[i].toLocaleUpperCase();
      const isSameLetter = suspectLetter === letter;
      const isSkip = letter === "~";
      return isSameLetter || isSkip;
    });
  }

  return suspects.join(",");
}
