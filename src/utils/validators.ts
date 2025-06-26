export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export function isRequired(value: string | number | null | undefined): boolean {
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
}
export function isNumberInRange(
  value: number,
  min: number,
  max: number
): boolean {
  return value >= min && value <= max;
}

export function isPositiveNumber(value: number): boolean {
  return value > 0;
}

export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength;
}

export function isValidPrice(price: number): boolean {
  return isPositiveNumber(price) && Number.isFinite(price);
}

export function isValidQuantity(quantity: number): boolean {
  return Number.isInteger(quantity) && isPositiveNumber(quantity);
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export function validateProductName(name: string): ValidationResult {
    if (!isRequired(name)) {
        return { isValid: false, message: "Nome é obrigatório" };
    }

    if (!hasMinLength(name, 2)) {
        return {
            isValid: false,
            message: "Nome deve ter pelo menos 2 caracteres",
        };
    }

    if (!hasMaxLength(name, 100)) {
        return {
            isValid: false,
            message: "Nome deve ter no máximo 100 caracteres",
        };
    }

    return { isValid: true };
}

export function validateProductPrice(price: number): ValidationResult {
    if (!isValidPrice(price)) {
        return { isValid: false, message: "Preço deve ser um número positivo" };
    }

    if (!isNumberInRange(price, 0.01, 999999.99)) {
        return {
            isValid: false,
            message: "Preço deve estar entre R$ 0,01 e R$ 999.999,99",
        };
    }

    return { isValid: true };
}

export function validateProductStock(stock: number): ValidationResult {
    if (!isValidQuantity(stock)) {
        return {
            isValid: false,
            message: "Estoque deve ser um número inteiro positivo",
        };
    }

    if (!isNumberInRange(stock, 0, 999999)) {
        return {
            isValid: false,
            message: "Estoque deve estar entre 0 e 999.999",
        };
    }

    return { isValid: true };
}

export function validateProductDescription(description?: string): ValidationResult {
    if (description && !hasMaxLength(description, 500)) {
        return {
            isValid: false,
            message: "Descrição deve ter no máximo 500 caracteres",
        };
    }

    return { isValid: true };
}
