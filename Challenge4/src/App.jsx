import Joke from "./components/Joke"

function App() {
  return (
    <div className="container">
      <Joke joke="I got my daughter a fridge for her birthday" 
      punchline="I can't wait to see her face light up when she 
                    opens it." />

      <Joke joke="How did the Hacker escape the Police" 
            punchline="He just ransomeware" />

      <Joke joke="My wife told me to stop acting like a flamingo." 
      punchline="I had to put my foot down."
                    />

      <Joke joke="Why are gay people always smiling?" 
      punchline="Because they can’t keep a straight face."
                    />

      <Joke 
      punchline="Because they can’t keep a straight face."
                    />

    </div>
  )
}

export default App
