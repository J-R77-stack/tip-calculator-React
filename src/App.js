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
      <SelectPercentage> Select Tip %</SelectPercentage>
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
      <input type="number" placeholder="$                             0" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <button value="5">5%</button>
      <button value="10">10%</button>
      <button value="15">15%</button>
      <button value="25">25%</button>
      <button value="50">50%</button>
      <button value="0">Custom</button>
    </div>
  );
}

function NumberOfPeople() {
  return (
    <div>
      <label>Number of People</label>
      <input type="number" placeholder="0" />
    </div>
  );
}
function TipAmount() {}
function Total() {}
function Reset() {}
