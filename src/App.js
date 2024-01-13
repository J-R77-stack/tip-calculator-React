import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(1);

  const tip = (bill * percentage1) / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    document.getElementById("customInput").value = "";
    setNumOfPeople(1);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onClick={setPercentage1}
        onChange={setPercentage1}
      />
      <NumberOfPeople numOfPeople={numOfPeople} onSelect={setNumOfPeople} />
      <TipAmount tip={tip} numOfPeople={numOfPeople} />
      <Total bill={bill} tip={tip} numOfPeople={numOfPeople} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>Bill</label>
      <input
        className="input1"
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ onClick, onChange }) {
  return (
    <>
      <div>
        <label className="selectTip">Select Tip %</label>
        <button value="5" onClick={(e) => onClick(Number(e.target.value))}>
          5%
        </button>
        <button value="10" onClick={(e) => onClick(Number(e.target.value))}>
          10%
        </button>
        <button value="15" onClick={(e) => onClick(Number(e.target.value))}>
          15%
        </button>
      </div>
      <div>
        <button value="25" onClick={(e) => onClick(Number(e.target.value))}>
          25%
        </button>
        <button value="50" onClick={(e) => onClick(Number(e.target.value))}>
          50%
        </button>

        <input
          className="customButton"
          id="customInput"
          type="number"
          placeholder="Custom"
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </>
  );
}

function NumberOfPeople({ numOfPeople, onSelect }) {
  return (
    <div className="numberOfPeople">
      <label>Number of People</label>

      <select
        className="input2"
        value={numOfPeople}
        onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}
function TipAmount({ tip, numOfPeople }) {
  return (
    <div className="tipAmount">
      <h3 className="headingThree">
        Tip Amount
        <span type="number" className="amount1">
          ${Math.round(tip / numOfPeople)}
        </span>
      </h3>
      <p className="para">/ person</p>
    </div>
  );
}
function Total({ bill, tip, numOfPeople }) {
  return (
    <div className="totalAmount">
      <h3 className="headingThree">
        Total
        <span className="amount2" type="number">
          ${Math.round((bill + tip) / numOfPeople)}
        </span>
      </h3>
      <p className="para">/ person</p>
    </div>
  );
}
function Reset({ onReset }) {
  return (
    <div className="buttonBackground">
      <button className="resetButton" onClick={onReset}>
        RESET
      </button>
    </div>
  );
}
