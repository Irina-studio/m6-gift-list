import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [gifts, setGifts] = useState(data);

  const removeGift = (id) => {
    let newGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(newGifts);
  };

  return (
    <div>
      <div className="container">
        <h1>List of gifts {gifts.length} gifts</h1>
      </div>

      {gifts.map((element) => {
        const { id, gift, image } = element;

        return (
          <div key={id}>
            <div className="container">
              <h2>
                {id} - {gift}
              </h2>
            </div>

            <div className="container">
              <h2>
                <img src={image} alt="gift" width="300px" />
              </h2>
            </div>

            <div className="container">
              <button onClick={() => removeGift(id)}>remove</button>
            </div>
          </div>
        );
      })}

      <div className="container">
        <button onClick={() => setGifts([])}>delete all</button>
      </div>
    </div>
  );
}
export default App;
