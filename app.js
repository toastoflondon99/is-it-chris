// ═══════════════════════════════════════════
//  IS IT LUCID? — The Lucid Property Game
//  Would Chris & Jem acquire this for a client?
// ═══════════════════════════════════════════

// Local images — bundled with the site
const IMG = {
  // Houses / land (Chris properties)
  brickHouse:    "./assets/house1.jpg",
  suburbanHouse: "./assets/house2.jpg",
  oldHouse:      "./assets/house3.jpg",
  tiredHouse:    "./assets/house4.jpg",
  bigBlock:      "./assets/house5.jpg",
  flatLand:      "./assets/house6.jpg",
  charHome:      "./assets/house7.jpg",

  // Apartments / high-rise (Not Chris)
  apartment:     "./assets/apt1.jpg",
  penthouse:     "./assets/apt2.jpg",
  highrise:      "./assets/tower1.jpg",

  // Lifestyle / premium (Not Chris)
  noosa:         "./assets/beach1.jpg",
  goldCoast:     "./assets/gc1.jpg",
  mansion:       "./assets/mansion1.jpg",
  byron:         "./assets/byron1.jpg",

  // Development / land (Not Chris)
  newEstate:     "./assets/estate1.jpg",
};

const PROPERTIES = [
  // ══════════════════════════════════════
  //  CHRIS PROPERTIES (isChris: true)
  //  The 0.1% — outliers with arbitrage,
  //  development upside, misunderstood value
  // ══════════════════════════════════════
  {
    isChris: true,
    suburb: "Cannon Hill, QLD",
    address: "47 Doris St, Cannon Hill",
    beds: 3, baths: 1, land: "810m²",
    price: "$920,000",
    badge: "The 0.1%",
    desc: "Post-war lowset on an oversized block. Side access. The house is tired but the land is screaming. Subdiv STCA.",
    image: IMG.tiredHouse,
    correctMsg: "Classic Lucid acquisition. Oversized block, side access, subdiv potential — Chris's data model flagged this as an outlier before the sign went up. Jem probably already called the agent.",
    wrongMsg: "810m² with side access in Cannon Hill? This is the exact property Lucid's methodology was built to find. Misunderstood by the market, massive upside. That's a Chris."
  },
  {
    isChris: true,
    suburb: "Manly West, QLD",
    address: "12 Doreen Dr, Manly West",
    beds: 4, baths: 2, land: "720m²",
    price: "$985,000",
    desc: "Original 80s brick on a flat block with dual street frontage. Development upside the market hasn't priced in.",
    badge: "Outlier",
    image: IMG.brickHouse,
    correctMsg: "Dual street frontage on 720m² flat? Jem ran the feasibility in 20 minutes. This is a textbook Lucid outlier — $250k+ equity uplift written all over it.",
    wrongMsg: "Dual street frontage, flat, 720m² in the bayside? Chris saw this and the proprietary data model practically caught fire. The 0.1%."
  },
  {
    isChris: true,
    suburb: "Tingalpa, QLD",
    address: "88 New Cleveland Rd, Tingalpa",
    beds: 3, baths: 1, land: "1,012m²",
    price: "$780,000",
    badge: "Arbitrage",
    desc: "Deceased estate, needs everything. But 1,012m² in a corridor council is rezoning. The vendor's kids just want it gone.",
    image: IMG.oldHouse,
    correctMsg: "1,012m² deceased estate in a rezoning corridor for $780k? Chris probably sent Jem there with a tape measure before the open home. Arbitrage is what Lucid does.",
    wrongMsg: "Deceased estate, desperate vendors, massive block in a rezoning corridor — this is where Lucid's data-driven method shines. Chris sees what the market misses."
  },
  {
    isChris: true,
    suburb: "Wynnum West, QLD",
    address: "5 Glenora St, Wynnum West",
    beds: 3, baths: 1, land: "607m²",
    price: "$720,000",
    badge: "Misunderstood",
    desc: "Everyone walked past this because of the dodgy paint job and overgrown yard. But the bones are solid and the block has a 20m frontage.",
    image: IMG.suburbanHouse,
    correctMsg: "20m frontage on 607m² in Wynnum West at $720k? While everyone else was scared off by the cosmetics, Chris was running the numbers. Lucid buys what others can't see.",
    wrongMsg: "Bad presentation scares off owner-occupiers but it's catnip for Lucid. 20m frontage = future options. Chris and Jem would've had this under contract by Tuesday."
  },
  {
    isChris: true,
    suburb: "Capalaba, QLD",
    address: "33 Redland Bay Rd, Capalaba",
    beds: 4, baths: 1, land: "850m²",
    price: "$690,000",
    badge: "Data Says Yes",
    desc: "Positioned on a main road so every retail buyer scrolled past it. But 850m² with commercial zoning upside? The data doesn't care about the road.",
    image: IMG.flatLand,
    correctMsg: "Main road = discount. Commercial zoning upside = long-term play. Lucid doesn't buy properties, they buy arbitrage. Chris's data model loves what the market hates.",
    wrongMsg: "850m² with zoning upside at $690k — the main road scared off every mum and dad buyer, which is exactly how Lucid's clients get predictable equity uplift."
  },
  {
    isChris: true,
    suburb: "Cleveland, QLD",
    address: "19 Shore St, Cleveland",
    beds: 3, baths: 2, land: "670m²",
    price: "$840,000",
    badge: "Off-Market",
    desc: "Jem found this one before it hit the portals. Character home, removable dwelling, flat site with DA potential for townhouses.",
    image: IMG.charHome,
    correctMsg: "Off-market, removable dwelling, DA potential — this is exactly the \"specialised acquisition\" Jem describes on his LinkedIn. Lucid sees what's invisible to the portals.",
    wrongMsg: "Off-market with townhouse DA potential in Cleveland? Jem literally found this through the network before it went live. This has Lucid written all over it."
  },
  {
    isChris: true,
    suburb: "Hemmant, QLD",
    address: "8 Lytton Rd, Hemmant",
    beds: 3, baths: 1, land: "920m²",
    price: "$650,000",
    badge: "Sleeper",
    desc: "Small pocket most people forget exists. 920m² under $700k, 12km from the CBD. The data says this is the most undervalued corridor in Brisbane.",
    image: IMG.bigBlock,
    correctMsg: "920m² for $650k, 12km to the CBD in a corridor nobody's watching yet? Chris has been tracking this pocket for years. When Lucid says \"misunderstood,\" they mean this.",
    wrongMsg: "This is the definition of a Lucid play — a suburb the market forgot, priced below replacement cost, with massive land. Chris's 20 years of SEQ data flagged this years ago."
  },

  // ══════════════════════════════════════
  //  NOT CHRIS PROPERTIES (isChris: false)
  // ══════════════════════════════════════
  {
    isChris: false,
    suburb: "New Farm, QLD",
    address: "Unit 1204, Riverview Towers, New Farm",
    beds: 2, baths: 2, land: "Apartment 87m²",
    price: "$1,150,000",
    badge: "Premium Unit",
    desc: "River views, rooftop pool, concierge. Body corp $9,800/year. Every young professional's dream. Zero land component.",
    image: IMG.apartment,
    correctMsg: "No land, no upside, body corp eating your yield. Chris doesn't buy apartments — there's no arbitrage in a building full of identical floor plans. Lucid needs dirt.",
    wrongMsg: "Pretty views don't show up in a data model. No land = no development upside = not the 0.1%. Jem wouldn't even open the listing."
  },
  {
    isChris: false,
    suburb: "Teneriffe, QLD",
    address: "Penthouse 3, Wool Store, Teneriffe",
    beds: 3, baths: 2, land: "Warehouse Conv.",
    price: "$2,400,000",
    badge: "Trophy",
    desc: "Heritage wool store conversion. Polished concrete. Exposed brick. Instagram-ready. Zero equity uplift potential.",
    image: IMG.penthouse,
    correctMsg: "$2.4M for a heritage conversion with no development angle? This is a lifestyle purchase, not a Lucid investment. Chris can't manufacture equity from exposed brick.",
    wrongMsg: "Polished concrete and Instagram vibes don't produce $250k+ equity uplift. Chris and Jem acquire investments, not lifestyle trophies."
  },
  {
    isChris: false,
    suburb: "Springfield Rise, QLD",
    address: "Lot 412, Crest Estate, Springfield Rise",
    beds: 0, baths: 0, land: "375m²",
    price: "$395,000",
    badge: "New Land Only",
    desc: "Developer estate, house-and-land package available. Display village down the road. Cookie-cutter blocks with developer margin baked in.",
    image: IMG.newEstate,
    correctMsg: "375m² with developer margin baked into the price? You're buying someone else's profit. Lucid finds arbitrage in existing stock, not new estates with glossy brochures.",
    wrongMsg: "Developer land releases are the opposite of Lucid's methodology. There's no misunderstood value here — just a marketing budget and a display village."
  },
  {
    isChris: false,
    suburb: "Noosa Heads, QLD",
    address: "1/28 Hastings St, Noosa Heads",
    beds: 3, baths: 2, land: "Beachfront Unit",
    price: "$3,200,000",
    badge: "Lifestyle",
    desc: "Walking distance to everything bougie. Price driven entirely by emotion and weekend visitors from Melbourne.",
    image: IMG.noosa,
    correctMsg: "$3.2M driven by holiday emotion, not data. Chris's model needs measurable, repeatable factors — not \"how good are the croissants nearby.\" Lucid stays disciplined.",
    wrongMsg: "Noosa prices are fuelled by lifestyle buyers, not fundamentals. Chris can't run a data model on vibes. The numbers don't support the price — not a Lucid acquisition."
  },
  {
    isChris: false,
    suburb: "Gold Coast, QLD",
    address: "Unit 4502, Oracle Tower, Broadbeach",
    beds: 3, baths: 3, land: "High-Rise 145m²",
    price: "$2,850,000",
    badge: "Tower Living",
    desc: "45th floor ocean views. Infinity pool. No land, depreciating asset, body corp could buy a car every year.",
    image: IMG.goldCoast,
    correctMsg: "A depreciating box in the sky with $15k body corp. Chris's proprietary model doesn't have a column for infinity pools. This is everything Lucid avoids.",
    wrongMsg: "High-rise apartment on the Gold Coast — no land, no development angle, body corp nightmare. Chris would rather buy 4 houses in the Redlands for the same money."
  },
  {
    isChris: false,
    suburb: "Ascot, QLD",
    address: "14 Lancaster Rd, Ascot",
    beds: 5, baths: 4, land: "800m²",
    price: "$4,500,000",
    badge: "Blue Chip",
    desc: "Immaculate Queenslander, perfectly renovated. Heritage overlay. Nothing to add, nothing to improve. The market has already priced in everything.",
    image: IMG.mansion,
    correctMsg: "Perfectly renovated with no upside left? There's no arbitrage in a property the market already values correctly. Lucid buys what others undervalue, not trophies in Ascot.",
    wrongMsg: "$4.5M fully renovated in Ascot with heritage overlay — there's literally nothing to manufacture. Chris needs mispricing. This is priced to perfection."
  },
  {
    isChris: false,
    suburb: "Byron Bay, NSW",
    address: "12 Lighthouse Rd, Byron Bay",
    beds: 4, baths: 3, land: "Hinterland Retreat",
    price: "$2,900,000",
    badge: "Interstate",
    desc: "Crystal healing room included. Kombucha on tap. Lucid's data model returns a 404 error on NSW postcodes.",
    image: IMG.byron,
    correctMsg: "Byron Bay? Chris has 20+ years of SEQ data. His proprietary model doesn't even recognise NSW. Jem's Property Economics degree was from QUT, not the School of Kombucha.",
    wrongMsg: "Crystal healing rooms don't show up in a proprietary data model. Plus it's NSW — Chris's 20 years of Brisbane market research doesn't extend past the Tweed."
  },
  {
    isChris: false,
    suburb: "Surfers Paradise, QLD",
    address: "Unit 712, Chevron Renaissance, Surfers",
    beds: 2, baths: 1, land: "Resort-Style 78m²",
    price: "$580,000",
    badge: "Holiday Let",
    desc: "Managed holiday let in a resort complex. 23% occupancy in winter. Body corp includes gym you'll never use.",
    image: IMG.highrise,
    correctMsg: "A managed holiday let in Surfers? This has more red flags than a Chinese New Year parade. No land, seasonal income, body corp bleeding you dry. Not the 0.1%.",
    wrongMsg: "23% winter occupancy and a body corp statement that reads like a horror novel. Chris and Jem find properties with predictable equity uplift — this has predictable headaches."
  },
];

// ── GAME STATE ──
let deck = [];
let currentIndex = 0;
let score = 0;
let total = 0;
let streak = 0;
let bestStreak = 0;
let isAnimating = false;

// ── SHUFFLE ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── SCREENS ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── START ──
function startGame() {
  deck = shuffle(PROPERTIES);
  currentIndex = 0;
  score = 0;
  total = 0;
  streak = 0;
  bestStreak = 0;
  updateScoreboard();
  showScreen('game-screen');
  showCard();
}

function restartGame() {
  startGame();
}

// ── SHOW CARD ──
function showCard() {
  if (currentIndex >= deck.length) {
    endGame();
    return;
  }

  const p = deck[currentIndex];
  const card = document.getElementById('property-card');

  card.classList.remove('swipe-left', 'swipe-right');
  card.classList.add('enter');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      card.classList.remove('enter');
    });
  });

  const imgEl = document.getElementById('card-image');
  imgEl.style.backgroundImage = `url('${p.image}')`;
  imgEl.style.backgroundSize = 'cover';
  imgEl.style.backgroundPosition = 'center';

  document.getElementById('card-badge').textContent = p.badge;
  document.getElementById('card-suburb-overlay').textContent = p.suburb;
  document.getElementById('card-address').textContent = p.address;
  document.getElementById('beds-val').textContent = p.beds || '—';
  document.getElementById('baths-val').textContent = p.baths || '—';
  document.getElementById('land-val').textContent = p.land;
  document.getElementById('card-price').textContent = p.price;
  document.getElementById('card-desc').textContent = p.desc;

  document.getElementById('btn-yes').disabled = false;
  document.getElementById('btn-no').disabled = false;
  isAnimating = false;
}

// ── ANSWER ──
function answer(guessedChris) {
  if (isAnimating) return;
  isAnimating = true;

  const p = deck[currentIndex];
  const correct = guessedChris === p.isChris;
  const card = document.getElementById('property-card');

  document.getElementById('btn-yes').disabled = true;
  document.getElementById('btn-no').disabled = true;

  if (guessedChris) {
    card.classList.add('swipe-right');
  } else {
    card.classList.add('swipe-left');
  }

  total++;
  if (correct) {
    score++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
  } else {
    streak = 0;
  }

  updateScoreboard();

  setTimeout(() => {
    showResult(correct, p);
  }, 350);
}

// ── RESULT ──
function showResult(correct, property) {
  const overlay = document.getElementById('result-overlay');
  const content = document.getElementById('result-content');
  const icon = document.getElementById('result-icon');
  const title = document.getElementById('result-title');
  const msg = document.getElementById('result-msg');

  content.className = 'result-content ' + (correct ? 'result-correct confetti-pop' : 'result-wrong shake');

  if (correct) {
    icon.textContent = '✅';
    title.textContent = property.isChris ? "That's Lucid" : "Correct — Not Lucid";
    msg.textContent = property.correctMsg;
  } else {
    icon.textContent = '❌';
    title.textContent = property.isChris ? "Lucid Would Buy This" : "Not Lucid";
    msg.textContent = property.wrongMsg;
  }

  overlay.classList.add('visible');
}

function nextCard() {
  document.getElementById('result-overlay').classList.remove('visible');
  currentIndex++;
  setTimeout(() => showCard(), 200);
}

// ── SCOREBOARD ──
function updateScoreboard() {
  document.getElementById('score').textContent = score;
  document.getElementById('total').textContent = total;
  document.getElementById('streak').textContent = streak;

  const streakContainer = document.getElementById('streak-container');
  if (streak >= 2) {
    streakContainer.classList.add('visible');
  } else {
    streakContainer.classList.remove('visible');
  }
}

// ── END GAME ──
function endGame() {
  showScreen('end-screen');

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-total').textContent = total;
  document.getElementById('stat-streak').textContent = bestStreak;
  document.getElementById('stat-properties').textContent = total;

  const pct = total > 0 ? (score / total) * 100 : 0;
  const titleEl = document.getElementById('end-title');
  const subEl = document.getElementById('end-subtitle');

  if (pct === 100) {
    titleEl.textContent = "You See What Others Miss";
    subEl.textContent = "Perfect score. Chris is considering making you Lucid's third team member. Jem, watch your back.";
  } else if (pct >= 80) {
    titleEl.textContent = "Honorary Lucid Analyst";
    subEl.textContent = "You've got the eye for outlier properties. Chris would let you near the proprietary data model. Maybe.";
  } else if (pct >= 60) {
    titleEl.textContent = "Decent Instincts, No Data";
    subEl.textContent = "You're buying on gut feel when you should be buying on data. Chris reviews 5,500 for every 1. You reviewed vibes.";
  } else if (pct >= 40) {
    titleEl.textContent = "Needs More Data Points";
    subEl.textContent = "You'd probably buy an apartment with ocean views and a $12k body corp. Jem is disappointed in you.";
  } else {
    titleEl.textContent = "Can You Afford to **** That Up?";
    subEl.textContent = "Chris is shaking his head. You need Lucid Property on your team immediately. Join the waitlist. Now.";
  }
}

// ── KEYBOARD SUPPORT ──
document.addEventListener('keydown', (e) => {
  if (document.getElementById('game-screen').classList.contains('active')) {
    const overlay = document.getElementById('result-overlay');
    if (overlay.classList.contains('visible')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nextCard();
      }
    } else {
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        e.preventDefault();
        answer(false);
      } else if (e.key === 'ArrowRight' || e.key === 'd') {
        e.preventDefault();
        answer(true);
      }
    }
  } else if (document.getElementById('intro-screen').classList.contains('active')) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      startGame();
    }
  } else if (document.getElementById('end-screen').classList.contains('active')) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      restartGame();
    }
  }
});