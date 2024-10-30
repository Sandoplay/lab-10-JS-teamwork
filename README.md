# lab-10-js-teamwork

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


Лабораторна робота №9-10 (team course project)

Тема: Розробка e-commerce застосунку базі API Platzi Fake Store

Мета: розробити застосунку для електронної комерції, який використовує API Platzi Fake Store з використанням axios та pinia.

Вимоги до звіту:

    Лабораторна робота повинна бути виконана в окремому репозиторію з назвою vue-ecommerce-app.

    Винести окремо шар з API в окремі ендпойнти.

    Використовувати ендпойнти в store в actions.

    Для управляння станом використовуйте Pinia.

    Викликати actions тільки в компонентах.

    Дотримання TypeScript-типізації (окрема директорія types).

    При зміні роуту не забуваємо про Scroll Behavior.

    Використання Composition Api.

    Під час написання застосунку, обов’язково дотримуватись style guide.

    Якщо ви використовуєте css бібліотеку, то імпортуйте тільки необхідні стилі (базові, кнопки, таблиці, поля тощо). Виористовуйте scss.

    Використовуйте Eslint.

    Завершений проєкт повинен бути завантажений на GitHub та gh-pages з детальною документацією щодо встановлення та використання e-commerce застосунку.

Практична частина
Завдання:

    Проаналізувати схеми даних для Products, Filter Products, Categories (Platzi Fake Store API, Swagger Docs).

    Ініціалізуйте новий проєкт з використанням create-vue

    Налаштуйте базову структуру проєкту, включаючи компоненти, ui-бібліотеки, маршрутизацію та стани.

    Виконайте інтеграцію з REST API Platzi Fake Store. Забезпечте обробку помилок при запитах до API. Виведіть відповідні помилки при запитах до API на ui юзеру.

    Реалізуйте пагінацію для списку продуктів. Додайте кнопки "Наступна" та "Попередня" для навігації між сторінками.

    Додайте можливість фільтрації товарів за назвою (введення в текстове поле), ціною (введення мінімальної та максимальної ціни), категорією (вибір з випадаючого списку). Всі параметри фільтрації повинні зберігатися в URL.

    Реалізуйте кошик товарів (cart).

    Реалізуйте список улюбленого (favorites).

    Кошик товарів та список улюбленого повинен зберігатися у localStorage.

    Реалізуйте сторінку 404.

    Створіть простий і зрозумілий інтерфейс.

    У футері зазначити список студентів з team (ПІБ, № групи, посилання на GitHub profile). Використовуйте CSS-фреймворки (Bootstrap або Tailwind CSS на вибір студента) для стилізації.

