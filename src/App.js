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
  const [change, setChangeBill] = useState("");

  const tip = (bill * percentage1) / 100;

  const tip2 = (bill * change) / 100;

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onClick={setPercentage1}
        onChangeBill={setChangeBill}
        change={change}
      />
      <NumberOfPeople />
      <TipAmount tip={tip} tip2={tip2} />
      <Total bill={bill} tip={tip} tip2={tip2} />
      <Reset />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>Bill</label>
      <input
        type="text"
        placeholder=" $                                       0"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ onClick, change, onChangeBill }) {
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
          placeholder=" Custom"
          value={change}
          onChange={(e) => onChangeBill(Number(e.target.value))}
        />
      </div>
    </>
  );
}

function NumberOfPeople() {
  return (
    <div className="numberOfPeople">
      <label>Number of People</label>
      <input
        type="number"
        placeholder=" 👤                                      0"
      />
    </div>
  );
}
function TipAmount({ tip, tip2 }) {
  return (
    <div className="tipAmount">
      <h3 className="headingThree">
        Tip Amount{" "}
        <span className="amount1">
          {" "}
          ${tip}
          {tip2}
        </span>
      </h3>
      <p className="para">/ person</p>
    </div>
  );
}
function Total({ bill, tip, tip2 }) {
  return (
    <div className="totalAmount">
      <h3 className="headingThree">
        Total{" "}
        <span className="amount2">
          {" "}
          ${bill + tip} {bill + tip2}
        </span>
      </h3>
      <p className="para">/ person</p>
    </div>
  );
}
function Reset() {
  return (
    <div className="buttonBackground">
      <button className="resetButton">RESET</button>
    </div>
  );
}
