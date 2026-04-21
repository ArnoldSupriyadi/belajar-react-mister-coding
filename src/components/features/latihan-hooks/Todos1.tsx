import { useEffect, useState } from "react";

const Todos1 = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h2>Todos 1</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{marginBottom:10}}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos1;
