import { useEffect, useState } from "react"; //useEffect - run code after it renders 
const slides = [
  {
    id: 1,
    theme: "library",
    title: "Maison Library",
    subtitle: "Every plan begins with a story and ends with a dream.",
    image: "/images/librarybgd.webp",
  },
  {
    id: 2,
    theme: "cafe",
    title: "Cafe Amorette",
    subtitle: "Soft moments, sweet sips, and a life beautifully planned.",
    video: "/videos/cafeamorettehero.mp4",
  },
  {
    id: 3,
    theme: "teaching",
    title: "Rooted in Teaching",
    subtitle: "Grounded in purpose, growing with every lesson.",
    image: "/images/teachingbgd.webp",
  },
  {
    id: 4,
    theme: "budget",
    title: "Budget & Growth",
    subtitle: "Plan wisely. Spend softly. Grow beautifully.",
    image: "/images/budgetbgd.webp",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  const active = slides[current];

  return (
    <main id="homePage">
      <section className="hero">
        <div key={active.id} className="heroMedia fade-in">
          {active.video ? (
            <video
              className="heroVideo"
              src={active.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img className="heroImg" src={active.image} alt={active.title} loading="eager"/>
          )}
        </div>

        <div className={`heroOverlay ${active.theme}`}>
          <p className="heroTag">Mocha Muse</p>
          <h2 className={`heroTitle ${active.theme}`}>{active.title}</h2>
          <p className={`heroSubtitle ${active.theme}`}>{active.subtitle}</p>


          <div className="heroBtns">
            <a className="heroBtnPrimary" href="/products">Shop Planners</a>
            <a className="heroBtnGhost" href="/products">Explore Collections</a>
          </div>
        </div>

        <button className="heroArrow left" onClick={goPrev} aria-label="Previous slide">
          ‹
        </button>
        <button className="heroArrow right" onClick={goNext} aria-label="Next slide">
          ›
        </button>

        <div className="heroDots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${s.title}`}
            />
          ))}
        </div>
      </section>

      <section className="saleStrip">
        <h3>END OF SEASON SALE</h3>
        <p>Limited-time deals on cozy favorites. While supplies last.</p>
        <a className="saleLink" href="/products">Shop sale →</a>
      </section>

      <section className="homeSection">
        <div className="sectionHeader">
          <h2>Shop by Collection</h2>
          <p>Pick a mood. Find your perfect planner.</p>
        </div>

        <div className="collectionsGrid">
          <a className="collectionCard" href="/products">
            <img src="/images/librarybgd.jpg" alt="Maison Library" />
            <div className="collectionText">
              <h3>Maison Library</h3>
              <p>Dark academia + quiet focus.</p>
            </div>
          </a>

          <a className="collectionCard" href="/products">
            <img src="/images/teachingbgd.jpg" alt="Rooted in Teaching" />
            <div className="collectionText">
              <h3>Rooted in Teaching</h3>
              <p>Grounded planning for educators.</p>
            </div>
          </a>

          <a className="collectionCard" href="/products">
            <img src="/images/budgetbgd.jpg" alt="Budget and Growth" />
            <div className="collectionText">
              <h3>Budget & Growth</h3>
              <p>Track spending. Grow gently.</p>
            </div>
          </a>

          <a className="collectionCard" href="/products">
            <img src="/images/hkplanner.jpg" alt="Hello Kitty" />
            <div className="collectionText">
              <h3>Hello Kitty</h3>
              <p>Sweet, nostalgic, collectible.</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
