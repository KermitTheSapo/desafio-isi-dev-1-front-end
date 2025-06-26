import {
  formatCurrency,
  formatNumber,
  truncateText,
} from "../../utils/formatters";

describe("Formatters Utils", () => {
  describe("formatCurrency", () => {
    it("should format positive numbers as Brazilian currency", () => {
      const result = formatCurrency(100);
      expect(result).toMatch(/R\$\s*100,00/);

      const result2 = formatCurrency(1234.56);
      expect(result2).toMatch(/R\$\s*1\.234,56/);

      const result3 = formatCurrency(0.99);
      expect(result3).toMatch(/R\$\s*0,99/);
    });

    it("should format zero as currency", () => {
      const result = formatCurrency(0);
      expect(result).toMatch(/R\$\s*0,00/);
    });

    it("should format negative numbers as currency", () => {
      const result1 = formatCurrency(-100);
      const result2 = formatCurrency(-1234.56);
      expect(result1).toMatch(/-?R\$\s*100,00/);
      expect(result2).toMatch(/-?R\$\s*1\.234,56/);
    });

    it("should handle decimal numbers correctly", () => {
      expect(formatCurrency(99.9)).toMatch(/R\$\s*99,90/);
      expect(formatCurrency(99.99)).toMatch(/R\$\s*99,99/);
      expect(formatCurrency(99.999)).toMatch(/R\$\s*100,00/);
    });
  });

  describe("formatNumber", () => {
    it("should format numbers with Brazilian locale", () => {
      expect(formatNumber(1000)).toBe("1.000");
      expect(formatNumber(1000000)).toBe("1.000.000");
      expect(formatNumber(1234567)).toBe("1.234.567");
    });

    it("should format small numbers without separators", () => {
      expect(formatNumber(100)).toBe("100");
      expect(formatNumber(999)).toBe("999");
    });

    it("should handle zero", () => {
      expect(formatNumber(0)).toBe("0");
    });

    it("should handle negative numbers", () => {
      expect(formatNumber(-1000)).toBe("-1.000");
      expect(formatNumber(-1234567)).toBe("-1.234.567");
    });

    it("should handle decimal numbers", () => {
      expect(formatNumber(1234.56)).toBe("1.234,56");
      expect(formatNumber(99.9)).toBe("99,9");
    });
  });

  describe("truncateText", () => {
    it("should return original text if shorter than max length", () => {
      expect(truncateText("Hello", 10)).toBe("Hello");
      expect(truncateText("Test", 5)).toBe("Test");
    });

    it("should return original text if equal to max length", () => {
      expect(truncateText("Hello", 5)).toBe("Hello");
    });

    it("should truncate text and add ellipsis when longer than max length", () => {
      expect(truncateText("Hello World", 5)).toBe("Hello...");
      expect(truncateText("This is a long text", 10)).toBe("This is a ...");
    });

    it("should handle empty string", () => {
      expect(truncateText("", 5)).toBe("");
    });

    it("should handle single character strings", () => {
      expect(truncateText("A", 1)).toBe("A");
      expect(truncateText("AB", 1)).toBe("A...");
    });

    it("should handle zero max length", () => {
      expect(truncateText("Hello", 0)).toBe("...");
    });

    it("should handle special characters", () => {
      expect(truncateText("Olá, como está?", 10)).toBe("Olá, como ...");
      expect(truncateText("Test@#$%", 4)).toBe("Test...");
    });
  });
});
