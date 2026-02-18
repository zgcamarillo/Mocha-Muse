import { useEffect, useState } from "react"; //useEffect - run code after it renders 
const slides = [
    {
        id: 1,
        title: "Maison Library",
        subtitle: "Every plan begings with a story and ends with a dream.",
        image: "/images/librarybgd.jpg",
        titleStyle: {
          fontFamily: "",
          letterSpacing: "",
          fontSize: "",
        },
        subtitleStyle: {
          fontFamily: "",
          letterspacing: "",
          fontSize: "",
        }
    },
    {
        id: 2,
        title: "Cafe Amorette",
        subtitle: "Soft moments, sweet sips, and a life beautifully planned.",
        video: "/videos/cafeamorettehero.mp4",
        titleStyle: {
          fontFamily: "Beaming",
          letterSpacing: "2px",
          fontSize: "3rem",
        },
        subtitleStyle: {
          fontFamily: "Beaming",
          letterspacing: "1px",
          fontSize: "1.2rem",
        }
    },
    {
        id: 3,
        title: "Rooted in Teaching ",
        subtitle: "Grounded in purpose, growing with every lesson.",
        image: "/images/teachingbgd.jpg",
        titleStyle: {
          fontFamily: "TeacherJordan",
          letterSpacing: "2px",
          fontSize: "3rem",
        },
        subtitleStyle: {
          fontFamily: "TeacherJordan",
          letterSpacing: "1px",
          fontSize: "1.2rem",
        }
    },
    {
        id: 4,
        title: "Budget and Growth",
        subtitle: "Plan wisely. Spend softly. Grow beautifully.",
        image: "/images/budgetbgd.jpg",
        titleStyle: {
          fontFamily: "",
          letterSpacing: "",
          fontSize: "",
        },
        subtitleStyle: {
          fontFamily: "",
          letterspacing: "",
          fontSize: "",
        }
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
        <div key={active.id} className="hero-media fade-in">
          {active.video ? (
            <video
            className="hero-video"
            src={active.video}
            poster={active.poster}
            autoPlay
            muted
            loop
            playsInline
          />
          ) : ( <img
            src={active.image}
            alt={active.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />)}
       </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 18,
            background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
            color: "white",
          }}
        >
          <h2 style={{ margin: 0, ...active.titleStyle
           }}>{active.title}</h2>
          <p style={{ margin: "6px 0 0 0", ...active.subtitleStyle }}>{active.subtitle}</p>
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
      <section style = {{
        position: "relative",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        }}>
          <h3 style= {{
            fontSize: "30px",
            color: "#683924"
          }}>END OF SEASON SALE </h3>
        </section>
      
    </div>
  );}