//Завдання 1

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
async function getData() {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await для очікування виконання Promise.
    const fakeData = await fetchFakeData();
    console.log("Завдання: 1 ==============================");
    // Дані виводимо в консоль після отримання їх з Promise.
    console.log(fakeData);
    // Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння

// Викликаємо нашу асинхронну функцію.
getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
async function logRandomNumberAfterSeconds(seconds) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    console.log("Завдання: 2 ==============================");
    // В функцію потрібно передати в seconds в якості аргументу
    // Результат виконання функції присвоюється константі randomNumber.
    // Виводимо отримане випадкове число в консоль
    console.log(randomNumber);
    // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння

logRandomNumberAfterSeconds();

//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки GET-запиту на вказаний URL

// Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль

// Конвертуємо відповідь у формат JSON

// Виводимо дані в консоль
// Виводимо помилки в консоль якщо вони є
async function getDataFromUrl(URL) {
  try {
    const res = await fetch(URL, { method: "GET" });
    if (!res.ok) {
      throw new Error("Something wrong");
    }

    const data = await res.json();
    console.log("Завдання: 3 ==============================");
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Розкоментуйте після виконання завданння

getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки POST-запиту на вказаний URL
// Вказуємо метод запиту POST в конфігурацію параметрів запиту
// Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"

// Вказуємо заголовок Authorization в який передаємо authToken
// Передаємо дані data в body, які перед цим перетворились в JSON

// Перевіряємо через властивість ok, чи є відповідь вдалою

// Конвертуємо відповідь у формат JSON

// Виводимо відповідь в консоль
// Виводимо помилки в консоль якщо вони є

async function postDataWithAuth(url, data, authToken) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Error: server is busy");
    }

    const result = await res.json();
    console.log("Завдання: 4 ==============================");
    console.log(result);
  } catch (error) {
    console.log("Error:", e.message);
  }
}

// Розкоментуйте після виконання завданння
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
async function* asyncGenerator() {
  // Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
  let i = 0;
  // Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
  while (true) {
    // Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
    new Promise((resolve) => setTimeout(resolve, 1000));
    // Віддаємо значення лічильника та збільшуємо його на один
    yield i++;
  }
}
// Використовуємо асинхронний генератор та записуємо його значення в константу gen
const gen = asyncGenerator();
// Створюємо асинхрону функцію printFiveItems
async function printFiveItems() {
  // Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
  for await (const item of gen) {
    // Перебираємо значення gen
    // Виводимо в консоль поточне значення
    console.log(item);
    // Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).
    if (item === 4) break;
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
async function* gatherData() {
  // Використовуємо try для обробки помилок
  try {
    // Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
    // Результат роботи функції зберігаємо у змінну dbData
    const dbData = await getDataFromDB();
    // yield використовується для того, щоб повернути значення dbData
    yield dbData;
    // Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData
    const apiData = await getDataFromAPI();
    yield apiData;
    // І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
    const cacheData = await getDataFromCache();
    yield cacheData;
  } catch (error) {
    // Виводимо помилки в консоль якщо вони є
    console.log(error);
  }
}
// Створюємо асинхрону функцію displayData
async function displayData() {
  // Створюємо екземпляр генератора gatherData
  const instance = gatherData();
  // Три рази виводимо виводимо поточне значення генератора в консоль
  console.log((await instance.next()).value);
  console.log((await instance.next()).value);
  console.log((await instance.next()).value);
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");

displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
function* countdownGenerator(start) {
  // Ініціюємо лічильник змінну count зі стартовим значенням параметра start
  let count = start;
  // Цикл, що триває доки лічильник більший або рівний 0
  // Використовуємо ключове слово yield, щоб повернути поточне значення лічильника
  while (count >= 0) {
    // Зменшуємо лічильник на 1
    yield count;
    count--;
  }
}
// console.log("Завдання: 7 ==============================");
// Створюємо екземпляр генератора countdown з лічильниковм 5
const inGen = countdownGenerator(5);
// Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
let nextValue = inGen.next();
// Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
// Якщо властивість done == false, генератор ще має значення для повернення.
while (!nextValue.done) {
  // Виводимо поточне значення
  console.log(nextValue.value);
  // Отримуємо наступне значення з генератора
  nextValue = inGen.next();
}
