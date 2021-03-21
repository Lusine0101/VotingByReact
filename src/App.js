import './App.css';
import './ListOfLanguages/Vote';
import Vote from "./ListOfLanguages/Vote";

function App() {
  const lang = [ 'Java', 'Ruby', 'C++ ' , ' C# ']
  return (
      <>

          {lang.map((el) => (
              <Vote  key={el} langName = {el} />
              ))}
      </>

  );
}

export default App;
