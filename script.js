function startGame() {
  // Замыкание: переменные randomNumber и attemptsCount хранятся внутри startGame
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attemptsCount = 10;

  // Вложенная функция для угадывания числа
  function guessNumber() {
    // Если попытки закончились, спрашиваем, хочет ли пользователь начать заново
    if (attemptsCount === 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        startGame(); // Перезапускаем игру
      } else {
        alert("Игра окончена");
      }
      return;
    }

    // Спрашиваем пользователя
    let userGuess = prompt(`Угадай число от 1 до 100. Осталось попыток: ${attemptsCount}`);

    // Проверяем, нажал ли пользователь "Отмена"
    if (userGuess === null) {
      alert("Игра окончена");
      return;
    }

    // Преобразуем введенное значение в число
    userGuess = parseInt(userGuess.trim(), 10);

    // Проверяем, является ли введенное значение числом
    if (isNaN(userGuess)) {
      alert("Введи число!");
      guessNumber(); // Рекурсивно вызываем функцию снова
    } else if (userGuess > randomNumber) {
      attemptsCount--; // Уменьшаем количество попыток
      alert(`Загаданное число меньше, осталось попыток: ${attemptsCount}`);
      guessNumber(); // Рекурсивно вызываем функцию снова
    } else if (userGuess < randomNumber) {
      attemptsCount--; // Уменьшаем количество попыток
      alert(`Загаданное число больше, осталось попыток: ${attemptsCount}`);
      guessNumber(); // Рекурсивно вызываем функцию снова
    } else {
      // Если угадали число, предлагаем сыграть снова
      if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
        startGame(); // Перезапускаем игру
      } else {
        alert("Спасибо за игру!");
      }
    }
  }

  // Запускаем функцию угадывания числа
  guessNumber();
}

// Запускаем игру
startGame();
