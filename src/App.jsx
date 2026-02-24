import { useLenis } from "./hooks/useLenis";
import NeuralNetwork from "./components/NeuralNetwork";
import Hero from "./components/Hero";
import SplitReveal from "./components/SplitReveal";
import About from "./components/About";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  useLenis();

  return (
    <div className="bg-white min-h-screen">
      <NeuralNetwork />
      <Navigation />
      <main>
        <Hero />
        <SplitReveal
          topContent={{ title: "Innovation", subtitle: "Powered By" }}
          bottomContent={{ title: "Passion", subtitle: "Driven By" }}
          middleContent={{
            title: "Building The Future",
            description: "Transforming ideas into powerful digital experiences through modern technology and creative problem-solving.",
          }}
        />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
