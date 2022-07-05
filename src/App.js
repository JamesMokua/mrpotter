import Elixirs from "./components/Elixirs";
import { Pivot, PivotItem } from '@fluentui/react';
import Houses from "./components/Houses";
import Spells from "./components/Spells";
import Wizards from "./components/Wizards";
import Ingredients from "./components/Ingredients";

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
        <PivotItem headerText="Wizards">
          <Wizards/>
        </PivotItem>
        <PivotItem headerText="Ingredients">
          <Ingredients/>
        </PivotItem>
      </Pivot>
     
    </div>
  );
}

export default App;
