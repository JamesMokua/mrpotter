import Elixirs from "./components/Elixirs";
import { Pivot, PivotItem } from '@fluentui/react';
import Houses from "./components/Houses";
import Spells from "./components/Spells";

function App() {
  return (
    <div className="App">
      <Pivot aria-label="Harry Potter">
      <PivotItem headerText='Elixirs'>
<Elixirs/>
        </PivotItem>
        <PivotItem headerText="Houses">
          <Houses/>
        </PivotItem>
        <PivotItem headerText="Spells">
          <Spells/>
        </PivotItem>
      </Pivot>
     
    </div>
  );
}

export default App;
