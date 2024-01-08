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
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage />
      <NumberOfPeople />
      <TipAmount />
      <Total bill={bill} />
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

function SelectPercentage() {
  return (
    <>
      <div>
        <label className="selectTip">Select Tip %</label>
        <button value="5">5%</button>
        <button value="10">10%</button>
        <button value="15">15%</button>
      </div>
      <div>
        <button value="25">25%</button>
        <button value="50">50%</button>

        <input className="customButton" type="number" placeholder=" Custom" />
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
function TipAmount() {
  return (
    <div className="tipAmount">
      <h3 className="headingThree">
        Tip Amount <span className="amount1"> $0.00</span>
      </h3>
      <p className="para">/ person</p>
    </div>
  );
}
function Total({ bill }) {
  return (
    <div className="totalAmount">
      <h3 className="headingThree">
        Total <span className="amount2"> ${bill}</span>
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
