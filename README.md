![Static Badge](https://img.shields.io/badge/Competitive%20Programming%20Club-%2300629B?style=for-the-badge&label=Website&labelColor=%23FFCD00&link=https%3A%2F%2Ficpcatucsd.github.io%2F)

# Competitive Programming Club at UC San Diego Website

Official website source code for the Competitive Programming Club at UC San Diego, built from scratch using Vue.js.

---

## Project Setup ⚙️

/Users/julie/Documents/GitHub/icpcatucsd.github.io/src/assets

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

---

## Codebase Overview 🗂️

- **HTML entry point & metadata:** `index.html`
- **Root application layout:** `src/App.vue`
- **Routing:** `src/router/index.js`
- **Website data (content):** `src/data`
- **Page views:** `src/views`
- **Reusable components:** `src/components`
- **Global styles:** `src/assets/main.css`
- **Images & PDFs:** `public/assets`

---

## Notes for Future Developers 💌

Most routine updates can be made by editing files under `src/data`.

### 🚨 Important - Slack Link Expires Every 30 Days 🚨

- **Slack invitation link**  
  Update `src/data/links.js` regularly to keep the invitation link valid.

### 🐳 Quarterly Updates

- **Weekly meeting** information: `src/data/schedule.js`
- **Leadership team** information: `src/data/teams.js`
  - Add leadership images under: `public/assets/teams/leadership`
- **Training resources** for the term: `src/data/resources.js`
  - Add lecture slides under: `public/assets/slides`

### 🌳 Annual Updates

- **Team selection & SoCal regional** information: `src/data/schedule.js`
- **Competing teams** information: `src/data/teams.js`
  - Add team images under: `public/assets/teams/competing`
- **Club history** updates: `src/data/history.js`
  - Add images under: `public/assets/history`
