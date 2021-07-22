import { useState } from "react";

export default function Gender() {
  const [result, setResult] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const inputName = event.target.username.value;
    const url = `https://api.genderize.io/?name=${inputName}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setResult(data.gender);
      });
  }

  return (
    <>
      <header>
        <h1>Gender</h1>
      </header>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="What's your Name?"
              name="username"
              id="username"
            />
            <button>GO</button>
          </form>
          <p>{result}</p>
        </div>
      </main>
    </>
  );
}
