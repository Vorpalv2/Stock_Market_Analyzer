import { useState, useEffect } from "react";

const Test = () => {
  const [data, SetData] = useState([]);

  async function fetchData() {
    const received = await fetch("/api/formsubmit");
    const response = await received.json();
    SetData(response);
  }
  useEffect(() => {
    fetchData();
    // console.log(data);
  }, []);

  interface Jokes {
    id: number;
    type: string;
    joke: string;
    punchline: string;
  }

  return (
    <>
      <h1>Test component</h1>
      {/* {data.map((element: Jokes) => {
        return (
          <div key={element?.id}>
            <h2 className="text-black">{element?.joke}</h2>
            <h2>{element.punchline}</h2>
            <h3>{element.type}</h3>
          </div>
        );
      })} */}
    </>
  );
};

export default Test;
