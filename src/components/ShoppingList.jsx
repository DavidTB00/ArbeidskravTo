import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ varer, onToggle, onEndreAntall }) {
  return (
    <section>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {varer.map((vare) => (
          <ShoppingItem key={vare.id} vare={vare} onToggle={onToggle} onEndreAntall={onEndreAntall}/>
        ))}
      </ul>
    </section>
  )
}