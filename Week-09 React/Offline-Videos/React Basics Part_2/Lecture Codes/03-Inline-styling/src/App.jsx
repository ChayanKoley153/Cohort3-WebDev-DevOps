function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  return (
    <div style={{
      backgroundColor: "red", color: "white",
      padding: 10, borderRadius: 20
    }}>
      Hello, World!
    </div>
  );
}

export default App;
