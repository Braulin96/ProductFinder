import Questions from "components/Questions";
import Welcome from "components/Welcome";

function App() {
  return (
    <div className="App text-red-500">
      <Welcome />
      {/* <Onboarding/> */}
      <Questions/>
    </div>
  );
}

export default App;
