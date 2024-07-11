const Hello = () => {
  return (
    <h1>Hello DEV</h1>
  );
}

const User = () => {
  return (
    <h1>Gabriel Costa</h1>
  );
}

const App = () => {
  // parte logica do component
  return (
    //parte visivel para o usuario
    <>
      <Hello /><User /></>
  );
}

export default App;