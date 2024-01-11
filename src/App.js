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

  const tip = (bill * percentage1) / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onClick={setPercentage1}
        onChange={setPercentage1}
      />
      <NumberOfPeople />
      <TipAmount tip={tip} />
      <Total bill={bill} tip={tip} />
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
        placeholder="         0"
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
          type="number"
          placeholder="Custom"
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </>
  );
}

function NumberOfPeople() {
  return (
    <div className="numberOfPeople">
      <label>Number of People</label>
      <input className="input2" type="number" placeholder="   0" />
    </div>
  );
}
function TipAmount({ tip }) {
  return (
    <div className="tipAmount">
      <h3 className="headingThree">
        Tip Amount
        <span type="number" className="amount1">
          ${Math.floor(tip)}
        </span>
      </h3>
      <p className="para">/ person</p>
    </div>
  );
}
function Total({ bill, tip }) {
  return (
    <div className="totalAmount">
      <h3 className="headingThree">
        Total
        <span className="amount2" type="number">
          ${Math.floor(bill + tip)}
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
