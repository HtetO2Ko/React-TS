import Todos from "./components/Todos";

const DUMMY_ITEMS = [
  "Learning React",
  "Learning TypeScript",
  "Create New Project"
]

function App() {
  return (
    <div>
      <Todos items={DUMMY_ITEMS} />
    </div>
  );
}

export default App;
