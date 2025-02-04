
const App = () => {
  return (
    <div>
      {[
        <Todo key={1} title={"Eat food"} done={false} />,
        <Todo key={2} title={"Go to gym"} done={false} />
      ]}
    </div>
  );
}

function Todo({ title, done }) {
  return <div>
      {title} - {done ? "Done" : "Not done"}
  </div>
}

export default App;
