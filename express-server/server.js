const express = require('express');
const fs = require('fs');

const app = express();

const counterFile = 'counters.json';

const loadCounters = () => {
    if (fs.existsSync(counterFile)) {
        const data = fs.readFileSync(counterFile);
        return JSON.parse(data);
    } else {
        return { homeViews: 0, aboutViews: 0 };
    }
};

const writeCounters = (counters) => {
    fs.writeFileSync(counterFile, JSON.stringify(counters));
};

let counters = loadCounters();

app.get('/', (req, res) => {
    counters.homeViews++; 
    writeCounters(counters); 
    res.send(`<h1>Главная страница</h1>
    <p>Количество просмотров этой страницы: ${counters.homeViews}</p>
    <a href='/about'>Описание проекта</a>
    `)
});

app.get('/about', (req, res) => {
    counters.aboutViews++;
    writeCounters(counters);
    res.send(`<h1>Описание проекта</h1>
    <p>Количество просмотров этой страницы: ${counters.aboutViews}</p>
    <a href='/'>Перейти на главную</a>`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен`);
});