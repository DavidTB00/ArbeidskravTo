import { useState } from "react"

export default function AddForm({ handleClick }) {
  const [navn, setNavn] = useState("")
  const [antall, setAntall] = useState(1)
  const [feil, setFeil] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (navn.trim() === "") {
      setFeil("Vare mangler")
      return;
    }
    setFeil("")
    handleClick(navn, antall)
    setNavn("")
    setAntall(1)
  }

  return (
    <form onSubmit={handleSubmit}>
      {feil && <p style={{ color: "orange" }}>{feil}</p>}
      <section>
        <label htmlFor="vare">Vare</label>
        <input id="vare" type="text" value={navn} onChange={(e) => setNavn(e.target.value)} placeholder="Epler.."/>
      </section>
      <section>
        <label htmlFor="antall">Antall</label>
        <input id="antall" type="number" value={antall} onChange={(e) => setAntall(Number(e.target.value))} />
      </section>
      <button type="submit">Legg til vare</button>
    </form>
  )
}