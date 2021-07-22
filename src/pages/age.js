import { useEffect, useState } from "react";

export default function Age() {
  const [result, setResult] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const inputName = event.target.username.value;
    const url = `https://api.agify.io?name=${inputName}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setResult(data.age);
      });
  }

  return (
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
  );
}
