export default function ShoppingItem({ vare, onToggle, onEndreAntall }) {
    return (
      <li className="list-item">
        <label>
          <input 
            type="checkbox" checked={vare.bought} onChange={() => onToggle(vare.id)} />
          <span style={{ textDecoration: vare.bought ? "line-through" : "none" }}>
            {vare.navn}
          </span>
        </label>
  
        <aside>
          <button onClick={() => onEndreAntall(vare.id, -1)}>-</button>
          <span>{vare.antall} stk</span>
          <button onClick={() => onEndreAntall(vare.id, 1)}>+</button>
        </aside>
      </li>
    );
  }