export function getInitials(fullName: string): string {
  const cleanName = String(fullName || "").trim();

  if (!cleanName) {
    return "";
  }

  const prepositions = new Set([
    "da",
    "de",
    "do",
    "das",
    "dos",
    "e",
    "del",
    "della",
    "di",
    "du",
    "van",
    "von",
    "le",
    "la",
    "les",
    "el",
    "al",
    "bin",
    "ibn",
  ]);

  const nameWords = cleanName
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .filter((word) => !prepositions.has(word.toLowerCase()));

  if (nameWords.length === 0) {
    return "";
  }

  let initials = "";

  if (nameWords[0]) {
    initials += nameWords[0].charAt(0).toUpperCase();
  }

  if (nameWords.length > 1) {
    const lastWord = nameWords[nameWords.length - 1];
    if (lastWord) {
      initials += lastWord.charAt(0).toUpperCase();
    }
  }

  return initials;
}
