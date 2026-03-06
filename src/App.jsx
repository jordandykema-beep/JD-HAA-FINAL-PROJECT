import { useMemo, useState } from "react";

function splitParagraphs(text) {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function runTests() {
  console.assert(splitParagraphs("One\n\nTwo").length === 2, "splits paragraphs");
  console.assert(splitParagraphs("One\n\n  \nTwo\n\nThree").length === 3, "ignores empty breaks");
  console.assert(splitParagraphs("").length === 0, "handles empty string");
  console.assert(splitParagraphs("Single")[0] === "Single", "keeps single paragraph");
}

runTests();

const siteCss = `
  :root {
    color-scheme: dark;
    --bg: #0a0a0a;
    --panel: #111111;
    --panel-2: #0f0f0f;
    --panel-3: #101010;
    --border: #2a2a2a;
    --text: #f5f5f4;
    --muted: #a8a29e;
    --muted-2: #78716c;
  }

  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: Georgia, "Times New Roman", serif;
  }

  a { color: inherit; }

  .museum-shell {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
  }

  .museum-header {
    border-bottom: 1px solid var(--border);
  }

  .museum-wrap {
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
  }

  .museum-hero {
    padding: 64px 0;
  }

  .eyebrow {
    margin: 0 0 24px 0;
    color: var(--muted-2);
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .title {
    margin: 0;
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.05;
    font-weight: 600;
  }

  .subtitle {
    margin: 24px 0 0 0;
    max-width: 850px;
    font-size: 22px;
    line-height: 1.7;
    color: #d6d3d1;
  }

  .daterange {
    margin: 16px 0 0 0;
    color: var(--muted-2);
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .museum-main {
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
    padding: 40px 0 64px 0;
    display: grid;
    grid-template-columns: 250px minmax(0, 1fr);
    gap: 40px;
  }

  .sidebar {
    position: sticky;
    top: 24px;
    align-self: start;
    border: 1px solid var(--border);
    background: var(--panel-2);
    padding: 20px;
  }

  .sidebar-title {
    margin: 0 0 16px 0;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted-2);
  }

  .sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sidebar-link {
    display: block;
    padding: 8px 0 8px 8px;
    text-decoration: none;
    color: var(--muted);
    border-left: 1px solid transparent;
  }

  .sidebar-link:hover {
    color: var(--text);
    border-left-color: var(--muted);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .section {
    border: 1px solid var(--border);
    background: var(--panel-2);
    padding: 32px;
  }

  .section-label {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted-2);
  }

  .section-title {
    margin: 12px 0 0 0;
    font-size: clamp(32px, 4vw, 46px);
    line-height: 1.15;
    font-weight: 600;
  }

  .section-subtitle {
    margin: 12px 0 0 0;
    font-size: 22px;
    line-height: 1.7;
    color: #d6d3d1;
  }

  .section-kicker {
    margin: 16px 0 0 0;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted-2);
  }

  .section-body {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .section-body p {
    margin: 0;
    color: #d6d3d1;
    line-height: 1.9;
    font-size: 17px;
  }

  .section-body .lead {
    font-size: 32px;
    color: var(--text);
  }

  .object-grid {
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  .object-card {
    border: 1px solid var(--border);
    background: var(--panel);
    padding: 24px;
  }

  .object-header {
    border-bottom: 1px solid var(--border);
    padding-bottom: 16px;
    margin-bottom: 18px;
  }

  .object-kicker {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted-2);
  }

  .object-title {
    margin: 10px 0 0 0;
    font-size: 32px;
    line-height: 1.15;
    font-weight: 600;
  }

  .object-meta {
    margin: 12px 0 0 0;
    font-size: 15px;
    line-height: 1.7;
    color: var(--muted);
  }

  .coin-figure {
    margin: 0 0 18px 0;
    width: 100%;
    border: 1px solid var(--border);
    background: #000;
    overflow: hidden;
    position: relative;
  }

  .coin-figure.card {
    aspect-ratio: 5 / 3;
  }

  .coin-figure.modal {
    aspect-ratio: 5 / 4;
  }

  .coin-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
  }

  .coin-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--muted-2);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  .coin-caption {
    margin: 0 0 18px 0;
    font-size: 14px;
    line-height: 1.6;
    color: var(--muted-2);
  }

  .small-label {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted-2);
  }

  .theme-text {
    margin: 8px 0 0 0;
    font-size: 15px;
    line-height: 1.8;
    color: #d6d3d1;
  }

  .excerpt {
    margin: 22px 0 0 0;
    padding-left: 16px;
    border-left: 1px solid #57534e;
    font-size: 26px;
    line-height: 1.6;
    color: #f5f5f4;
  }

  .read-button,
  .close-button {
    margin-top: 26px;
    background: transparent;
    color: var(--text);
    border: 1px solid #57534e;
    padding: 12px 16px;
    font-size: 13px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: pointer;
  }

  .read-button:hover,
  .close-button:hover {
    background: #1c1917;
  }

  .timeline {
    margin-top: 36px;
    border: 1px solid var(--border);
    background: var(--panel);
  }

  .timeline-item {
    padding: 18px 20px;
    color: #d6d3d1;
    line-height: 1.8;
  }

  .timeline-item + .timeline-item {
    border-top: 1px solid var(--border);
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 50;
  }

  .modal {
    width: min(1080px, 100%);
    max-height: 92vh;
    overflow: hidden;
    border: 1px solid #44403c;
    background: #0c0c0c;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    border-bottom: 1px solid var(--border);
    padding: 20px 24px;
  }

  .modal-title {
    margin: 10px 0 0 0;
    font-size: 38px;
    line-height: 1.15;
    font-weight: 600;
  }

  .modal-meta {
    margin: 10px 0 0 0;
    font-size: 15px;
    line-height: 1.7;
    color: var(--muted);
  }

  .modal-body {
    display: grid;
    grid-template-columns: 360px minmax(0, 1fr);
    max-height: calc(92vh - 110px);
  }

  .modal-side {
    padding: 24px;
    border-right: 1px solid var(--border);
    background: var(--panel-3);
    overflow-y: auto;
  }

  .modal-text {
    padding: 24px 28px;
    overflow-y: auto;
  }

  .modal-text p {
    margin: 0 0 24px 0;
    color: #d6d3d1;
    line-height: 1.9;
    font-size: 17px;
  }

  .sources {
    margin-top: 28px;
    border-top: 1px solid var(--border);
    padding-top: 18px;
  }

  .sources-title {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted-2);
  }

  .source-item {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.8;
    color: var(--muted);
  }

  .source-link {
    color: #d6d3d1;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  @media (max-width: 960px) {
    .museum-main {
      grid-template-columns: 1fr;
    }

    .sidebar {
      position: static;
    }

    .object-grid {
      grid-template-columns: 1fr;
    }

    .modal-body {
      grid-template-columns: 1fr;
    }

    .modal-side {
      border-right: none;
      border-bottom: 1px solid var(--border);
    }
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
      {
        slug: "naxos",
        name: "I. The Tetradrachm of Naxos",
        date: "c. 461 BCE",
        place: "Naxos, Sicily",
        theme: "Dionysus, wine, and civic identity",
        excerpt:
          "The coin does not pretend. Athens puts wisdom on its silver. Other cities put force, lineage, or divine favor. Naxos puts wine.",
        imageSrc: "/coins/Naxos.jpg",
        imageAlt: "Silver tetradrachm of Naxos showing Dionysus and Silenus.",
        imageCaption:
          "Silver tetradrachm of Naxos, c. 461 BCE. Dionysus on the obverse and Silenus on the reverse.",
        fullEntry: `I am twenty-two when I first run the western route without my father. I leave Corinth on a grain ship bound for Sicily, carrying painted pottery for an Athenian merchant who says he is now too old for sea crossings. By the third day I decide he is a wise man. The crossing is rough, and I spend more of it retching than standing. When we finally sight the Sicilian coast, the land rises out of the haze like a promise made to someone else.

Naxos is lively in a way that makes a man forget his stomach. It is a Greek city, but it does not feel like the mainland. The light is harder, the hills fuller, the market louder. I hear several dialects at once, and everywhere there is grain, wine, fruit, fish, resin, wool, and bargaining. Sicily has a scale to it that surprises me. The island's Greek cities are wealthy, and they seem to know it.

There I first hold the silver tetradrachm of Naxos. On one side is Dionysus, with a heavy beard and an ivy wreath, his face solemn in a way I do not expect from the god of wine. On the other is Silenus, seated and easy in his own skin, lifting a drinking cup as though no one in the world has ever hurried him.

What I like most is that the coin does not pretend. Athens puts wisdom on its silver. Other cities put force, lineage, or divine favor. Naxos puts wine. It knows what it is selling. In that market, with casks rolling in from the slopes and men tasting before they buy, the message is plain enough.

I buy two amphoras, a sack of almonds, and keep one tetradrachm aside for myself. Not because it is the most valuable coin I handle that spring, but because Silenus seems like the right companion for a long return voyage.`,
        citations: [
          {
            label: "The Metropolitan Museum of Art, Heilbrunn Timeline of Art History, resources on ancient Sicily and Greek coinage.",
            url: "https://www.metmuseum.org/toah/"
          },
          {
            label: "The British Museum, collection records for Greek coinage from Sicily.",
            url: "https://www.britishmuseum.org/collection"
          }
        ]
      },
      {
        slug: "athens",
        name: "II. The Tetradrachm of Athens",
        date: "c. 440 BCE",
        place: "Athens",
        theme: "Silver standard, trust, and circulation",
        excerpt:
          "The city needs no speech. The type has remained remarkably consistent, and that consistency is its own argument.",
        imageSrc: "/coins/Athens-Owl.jpg",
        imageAlt:
          "Athenian owl tetradrachm with Athena on the obverse and owl on the reverse.",
        imageCaption:
          "Athenian owl tetradrachm, c. 440 BCE. Athena on the obverse and owl on the reverse.",
        fullEntry: `Every merchant in the Greek world ends up in Athens sooner or later. Even if he tries not to, Athenian silver finds him first. By the time I arrive at Piraeus, I have spent years hearing prices quoted in owls, debts settled in owls, freight measured against owls.

Piraeus itself is overwhelming, all shouting, ropes, hulls, slaves hauling goods, foreigners looking offended, and local officials looking superior. Athens draws wealth not only from trade, but from its silver. The Laurion mines have fed the city's coinage and helped make the owl trusted far beyond Attica.

The tetradrachm itself is already famous. Athena on the obverse, frontal eye and severe profile, helmet set firmly on the brow. On the reverse the owl stands alert beside the olive sprig and crescent. The inscription is short. The city needs no speech. The type has remained remarkably consistent, and that consistency is its own argument.

I spend six weeks in Athens and leave richer than I arrived, though not enough to enjoy the city as Athenians enjoy themselves. Still, I leave with respect. A city that can send out silver so reliable that strangers trust it by habit has done something most rulers fail to do with armies.`,
        citations: [
          {
            label: "The British Museum, collection records for Athenian owl tetradrachms.",
            url: "https://www.britishmuseum.org/collection"
          },
          {
            label: "The Metropolitan Museum of Art, essays and collection resources on ancient Greek trade and coinage.",
            url: "https://www.metmuseum.org/toah/"
          }
        ]
      },
      {
        slug: "akragas",
        name: "III. The Dekadrachm of Akragas",
        date: "c. 409 BCE",
        place: "Akragas, Sicily",
        theme: "Predation, wealth, and fragility",
        excerpt:
          "I stand in a city that imagines itself the eagle and not the hare.",
        imageSrc: "/coins/Akragas.jpg",
        imageAlt:
          "Silver dekadrachm of Akragas with quadriga and eagle imagery.",
        imageCaption:
          "Silver dekadrachm of Akragas, c. 409 BCE. Quadriga and eagle imagery.",
        fullEntry: `When I return to Sicily years later, the island still looks rich, but the richness has turned anxious. Men are buying and selling with one ear turned west. News travels faster than grain when war is close. Selinus has fallen. Himera has fallen. Carthage is across the sea again.

Akragas is as beautiful as any city I have seen. The temples stand along the ridge in such number and size that a stranger might think stone itself grows more readily there than wheat. The olive groves are broad, the streets wide, and the people carry themselves with the ease of long wealth.

The coin I am shown there is a dekadrachm, an impressive thing before one even considers the engraving. On one side an eagle has seized a hare. On the other, two eagles stand over the body of another, with the city's familiar crab below. The message could hardly be plainer. Here is appetite, force, and mastery made beautiful.

I stand in a city that imagines itself the eagle and not the hare. Still, the market that week is full of hurried sales, and hurried sales are a form of truth. I leave before the siege begins.`,
        citations: [
          {
            label: "ToposText, entry on Akragas.",
            url: "https://topostext.org/place/373136PAkr"
          },
          {
            label: "The British Museum, Greek coin collection resources.",
            url: "https://www.britishmuseum.org/collection"
          }
        ]
      }
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
      {
        slug: "philip",
        name: "IV. The Tetradrachm of Philip II",
        date: "c. 342 BCE",
        place: "Pella",
        theme: "Kingship and prestige",
        excerpt:
          "Military success frightens people, but athletic victory flatters them.",
        imageSrc: "/coins/Philip-II.jpg",
        imageAlt: "Silver tetradrachm of Philip II with Zeus and horseman.",
        imageCaption:
          "Silver tetradrachm of Philip II, c. 342 BCE. Zeus on the obverse and horseman on the reverse.",
        fullEntry: `By the time I trade regularly on the Macedonian roads, Philip has already changed the balance of the Greek world. Pella is full of the sound of ambition: horses, armor, orderlies, builders, officials, petitioners, young men trying to be noticed by older ones.

Philip's silver tetradrachm comes into my hand on a timber run. Zeus occupies the obverse, composed and secure. On the reverse rides the youthful horseman, tied to Philip's equestrian victories and the prestige that comes with Olympic success. It is a clever choice. Military success frightens people, but athletic victory flatters them.

What strikes me most is the restraint. Philip does not place his own face on the coin. Zeus is still Zeus, and Philip is still below him, however much the king may benefit from standing nearby.`,
        citations: [
          {
            label: "The Metropolitan Museum of Art, collection resources on Philip II coinage.",
            url: "https://www.metmuseum.org/toah/"
          },
          {
            label: "Harvard Art Museums, collection records.",
            url: "https://harvardartmuseums.org/collections"
          }
        ]
      },
      {
        slug: "alexander-babylon",
        name: "V. The Tetradrachm of Alexander III",
        date: "c. 325 BCE",
        place: "Babylon",
        theme: "Empire through repetition",
        excerpt: "One coin is persuasion. Ten thousand are atmosphere.",
        imageSrc: "/coins/Alexander-III.jpg",
        imageAlt: "Silver tetradrachm of Alexander III with Herakles and Zeus.",
        imageCaption:
          "Silver tetradrachm of Alexander III, c. 325 BCE. Herakles on the obverse and Zeus on the reverse.",
        fullEntry: `When the roads east become busy, a merchant either follows them or resigns himself to hearing profits discussed by other men. So I go east.

The journey to Babylon is long. Then Babylon appears, and the effect reverses. The city is vast, old, and built on a scale meant to teach humility. In the market I receive the silver tetradrachm of Alexander. Herakles in the lion skin on one side, Zeus enthroned on the other, the king's name running down the field.

People speak of the head as Herakles, and that is true enough. Yet no one handling these coins fails to understand the nearness of the comparison. Herakles gives Alexander heroic force, Zeus gives him sanction, and the coin repeats the pairing so endlessly that it begins to feel less like flattery than order itself.

That is what impresses me most. Not the beauty of a single specimen, though it is handsome enough, but the multiplication. One coin is persuasion. Ten thousand are atmosphere.`,
        citations: [
          {
            label: "Encyclopaedia Britannica, entry on Babylon.",
            url: "https://www.britannica.com/place/Babylon-ancient-city-Mesopotamia-Asia"
          },
          {
            label: "The British Museum, collection records for Alexander coinage.",
            url: "https://www.britishmuseum.org/collection"
          }
        ]
      },
      {
        slug: "ptolemy",
        name: "VI. The Tetradrachm of Ptolemy as Satrap",
        date: "c. 318 BCE",
        place: "Alexandria",
        theme: "Inheritance and legitimacy",
        excerpt:
          "Dead men are useful in politics, especially very great dead men.",
        imageSrc: "/coins/Ptolemy.jpg",
        imageAlt: "Silver tetradrachm of Ptolemy as satrap with Alexander portrait and Athena reverse.",
        imageCaption:
          "Silver tetradrachm of Ptolemy as satrap, c. 318 BCE. Alexander portrait on the obverse and Athena on the reverse.",
        fullEntry: `Alexander dies, and the empire begins at once to harden into pieces. Ptolemy takes Egypt, which any sensible merchant recognizes as a clever choice.

Alexandria is new when I arrive, and new cities always feel a little theatrical. Yet this one is more than theater. The coin Ptolemy issues in these years is careful. Alexander's head remains, now in the elephant-scalp headdress, and Athena strides on the reverse.

It is not simply memorial coinage. It is interpretation. Ptolemy is not yet saying openly that he is king in his own right. He is saying something more skillful: that he is the proper keeper of what Alexander made. I admire the intelligence of it and mistrust it for the same reason. Dead men are useful in politics, especially very great dead men.`,
        citations: [
          {
            label: "Encyclopaedia Britannica, history of Alexandria.",
            url: "https://www.britannica.com/place/Alexandria-Egypt/History"
          },
          {
            label: "Harvard Art Museums, collection records.",
            url: "https://harvardartmuseums.org/collections"
          }
        ]
      },
      {
        slug: "sardis",
        name: "VII. The Posthumous Alexander Tetradrachm",
        date: "c. 317 BCE",
        place: "Sardis",
        theme: "Authority after death",
        excerpt:
          "The dead can continue ruling a market long after they have ceased ruling anything else.",
        imageSrc: "/coins/Alexander-Sardis.jpg",
        imageAlt: "Posthumous Alexander tetradrachm from Sardis.",
        imageCaption:
          "Posthumous Alexander tetradrachm from Sardis, c. 317 BCE.",
        fullEntry: `I come through Sardis on the return north. Sardis is old money. Men there speak of coinage as though it were family history.

What unsettles me is not the silver itself, which is sound, but the fact that the coin still names Alexander as though nothing has changed. He is dead. His generals are at war. Yet the dead king's silver goes on speaking in the present tense.

A coin does not care whether the body behind its claim still breathes. If the type remains trusted, the argument remains alive. The dead can continue ruling a market long after they have ceased ruling anything else.`,
        citations: [
          {
            label: "Sardis Expedition, history and chronology resources.",
            url: "https://sardisexpedition.org/"
          },
          {
            label: "The British Museum, collection resources on Hellenistic coinage.",
            url: "https://www.britishmuseum.org/collection"
          }
        ]
      }
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
      {
        slug: "seleucus",
        name: "VIII. The Tetradrachm of Seleucus I",
        date: "c. 300 BCE",
        place: "Antioch on the Orontes",
        theme: "Continuation as strategy",
        excerpt:
          "Why teach people a new language of power when the old one still spends?",
        imageSrc: "/coins/Seleucus-I.jpg",
        imageAlt: "Silver tetradrachm of Seleucus I.",
        imageCaption: "Silver tetradrachm of Seleucus I, c. 300 BCE.",
        fullEntry: `Antioch is new enough that one can still see intention in its streets. Older cities grow crookedly, as men do. Antioch looks measured.

The coin of Seleucus I is familiar and altered at once. Herakles remains. Zeus remains. The old visual grammar of Alexander's world has been kept, and only the name is changed. It is a shrewd act. Why teach people a new language of power when the old one still spends?

I do not despise the coin for this. A merchant has little right to despise effective continuity. Still, I cannot help feeling that I am watching inheritance become imitation, and imitation become rule.`,
        citations: [
          {
            label: "Harvard Art Museums, collection records.",
            url: "https://harvardartmuseums.org/collections"
          },
          {
            label: "The British Museum, Hellenistic coin collection resources.",
            url: "https://www.britishmuseum.org/collection"
          }
        ]
      },
      {
        slug: "lysimachos",
        name: "IX. The Tetradrachm of Lysimachos",
        date: "c. 285 BCE",
        place: "Lysimacheia",
        theme: "Memory made divine",
        excerpt: "He is still the most persuasive face available to power.",
        imageSrc: "/coins/Lysimachos.jpg",
        imageAlt: "Silver tetradrachm of Lysimachos with Alexander portrait and Athena reverse.",
        imageCaption:
          "Silver tetradrachm of Lysimachos, c. 285 BCE. Alexander portrait on the obverse and Athena on the reverse.",
        fullEntry: `I travel north again late in life and reach Lysimacheia. The place matters because geography has decided that it must.

His silver tetradrachm is one of the strangest and finest coins I ever handle. On the obverse is Alexander, but not simply as a remembered king. He is diademed and bears the horn of Ammon, now unmistakably divine. Athena sits on the reverse, while the legend names Lysimachos.

What astonishes me is the date of it all. Alexander has been dead for decades, yet he is still the most persuasive face available to power. Lysimachos must still borrow authority from the dead youth he once followed.`,
        citations: [
          {
            label: "The British Museum, collection records for Lysimachos coinage.",
            url: "https://www.britishmuseum.org/collection"
          },
          {
            label: "Harvard Art Museums, collection records.",
            url: "https://harvardartmuseums.org/collections"
          }
        ]
      }
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
      {
        slug: "brutus",
        name: "X. The Denarius of Brutus, Eid Mar",
        date: "42 BCE",
        place: "Macedonia",
        theme: "Violence rendered in silver",
        excerpt:
          "When power grows fully impatient, it ceases even to clothe itself properly.",
        imageSrc: "/coins/Brutus.jpg",
        imageAlt: "Brutus Eid Mar denarius with portrait and daggers.",
        imageCaption:
          "Denarius of Brutus, Eid Mar, 42 BCE. Brutus portrait on the obverse and daggers with pileus on the reverse.",
        fullEntry: `The coin comes to me in Thessalonike by way of a Roman trader who wishes, above all, not to keep it. That alone tells me much. By the time it reaches my hands, Brutus and Cassius have been defeated near Philippi.

I have held coins of cities, kings, satraps, and heirs. This is different. This coin does not imply. It declares. On the obverse is Brutus himself. On the reverse, two daggers flank the pileus, the cap of liberty, and beneath them is the inscription EID MAR. The date of Caesar's murder is struck into the silver as a boast.

That is what makes the piece extraordinary. Greek kings spent generations learning how to edge closer to divinity without saying too much too plainly. Brutus discards all delicacy. He turns assassination into program, into emblem, into circulating silver.

I set the coin beside the old Naxos tetradrachm on my table. Silenus lifts his cup. Brutus raises his murder into silver. Between them lies all the distance from the old Greek world to Rome. If the earlier writers are right, coins outlast the men who strike them. I think, tonight, that they also outlast the excuses.`,
        citations: [
          {
            label: "Livius, Philippi (42 BCE).",
            url: "https://www.livius.org/articles/battle/philippi-42-bce/"
          },
          {
            label: "The British Museum, collection records for the Eid Mar denarius.",
            url: "https://www.britishmuseum.org/collection"
          }
        ]
      }
    ]
  },
  {
    id: "timeline",
    label: "Chronology",
    title: "Chronology of the Journals",
    subtitle: "From Greek city coinage to Roman political silver",
    timeline: [
      "c. 461 BCE: Nikodemos encounters the tetradrachm of Naxos in Sicily.",
      "c. 440 BCE: Athens and the owl dominate Mediterranean exchange.",
      "c. 409 BCE: Akragas issues monumental silver under the shadow of war.",
      "c. 342 BCE: Philip II's Macedon rises through force and prestige.",
      "c. 325 BCE: Alexander's imperial silver circulates in Babylon.",
      "c. 318 to 317 BCE: The successors preserve Alexander while remaking his image.",
      "c. 300 to 285 BCE: Seleucus and Lysimachos assert kingship through inherited visual forms.",
      "42 BCE: Brutus' Eid Mar denarius marks the Roman crisis in the bluntest silver of the exhibition."
    ]
  }
];

function splitNameForDisplay(name) {
  const parts = name.split(". ");
  if (parts.length > 1) {
    return { line1: `${parts[0]}.`, line2: parts.slice(1).join(". ") };
  }
  return { line1: name };
}

function PlaceholderCoin({ label }) {
  return (
    <div className="coin-placeholder">{label}</div>
  );
}

function CoinImage({ object, card = false }) {
  const figureClass = card ? "coin-figure card" : "coin-figure modal";

  return (
    <figure className={figureClass}>
      {object.imageSrc ? (
        <img
          src={object.imageSrc}
          alt={object.imageAlt || object.name}
          className="coin-img"
        />
      ) : (
        <PlaceholderCoin label="Coin image" />
      )}
    </figure>
  );
}

function EntryCitations({ citations }) {
  return (
    <div className="sources">
      <h4 className="sources-title">Sources</h4>
      <div>
        {citations.map((citation, index) => (
          <div key={citation.label} className="source-item">
            <span>{index + 1}. </span>
            {citation.url ? (
              <a
                href={citation.url}
                target="_blank"
                rel="noreferrer"
                className="source-link"
              >
                {citation.label}
              </a>
            ) : (
              <span>{citation.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selectedObject, setSelectedObject] = useState(null);

  const allObjects = useMemo(
    () => sections.flatMap((section) => section.objects || []),
    []
  );

  const activeObject = selectedObject || allObjects[0] || null;

  return (
    <div className="museum-shell">
      <style>{siteCss}</style>

      <header className="museum-header">
        <div className="museum-wrap museum-hero">
          <p className="eyebrow">Digital exhibition</p>
          <h1 className="title">Dispatches from the Ancient Road</h1>
          <p className="subtitle">
            Being the collected records of the House of Nikodemos, merchants first of Therma and later of Thessalonike, concerning the coins they handled, the roads they traveled, and the kingdoms they watched rise and fall.
          </p>
          <p className="daterange">461 BCE to 42 BCE</p>
        </div>
      </header>

      <main className="museum-main">
        <aside className="sidebar">
          <h2 className="sidebar-title">Contents</h2>
          <nav>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="sidebar-link"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="content">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="section">
              <div>
                <p className="section-label">{section.label}</p>
                <h2 className="section-title">{section.title}</h2>
                {section.subtitle && (
                  <p className="section-subtitle">{section.subtitle}</p>
                )}
                {section.kicker && (
                  <p className="section-kicker">{section.kicker}</p>
                )}
                {section.body && (
                  <div className="section-body">
                    {section.body.map((paragraph, index) => (
                      <p
                        key={`${section.id}-body-${index}`}
                        className={index === 0 && section.id === "intro" ? "lead" : ""}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {section.objects && (
                <div className="object-grid">
                  {section.objects.map((object) => {
                    const displayName = splitNameForDisplay(object.name);
                    return (
                      <article key={object.slug} className="object-card">
                        <div className="object-header">
                          <p className="object-kicker">Journal entry</p>
                          <h3 className="object-title">
                            {displayName.line1}
                            {displayName.line2 && <span style={{ display: "block" }}>{displayName.line2}</span>}
                          </h3>
                          <p className="object-meta">
                            {object.place} · {object.date}
                          </p>
                        </div>

                        <CoinImage object={object} card />

                        {object.imageCaption && (
                          <p className="coin-caption">{object.imageCaption}</p>
                        )}

                        <p className="small-label">Theme</p>
                        <p className="theme-text">{object.theme}</p>

                        <blockquote className="excerpt">“{object.excerpt}”</blockquote>

                        <button
                          onClick={() => setSelectedObject(object)}
                          className="read-button"
                        >
                          Read full entry
                        </button>
                      </article>
                    );
                  })}
                </div>
              )}

              {section.timeline && (
                <div className="timeline">
                  {section.timeline.map((item) => (
                    <div key={item} className="timeline-item">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>

      {activeObject && selectedObject && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-header">
              <div>
                <p className="object-kicker">Full journal entry</p>
                <h3 className="modal-title">{activeObject.name}</h3>
                <p className="modal-meta">
                  {activeObject.place} · {activeObject.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedObject(null)}
                className="close-button"
              >
                Close
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-side">
                <CoinImage object={activeObject} />
                {activeObject.imageCaption && (
                  <p className="coin-caption">{activeObject.imageCaption}</p>
                )}
                <p className="small-label">Theme</p>
                <p className="theme-text">{activeObject.theme}</p>
                {activeObject.citations && <EntryCitations citations={activeObject.citations} />}
              </div>

              <div className="modal-text">
                {splitParagraphs(activeObject.fullEntry).map((paragraph, index) => (
                  <p key={`${activeObject.slug}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
