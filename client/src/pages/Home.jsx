import { useEffect, useState } from "react"; //useEffect - run code after it renders 
const slides = [
    {
        id: 1,
        title: "Maison Library",
        subtitle: "Every plan begings with a story and ends with a dream.",
        image: "/images/librarybgd.jpg"
    },
    {
        id: 2,
        title: "Cafe Amorette",
        subtitle: "Soft moments, sweet sips, and a life beautifully planned.",
        image: "/images/girlycafebgd.jpg"
    },
    {
        id: 3,
        title: "Rooted in Teaching ",
        subtitle: "Grounded in purpose, growing with every lesson.",
        image: "/images/teachingbgd.jpg"
    },
    {
        id: 4,
        title: "Budget and Growth",
        subtitle: "Plan wisely. Spend softly. Grow beautifully.",
        image: "/images/budgetbgd.jpg"
    }
]
export default function Home() {
    const [current, setCurrent] = useState(0); //what slide am I currently showing?

    useEffect(() => {
        const timer = setInterval(() => { //reset 
            setCurrent((prev) => (prev + 1) % slides.length); // go to the nect- if we hit the end go to 0
        }, 8000); //run every 8 seconds

        return () => clearInterval(timer); //clean up!
    }, []);

    const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

    const active = slides[current]; //storing the slide 

    return (
    <div>
      <section style={{ position: "relative", overflow: "hidden", height: "80vh" }}>
        <img
          src={active.image}
          alt={active.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

       
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 18,
            background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
            color: "white",
          }}
        >
          <h2 style={{ margin: 0 
           }}>{active.title}</h2>
          <p style={{ margin: "6px 0 0 0" }}>{active.subtitle}</p>
        </div>

       
        <button
          onClick={goPrev}
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            // padding: "10px 12px",
            // borderRadius: 999,
            border: "none",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        <button
          onClick={goNext}
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            padding: "10px 12px",
            // borderRadius: 999,
            border: "none",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </section>
    </div>
  );}