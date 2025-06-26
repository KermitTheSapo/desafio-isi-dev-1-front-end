import {
  isValidEmail,
  isRequired,
  isNumberInRange,
  isPositiveNumber,
  hasMinLength,
  hasMaxLength,
} from "../../utils/validators";

describe("Validators Utils", () => {
  describe("isValidEmail", () => {
    it("should return true for valid emails", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
      expect(isValidEmail("test+123@gmail.com")).toBe(true);
      expect(isValidEmail("user_name@company.org")).toBe(true);
    });

    it("should return false for invalid emails", () => {
      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("test@")).toBe(false);
      expect(isValidEmail("@domain.com")).toBe(false);
      expect(isValidEmail("test@domain")).toBe(false);
      expect(isValidEmail("test..test@domain.com")).toBe(false);
      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail("test @domain.com")).toBe(false);
    });
  });

  describe("isRequired", () => {
    it("should return true for valid string values", () => {
      expect(isRequired("hello")).toBe(true);
      expect(isRequired("test")).toBe(true);
      expect(isRequired("a")).toBe(true);
    });

    it("should return false for empty or whitespace strings", () => {
      expect(isRequired("")).toBe(false);
      expect(isRequired("   ")).toBe(false);
      expect(isRequired("\t\n")).toBe(false);
    });

    it("should return true for valid numbers", () => {
      expect(isRequired(0)).toBe(true);
      expect(isRequired(1)).toBe(true);
      expect(isRequired(-1)).toBe(true);
      expect(isRequired(3.14)).toBe(true);
    });

    it("should return false for null and undefined", () => {
      expect(isRequired(null)).toBe(false);
      expect(isRequired(undefined)).toBe(false);
    });
  });

  describe("isNumberInRange", () => {
    it("should return true for numbers within range", () => {
      expect(isNumberInRange(5, 1, 10)).toBe(true);
      expect(isNumberInRange(1, 1, 10)).toBe(true);
      expect(isNumberInRange(10, 1, 10)).toBe(true);
      expect(isNumberInRange(0, -5, 5)).toBe(true);
    });

    it("should return false for numbers outside range", () => {
      expect(isNumberInRange(0, 1, 10)).toBe(false);
      expect(isNumberInRange(11, 1, 10)).toBe(false);
      expect(isNumberInRange(-1, 0, 10)).toBe(false);
      expect(isNumberInRange(6, -5, 5)).toBe(false);
    });

    it("should handle decimal numbers", () => {
      expect(isNumberInRange(2.5, 1, 5)).toBe(true);
      expect(isNumberInRange(0.5, 1, 5)).toBe(false);
      expect(isNumberInRange(5.1, 1, 5)).toBe(false);
    });
  });

  describe("isPositiveNumber", () => {
    it("should return true for positive numbers", () => {
      expect(isPositiveNumber(1)).toBe(true);
      expect(isPositiveNumber(0.1)).toBe(true);
      expect(isPositiveNumber(100)).toBe(true);
      expect(isPositiveNumber(3.14)).toBe(true);
    });

    it("should return false for zero and negative numbers", () => {
      expect(isPositiveNumber(0)).toBe(false);
      expect(isPositiveNumber(-1)).toBe(false);
      expect(isPositiveNumber(-0.1)).toBe(false);
      expect(isPositiveNumber(-100)).toBe(false);
    });
  });

  describe("hasMinLength", () => {
    it("should return true for strings meeting minimum length", () => {
      expect(hasMinLength("hello", 3)).toBe(true);
      expect(hasMinLength("hello", 5)).toBe(true);
      expect(hasMinLength("test", 4)).toBe(true);
    });

    it("should return false for strings shorter than minimum length", () => {
      expect(hasMinLength("hi", 3)).toBe(false);
      expect(hasMinLength("", 1)).toBe(false);
      expect(hasMinLength("a", 2)).toBe(false);
    });

    it("should trim whitespace before checking length", () => {
      expect(hasMinLength("  hello  ", 5)).toBe(true);
      expect(hasMinLength("  hi  ", 3)).toBe(false);
      expect(hasMinLength("   ", 1)).toBe(false);
    });
  });

  describe("hasMaxLength", () => {
    it("should return true for strings within maximum length", () => {
      expect(hasMaxLength("hello", 10)).toBe(true);
      expect(hasMaxLength("hello", 5)).toBe(true);
      expect(hasMaxLength("", 5)).toBe(true);
    });

    it("should return false for strings longer than maximum length", () => {
      expect(hasMaxLength("hello world", 5)).toBe(false);
      expect(hasMaxLength("testing", 6)).toBe(false);
    });

    it("should trim whitespace before checking length", () => {
      expect(hasMaxLength("  hello  ", 5)).toBe(true);
      expect(hasMaxLength("  hello world  ", 10)).toBe(false);
      expect(hasMaxLength("   ", 0)).toBe(true);
    });
  });
});
