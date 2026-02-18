// Data for our products page
require("dotenv").config(); //loading in var from .env 
const mongoose = require("mongoose"); //importing mongoose
const Product = require("./models/Product"); //importing my model 

const products = [ //this array is holding the data i want to seed 
    {
        title: "Hello Kitty Bouquet Planner", 
        description: "A charming bouquet of bows and blooms meets thoughtful planning. This Hello Kitty planner brings soft pink sweetness to your daily schedule with weekly layouts designed to keep life organized and adorable.",
        price: 42.50,
        image: "/images/hkplanner.jpg",
        type: ["Academic", "Weekly", "Hello Kitty"],
        collection: "Hello Kitty"
    }, // https://www.barnesandnoble.com/w/2025-2026-erin-condren-hello-kitty-blushing-bouquet-planner-erin-condren/1146287042?ean=0840114774493
    {
        title: "Hello Kitty Rainbow Planner",
        description: "Bright, cheerful, and full of nostalgic charm, this Hello Kitty rainbow planner adds joy to every plan. Designed for dreamers who love color, creativity, and staying beautifully organized.",
        price: 42.50,
        image: "/images/hkplannertwo.jpg",
        type: ["Weekly", "Academic", "Hello Kitty"],
        collection: "Hello Kitty"
    }, //https://www.barnesandnoble.com/w/7x9-erin-condren-2024-2025-academic-planner-hello-kitty-rainbow-relaxation-erin-condren/1145667658?ean=0840114765835
    {
        title: "Velours Planner",
        description: "Soft mornings, café corners, and quiet planning moments. The Velours planner brings coquette charm and cozy organization together for dreamy weekly planning.",
        price: 29.99,
        image: "/images/coquetteplanner.jpg",
        type: ["Undated", "Weekly", "Cafe Amorette"],
        collection: "Cafe Amorette"
    }, //https://thehappyplanner.com/collections/cafe-coquette-collection/products/undated-cafe-coquette-customizable-planner-classic-vertical-layout-12-months
    {
        title: "Sip & Blush Planner ",
        description: "Inspired by sweet café dates and gentle routines, this planner adds a blush-toned elegance to your schedule. Perfect for romanticizing your everyday life while staying organized.",
        price: 34.99,
        image: "/images/coquetteplannertwo.jpeg",
        type: ["Undated", "Weekly", "Cafe Amorette"],
        collection: "Cafe Amorette"
    }, //https://thehappyplanner.com/collections/happy-planners/products/undated-cafe-coquette-customizable-planner-big-horizontal-layout-12-months
    {
        title: "Hello Kitty",
        description: "Designed for everyday magic, this Hello Kitty life planner blends structure and self-care. Perfect for mapping goals, routines, and gentle reminders to slow down and enjoy the little moments.",
        price: 31.25,
        image: "/images/hkplannerthree.jpg",
        type: ["Hello Kitty", "Weekly", "Life Planning"],
        collection: "Hello Kitty"
    }, //https://www.erincondren.com/hello-kitty-healing-lifeplanner?nbt=nb%3Aadwords%3Ag%3A21736917042%3A165175716942%3A714673407814&nb_adtype=pla&nb_kwd=&nb_ti=pla-589223120814&nb_mi=111253774&nb_pc=online&nb_pi=40132&nb_ppi=589223120814&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gad_campaignid=21736917042&gbraid=0AAAAADcaQTEkmUFZhMKJBKPHscHKcDAy3&gclid=Cj0KCQiA7rDMBhCjARIsAGDBuECnPK32TTpSSRDb3aj1ufYLwHApbk-4_2kgk4dBgTt4XJvvduosbR8aAl8AEALw_wcB
    {
        title: "Earthbound Educator",
        description: "Grounded, warm, and thoughtfully designed for educators. This planner supports lesson planning, goal setting, and meaningful classroom organization with earthy, calming tones.",
        price: 46.00,
        image: "/images/teach.jpg",
        type: ["Rooted in Teaching", "Undated", "Weekly", "Academic", "For Teachers"],
        collection: "Rooted in Teaching"
    }, //https://www.erincondren.com/teach-earth-tones-homeschool-planner
    {
        title: "Affirm & Achieve",
        description: "A teacher’s companion for inspired classrooms and empowered planning. Filled with space for lessons, affirmations, and weekly organization to help educators thrive.",
        price: 46.00,
        image: "/images/teachertwo.jpg",
        type: ["Rooted in Teaching", "Weekly", "Academic", "For Teachers"],
        collection: "Rooted in Teaching"
    }, //https://www.erincondren.com/mantra-teacher-lesson-planner?attr%5B85%5D=821079
    {
        title: "Moonlit Montage",
        description: "A celestial-inspired planner for dreamers and goal setters. With cosmic tones and thoughtful layouts, this planner turns everyday scheduling into a guided journey.",
        price: 48.50,
        image: "/images/lifeplanner.jpg",
        type: ["Life Planning", "Weekly"],
        collection: ""
    }, //https://www.erincondren.com/cosmic-collage-lifeplanner
    {
        title: "The Canvas",
        description: "Your financial journey begins with intention. This budget planner helps you map spending, savings, and goals with clarity and confidence.",
        price: 35.00,
        image: "/images/budgetplanner.jpg",
        type: ["Budget & Growth", "Weekly", "Budget"],
        collection: "Budget & Growth"
    }, //https://thehappyplanner.com/collections/budget-planners/products/2026-textured-canvas-customizable-budget-planner-big-budget-layout-12-month
    {
        title: "Savvy Spending",
        description: "Smart budgeting meets simple design. Track expenses, plan savings, and build better financial habits with this clean and motivating planner.",
        price: 35.00,
        image: "/images/budgetplannertwo.jpg",
        type: ["Undated", "Budget", "Budget & Growth", "Weekly"],
        collection: "Budget & Growth"
    }, // https://thehappyplanner.com/collections/budget-planners/products/undated-savvy-budgeter-customizable-budget-planner-classic-budget-layout-12-months
    {
        title: "Sage & Clay",
        description: "Earthy tones and mindful budgeting come together in this calming financial planner. Perfect for tracking goals, expenses, and intentional growth.",
        price: 35.00,
        image: "/images/budgetplannerthree.jpg",
        type: ["Undated", "Budget", "Budget & Growth", "Weekly"],
        collection:"Budget & Growth"
    }, // https://thehappyplanner.com/collections/budget-planners/products/undated-sage-terracotta-customizable-budget-planner-classic-budget-layout-12-months
    {
        title: "The Intentional Teacher",
        description: "Created for mindful educators who plan with purpose. This planner helps structure lessons, track goals, and nurture both students and self throughout the school year.",
        price: 35.00,
        image: "/images/teacherthree.jpg",
        type: ["Rooted in Teaching", "For Teachers", "Weekly", "Academic"],
        collection: "Rooted in Teaching"
    }, //https://thehappyplanner.com/collections/teacher-planners/products/2026-teacher-notes-customizable-teacher-planner-big-teacher-layout-15-months
    {
        title: "Y2K Retro Hello Kitty Planner",
        description: "A nostalgic Y2K-inspired Hello Kitty planner with playful retro vibes. Perfect for weekly planning with a pop of personality and throwback charm.",
        price: 25.00,
        image: "/images/hkplannerfour.png",
        type: ["Weekly", "Hello Kitty"],
        collection: "Hello Kitty"
    },
    {
        title: "The Darling Desk",
        description: "Inspired by quiet library mornings and academic ambition. This planner keeps your studies, goals, and routines organized with timeless charm.",
        price: 35.00,
        image: "/images/academiaone.png",
        type: ["Weekly", "Maison Library", "Academic"],
        collection: "Maison Library"
    },
    {
        title: "Moonlit Magic",
        description: "A softly enchanting academic planner designed for late-night study sessions and big dreams. Perfect for staying organized while embracing a little magic.",
        price: 35.00,
        image: "/images/academiatwo.png",
        type: ["Weekly", "Maison Library", "Academic"],
        collection: "Maison Library"
    },
    {
        title: "The Ivory",
        description: "Clean, minimal, and refined. The Ivory planner offers a classic academic layout for focused minds and elegant organization.",
        price: 35.00,
        image: "/images/academiathree.png",
        type: ["Weekly", "Maison Library", "Academic"],
        collection: "Maison Library"
    },
    {
        title: "The Velvet",
        description: "Rich tones and soft structure make this planner a cozy companion for school or work. Designed for those who love sophistication in their daily planning.",
        price: 35.00,
        image: "/images/academiafour.png",
        type: ["Weekly", "Maison Library", "Academic"],
        collection: "Maison Library"
    },
    {
        title: "Celestial Alignment",
        description: "Align your goals, schedules, and dreams with this celestial-inspired academic planner. Perfect for students who love structure with a touch of wonder.",
        price: 35.00,
        image: "/images/academiafive.png",
        type: ["Weekly", "Maison Library", "Academic"],
        collection: "Maison Library"
    },
    {
        title: "The Cozy Cottage",
        description: "Warm, peaceful, and comforting — this planner feels like studying in a quiet cottage. Ideal for organizing academic life in a calm and cozy way.",
        price: 35.00,
        image: "/images/academiasix.png",
        type: ["Weekly", "Maison Library", "Academic"],
        collection: "Maison Library"
    }
];

async function seed() {
   await mongoose.connect(process.env.MONGO_URI); //connecting the database;

   await Product.deleteMany({});
   await Product.insertMany(products);

   console.log("Seeded Products", products.length);
   process.exit(0);
   
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});