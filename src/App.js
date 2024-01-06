export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <>
      <div>
        <BillInput />
        <SelectPercentage />
        <NumberOfPeople />
        <TipAmount />
        <Total />
        <Reset />
      </div>
    </>
  );
}

function BillInput() {
  return (
    <div>
      <label>Bill</label>
      <input type="number" placeholder="$                             0" />
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
        <button className="customButton" value="0">
          Custom
        </button>
      </div>
    </>
  );
}

function NumberOfPeople() {
  return (
    <div className="numberOfPeople">
      <label>Number of People</label>
      <input type="number" placeholder="0" />
    </div>
  );
}
function TipAmount() {
  //   return (
  //     // <div>
  //     //   <h3>Tip Amount</h3>
  //     // </div>
  //   );
}
function Total() {}
function Reset() {}
