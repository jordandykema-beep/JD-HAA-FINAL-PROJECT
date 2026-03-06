import React, { useEffect, useMemo, useState } from "react";

function splitParagraphs(text) {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap');

:root {
  color-scheme: dark;
  --bg: #0a0a0a;
  --panel: #111111;
  --panel2: #0f0f0f;
  --panel3: #101010;
  --border: #2a2a2a;
  --text: #f5f5f4;
  --muted: #b7b0a8;
  --muted2: #81796f;
  --accent: #d4c2a3;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: radial-gradient(circle at top, #141414 0%, #0a0a0a 40%);
  color: var(--text);
  font-family: Inter, system-ui, sans-serif;
}
a { color: inherit; }
button { font: inherit; }
.shell { min-height: 100vh; background: transparent; color: var(--text); }
.progress-rail {
  position: fixed;
  top: 0;
  left: 0;
  width: 4px;
  height: 100vh;
  background: rgba(255,255,255,0.06);
  z-index: 110;
}
.progress-bar {
  width: 100%;
  background: linear-gradient(180deg, #d8c8aa, #857868);
  transition: height 120ms linear;
}
.header {
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
}
.wrap { width: min(1240px, calc(100% - 56px)); margin: 0 auto; }
.hero { padding: 72px 0 64px; position: relative; }
.eyebrow, .smallcaps {
  margin: 0;
  color: var(--muted2);
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.title {
  margin: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(46px, 7vw, 84px);
  line-height: 1.02;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.subtitle {
  margin: 28px 0 0 0;
  max-width: 900px;
  font-size: 22px;
  line-height: 1.8;
  color: #ddd7cf;
}
.date {
  margin: 16px 0 0 0;
  color: var(--muted2);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 32px;
  align-items: end;
}
.hero-note {
  border-left: 1px solid rgba(255,255,255,0.12);
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
}
.main {
  width: min(1240px, calc(100% - 56px));
  margin: 0 auto;
  padding: 40px 0 72px;
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 40px;
}
.sidebar {
  position: sticky;
  top: 24px;
  align-self: start;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(17,17,17,0.92);
  backdrop-filter: blur(12px);
  padding: 22px;
}
.sidebar nav { display: flex; flex-direction: column; gap: 8px; margin-top: 18px; }
.sidebar-link {
  text-decoration: none;
  color: var(--muted);
  border-left: 1px solid transparent;
  padding: 8px 0 8px 10px;
  transition: color 160ms ease, border-color 160ms ease, transform 160ms ease;
}
.sidebar-link:hover, .sidebar-link.active {
  color: var(--text);
  border-left-color: var(--accent);
  transform: translateX(2px);
}
.content { display: flex; flex-direction: column; gap: 52px; }
.section {
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0.008));
  padding: 34px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.18);
}
.section-title {
  margin: 12px 0 0 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.12;
  font-weight: 600;
}
.section-subtitle {
  margin: 12px 0 0 0;
  font-size: 21px;
  line-height: 1.75;
  color: #ddd7cf;
}
.section-kicker {
  margin: 16px 0 0 0;
  color: var(--muted2);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.body { margin-top: 28px; display: flex; flex-direction: column; gap: 18px; }
.body p { margin: 0; color: #ddd7cf; line-height: 1.95; font-size: 17px; }
.body .lead { font-family: "Playfair Display", Georgia, serif; font-size: 34px; color: var(--text); }
.grid {
  margin-top: 38px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.card {
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.016), rgba(255,255,255,0.008));
  padding: 24px;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}
.card:hover {
  transform: translateY(-2px);
  border-color: rgba(212,194,163,0.36);
  box-shadow: 0 14px 30px rgba(0,0,0,0.25);
}
.card-head {
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 16px;
  margin-bottom: 18px;
}
.card-title {
  margin: 10px 0 0 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 32px;
  line-height: 1.14;
  font-weight: 600;
}
.card-meta {
  margin: 12px 0 0 0;
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
}
.figure {
  margin: 0 0 18px 0;
  width: 100%;
  border: 1px solid rgba(255,255,255,0.08);
  background: #000;
  overflow: hidden;
  position: relative;
}
.figure.card { aspect-ratio: 5 / 3; }
.figure.modal { aspect-ratio: 5 / 4; }
.figure img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
}
.zoom-badge {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 6px 8px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(0,0,0,0.6);
  color: #e7e2db;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted2);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
.caption {
  margin: 0 0 18px 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--muted2);
}
.theme-text {
  margin: 8px 0 0 0;
  font-size: 15px;
  line-height: 1.9;
  color: #ddd7cf;
}
.quote {
  margin: 22px 0 0 0;
  padding-left: 16px;
  border-left: 1px solid #7b6d5b;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 28px;
  line-height: 1.55;
  color: #f5f5f4;
}
.btn {
  margin-top: 26px;
  background: transparent;
  color: var(--text);
  border: 1px solid #6c6257;
  padding: 12px 16px;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 150ms ease, border-color 150ms ease;
}
.btn:hover { background: #1c1917; border-color: #a18f78; }
.timeline { margin-top: 38px; border: 1px solid rgba(255,255,255,0.08); background: rgba(17,17,17,0.75); }
.timeline-item { padding: 18px 20px; color: #ddd7cf; line-height: 1.9; }
.timeline-item + .timeline-item { border-top: 1px solid rgba(255,255,255,0.08); }
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.84);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 100;
  animation: fadeIn 180ms ease;
}
.modal {
  width: min(1120px, 100%);
  max-height: 92vh;
  overflow: hidden;
  border: 1px solid #44403c;
  background: #0c0c0c;
  animation: popIn 180ms ease;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 20px 24px;
}
.modal-title {
  margin: 10px 0 0 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 38px;
  line-height: 1.14;
  font-weight: 600;
}
.modal-meta { margin: 10px 0 0 0; font-size: 15px; line-height: 1.7; color: var(--muted); }
.modal-body {
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr);
  max-height: calc(92vh - 110px);
}
.modal-side {
  padding: 24px;
  border-right: 1px solid rgba(255,255,255,0.08);
  background: var(--panel3);
  overflow-y: auto;
}
.modal-text { padding: 24px 28px; overflow-y: auto; }
.modal-text p { margin: 0 0 24px 0; color: #ddd7cf; line-height: 1.95; font-size: 17px; }
.sources { margin-top: 28px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 18px; }
.source-item { margin-top: 8px; font-size: 14px; line-height: 1.85; color: var(--muted); }
.source-link { color: #ddd7cf; text-decoration: underline; text-underline-offset: 4px; }
.zoom-overlay {
  position: fixed;
  inset: 0;
  z-index: 140;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.zoom-panel {
  width: min(1200px, 100%);
  height: min(88vh, 900px);
  border: 1px solid rgba(255,255,255,0.14);
  background: #050505;
  display: grid;
  grid-template-rows: auto 1fr;
}
.zoom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.zoom-stage {
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.zoom-stage img {
  max-width: none;
  transform-origin: center center;
  transition: transform 120ms ease;
}
.zoom-controls { display: flex; gap: 8px; align-items: center; }
.zoom-btn {
  border: 1px solid rgba(255,255,255,0.18);
  background: transparent;
  color: var(--text);
  padding: 8px 10px;
  cursor: pointer;
}
.map-wrap {
  margin-top: 38px;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, #121212, #0c0c0c);
  padding: 18px;
}
.map-head { margin-bottom: 14px; }
.map-title { margin: 8px 0 0 0; font-family: "Playfair Display", Georgia, serif; font-size: 28px; }
.map-sub { margin: 8px 0 0 0; color: var(--muted); line-height: 1.8; font-size: 14px; }
.map-svg { width: 100%; height: auto; display: block; border: 1px solid rgba(255,255,255,0.06); background: #0a1014; }
.map-legend { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 12px 18px; color: var(--muted); font-size: 13px; }
.legend-dot { display: inline-flex; align-items: center; gap: 8px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: #d4c2a3; display: inline-block; }
.errorbox {
  width: min(900px, calc(100% - 48px));
  margin: 48px auto;
  border: 1px solid #7f1d1d;
  background: #1f1010;
  color: #fecaca;
  padding: 20px;
  line-height: 1.7;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes popIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
@media (max-width: 980px) {
  .hero-grid { grid-template-columns: 1fr; }
  .main { grid-template-columns: 1fr; }
  .sidebar { position: static; }
  .grid { grid-template-columns: 1fr; }
  .modal-body { grid-template-columns: 1fr; }
  .modal-side { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
}
`;

const sections = [
  {
    id: "intro",
    label: "Introduction",
    title: "Dispatches from the Ancient Road",
    subtitle:
      "Being the collected records of the House of Nikodemos, merchants first of Therma and later of Thessalonike, concerning the coins they handled, the roads they traveled, and the kingdoms they watched rise and fall.",
    kicker: "461 BCE to 42 BCE",
    body: [
      "A Note from the Compiler",
      "My name is Jordan Dykema, and I have gathered here the surviving journals of a Macedonian merchant family whose papers passed, over generations, from cedar chest to cedar chest. The earliest entries come from the old harbor town of Therma, on the Thermaic Gulf. Later entries belong to descendants writing from Thessalonike, the city founded by Cassander in the late fourth century BCE. The papers are not complete. There are silences, gaps, and broken lines of inheritance. Still, enough remains to show a family habit: when one of them encountered a coin that seemed to say something lasting about power, place, or ambition, they wrote it down.",
      "What follows is not the whole history of the ancient Mediterranean, only the portion that passed through one family's hands.",
      "Compiled at Cambridge, Massachusetts, spring 2026."
    ]
  },
  {
    id: "gen1",
    label: "The First Generation",
    title: "Nikodemos, founder of the journals",
    subtitle: "Active on the western and Aegean routes, c. 461 to 400 BCE",
    body: [
      "I am born at Therma, a harbor at the head of the gulf, where the water is never still for long and where the smell of fish, tar, wet rope, and grain hangs in the air from dawn to nightfall. My father trades olive oil, grain, timber, and whatever else can survive a journey by mule or hull. By the time I am steady on my feet, I am already following him to storehouses and quays. Therma is not yet a grand city. It is a place of movement, of loading and unloading, of waiting for a wind to change. Perhaps that is why I never mind leaving it.",
      "I am quick with numbers and slower with everything else. My father discovers this early and spares me the heaviest lifting. I keep tallies, weigh silver, count sacks, and check measures. That is where my interest in coins begins. A jar of oil stays where it is sent. A coin does not. It moves farther than any cargo and survives more owners than any ship. It carries the mark of a city into places that city itself will never see.",
      "So I begin writing them down."
    ],
    objects: [
      { slug: "naxos", name: "I. The Tetradrachm of Naxos", date: "c. 461 BCE", place: "Naxos, Sicily", theme: "Dionysus, wine, and civic identity", excerpt: "The coin does not pretend. Athens puts wisdom on its silver. Other cities put force, lineage, or divine favor. Naxos puts wine.", imageSrc: "/coins/Naxos.jpg", imageAlt: "Silver tetradrachm of Naxos showing Dionysus and Silenus.", imageCaption: "Silver tetradrachm of Naxos, c. 461 BCE. Dionysus on the obverse and Silenus on the reverse.", fullEntry: `I am twenty-two when I first run the western route without my father. I leave Corinth on a grain ship bound for Sicily, carrying painted pottery for an Athenian merchant who says he is now too old for sea crossings. By the third day I decide he is a wise man. The crossing is rough, and I spend more of it retching than standing. When we finally sight the Sicilian coast, the land rises out of the haze like a promise made to someone else.

Naxos is lively in a way that makes a man forget his stomach. It is a Greek city, but it does not feel like the mainland. The light is harder, the hills fuller, the market louder. I hear several dialects at once, and everywhere there is grain, wine, fruit, fish, resin, wool, and bargaining. Sicily has a scale to it that surprises me. The island's Greek cities are wealthy, and they seem to know it.

There I first hold the silver tetradrachm of Naxos. On one side is Dionysus, with a heavy beard and an ivy wreath, his face solemn in a way I do not expect from the god of wine. On the other is Silenus, seated and easy in his own skin, lifting a drinking cup as though no one in the world has ever hurried him.

What I like most is that the coin does not pretend. Athens puts wisdom on its silver. Other cities put force, lineage, or divine favor. Naxos puts wine. It knows what it is selling. In that market, with casks rolling in from the slopes and men tasting before they buy, the message is plain enough.

I buy two amphoras, a sack of almonds, and keep one tetradrachm aside for myself. Not because it is the most valuable coin I handle that spring, but because Silenus seems like the right companion for a long return voyage.`, citations: [{ label: "The Metropolitan Museum of Art, Heilbrunn Timeline of Art History, resources on ancient Sicily and Greek coinage.", url: "https://www.metmuseum.org/toah/" }, { label: "The British Museum, collection records for Greek coinage from Sicily.", url: "https://www.britishmuseum.org/collection" }] },
      { slug: "athens", name: "II. The Tetradrachm of Athens", date: "c. 440 BCE", place: "Athens", theme: "Silver standard, trust, and circulation", excerpt: "The city needs no speech. The type has remained remarkably consistent, and that consistency is its own argument.", imageSrc: "/coins/Athens-Owl.jpg", imageAlt: "Athenian owl tetradrachm with Athena on the obverse and owl on the reverse.", imageCaption: "Athenian owl tetradrachm, c. 440 BCE. Athena on the obverse and owl on the reverse.", fullEntry: `Every merchant in the Greek world ends up in Athens sooner or later. Even if he tries not to, Athenian silver finds him first. By the time I arrive at Piraeus, I have spent years hearing prices quoted in owls, debts settled in owls, freight measured against owls.

Piraeus itself is overwhelming, all shouting, ropes, hulls, slaves hauling goods, foreigners looking offended, and local officials looking superior. Athens draws wealth not only from trade, but from its silver. The Laurion mines have fed the city's coinage and helped make the owl trusted far beyond Attica.

The tetradrachm itself is already famous. Athena on the obverse, frontal eye and severe profile, helmet set firmly on the brow. On the reverse the owl stands alert beside the olive sprig and crescent. The inscription is short. The city needs no speech. The type has remained remarkably consistent, and that consistency is its own argument.

I spend six weeks in Athens and leave richer than I arrived, though not enough to enjoy the city as Athenians enjoy themselves. Still, I leave with respect. A city that can send out silver so reliable that strangers trust it by habit has done something most rulers fail to do with armies.`, citations: [{ label: "The British Museum, collection records for Athenian owl tetradrachms.", url: "https://www.britishmuseum.org/collection" }, { label: "The Metropolitan Museum of Art, essays and collection resources on ancient Greek trade and coinage.", url: "https://www.metmuseum.org/toah/" }] },
      { slug: "akragas", name: "III. The Dekadrachm of Akragas", date: "c. 409 BCE", place: "Akragas, Sicily", theme: "Predation, wealth, and fragility", excerpt: "I stand in a city that imagines itself the eagle and not the hare.", imageSrc: "/coins/Akragas.jpg", imageAlt: "Silver dekadrachm of Akragas with quadriga and eagle imagery.", imageCaption: "Silver dekadrachm of Akragas, c. 409 BCE. Quadriga and eagle imagery.", fullEntry: `When I return to Sicily years later, the island still looks rich, but the richness has turned anxious. Men are buying and selling with one ear turned west. News travels faster than grain when war is close. Selinus has fallen. Himera has fallen. Carthage is across the sea again.

Akragas is as beautiful as any city I have seen. The temples stand along the ridge in such number and size that a stranger might think stone itself grows more readily there than wheat. The olive groves are broad, the streets wide, and the people carry themselves with the ease of long wealth.

The coin I am shown there is a dekadrachm, an impressive thing before one even considers the engraving. On one side an eagle has seized a hare. On the other, two eagles stand over the body of another, with the city's familiar crab below. The message could hardly be plainer. Here is appetite, force, and mastery made beautiful.

I stand in a city that imagines itself the eagle and not the hare. Still, the market that week is full of hurried sales, and hurried sales are a form of truth. I leave before the siege begins.`, citations: [{ label: "ToposText, entry on Akragas.", url: "https://topostext.org/place/373136PAkr" }, { label: "The British Museum, Greek coin collection resources.", url: "https://www.britishmuseum.org/collection" }] }
    ]
  },
  {
    id: "gen2",
    label: "The Second Generation",
    title: "Archelaos, son of Nikodemos",
    subtitle: "Active on the northern and eastern routes",
    body: [
      "My father could sit in a market half a day before speaking. I cannot. Perhaps that is a flaw. Still, the world is moving faster now than it did in his time. Macedon is no longer a rough northern kingdom others laugh at. Philip has seen to that. Roads are being improved, armies are always somewhere ahead of you, and trade follows power whether it admires it or not.",
      "I learn to travel in a world of courts, camps, and royal ambition. Philip reshapes the north. Alexander stretches the routes eastward beyond anything my father knew. The men who inherit that world learn quickly that power can be copied in silver even when it cannot be held intact on the ground."
    ],
    objects: [
      { slug: "philip", name: "IV. The Tetradrachm of Philip II", date: "c. 342 BCE", place: "Pella", theme: "Kingship and prestige", excerpt: "Military success frightens people, but athletic victory flatters them.", imageSrc: "/coins/Philip-II.jpg", imageAlt: "Silver tetradrachm of Philip II with Zeus and horseman.", imageCaption: "Silver tetradrachm of Philip II, c. 342 BCE. Zeus on the obverse and horseman on the reverse.", fullEntry: `By the time I trade regularly on the Macedonian roads, Philip has already changed the balance of the Greek world. Pella is full of the sound of ambition: horses, armor, orderlies, builders, officials, petitioners, young men trying to be noticed by older ones.

Philip's silver tetradrachm comes into my hand on a timber run. Zeus occupies the obverse, composed and secure. On the reverse rides the youthful horseman, tied to Philip's equestrian victories and the prestige that comes with Olympic success. It is a clever choice. Military success frightens people, but athletic victory flatters them.

What strikes me most is the restraint. Philip does not place his own face on the coin. Zeus is still Zeus, and Philip is still below him, however much the king may benefit from standing nearby.`, citations: [{ label: "The Metropolitan Museum of Art, collection resources on Philip II coinage.", url: "https://www.metmuseum.org/toah/" }, { label: "Harvard Art Museums, collection records.", url: "https://harvardartmuseums.org/collections" }] },
      { slug: "alexander-babylon", name: "V. The Tetradrachm of Alexander III", date: "c. 325 BCE", place: "Babylon", theme: "Empire through repetition", excerpt: "One coin is persuasion. Ten thousand are atmosphere.", imageSrc: "/coins/Alexander-III.jpg", imageAlt: "Silver tetradrachm of Alexander III with Herakles and Zeus.", imageCaption: "Silver tetradrachm of Alexander III, c. 325 BCE. Herakles on the obverse and Zeus on the reverse.", fullEntry: `When the roads east become busy, a merchant either follows them or resigns himself to hearing profits discussed by other men. So I go east.

The journey to Babylon is long. Then Babylon appears, and the effect reverses. The city is vast, old, and built on a scale meant to teach humility. In the market I receive the silver tetradrachm of Alexander. Herakles in the lion skin on one side, Zeus enthroned on the other, the king's name running down the field.

People speak of the head as Herakles, and that is true enough. Yet no one handling these coins fails to understand the nearness of the comparison. Herakles gives Alexander heroic force, Zeus gives him sanction, and the coin repeats the pairing so endlessly that it begins to feel less like flattery than order itself.

That is what impresses me most. Not the beauty of a single specimen, though it is handsome enough, but the multiplication. One coin is persuasion. Ten thousand are atmosphere.`, citations: [{ label: "Encyclopaedia Britannica, entry on Babylon.", url: "https://www.britannica.com/place/Babylon-ancient-city-Mesopotamia-Asia" }, { label: "The British Museum, collection records for Alexander coinage.", url: "https://www.britishmuseum.org/collection" }] },
      { slug: "ptolemy", name: "VI. The Tetradrachm of Ptolemy as Satrap", date: "c. 318 BCE", place: "Alexandria", theme: "Inheritance and legitimacy", excerpt: "Dead men are useful in politics, especially very great dead men.", imageSrc: "/coins/Ptolemy.jpg", imageAlt: "Silver tetradrachm of Ptolemy as satrap with Alexander portrait and Athena reverse.", imageCaption: "Silver tetradrachm of Ptolemy as satrap, c. 318 BCE. Alexander portrait on the obverse and Athena on the reverse.", fullEntry: `Alexander dies, and the empire begins at once to harden into pieces. Ptolemy takes Egypt, which any sensible merchant recognizes as a clever choice.

Alexandria is new when I arrive, and new cities always feel a little theatrical. Yet this one is more than theater. The coin Ptolemy issues in these years is careful. Alexander's head remains, now in the elephant-scalp headdress, and Athena strides on the reverse.

It is not simply memorial coinage. It is interpretation. Ptolemy is not yet saying openly that he is king in his own right. He is saying something more skillful: that he is the proper keeper of what Alexander made. I admire the intelligence of it and mistrust it for the same reason. Dead men are useful in politics, especially very great dead men.`, citations: [{ label: "Encyclopaedia Britannica, history of Alexandria.", url: "https://www.britannica.com/place/Alexandria-Egypt/History" }, { label: "Harvard Art Museums, collection records.", url: "https://harvardartmuseums.org/collections" }] },
      { slug: "sardis", name: "VII. The Posthumous Alexander Tetradrachm", date: "c. 317 BCE", place: "Sardis", theme: "Authority after death", excerpt: "The dead can continue ruling a market long after they have ceased ruling anything else.", imageSrc: "/coins/Alexander-Sardis.jpg", imageAlt: "Posthumous Alexander tetradrachm from Sardis.", imageCaption: "Posthumous Alexander tetradrachm from Sardis, c. 317 BCE.", fullEntry: `I come through Sardis on the return north. Sardis is old money. Men there speak of coinage as though it were family history.

What unsettles me is not the silver itself, which is sound, but the fact that the coin still names Alexander as though nothing has changed. He is dead. His generals are at war. Yet the dead king's silver goes on speaking in the present tense.

A coin does not care whether the body behind its claim still breathes. If the type remains trusted, the argument remains alive. The dead can continue ruling a market long after they have ceased ruling anything else.`, citations: [{ label: "Sardis Expedition, history and chronology resources.", url: "https://sardisexpedition.org/" }, { label: "The British Museum, collection resources on Hellenistic coinage.", url: "https://www.britishmuseum.org/collection" }] }
    ]
  },
  {
    id: "gen3",
    label: "The Third Generation",
    title: "Nikodemos, son of Archelaos",
    subtitle: "Active on the Syrian and Thracian routes",
    body: [
      "I grow up in a world my grandfather would scarcely recognize. The old Greek city-states still stand, but the great stage now belongs to kingdoms. Egypt belongs to the Ptolemies. Syria and the east belong to Seleucus. Thrace and nearby lands answer to Lysimachos. Routes remain, but rulers change over them like weather over a harbor.",
      "My work is not to admire these arrangements but to move through them. Yet coins make admiration and suspicion difficult to avoid. A ruler's face, title, and symbols pass into every hand. Even a merchant who keeps his opinions to himself cannot fail to notice how carefully power chooses to present itself."
    ],
    objects: [
      { slug: "seleucus", name: "VIII. The Tetradrachm of Seleucus I", date: "c. 300 BCE", place: "Antioch on the Orontes", theme: "Continuation as strategy", excerpt: "Why teach people a new language of power when the old one still spends?", imageSrc: "/coins/Seleucus-I.jpg", imageAlt: "Silver tetradrachm of Seleucus I.", imageCaption: "Silver tetradrachm of Seleucus I, c. 300 BCE.", fullEntry: `Antioch is new enough that one can still see intention in its streets. Older cities grow crookedly, as men do. Antioch looks measured.

The coin of Seleucus I is familiar and altered at once. Herakles remains. Zeus remains. The old visual grammar of Alexander's world has been kept, and only the name is changed. It is a shrewd act. Why teach people a new language of power when the old one still spends?

I do not despise the coin for this. A merchant has little right to despise effective continuity. Still, I cannot help feeling that I am watching inheritance become imitation, and imitation become rule.`, citations: [{ label: "Harvard Art Museums, collection records.", url: "https://harvardartmuseums.org/collections" }, { label: "The British Museum, Hellenistic coin collection resources.", url: "https://www.britishmuseum.org/collection" }] },
      { slug: "lysimachos", name: "IX. The Tetradrachm of Lysimachos", date: "c. 285 BCE", place: "Lysimacheia", theme: "Memory made divine", excerpt: "He is still the most persuasive face available to power.", imageSrc: "/coins/Lysimachos.jpg", imageAlt: "Silver tetradrachm of Lysimachos with Alexander portrait and Athena reverse.", imageCaption: "Silver tetradrachm of Lysimachos, c. 285 BCE. Alexander portrait on the obverse and Athena on the reverse.", fullEntry: `I travel north again late in life and reach Lysimacheia. The place matters because geography has decided that it must.

His silver tetradrachm is one of the strangest and finest coins I ever handle. On the obverse is Alexander, but not simply as a remembered king. He is diademed and bears the horn of Ammon, now unmistakably divine. Athena sits on the reverse, while the legend names Lysimachos.

What astonishes me is the date of it all. Alexander has been dead for decades, yet he is still the most persuasive face available to power. Lysimachos must still borrow authority from the dead youth he once followed.`, citations: [{ label: "The British Museum, collection records for Lysimachos coinage.", url: "https://www.britishmuseum.org/collection" }, { label: "Harvard Art Museums, collection records.", url: "https://harvardartmuseums.org/collections" }] }
    ]
  },
  {
    id: "gen4",
    label: "The Fourth Generation",
    title: "Phila, writing in the Roman world",
    subtitle: "c. 43 to 42 BCE",
    body: [
      "After generations of silence, I reopen the journals in a Roman world. By my time the world described by the earlier entries is gone, or nearly so. The old Greek cities remain but under larger powers. The successor kings have given way, one after another, to Rome. Roads are better in some places, taxes worse in others, and everywhere official business arrives with greater confidence than before.",
      "I keep writing because the chest should not end in silence. Rome now arranges the world in the manner Macedon once did, though with a colder habit of endurance. And when Rome begins to fracture around Caesar's death, the fracture, too, appears in silver."
    ],
    objects: [
      { slug: "brutus", name: "X. The Denarius of Brutus, Eid Mar", date: "42 BCE", place: "Macedonia", theme: "Violence rendered in silver", excerpt: "When power grows fully impatient, it ceases even to clothe itself properly.", imageSrc: "/coins/Brutus.jpg", imageAlt: "Brutus Eid Mar denarius with portrait and daggers.", imageCaption: "Denarius of Brutus, Eid Mar, 42 BCE. Brutus portrait on the obverse and daggers with pileus on the reverse.", fullEntry: `The coin comes to me in Thessalonike by way of a Roman trader who wishes, above all, not to keep it. That alone tells me much. By the time it reaches my hands, Brutus and Cassius have been defeated near Philippi.

I have held coins of cities, kings, satraps, and heirs. This is different. This coin does not imply. It declares. On the obverse is Brutus himself. On the reverse, two daggers flank the pileus, the cap of liberty, and beneath them is the inscription EID MAR. The date of Caesar's murder is struck into the silver as a boast.

That is what makes the piece extraordinary. Greek kings spent generations learning how to edge closer to divinity without saying too much too plainly. Brutus discards all delicacy. He turns assassination into program, into emblem, into circulating silver.

I set the coin beside the old Naxos tetradrachm on my table. Silenus lifts his cup. Brutus raises his murder into silver. Between them lies all the distance from the old Greek world to Rome. If the earlier writers are right, coins outlast the men who strike them. I think, tonight, that they also outlast the excuses.`, citations: [{ label: "Livius, Philippi (42 BCE).", url: "https://www.livius.org/articles/battle/philippi-42-bce/" }, { label: "The British Museum, collection records for the Eid Mar denarius.", url: "https://www.britishmuseum.org/collection" }] }
    ]
  },
  { id: "timeline", label: "Chronology", title: "Chronology of the Journals", subtitle: "From Greek city coinage to Roman political silver", timeline: ["c. 461 BCE: Nikodemos encounters the tetradrachm of Naxos in Sicily.", "c. 440 BCE: Athens and the owl dominate Mediterranean exchange.", "c. 409 BCE: Akragas issues monumental silver under the shadow of war.", "c. 342 BCE: Philip II's Macedon rises through force and prestige.", "c. 325 BCE: Alexander's imperial silver circulates in Babylon.", "c. 318 to 317 BCE: The successors preserve Alexander while remaking his image.", "c. 300 to 285 BCE: Seleucus and Lysimachos assert kingship through inherited visual forms.", "42 BCE: Brutus' Eid Mar denarius marks the Roman crisis in the bluntest silver of the exhibition."] }
];

const routePoints = [
  { name: "Therma / Thessalonike", x: 60, y: 86 },
  { name: "Athens", x: 92, y: 112 },
  { name: "Pella", x: 72, y: 80 },
  { name: "Sardis", x: 180, y: 106 },
  { name: "Antioch", x: 258, y: 128 },
  { name: "Alexandria", x: 248, y: 186 },
  { name: "Babylon", x: 320, y: 124 },
  { name: "Naxos, Sicily", x: 18, y: 128 },
  { name: "Akragas", x: 8, y: 140 },
  { name: "Lysimacheia", x: 110, y: 78 },
  { name: "Philippi", x: 88, y: 72 }
];

function splitNameForDisplay(name) {
  const parts = String(name || "").split(". ");
  if (parts.length > 1) return { line1: `${parts[0]}.`, line2: parts.slice(1).join(". ") };
  return { line1: String(name || "") };
}

function PlaceholderCoin({ label }) {
  return <div className="placeholder">{label}</div>;
}

function CoinImage({ object, card, onZoom }) {
  const figureClass = card ? "figure card" : "figure modal";
  return (
    <figure className={figureClass}>
      {object && object.imageSrc ? (
        <>
          <img src={object.imageSrc} alt={object.imageAlt || object.name || "Coin image"} />
          <button className="zoom-badge" onClick={() => onZoom(object)} type="button">Zoom</button>
        </>
      ) : (
        <PlaceholderCoin label="Coin image" />
      )}
    </figure>
  );
}

function EntryCitations({ citations }) {
  return (
    <div className="sources">
      <h4 className="smallcaps">Sources</h4>
      {citations.map((citation, index) => (
        <div key={`${citation.label}-${index}`} className="source-item">
          <span>{index + 1}. </span>
          {citation.url ? <a href={citation.url} target="_blank" rel="noreferrer" className="source-link">{citation.label}</a> : <span>{citation.label}</span>}
        </div>
      ))}
    </div>
  );
}

function RouteMap() {
  const pathD = "M60 86 L92 112 L18 128 L8 140 M60 86 L72 80 L110 78 L180 106 L258 128 L320 124 M258 128 L248 186 M88 72 L60 86";
  return (
    <div className="map-wrap">
      <div className="map-head">
        <p className="smallcaps">Route map</p>
        <h3 className="map-title">Journeys across the ancient Mediterranean</h3>
        <p className="map-sub">A schematic route map tracing the merchant house from Therma and Thessalonike west to Sicily and south and east through the Hellenistic kingdoms into Roman Macedonia.</p>
      </div>
      <svg viewBox="0 0 360 220" className="map-svg" aria-label="Map of merchant journeys">
        <rect x="0" y="0" width="360" height="220" fill="#0a1014" />
        <path d="M0 72 C40 60, 80 68, 116 78 C160 92, 210 110, 260 122 C290 129, 323 124, 360 128" fill="none" stroke="#23323f" strokeWidth="38" opacity="0.9" />
        <path d="M170 96 C200 88, 232 88, 268 96 L276 220 L160 220 C162 174, 166 132, 170 96 Z" fill="#132028" opacity="0.9" />
        <path d="M0 156 C42 142, 70 138, 104 142 C98 172, 98 196, 102 220 L0 220 Z" fill="#132028" opacity="0.8" />
        <path d={pathD} fill="none" stroke="#d4c2a3" strokeWidth="2.5" strokeDasharray="5 5" />
        {routePoints.map((point) => (
          <g key={point.name}>
            <circle cx={point.x} cy={point.y} r="4" fill="#d4c2a3" />
            <text x={point.x + 6} y={point.y - 6} fill="#e7ddd0" fontSize="8" fontFamily="Inter, sans-serif">{point.name}</text>
          </g>
        ))}
      </svg>
      <div className="map-legend">
        <span className="legend-dot"><span className="dot"></span>Major recorded stops in the journals</span>
        <span>Dashed line indicates schematic trade movement rather than exact ancient road geometry.</span>
      </div>
    </div>
  );
}

function ZoomOverlay({ object, scale, setScale, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setScale((s) => Math.min(4, Number((s + 0.25).toFixed(2))));
      if (e.key === "-") setScale((s) => Math.max(1, Number((s - 0.25).toFixed(2))));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, setScale]);

  return (
    <div className="zoom-overlay" onClick={onClose}>
      <div className="zoom-panel" onClick={(e) => e.stopPropagation()}>
        <div className="zoom-header">
          <div>
            <p className="smallcaps">Coin detail viewer</p>
            <div style={{ marginTop: 6 }}>{object.name}</div>
          </div>
          <div className="zoom-controls">
            <button className="zoom-btn" onClick={() => setScale((s) => Math.max(1, Number((s - 0.25).toFixed(2))))} type="button">−</button>
            <span style={{ minWidth: 54, textAlign: "center" }}>{Math.round(scale * 100)}%</span>
            <button className="zoom-btn" onClick={() => setScale((s) => Math.min(4, Number((s + 0.25).toFixed(2))))} type="button">+</button>
            <button className="zoom-btn" onClick={() => setScale(1)} type="button">Reset</button>
            <button className="zoom-btn" onClick={onClose} type="button">Close</button>
          </div>
        </div>
        <div className="zoom-stage">
          <img src={object.imageSrc} alt={object.imageAlt || object.name} style={{ transform: `scale(${scale})` }} />
        </div>
      </div>
    </div>
  );
}

function ErrorFallback({ error }) {
  return (
    <div className="shell">
      <style>{css}</style>
      <div className="errorbox">
        <h1 style={{ marginTop: 0 }}>Site error</h1>
        <p>The page loaded, but a runtime error occurred.</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>{String(error && error.stack ? error.stack : error)}</pre>
      </div>
    </div>
  );
}

function MuseumApp() {
  const [selectedObject, setSelectedObject] = useState(null);
  const [zoomObject, setZoomObject] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");

  const allObjects = useMemo(() => sections.flatMap((section) => section.objects || []), []);
  const activeObject = selectedObject || allObjects[0] || null;

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      setScrollProgress(Math.max(0, Math.min(100, value)));

      let current = "intro";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = section.id;
        }
      }
      setActiveSection(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openZoom(object) {
    setZoomObject(object);
    setZoomScale(1);
  }

  return (
    <div className="shell">
      <style>{css}</style>
      <div className="progress-rail"><div className="progress-bar" style={{ height: `${scrollProgress}%` }} /></div>

      <header className="header">
        <div className="wrap hero">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Digital exhibition</p>
              <h1 className="title">Dispatches from the Ancient Road</h1>
              <p className="subtitle">Being the collected records of the House of Nikodemos, merchants first of Therma and later of Thessalonike, concerning the coins they handled, the roads they traveled, and the kingdoms they watched rise and fall.</p>
              <p className="date">461 BCE to 42 BCE</p>
            </div>
            <div className="hero-note">
              <p className="smallcaps">Curatorial note</p>
              <p style={{ margin: "10px 0 0 0" }}>This edition stages the journals as an online museum dossier, pairing narrative entries with numismatic evidence, itinerary, and source notes.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <aside className="sidebar">
          <h2 className="smallcaps">Contents</h2>
          <nav>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className={`sidebar-link${activeSection === section.id ? " active" : ""}`}>
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="content">
          <RouteMap />

          {sections.map((section) => (
            <section key={section.id} id={section.id} className="section">
              <p className="smallcaps">{section.label}</p>
              <h2 className="section-title">{section.title}</h2>
              {section.subtitle ? <p className="section-subtitle">{section.subtitle}</p> : null}
              {section.kicker ? <p className="section-kicker">{section.kicker}</p> : null}

              {section.body ? (
                <div className="body">
                  {section.body.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`} className={index === 0 && section.id === "intro" ? "lead" : ""}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.objects ? (
                <div className="grid">
                  {section.objects.map((object) => {
                    const displayName = splitNameForDisplay(object.name);
                    return (
                      <article key={object.slug} className="card">
                        <div className="card-head">
                          <p className="smallcaps">Journal entry</p>
                          <h3 className="card-title">
                            {displayName.line1}
                            {displayName.line2 ? <span style={{ display: "block" }}>{displayName.line2}</span> : null}
                          </h3>
                          <p className="card-meta">{object.place} · {object.date}</p>
                        </div>
                        <CoinImage object={object} card={true} onZoom={openZoom} />
                        {object.imageCaption ? <p className="caption">{object.imageCaption}</p> : null}
                        <p className="smallcaps">Theme</p>
                        <p className="theme-text">{object.theme}</p>
                        <blockquote className="quote">“{object.excerpt}”</blockquote>
                        <button className="btn" onClick={() => setSelectedObject(object)} type="button">Read full entry</button>
                      </article>
                    );
                  })}
                </div>
              ) : null}

              {section.timeline ? (
                <div className="timeline">
                  {section.timeline.map((item, index) => <div key={`${section.id}-timeline-${index}`} className="timeline-item">{item}</div>)}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </main>

      {activeObject && selectedObject ? (
        <div className="backdrop" onClick={() => setSelectedObject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="smallcaps">Full journal entry</p>
                <h3 className="modal-title">{activeObject.name}</h3>
                <p className="modal-meta">{activeObject.place} · {activeObject.date}</p>
              </div>
              <button className="btn" onClick={() => setSelectedObject(null)} type="button">Close</button>
            </div>
            <div className="modal-body">
              <div className="modal-side">
                <CoinImage object={activeObject} card={false} onZoom={openZoom} />
                {activeObject.imageCaption ? <p className="caption">{activeObject.imageCaption}</p> : null}
                <p className="smallcaps">Theme</p>
                <p className="theme-text">{activeObject.theme}</p>
                {activeObject.citations ? <EntryCitations citations={activeObject.citations} /> : null}
              </div>
              <div className="modal-text">
                {splitParagraphs(activeObject.fullEntry).map((paragraph, index) => <p key={`${activeObject.slug}-${index}`}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {zoomObject ? <ZoomOverlay object={zoomObject} scale={zoomScale} setScale={setZoomScale} onClose={() => setZoomObject(null)} /> : null}
    </div>
  );
}

export default function App() {
  try {
    return <MuseumApp />;
  } catch (error) {
    console.error(error);
    return <ErrorFallback error={error} />;
  }
}
