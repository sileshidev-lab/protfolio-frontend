import NeuralNetwork from './components/NeuralNetwork'
import Navigation from './components/Navigation'
import About from './components/About'

function App() {
  return (
    <div className="page">
      <NeuralNetwork />
      <Navigation />
      <main>
        <About />
      </main>
    </div>
  )
}

export default App
