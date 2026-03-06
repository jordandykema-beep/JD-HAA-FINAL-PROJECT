import { useMemo, useState } from "react";

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
      "Compiled at Cambridge, Massachusetts, spring 2026.",
    ],
  },
  {
    id: "gen1",
    label: "The First Generation",
    title: "Nikodemos, founder of the journals",
    subtitle: "Active on the western and Aegean routes, c. 461 to 400 BCE",
    body: [
      "I am born at Therma, a harbor at the head of the gulf, where the water is never still for long and where the smell of fish, tar, wet rope, and grain hangs in the air from dawn to nightfall. My father trades olive oil, grain, timber, and whatever else can survive a journey by mule or hull. By the time I am steady on my feet, I am already following him to storehouses and quays. Therma is not yet a grand city. It is a place of movement, of loading and unloading, of waiting for a wind to change. Perhaps that is why I never mind leaving it.",
      "I am quick with numbers and slower with everything else. My father discovers this early and spares me the heaviest lifting. I keep tallies, weigh silver, count sacks, and check measures. That is where my interest in coins begins. A jar of oil stays where it is sent. A coin does not. It moves farther than any cargo and survives more owners than any ship. It carries the mark of a city into places that city itself will never see.",
      "So I begin writing them down.",
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
            url: "https://www.metmuseum.org/toah/",
          },
          {
            label: "The British Museum, collection records for Greek coinage from Sicily.",
            url: "https://www.britishmuseum.org/collection",
          },
        ],
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
            url: "https://www.britishmuseum.org/collection",
          },
          {
            label: "The Metropolitan Museum of Art, essays and collection resources on ancient Greek trade and coinage.",
            url: "https://www.metmuseum.org/toah/",
          },
        ],
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
            url: "https://topostext.org/place/373136PAkr",
          },
          {
            label: "The British Museum, Greek coin collection resources.",
            url: "https://www.britishmuseum.org/collection",
          },
        ],
      },
    ],
  },
  {
    id: "gen2",
    label: "The Second Generation",
    title: "Archelaos, son of Nikodemos",
    subtitle: "Active on the northern and eastern routes",
    body: [
      "My father could sit in a market half a day before speaking. I cannot. Perhaps that is a flaw. Still, the world is moving faster now than it did in his time. Macedon is no longer a rough northern kingdom others laugh at. Philip has seen to that. Roads are being improved, armies are always somewhere ahead of you, and trade follows power whether it admires it or not.",
      "I learn to travel in a world of courts, camps, and royal ambition. Philip reshapes the north. Alexander stretches the routes eastward beyond anything my father knew. The men who inherit that world learn quickly that power can be copied in silver even when it cannot be held intact on the ground.",
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
            url: "https://www.metmuseum.org/toah/",
          },
          {
            label: "Harvard Art Museums, collection records.",
            url: "https://harvardartmuseums.org/collections",
          },
        ],
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
            url: "https://www.britannica.com/place/Babylon-ancient-city-Mesopotamia-Asia",
          },
          {
            label: "The British Museum, collection records for Alexander coinage.",
            url: "https://www.britishmuseum.org/collection",
          },
        ],
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
            url: "https://www.britannica.com/place/Alexandria-Egypt/History",
          },
          {
            label: "Harvard Art Museums, collection records.",
            url: "https://harvardartmuseums.org/collections",
          },
        ],
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
            url: "https://sardisexpedition.org/",
          },
          {
            label: "The British Museum, collection resources on Hellenistic coinage.",
            url: "https://www.britishmuseum.org/collection",
          },
        ],
      },
    ],
  },
  {
    id: "gen3",
    label: "The Third Generation",
    title: "Nikodemos, son of Archelaos",
    subtitle: "Active on the Syrian and Thracian routes",
    body: [
      "I grow up in a world my grandfather would scarcely recognize. The old Greek city-states still stand, but the great stage now belongs to kingdoms. Egypt belongs to the Ptolemies. Syria and the east belong to Seleucus. Thrace and nearby lands answer to Lysimachos. Routes remain, but rulers change over them like weather over a harbor.",
      "My work is not to admire these arrangements but to move through them. Yet coins make admiration and suspicion difficult to avoid. A ruler's face, title, and symbols pass into every hand. Even a merchant who keeps his opinions to himself cannot fail to notice how carefully power chooses to present itself.",
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
            url: "https://harvardartmuseums.org/collections",
          },
          {
            label: "The British Museum, Hellenistic coin collection resources.",
            url: "https://www.britishmuseum.org/collection",
          },
        ],
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
            url: "https://www.britishmuseum.org/collection",
          },
          {
            label: "Harvard Art Museums, collection records.",
            url: "https://harvardartmuseums.org/collections",
          },
        ],
      },
    ],
  },
  {
    id: "gen4",
    label: "The Fourth Generation",
    title: "Phila, writing in the Roman world",
    subtitle: "c. 43 to 42 BCE",
    body: [
      "After generations of silence, I reopen the journals in a Roman world. By my time the world described by the earlier entries is gone, or nearly so. The old Greek cities remain but under larger powers. The successor kings have given way, one after another, to Rome. Roads are better in some places, taxes worse in others, and everywhere official business arrives with greater confidence than before.",
      "I keep writing because the chest should not end in silence. Rome now arranges the world in the manner Macedon once did, though with a colder habit of endurance. And when Rome begins to fracture around Caesar's death, the fracture, too, appears in silver.",
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
            url: "https://www.livius.org/articles/battle/philippi-42-bce/",
          },
          {
            label: "The British Museum, collection records for the Eid Mar denarius.",
            url: "https://www.britishmuseum.org/collection",
          },
        ],
      },
    ],
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
      "42 BCE: Brutus' Eid Mar denarius marks the Roman crisis in the bluntest silver of the exhibition.",
    ],
  },
];

function splitNameForDisplay(name) {
  const parts = name.split(". ");
  if (paif (parts.length > 1) {
    return { line1: `${parts[0]}.`, line2: parts.slice(1).join(". ") };
  }
  return { line1: name };
}

function PlaceholderCoin({ label }) {
  return (
    <div className="flex h-full w-full items-center justify-center border border-stone-700 bg-stone-950 text-center text-xs uppercase tracking-[0.14em] text-stone-500">
      {label}
    </div>
  );
}

function CoinImage({ object, card = false }) {
  const wrapperClass = card
    ? "mb-5 flex aspect-[5/3] items-center justify-center overflow-hidden border border-stone-700 bg-stone-950"
    : "flex aspect-[5/4] items-center justify-center overflow-hidden border border-stone-700 bg-stone-950";

  return (
    <figure className={wrapperClass}>
      {object.imageSrc ? (
        <img
          src={object.imageSrc}
          alt={object.imageAlt || object.name}
          className="h-full w-full object-contain"
        />
      ) : (
        <PlaceholderCoin label="Coin image" />
      )}
    </figure>
  );
}

function EntryCitations({ citations }) {
  return (
    <div className="mt-8 border-t border-stone-800 pt-5">
      <h4 className="text-xs uppercase tracking-[0.16em] text-stone-500">Sources</h4>
      <div className="mt-3 space-y-2">
        {citations.map((citation, index) => (
          <div key={citation.label} className="text-sm leading-7 text-stone-400">
            <span className="mr-2 text-stone-600">{index + 1}.</span>
            {citation.url ? (
              <a
                href={citation.url}
                target="_blank"
                rel="noreferrer"
                className="text-stone-300 underline underline-offset-4 hover:text-white"
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
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100">
      <header className="border-b border-stone-800 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-stone-500">
              Digital exhibition
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-stone-50 md:text-7xl">
              Dispatches from the Ancient Road
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Being the collected records of the House of Nikodemos, merchants first of Therma and later of Thessalonike, concerning the coins they handled, the roads they traveled, and the kingdoms they watched rise and fall.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-stone-500">
              461 BCE to 42 BCE
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-10">
        <aside className="lg:sticky lg:top-6 lg:h-fit">
          <div className="border border-stone-800 bg-[#0f0f0f] p-5">
            <h2 className="text-xs uppercase tracking-[0.16em] text-stone-500">Contents</h2>
            <nav className="mt-4 space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-l border-transparent px-0 py-2 text-sm text-stone-400 transition hover:border-stone-500 hover:pl-2 hover:text-stone-100"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="border border-stone-800 bg-[#0f0f0f] p-8"
            >
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  {section.label}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-50 md:text-4xl">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="mt-3 text-lg leading-8 text-stone-300">{section.subtitle}</p>
                )}
                {section.kicker && (
                  <p className="mt-4 text-sm uppercase tracking-[0.16em] text-stone-500">
                    {section.kicker}
                  </p>
                )}
                {section.body && (
                  <div className="mt-8 space-y-5">
                    {section.body.map((paragraph, index) => (
                      <p
                        key={`${section.id}-body-${index}`}
                        className={
                          index === 0 && section.id === "intro"
                            ? "font-serif text-2xl text-stone-100"
                            : "leading-8 text-stone-300"
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {section.objects && (
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {section.objects.map((object) => {
                    const displayName = splitNameForDisplay(object.name);
                    return (
                      <article key={object.slug} className="border border-stone-800 bg-[#111111] p-6">
                        <div className="mb-4 border-b border-stone-800 pb-4">
                          <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                            Journal entry
                          </p>
                          <h3 className="mt-2 font-serif text-2xl text-stone-50">
                            {displayName.line1}
                            {displayName.line2 && <span className="block">{displayName.line2}</span>}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-stone-400">
                            {object.place} · {object.date}
                          </p>
                        </div>

                        <CoinImage object={object} card />

                        {object.imageCaption && (
                          <p className="mb-5 text-sm leading-6 text-stone-500">
                            {object.imageCaption}
                          </p>
                        )}

                        <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Theme</p>
                        <p className="mt-2 text-sm leading-7 text-stone-300">{object.theme}</p>

                        <blockquote className="mt-6 border-l border-stone-700 pl-4 font-serif text-lg leading-8 text-stone-200">
                          “{object.excerpt}”
                        </blockquote>

                        <button
                          onClick={() => setSelectedObject(object)}
                          className="mt-8 border border-stone-700 px-4 py-3 text-sm uppercase tracking-[0.14em] text-stone-200 transition hover:bg-stone-900 hover:text-white"
                        >
                          Read full entry
                        </button>
                      </article>
                    );
                  })}
                </div>
              )}

              {section.timeline && (
                <div className="mt-10 border border-stone-800 bg-[#111111]">
                  {section.timeline.map((item, index) => (
                    <div
                      key={item}
                      className={
                        index !== section.timeline.length - 1
                          ? "border-b border-stone-800 p-5 text-stone-300"
                          : "p-5 text-stone-300"
                      }
                    >
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="max-h-[92vh] w-full max-w-5xl overflow-hidden border border-stone-700 bg-[#0c0c0c]">
            <div className="flex items-start justify-between border-b border-stone-800 px-6 py-5 md:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                  Full journal entry
                </p>
                <h3 className="mt-2 font-serif text-3xl text-stone-50">{activeObject.name}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-400">
                  {activeObject.place} · {activeObject.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedObject(null)}
                className="border border-stone-700 px-4 py-2 text-sm uppercase tracking-[0.14em] text-stone-200 transition hover:bg-stone-900"
              >
                Close
              </button>
            </div>

            <div className="grid max-h-[78vh] gap-0 md:grid-cols-[360px_minmax(0,1fr)]">
              <div className="border-b border-stone-800 bg-[#101010] p-6 md:border-b-0 md:border-r">
                <CoinImage object={activeObject} />
                {activeObject.imageCaption && (
                  <p className="mt-4 text-sm leading-6 text-stone-500">
                    {activeObject.imageCaption}
                  </p>
                )}
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-stone-500">Theme</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">{activeObject.theme}</p>
                {activeObject.citations && <EntryCitations citations={activeObject.citations} />}
              </div>

              <div className="max-h-[78vh] overflow-y-auto px-6 py-6 md:px-8">
                <div className="max-w-3xl">
                  {splitParagraphs(activeObject.fullEntry).map((paragraph, index) => (
                    <p key={`${activeObject.slug}-${index}`} className="mb-6 leading-8 text-stone-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
