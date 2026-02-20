import { useState } from 'react'
import './App.css'
import AddForm from "./components/AddForm"
import ShoppingList from "./components/ShoppingList"
  /* Så og si brukt AI til alt av kode, feilmeldinger og feilsøkt i konsollen https://gemini.google.com/share/fe7694548b26 */
export default function App() {
  const [varer, setVarer] = useState([
    { id: 1, navn: "Melk", antall: 2, bought: false },
    { id: 2, navn: "Egg", antall: 1, bought: true },
  ]);

  const toggleVare = (id) => {
    setVarer(varer.map((vare) => 
      vare.id === id ? { ...vare, bought: !vare.bought } : vare
    ));
  };

  const endreAntall = (id, endring) => {
    setVarer(varer.map((vare) => 
      vare.id === id ? { ...vare, antall: Math.max(1, vare.antall + endring) } : vare
    ));
  };

  const leggTilVare = (navn, antall) => {
    const nyVare = { id: Date.now(), navn, antall, bought: false };
    setVarer([nyVare, ...varer]);
  };

  return (
    <main>
      <header>
        <h1>Handleliste</h1>
      </header>
      <AddForm handleClick={leggTilVare} />
      <ShoppingList varer={varer} onToggle={toggleVare} onEndreAntall={endreAntall} />
    </main>
  );
}