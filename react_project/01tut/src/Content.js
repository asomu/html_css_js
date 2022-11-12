import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Bob", "Kekin", "Dave", "Mark"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={(e) => handleClick3(e.target)}>Click It</button>
    </main>
  );
};

export default Content;
