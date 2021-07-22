import { useEffect, useState } from "react";

export default function Age() {
  const [list, setList] = useState();

  function handleClick() {
    const url = "https://api.agify.io?name=patrik";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setList(data.age);
      });
  }

  return (
    <div>
      <input />
      <button onClick={handleClick}>GO</button>
      <p>{list}</p>
    </div>
  );
}
