export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
  return nameRegex.test(name);
}

export function validateSurname(surname: string): boolean {
  return validateName(surname);
}
