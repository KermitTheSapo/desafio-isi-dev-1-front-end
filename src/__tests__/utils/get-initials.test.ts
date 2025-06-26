import { getInitials } from "../../utils/get-initials";

describe("getInitials", () => {
  it("should return initials for two-word names", () => {
    expect(getInitials("John Doe")).toBe("JD");
    expect(getInitials("Jane Smith")).toBe("JS");
    expect(getInitials("Maria Silva")).toBe("MS");
  });

  it("should return initials for multiple-word names", () => {
    expect(getInitials("John Michael Doe")).toBe("JD");
    expect(getInitials("Maria Santos Silva")).toBe("MS");
    expect(getInitials("Ana Paula Costa")).toBe("AC");
  });

  it("should return single initial for single-word names", () => {
    expect(getInitials("John")).toBe("J");
    expect(getInitials("Maria")).toBe("M");
    expect(getInitials("Ana")).toBe("A");
  });

  it("should filter out prepositions", () => {
    expect(getInitials("João da Silva")).toBe("JS");
    expect(getInitials("Maria de Souza")).toBe("MS");
    expect(getInitials("Ana do Carmo")).toBe("AC");
    expect(getInitials("Pedro das Neves")).toBe("PN");
    expect(getInitials("Carlos dos Santos")).toBe("CS");
  });

  it("should handle names with multiple prepositions", () => {
    expect(getInitials("João da Silva e Santos")).toBe("JS");
    expect(getInitials("Maria de Souza do Carmo")).toBe("MC");
    expect(getInitials("Ana das Neves e Silva")).toBe("AS");
  });

  it("should handle international prepositions", () => {
    expect(getInitials("Leonardo da Vinci")).toBe("LV");
    expect(getInitials("Vincent van Gogh")).toBe("VG");
    expect(getInitials("Ludwig van Beethoven")).toBe("LB");
    expect(getInitials("Jean-Baptiste del Monte")).toBe("JM");
  });

  it("should handle empty and whitespace strings", () => {
    expect(getInitials("")).toBe("");
    expect(getInitials("   ")).toBe("");
    expect(getInitials("\t\n")).toBe("");
  });

  it("should handle null and undefined", () => {
    expect(getInitials(null as unknown as string)).toBe("");
    expect(getInitials(undefined as unknown as string)).toBe("");
  });

  it("should handle names with only prepositions", () => {
    expect(getInitials("da de do")).toBe("");
    expect(getInitials("van der")).toBe("");
  });

  it("should handle mixed case names", () => {
    expect(getInitials("john DOE")).toBe("JD");
    expect(getInitials("MARIA silva")).toBe("MS");
    expect(getInitials("ana PAULA costa")).toBe("AC");
  });

  it("should handle names with extra spaces", () => {
    expect(getInitials("  John   Doe  ")).toBe("JD");
    expect(getInitials("Maria    Silva")).toBe("MS");
    expect(getInitials("   Ana   Paula   Costa   ")).toBe("AC");
  });

  it("should handle names with special characters", () => {
    expect(getInitials("José María")).toBe("JM");
    expect(getInitials("François Müller")).toBe("FM");
    expect(getInitials("Søren Kierkegaard")).toBe("SK");
  });

  it("should handle hyphenated names", () => {
    expect(getInitials("Jean-Baptiste Molière")).toBe("JM");
    expect(getInitials("Mary-Jane Watson")).toBe("MW");
    expect(getInitials("Pierre-Auguste Renoir")).toBe("PR");
  });

  it("should handle names with apostrophes", () => {
    expect(getInitials("O'Connor Smith")).toBe("OS");
    expect(getInitials("D'Angelo Silva")).toBe("DS");
  });
});
