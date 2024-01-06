export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage />
      <NumberOfPeople />
      <TipAmount />
      <Total />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label>Bill</label>
      <input
        type="number"
        placeholder="$                                       0"
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
        placeholder="👤                                      0"
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
function Total() {
  return (
    <div className="totalAmount">
      <h3 className="headingThree">
        Total <span className="amount2"> $0.00</span>
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
