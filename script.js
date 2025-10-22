// ==========================
// Daten der Getränkekategorien
// ==========================
const drinkCategories = [
 {
  id: 'mineral',
  name: 'MINERAL',
  drinks: [
   { name: 'Coca Cola', volume: '33cl', price: 8.0 },
   { name: 'Coca Cola Light', volume: '33cl', price: 8.0 },
   { name: 'Fanta Orange', volume: '33cl', price: 8.0 },
   { name: 'Ice Tea (Nestea Lemon)', volume: '33cl', price: 8.0 },
   { name: 'Schweppes Bitter Lemon', volume: '25cl', price: 8.0 },
   { name: 'Schweppes Tonic Water', volume: '25cl', price: 8.0 },
   { name: 'Schweppes Ginger Ale', volume: '25cl', price: 8.0 },
   { name: 'Mineral (Valser mit Kohlensäure)', volume: '33cl', price: 8.0 },
   { name: 'Mineral (Valser ohne Kohlensäure)', volume: '33cl', price: 8.0 },
  ],
 },
 {
  id: 'fruchtsaefte',
  name: 'FRUCHTSÄFTE',
  drinks: [
   { name: 'Orangensaft', volume: '20cl', price: 8.0 },
   { name: 'Ananassaft', volume: '20cl', price: 8.0 },
   { name: 'Pfirsichsaft', volume: '20cl', price: 8.0 },
   { name: 'Apfelsaft', volume: '30cl', price: 8.0 },
  ],
 },
 {
  id: 'energy',
  name: 'ENERGY DRINKS',
  drinks: [
   { name: 'Red Bull Energy Drink', volume: '25cl', price: 10.0 },
   { name: 'Red Bull Sugarfree', volume: '25cl', price: 10.0 },
   { name: 'Red Bull Apricot Edition', volume: '25cl', price: 10.0 },
  ],
 },
 {
  id: 'bier',
  name: 'BIER',
  drinks: [
   { name: 'Corona', volume: '33cl', alcohol: '4.7%', price: 10.0 },
   { name: 'Heineken', volume: '25cl', alcohol: '5.0%', price: 8.0 },
   { name: 'Birra Peja Crudo', volume: '33cl', alcohol: '5.0%', price: 10.0 },
  ],
 },
 {
  id: 'wein',
  name: 'WEIN',
  drinks: [
   { name: 'Weisswein (Chardonnay)', volume: '7.5cl', alcohol: '12.0%', price: 55.0 },
   { name: 'Rotwein (Primitivo)', volume: '7.5cl', alcohol: '12.0%', price: 55.0 },
  ],
 },
 {
  id: 'spritz',
  name: 'SPRITZ',
  drinks: [
   { name: 'Gespritzter Weisswein', subtitle: '(süss/sauer)', volume: '20cl', price: 10.0 },
   { name: 'Aperol Spritz', subtitle: '(Aperol, Prosecco, Mineral, Orangenschnitz)', volume: '20cl', price: 15.0 },
   { name: 'Hugo', subtitle: '(Prosecco, Holunderblüten-Sirup, Limetten, Mineral)', volume: '20cl', price: 15.0 },
  ],
 },
 {
  id: 'mix',
  name: 'MIX',
  drinks: [{ name: 'Trojka Ice', volume: '27.5cl', alcohol: '4.0%', price: 10.0 }],
 },
 {
  id: 'aperitif',
  name: 'APERITIF',
  drinks: [
   { name: 'Martini bianco', volume: '4cl', alcohol: '15.0%', price: 10.0 },
   { name: 'Baileys', volume: '4cl', alcohol: '17.0%', price: 10.0 },
  ],
 },
 {
  id: 'longdrinks',
  name: 'LONG DRINKS',
  drinks: [
   { name: 'Whisky - Cola (Johnnie Walker)', volume: '4cl', alcohol: '40%', price: 18.0 },
   { name: "Whisky - Cola (Jack Daniel's)", volume: '4cl', alcohol: '40%', price: 20.0 },
   { name: 'Vodka, Cranberry/Orange/Lemon (Grey Goose)', volume: '4cl', alcohol: '40%', price: 20.0 },
   { name: 'Vodka, Cranberry/Orange/Lemon (Trojka)', volume: '4cl', alcohol: '40%', price: 18.0 },
   { name: 'Gin Tonic (Bombay)', volume: '4cl', alcohol: '40%', price: 18.0 },
   { name: "Gin Tonic (Hendrick's)", volume: '4cl', alcohol: '40%', price: 20.0 },
   { name: 'Bacardi - Cola (Superior/Black)', volume: '4cl', alcohol: '37.5%', price: 18.0 },
   { name: 'Malibu - Ananas', volume: '4cl', alcohol: '37.5%', price: 18.0 },
   { name: 'Jägermeister - Cola', volume: '4cl', alcohol: '35%', price: 18.0 },
  ],
 },
 {
  id: 'shots',
  name: 'SHOTS',
  drinks: [
   { name: 'Jägermeister', volume: '2cl', price: 5.0 },
   { name: 'Trojka Pink', volume: '2cl', price: 5.0 },
   { name: 'Passoã', volume: '2cl', price: 5.0 },
   { name: 'Berliner Luft', volume: '2cl', price: 5.0 },
   { name: "Dash'n me Brna - Herbes and spices Liqueur", volume: '2cl', price: 5.0 },
   { name: 'Zanë - Hazelnut Liqueur with Violets', volume: '2cl', price: 5.0 },
   { name: 'Tequila', volume: '2cl', price: 10.0 },
  ],
 },
 {
  id: 'cocktails',
  name: 'COCKTAILS',
  drinks: [
   { name: 'Classic Mojito', subtitle: '(Tials Classic Mojito, Soda, Limetten, Minze, Crash-Ice)', price: 18.0 },
   { name: 'Berry Mojito', subtitle: '(Tials Berry Mojito, Soda, Limetten, Minze, Crash-Ice)', price: 18.0 },
   { name: 'Sex on the Beach', subtitle: '(Vodka Trojka pure, White Peach, Cranberrysaft)', price: 18.0 },
   { name: 'Caipirossa', subtitle: '(Vodka Trojka red, Limetten, Crash-Ice)', price: 18.0 },
   { name: 'Caipirinha', subtitle: '(Cachaça, Limetten, Crash-Ice)', price: 18.0 },
  ],
 },
 {
  id: 'spirituosen',
  name: 'SPIRITUOSEN',
  drinks: [
   { name: 'Whisky Johnnie Walker', volume: '4cl', alcohol: '40.0%', price: 10.0 },
   { name: "Whisky Jack Daniel's", volume: '4cl', alcohol: '40.0%', price: 12.0 },
   { name: 'Vodka Grey Goose', volume: '4cl', alcohol: '40.0%', price: 12.0 },
   { name: 'Vodka Trojka pure', volume: '4cl', alcohol: '40.0%', price: 10.0 },
   { name: 'Vodka Trojka red', volume: '4cl', alcohol: '24.0%', price: 10.0 },
   { name: 'Vodka Trojka black', volume: '4cl', alcohol: '17.0%', price: 10.0 },
   { name: 'Vodka Trojka green', volume: '4cl', alcohol: '25.0%', price: 10.0 },
   { name: 'Bacardi superior', volume: '4cl', alcohol: '37.5%', price: 10.0 },
   { name: 'Bacardi black', volume: '4cl', alcohol: '37.5%', price: 10.0 },
   { name: 'Bombay Gin', volume: '4cl', alcohol: '40.0%', price: 10.0 },
   { name: "Hendrick's Gin", volume: '4cl', alcohol: '44.0%', price: 12.0 },
   { name: 'Malibu', volume: '4cl', alcohol: '37.5%', price: 10.0 },
   { name: 'Jägermeister', volume: '4cl', alcohol: '35.0%', price: 10.0 },
  ],
 },
 {
  id: 'prosecco',
  name: 'PROSECCO',
  drinks: [
   { name: 'Bailly (Prosecco Freixenet)', volume: '10cl', alcohol: '11.0%', price: 10.0 },
   { name: 'Cupitt (Prosecco Freixenet Rosé)', volume: '10cl', alcohol: '11.0%', price: 10.0 },
   { name: 'Prosecco Freixenet', volume: '75cl', alcohol: '11.0%', price: 65.0 },
   { name: 'Prosecco Freixenet Rosé', volume: '75cl', alcohol: '11.0%', price: 65.0 },
  ],
 },
 {
  id: 'champagne',
  name: 'CHAMPAGNER',
  drinks: [
   { name: 'Moët Brut', volume: '0.75L', alcohol: '12.5%', price: 140.0 },
   { name: 'Moët Ice Impérial', volume: '0.75L', alcohol: '12.5%', price: 160.0 },
   { name: 'Moët Ice Impérial MAGNUM', volume: '1.50L', alcohol: '12.5%', price: 350.0 },
   { name: 'Moët N.I.R (Rosé)', volume: '0.75L', alcohol: '12.5%', price: 170.0 },
   { name: 'Moët Bright Night MAGNUM', volume: '1.50L', alcohol: '12.5%', price: 280.0 },
   { name: 'Dom Pérignon Luminous', volume: '0.75L', alcohol: '12.5%', price: 380.0 },
   { name: 'Dom Pérignon Lum. MAGNUM', volume: '1.50L', alcohol: '12.5%', price: 830.0 },
  ],
 },
 {
  id: 'vodka-flaschen',
  name: 'VODKA FLASCHEN',
  drinks: [
   { name: 'Trojka (white/red/black/pink)', volume: '0.70L', alcohol: '40.0%', price: 180.0 },
   { name: 'Grey Goose', volume: '0.70L', alcohol: '40.0%', price: 220.0 },
   { name: 'Grey Goose MAGNUM', volume: '1.75L', alcohol: '40.0%', price: 440.0 },
   { name: 'Grey Goose PREMIUM', volume: '4.50L', alcohol: '40.0%', price: 1080.0 },
   { name: 'Belvedere', volume: '0.70L', alcohol: '40.0%', price: 230.0 },
   { name: 'Belvedere 10', volume: '0.70L', alcohol: '40.0%', price: 360.0 },
   { name: 'Belvedere MIDNIGHT', volume: '1.75L', alcohol: '40.0%', price: 490.0 },
  ],
 },
 {
  id: 'whisky-flaschen',
  name: 'WHISKY FLASCHEN',
  drinks: [
   { name: "Ballantine's", volume: '0.70L', alcohol: '40.0%', price: 180.0 },
   { name: 'Johnnie Walker', volume: '0.70L', alcohol: '40.0%', price: 180.0 },
   { name: "Jack Daniel's", volume: '0.70L', alcohol: '40.0%', price: 200.0 },
   { name: 'Chivas Regal 12 Years', volume: '0.70L', alcohol: '40.0%', price: 230.0 },
  ],
 },
 {
  id: 'tequila-flaschen',
  name: 'TEQUILA FLASCHEN',
  drinks: [{ name: 'Tequila Azul Reposado', volume: '0.70L', alcohol: '40.0%', price: 590.0 }],
 },
 {
  id: 'gin-flaschen',
  name: 'GIN FLASCHEN',
  drinks: [
   { name: 'Bombay Gin', volume: '0.70L', alcohol: '40.0%', price: 180.0 },
   { name: "Hendrick's Gin", volume: '0.70L', alcohol: '44.0%', price: 220.0 },
  ],
 },
 {
  id: 'spirituosen-flaschen',
  name: 'SPIRITUOSEN FLASCHEN',
  drinks: [
   { name: 'Bacardi superior/black', volume: '0.70L', alcohol: '37.5%', price: 160.0 },
   { name: 'Malibu', volume: '0.70L', alcohol: '37.5%', price: 160.0 },
   { name: 'Martini bianco', volume: '1.00L', alcohol: '40.0%', price: 160.0 },
   { name: 'Jägermeister', volume: '0.70L', alcohol: '35.0%', price: 160.0 },
   { name: 'Berliner Luft', volume: '0.70L', alcohol: '18.0%', price: 160.0 },
  ],
 },
 {
  id: 'zusaetze',
  name: 'ZUSÄTZE (1 LITER)',
  drinks: [{ name: 'Mineral / Cranberry / Orangensaft / Apfelsaft / Ananassaft / Bitterlemon / Tonic / Wildberry', price: 20.0 }],
 },
];

// ==========================
// Navigation & Scroll
// ==========================
const navLinks = document.getElementById('navLinks');
const categoriesContainer = document.getElementById('categoriesContainer');
const backToTopBtn = document.getElementById('backToTop');
const themeToggle = document.getElementById('themeToggle');

// Navigation erstellen
navLinks.innerHTML =
 `<button class="nav-link active" data-section="exclusive">EXCLUSIVE</button>` +
 drinkCategories
  .slice(0, 5)
  .map(cat => `<button class="nav-link" data-section="${cat.id}">${cat.name}</button>`)
  .join('');

// Kategorien erzeugen
drinkCategories.forEach((cat, index) => {
 const section = document.createElement('section');
 section.id = cat.id;
 section.className = 'category-section fade-in';
 section.innerHTML = `
    <div class="category-header">
      <h2 class="category-title">${cat.name}</h2>
      <button class="expand-button" aria-label="Toggle category">▼</button>
    </div>
    <div class="drinks-list" style="display:none;">
      ${cat.drinks
       .map(
        d => `
        <div class="drink-item">
          <div class="drink-info">
            <h3 class="drink-name">${d.name}</h3>
            ${d.subtitle ? `<p class="drink-subtitle">${d.subtitle}</p>` : ''}
            <div class="drink-details">
              ${d.volume ? `<span class="detail">${d.volume}</span>` : ''}
              ${d.alcohol ? `<span class="detail">${d.alcohol}</span>` : ''}
            </div>
          </div>
          <div class="drink-price">CHF ${d.price.toFixed(2)}</div>
        </div>`
       )
       .join('')}
    </div>`;
 categoriesContainer.appendChild(section);
});

// ==========================
// Interaktionen
// ==========================
let expanded = {};

// statt nur die Buttons -> ganze Header klickbar machen
document.querySelectorAll('.category-header').forEach(header => {
 header.addEventListener('click', () => {
  const section = header.closest('.category-section');
  const list = section.querySelector('.drinks-list');
  const btn = header.querySelector('.expand-button');
  const open = list.style.display === 'block';

  list.style.display = open ? 'none' : 'block';
  btn.textContent = open ? '▼' : '▲';
 });
});

navLinks.addEventListener('click', e => {
 if (e.target.matches('.nav-link')) {
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  const id = e.target.dataset.section;
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
 }
});

window.addEventListener('scroll', () => {
 backToTopBtn.style.display = window.scrollY > 500 ? 'flex' : 'none';
});

backToTopBtn.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
});

// themeToggle.addEventListener('click', () => {
// //  document.body.classList.toggle('dark-mode');
//  document.body.classList.toggle('light-mode');
//});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
 // Zeige Button erst, wenn mehr als 800px gescrollt wurde
 if (window.scrollY > 850) {
  backToTop.classList.add('visible');
 } else {
  backToTop.classList.remove('visible');
 }
});

backToTop.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
});
