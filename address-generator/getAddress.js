function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomAddress() {
  const streets = [
    "Ленина",
    "Советская",
    "Мира",
    "Победы",
    "Кирова",
    "Пушкина",
    "Гагарина",
    "Тверская",
    "Московская",
    "Невский проспект",
    "Большая Садовая",
    "Кузнецкий Мост",
    "Арбат",
    "Рублёвское шоссе",
    "Пролетарская",
    "Красноармейская",
    "Парковая",
    "Октябрьская",
    "Чехова",
    "Железнодорожная",
  ];

  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
    "Челябинск",
    "Самара",
    "Омск",
    "Ростов-на-Дону",
  ];

  const street = getRandomElement(streets);
  const houseNumber = Math.floor(Math.random() * 100) + 1; 
  const city = getRandomElement(cities);

  return `${street} ${houseNumber}, ${city}, РФ}`;
}

module.exports = generateRandomAddress;

