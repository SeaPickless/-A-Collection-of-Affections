import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ExternalLink, Heart, Menu, Volume2, VolumeX, X } from "lucide-react";

// EASY CUSTOMIZATION — keep the personal material together near the top.
const siteConfig = {
  name: "Juliana",
  author: "Denmark",
  profileImage: "images/juliana.jpg",
  backgroundMusic: "",
};

const memories = [
  { image: "images/memory1.jpg", caption: "The little moments meant the most." },
  { image: "images/memory2.jpg", caption: "A memory I will always treasure." },
  { image: "images/memory3.jpg", caption: "Somewhere in time, there was us." },
  { image: "images/memory4.jpg", caption: "A moment I wish I could preserve forever." },
  { image: "images/memory5.jpg", caption: "Even ordinary days became beautiful." },
  { image: "images/memory6.jpg", caption: "The quiet parts of a day could feel like ours." },
  { image: "images/memory7.jpg", caption: "I kept the tenderness, even after the day was gone." },
  { image: "images/memory8.jpg", caption: "There was beauty in the ordinary, because you were there." },
  { image: "images/memory9.jpg", caption: "A small scene, held carefully in memory." },
  { image: "images/memory10.jpg", caption: "Some photographs capture a feeling." },
];

const timeline = [
  { date: "2025", title: "THE BEGINNING", description: "The chapter where everything started." },
  { date: "2025", title: "GETTING CLOSER", description: "When you became more than just someone I knew." },
  { date: "2026", title: "BEAUTIFUL MEMORIES", description: "The moments I wish I could preserve forever." },
  { date: "2026", title: "THE ENDING", description: "Some chapters end before our hearts are ready." },
];

const songs = [
  { title: "A song to return to", artist: "A place in the quiet", link: "#" },
  { title: "The one that sounds like summer", artist: "For remembering", link: "#" },
  { title: "After the last light", artist: "For the road home", link: "#" },
];

const reasons = [
  'I love you because, somehow, my heart found its way to you before I even understood what was happening.',
  'I love you because you became my darling—the name my heart learned to say with tenderness.',
  'I love you because you became my partner, the person with whom I once wished to share countless tomorrows.',
  'I love you because you became my best friend, and somehow friendship with you felt like coming home.',
  'I love you because you became the person I could always count on.',
  'I love you because you became one of my favorite people in the whole world.',
  'I love you because your presence brought a warmth into my life that I still remember.',
  'I love you because you made ordinary days feel extraordinary simply by being there.',
  'I love you because you understood pieces of me that I struggled to explain.',
  'I love you because I could show you the parts of myself I usually kept hidden.',
  "I love you because around you, I never felt the need to pretend to be someone I wasn't.",
  'I love you because you made me feel seen—not merely noticed, but truly seen.',
  'I love you because you made me feel heard when I needed someone to listen.',
  'I love you because you made me feel that my thoughts and feelings mattered.',
  'I love you because your happiness became something I cared for deeply.',
  'I love you because your smile could turn even the dullest day into something beautiful.',
  'I love you because your laughter became one of the sounds my heart grew fond of.',
  'I love you because even the smallest things about you became precious to me.',
  'I love you because I remembered little details about you simply because they belonged to you.',
  "I love you because you somehow found your way into my thoughts, even when I wasn't looking for you.",
  'I love you because you became the person I wanted to tell my stories to first.',
  'I love you because good news felt sweeter when you were the one I could share it with.',
  'I love you because difficult days felt a little less difficult when I knew you were there.',
  'I love you because you could make me smile without even trying.',
  'I love you because our most random conversations became some of my favorite memories.',
  'I love you because even our quiet moments felt meaningful.',
  'I love you because I never needed an excuse to want to be near you.',
  'I love you because your presence alone was enough to make me feel at peace.',
  'I love you because I wanted to celebrate every little victory life gave you.',
  "I love you because I was proud of you, even when you couldn't see how much you had accomplished.",
  'I love you because I believed in you.',
  'I love you because I wanted you to see in yourself the beautiful things I saw in you.',
  'I love you because your dreams mattered to me simply because they were yours.',
  'I love you because I wanted to watch you reach every dream you once told me about.',
  'I love you because I wanted your future to be brighter than anything you feared.',
  'I love you because I wanted life to be gentle with your heart.',
  'I love you because your sadness mattered to me.',
  'I love you because when you hurt, some part of me wished I could take the pain away.',
  'I love you because I wanted to be your comfort when the world became too heavy.',
  'I love you because I wanted you to know that you never had to carry everything alone.',
  'I love you because you taught me that loving someone means caring about the little things.',
  'I love you because you taught me that one person can become an entire world without even realizing it.',
  'I love you because you became a part of my happiness.',
  'I love you because you became a part of my hopes.',
  'I love you because, for a time, you became part of the future I imagined.',
  'I love you because giving you my heart never felt like a mistake.',
  'I love you because loving you came naturally to me.',
  'I love you because what I felt for you was never pretend.',
  'I love you because what we shared was real to me.',
  'I love you because some of the most beautiful memories in my life have you in them.',
  'I love you because there are moments with you I would gladly live through again.',
  'I love you because you became one of the most beautiful chapters of my life.',
  'I love you because, for a while, I truly believed our chapter would never have to end.',
  'I love you because I never knew goodbye could feel so much like losing a piece of myself.',
  "I love you because I still don't completely understand why our story had to end.",
  'I love you because even though things changed, my heart cannot simply erase what we were.',
  'I love you because an ending cannot make a beautiful beginning any less beautiful.',
  'I love you because I refuse to call what we had meaningless just because it did not last forever.',
  'I love you because forever was never necessary for something to have been real.',
  'I love you because I know, with all my heart, that I loved you sincerely.',
  'I love you because I never regret choosing you.',
  'I love you because I never regret giving you a piece of my heart.',
  'I love you because even the pain taught me how deeply a heart can love.',
  'I love you because I would rather treasure our memories than let our ending make them bitter.',
  'I love you because gratitude is stronger in me than resentment.',
  'I love you because I still want to remember you with tenderness.',
  'I love you because I still care whether you are okay.',
  'I love you because I still hope you smile often.',
  'I love you because I still pray that life treats you kindly.',
  'I love you because I still want wonderful things to find their way to you.',
  'I love you because you deserve happiness, even if I am no longer the person standing beside you.',
  'I love you because I never want my love to become a weight upon your heart.',
  'I love you because I respect your choices, even when accepting them hurts.',
  'I love you because I will never believe that love gives me the right to demand anything from you.',
  'I love you because sometimes loving someone means giving them the freedom to choose their own path.',
  'I love you because I can miss you without asking you to return.',
  'I love you because I can love you without asking you to love me in the same way.',
  'I love you because I can quietly wish you well, even from a distance.',
  'I love you because your happiness still matters to me, even when I am no longer part of it.',
  'I love you because I will always be grateful that our paths crossed.',
  'I love you because you left something beautiful behind in my heart.',
  'I love you because some people pass through our lives, while others leave their names permanently written within them.',
  'I love you because your name is one my heart will always remember.',
  'I love you because certain songs still sound a little different when they remind me of you.',
  'I love you because sometimes I still catch myself wanting to tell you something before remembering that things are different now.',
  'I love you because sometimes I still miss the little world we created together.',
  'I love you because sometimes I still wonder what our story might have become had things unfolded differently.',
  'I love you because there are questions about our ending that perhaps I will never have answers to.',
  'I love you because even without those answers, I refuse to rewrite our past as something ugly.',
  'I love you because you were once my person, and that will always be a precious truth of my life.',
  'I love you because you are a daughter of God, and there is something profoundly beautiful about knowing that the person I came to love was first loved by Him. I may no longer have the place beside you that I once had, but I will always pray that God guides your steps, protects your heart, and reminds you that you are deeply and unconditionally loved.',
  'I love you because I hope you never forget how precious you are.',
  'I love you because I hope you find people who will handle your heart with gentleness.',
  'I love you because I hope you are loved with patience, sincerity, tenderness, and truth.',
  'I love you because even if one day my heart learns to let you go, it will never regret having loved you.',
  'I love you because you taught my heart what it means to love someone sincerely—not merely for what they could give me, but simply because they were precious to me.',
  'I love you because even after everything, I still find myself grateful for every moment I was allowed to spend beside you. If you ever wonder whether you truly mattered to me, I hope these hundred reasons answer that question. You mattered more than I ever knew how to put into words.',
  'I love you because perhaps I never said enough while I had the chance. Perhaps there were feelings I left unspoken and moments when I failed to show you just how deeply I cared. If I could give you one thing from my heart now, it would be the certainty that you were never ordinary to me—you were someone I loved extraordinarily.',
  'I love you because if you ever look back upon us and wonder whether I truly loved you, I hope you remember this: I did. I loved you in the quiet moments, in the laughter, in the worries, in the little things, in the hopes I had for us, and even in the silence after we ended. I hope, someday, you will understand just how much of my heart was yours.',
  'And above all, I love you because, my darling Juliana, you were never simply someone who passed through my life. You were someone I treasured, someone I trusted, someone I chose, someone I prayed for, someone I imagined a future with, and someone who became so deeply woven into my heart that even our ending could not erase what I felt. I do not know why our story ended, and perhaps I never will. But if there is one thing I wish you could truly understand after reading all one hundred of these reasons, it is this: you were deeply, genuinely, and wholeheartedly loved. I am not asking you to return, nor am I asking you to carry the weight of my feelings. I only hope that, when you think of me someday, you will know that there was once someone who looked at you and saw someone worth loving with his whole heart. Someone who cherished your smile, worried about your sadness, believed in your dreams, prayed for your future, and loved you not because you were perfect, but because you were you. You were my darling, my partner, my best friend, my favorite person, and for a beautiful chapter of my life, you were my home. And perhaps the most honest thing I can leave with you is this: I would rather you know how deeply I loved you than leave this story with you believing that you were ever anything less than precious to me. Even if you never return, even if our paths remain apart, even if one day you love someone else, I will still be grateful that I once had the privilege of loving you. And if my heart must eventually learn to let you go, I hope it does so with a smile through the tears, because it was once lucky enough to love someone like you.',
];

const meaning = [
  ["MY DARLING", "Because your name became one my heart learned to say with tenderness."],
  ["MY PARTNER", "Because for a while, I imagined tomorrow with you."],
  ["MY BEST FRIEND", "Because you were someone I could laugh with, confide in, and simply exist beside."],
  ["MY FAVORITE PERSON", "Because somehow, out of everyone, my heart kept choosing you."],
  ["THE PERSON I COULD COUNT ON", "Because your presence gave me comfort."],
  ["MY SAFE PLACE", "Because around you, I could be myself."],
  ["SOMEONE I PRAYED FOR", "Because your happiness mattered enough for me to place it in God's hands."],
  ["SOMEONE I WILL ALWAYS CHERISH", "Because some people become memories, while others become part of who we are."],
];

function SmartImage({ src, alt, className = "", placeholder = "Her photograph will live here." }: { src: string; alt: string; className?: string; placeholder?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`image-placeholder ${className}`} role="img" aria-label={placeholder}>{placeholder}</div>;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

function App() {
  const [opened, setOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [reasonIndex, setReasonIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [secretOpen, setSecretOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [revealedWonder, setRevealedWonder] = useState(false);
  const touchStart = useRef<number | null>(null);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .stagger, .wonder-lines");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("wonder-lines")) setRevealedWonder(true);
      }
    }), { threshold: .14 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [opened]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (lightbox !== null) {
        if (event.key === "Escape") setLightbox(null);
        if (event.key === "ArrowRight") setLightbox((value) => value === null ? 0 : (value + 1) % memories.length);
        if (event.key === "ArrowLeft") setLightbox((value) => value === null ? memories.length - 1 : (value - 1 + memories.length) % memories.length);
      } else if (event.key === "ArrowRight") setReasonIndex((value) => Math.min(reasons.length - 1, value + 1));
      else if (event.key === "ArrowLeft") setReasonIndex((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    if (!siteConfig.backgroundMusic) return;
    audio.current = new Audio(siteConfig.backgroundMusic);
    audio.current.loop = true;
    return () => audio.current?.pause();
  }, []);

  const setMusic = () => {
    if (!audio.current) return;
    if (musicOn) audio.current.pause();
    else void audio.current.play().catch(() => setMusicOn(false));
    setMusicOn((value) => !value);
  };
  const navigate = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const currentMemory = lightbox === null ? null : memories[lightbox];
  const reason = reasons[reasonIndex];

  return (
    <div className="site">
      {!opened && (
        <div className="opening" aria-label="Opening screen">
          <div className="opening-inner">
            <div className="opening-kicker">A private collection · volume one</div>
            <h1 className="display">A Collection of Affections<br />Dear to My Heart</h1>
            <div className="ornament" aria-hidden="true">— · —</div>
            <p className="opening-sub">For Juliana<br /><em>Some feelings are too deep to be contained in a single letter.</em></p>
            <button className="button-gold" data-testid="button-open-collection" onClick={() => setOpened(true)}>Open the collection <ArrowRight size={14} /></button>
          </div>
        </div>
      )}

      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="nav-brand button-quiet" onClick={() => navigate("collection")} aria-label="Return to the beginning" data-testid="button-nav-home"><span className="nav-seal"><Heart size={15} /></span><span>A Collection of Affections</span></button>
          <div className="nav-links">
            {["letter", "memories", "reasons", "meaning", "timeline", "songs", "final-letter"].map((id) => <button className="button-quiet" key={id} onClick={() => navigate(id)} data-testid={`button-nav-${id}`}>{id.replace("-", " ")}</button>)}
          </div>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} data-testid="button-mobile-menu">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}><nav aria-label="Mobile navigation">{["letter", "memories", "reasons", "meaning", "timeline", "songs", "final-letter"].map((id) => <button className="button-quiet" key={id} onClick={() => navigate(id)} data-testid={`button-mobile-nav-${id}`}>{id.replace("-", " ")}</button>)}</nav></div>
      </header>

      <main>
        <section id="collection" className="hero">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">For Juliana</div>
              <h2 className="display">A Hundred Reasons<br /><em>Why My Heart<br />Still Belongs to You</em> <Heart className="heart-glyph" size={28} strokeWidth={1} aria-label="heart" /></h2>
              <p className="hero-lede">A hundred words could never fully explain what you have meant to me.</p>
              <p className="hero-note">Read slowly. These words were written with a heart that still remembers.</p>
              <div className="hero-actions"><button className="button-gold" onClick={() => navigate("letter")} data-testid="button-begin-reading">Begin reading <ArrowDown size={14} /></button><span className="scroll-cue">A story in seven rooms <span>·</span></span></div>
            </div>
            <div className="portrait-wrap reveal">
              <div className="portrait-frame"><SmartImage src={siteConfig.profileImage} alt="Juliana" /><div className="portrait-caption">her photograph will live here</div></div>
            </div>
          </div>
        </section>

        <section id="letter" className="section letter-section">
          <div className="letter-paper reveal">
            <div className="eyebrow">The first page</div>
            <h2>To My Darling, Juliana</h2>
            <div className="letter-text">My darling Juliana,

There are some things that are difficult to say aloud, and some feelings that seem far too large for an ordinary message.

So I wrote them here.

Not to ask anything of you.
Not to make you feel guilty.
Not to ask you to return.

I simply wanted you to know how deeply you were loved.

You were my darling, my partner, my best friend, my favorite person, and for a beautiful chapter of my life, you were my home.

Perhaps our story ended before I was ready for it to end. Perhaps I will never fully understand why.

But one thing I know with certainty:

What I felt for you was real.</div>
            <div className="letter-sign">With all the love my heart still carries,

— Denmark</div>
          </div>
        </section>

        <section id="memories" className="section gallery-section">
          <div className="section-inner">
            <div className="section-heading reveal"><div className="eyebrow">The album</div><h2>Fragments of Us</h2><p>Some memories deserve more than to be remembered. They deserve to be preserved.</p></div>
            <div className="gallery-grid stagger">{memories.map((memory, index) => <button className="memory-card" style={{ "--tilt": `${index % 2 ? 1.3 : -1.1}deg` } as CSSProperties} key={memory.image} onClick={() => setLightbox(index)} data-testid={`button-memory-${index + 1}`}><div className="memory-image"><SmartImage src={memory.image} alt={memory.caption} placeholder="A photograph will live here." /><span className="pressed" aria-hidden="true">✦</span></div><p className="memory-caption">{memory.caption}</p></button>)}</div>
          </div>
        </section>

        <section id="reasons" className={`section reasons-section ${reasonIndex === 99 ? "climax" : ""}`}>
          <div className="section-inner reason-layout">
            <div className="reason-intro reveal"><div className="eyebrow">The centerpiece</div><h2 className="display">A Hundred Reasons Why My Heart Still Belongs to You</h2><p>One hundred reasons may seem like enough.

They are not.

But they are the closest I could come to putting my heart into words.</p>{reasonIndex === 49 && <div className="reason-halfway">Halfway through a hundred reasons…<br />And somehow, they still don't feel like enough.</div>}</div>
            <div className="reason-stage" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 45) setReasonIndex((value) => delta < 0 ? Math.min(99, value + 1) : Math.max(0, value - 1)); touchStart.current = null; }}>
              <div className="reason-card" key={reasonIndex} aria-live="polite">
                <div><div className="reason-label">Reason</div><div className="reason-number display">{String(reasonIndex + 1).padStart(2, "0")}</div><div className="reason-rule" /></div>
                <p className="reason-copy">{reason}</p><div className="reason-ornament" aria-hidden="true">— · —</div>
                <div><div className="reason-progress"><span>{reasonIndex + 1} / 100</span><div className="progress-track"><span style={{ width: `${(reasonIndex + 1)}%` }} /></div><span>{reasonIndex === 99 ? "the last page" : "keep reading"}</span></div><div className="reason-controls"><button className="button-quiet" disabled={reasonIndex === 0} onClick={() => setReasonIndex((value) => Math.max(0, value - 1))} data-testid="button-reason-previous"><ArrowLeft size={15} /> Previous</button><button className="button-quiet" disabled={reasonIndex === 99} onClick={() => setReasonIndex((value) => Math.min(99, value + 1))} data-testid="button-reason-next">Next <ArrowRight size={15} /></button></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="meaning" className="section meaning-section">
          <div className="section-inner"><div className="section-heading reveal"><div className="eyebrow">The names of love</div><h2>What You Meant to Me</h2></div><div className="meaning-grid stagger">{meaning.map(([title, copy]) => <article className="meaning-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        </section>

        <section className="section wonder-section">
          <div className="wonder-copy"><div className="section-heading reveal" style={{ marginInline: "auto" }}><div className="eyebrow">A small certainty</div><h2>If You Ever Wondered…</h2></div><div className={`wonder-lines ${revealedWonder ? "show" : ""}`}><span>You mattered.</span><span>You were never ordinary to me.</span><span>You were deeply loved.</span><span>You were appreciated.</span><span>You were cherished.</span><span>You were prayed for.</span><span>You were remembered.</span><span>You still matter to me.</span></div><div className="wonder-closer">If you ever wondered whether I truly loved you…<strong className="display">I did.</strong></div></div>
        </section>

        <section className="section god-section"><div className="section-inner god-layout"><div className="god-cross" aria-hidden="true">+</div><div className="god-copy reveal"><div className="eyebrow">A quiet prayer</div><h2 className="display">A Daughter of God</h2><p>I love you because you are a daughter of God, and there is something profoundly beautiful about knowing that the person I came to love was first loved by Him.</p><p>I may no longer have the place beside you that I once had, but I will always pray that God guides your steps, protects your heart, and reminds you that you are deeply and unconditionally loved.</p></div></div></section>

        <section className="section hope-section"><div className="section-inner"><div className="section-heading reveal"><div className="eyebrow">A blessing, without a request</div><h2>What I Hope Life Gives You</h2></div><div className="hope-grid stagger">{["I hope you are happy.","I hope you are safe.","I hope you achieve your dreams.","I hope you are surrounded by people who genuinely love you.","I hope your heart remains gentle.","I hope God guides your path.","I hope you never forget your worth.","I hope life is kind to you."].map((item) => <div className="hope-item" key={item}>{item}</div>)}</div></div></section>

        <section className="section release-section"><div className="release-copy reveal"><div className="eyebrow">No weight attached</div><h2 className="display">I Am Not Asking You to Return</h2><p>I am not writing this to ask you to come back.

I am not writing this to make you feel guilty.

I am not writing this because I expect anything from you.

I simply want you to know that what I felt was real.

I loved you.

And even if our paths remain apart, I will always be grateful that, for a beautiful chapter of my life, I got to love someone like you.</p></div></section>
        <section className="section after-section"><div className="after-copy reveal"><p>If life never brings us back to where we once were, I will still be grateful.

Because I knew you.

I loved you.

I laughed with you.

I made memories with you.

And for a while, I got to call you mine.

That will always mean something to me.</p></div></section>

        <section id="timeline" className="section timeline-section"><div className="section-inner"><div className="section-heading reveal"><div className="eyebrow">Four small chapters</div><h2>Our Little Timeline</h2></div><div className="timeline stagger">{timeline.map((item) => <article className="timeline-item" key={item.title}><span className="timeline-dot" /><div className="timeline-date">{item.date}</div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

        <section id="songs" className="section songs-section"><div className="section-inner"><div className="section-heading reveal"><div className="eyebrow">The listening room</div><h2>Songs That Remind Me of You</h2><p>No autoplay. Just a few doors left open.</p></div><div className="song-list stagger">{songs.map((song) => <article className="song-card" key={song.title}><div><h3>{song.title}</h3><p>{song.artist}</p></div><a className="song-link" href={song.link} onClick={(event) => event.preventDefault()} data-testid={`link-song-${song.title}`}>Listen <ExternalLink size={12} /></a></article>)}</div><button className="button-gold music-button" onClick={setMusic} disabled={!siteConfig.backgroundMusic} aria-label={siteConfig.backgroundMusic ? "Toggle background music" : "Background music unavailable"} data-testid="button-music">{musicOn ? <VolumeX size={15} /> : <Volume2 size={15} />} {musicOn ? "Pause music" : "Play optional music"}</button><div className="music-note">{siteConfig.backgroundMusic ? "Music is always your choice." : "No audio file is attached yet. Add one near the top of App.tsx when you are ready."}</div></div></section>

        <section className="section secret-section"><div className="section-inner"><div className="section-heading reveal" style={{ marginInline: "auto", textAlign: "center" }}><div className="eyebrow">A sealed page</div><h2>There Is Something Else I Want You to Know…</h2></div><button className="button-gold secret-button" onClick={() => setSecretOpen((value) => !value)} data-testid="button-secret-message">{secretOpen ? "Close the letter" : "Open the letter"}</button>{secretOpen && <div className="secret-letter"><p>If you have read this far, then perhaps you now understand what I could never properly say.

You were loved.

Not perfectly, because I am not perfect.

But sincerely.

Wholeheartedly.

And more deeply than I knew how to express.</p></div>}</div></section>

        <section className="quote-section"><blockquote>Some photographs capture a moment.<br />Some capture a feeling.<br />And some capture a piece of your heart.<cite>Fragments of Us</cite></blockquote></section>

        <section id="final-letter" className="section final-letter-section"><div className="final-letter reveal"><div className="eyebrow">The final letter</div><h2 className="display">If These Words Ever Reach Your Heart</h2><p>I do not know what you will feel after reading all of this.

Perhaps nothing.

Perhaps nostalgia.

Perhaps sadness.

Perhaps you will simply close this page and continue with your day.

And that is okay.

I never created this to demand a response.
I created it because there was once so much love in my heart for you that I could not bear the thought of letting it disappear without leaving a trace.

So here is that trace.

One hundred reasons.

One hundred little pieces of what you meant to me.

And even these are not enough.

Thank you for the memories.

Thank you for the laughter.

Thank you for the conversations.

Thank you for the moments.

Thank you for being part of my life.

Most of all, thank you for once being someone I could love so deeply.</p><div className="closing">With tenderness,<br />— Denmark</div></div></section>

        <section className="garden"><div className="moon" aria-hidden="true" /><div className="garden-copy"><p>Some loves become memories.</p><p>Some memories become stories.</p><p>And some people remain forever in the quietest corners of our hearts.</p><p>Thank you for being one of mine.</p><div className="garden-small">For Juliana</div><div className="garden-sign">With love, always remembered with tenderness.</div><div className="garden-ornament" aria-hidden="true">— · —</div></div>{Array.from({ length: 12 }).map((_, index) => <span className="firefly" key={index} style={{ left: `${8 + (index * 17) % 88}%`, top: `${15 + (index * 23) % 68}%`, animationDelay: `${index * .3}s` }} />)}</section>
      </main>

      <footer className="footer">A collection kept with care · For Juliana · {siteConfig.author}</footer>

      {currentMemory && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Memory photograph" onClick={() => setLightbox(null)}><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close photograph" data-testid="button-close-lightbox"><X size={18} /></button><SmartImage src={currentMemory.image} alt={currentMemory.caption} placeholder="This photograph is still waiting to be placed here." /><p className="lightbox-caption">{currentMemory.caption}</p><div className="reason-controls"><button className="button-quiet" onClick={() => setLightbox((value) => value === null ? 0 : (value - 1 + memories.length) % memories.length)} data-testid="button-lightbox-previous"><ArrowLeft size={15} /> Previous</button><span className="sans" style={{ fontSize: ".7rem", color: "#d6b9ab" }}>{(lightbox ?? 0) + 1} / {memories.length}</span><button className="button-quiet" onClick={() => setLightbox((value) => value === null ? 0 : (value + 1) % memories.length)} data-testid="button-lightbox-next">Next <ArrowRight size={15} /></button></div></div></div>}

      <div className="petals" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <span className="petal" key={index} style={{ left: `${8 + index * 10}%`, ["--fall" as string]: `${16 + index * 2}s`, ["--delay" as string]: `${-index * 2}s`, ["--drift" as string]: `${(index % 2 ? -1 : 1) * (20 + index * 8)}px` }} />)}</div>
    </div>
  );
}

export default App;