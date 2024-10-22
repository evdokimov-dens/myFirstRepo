const processString = (input) =>
  typeof input !== "string"
    ? "Ошибка: Ожидается строка"
    : input.trim().length > 30
    ? input.trim().slice(0, 30) + "..."
    : input.trim();
