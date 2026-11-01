# DearDiary – Personal Blog Homepage

A responsive personal blog homepage built with React, JavaScript, and CSS. DearDiary provides a simple and organized space to explore personal stories and posts across different categories, including Technology, Books, Food, Movies, and Travel.

## About the Project

**DearDiary** is a personal blogging dashboard designed to make browsing blog posts easy and enjoyable. It features a clean layout with category-based filtering, a search option, pagination, and a dark/light theme toggle.
The project focuses on component-based development, reusable React components, state management, and responsive user interface design.

## Core Features

- **Category Filtering:** Browse posts by Tech, Books, Food, Movies, and Travel.
- **Search Functionality:** Find blog posts by their titles.
- **Pagination:** Navigate through posts with six posts displayed per page.
- **Dark/Light Mode:** Switch between themes according to preference.
- **Theme Persistence:** Saves the selected theme using Local Storage.
- **Dynamic Post Cards:** Displays post titles, descriptions, categories, and publication dates.
- **Category Icons:** Uses custom SVG icons and category-based color combinations.
- **Responsive Layout:** Adapts to different screen sizes, including mobile devices.
- **Empty Search State:** Displays a helpful message when no matching posts are found.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| JavaScript (ES6+) | Application logic |
| React.js | Component-based UI development |
| Vite | Development environment |
| Local Storage | Theme preference persistence |
| SVG | Category icons and generated thumbnails |

## Project Structure

```text
elevvo_frontend_development_task4
│
├── public/
|   ├── favicon.svg
|   ├── icons.svg
│   └── deardiary_logo.png
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── CategoryIcon.jsx
│   │   ├── SearchBar.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostGrid.jsx
│   │   └── Pagination.jsx
│   │
│   ├── data/
│   │   └── data.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── styles/
│   │   └── style.css
│   │
│   ├── App.jsx
│   └── main.jsx
|
├── package.json
├── eslint.config.js
├── index.html
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
https://github.com/Adeeba333/Elevvo_Frontend_Development_task4
```

### 2. Navigate to the Project Directory

```bash
cd elevvo_frontend_development_task4
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Key Learning Outcomes

- Practiced building reusable React components.
- Improved understanding of React Hooks, including `useState`, `useEffect`, and `useMemo`.
- Implemented dynamic filtering and search functionality.
- Learned to manage application themes using Local Storage.
- Worked with array methods such as `filter()`, `map()`, and `slice()`.
- Improved responsive styling and component organization.

## Project Objective

The main objective of DearDiary was to develop a responsive and interactive personal blog homepage while strengthening practical skills in React development, component reusability, state management, and frontend design.

## Author

**Mahmuda Adeeba Tul Husna**
---
*DearDiary — A little space for stories, thoughts, and everyday discoveries.*
