import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {


  const onButtonClick = () => {
    const pdfUrl = "docs/port.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "TSOP_PORTFOLIO.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <button onClick={onButtonClick} className="transform rotate-90 fixed bottom-36 tracking-widest-g font-general bg-black text-white py-4 px-8 -right-24 z-30">VIEW PORTFOLIO</button>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
