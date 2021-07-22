import { useState } from "react";

export default function Nation() {
  const [resultOne, setResultOne] = useState();
  const [resultTwo, setResultTwo] = useState();
  const [resultThree, setResultThree] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const inputName = event.target.username.value;
    const url = `https://api.nationalize.io/?name=${inputName}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setResultOne(data.country[0]?.country_id);
        setResultTwo(data.country[1]?.country_id);
        setResultThree(data.country[2]?.country_id);
      });
  }

  return (
    <>
      <header>
        <h1>Nation</h1>
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
          <p>{resultOne}</p>
          <p>{resultTwo}</p>
          <p>{resultThree}</p>
        </div>
      </main>
    </>
  );
}
