import "./styles.css";
import Faltan from "./Fecha"

export default function App() {
  return (
    <div className="App">
      <p>Mi cumpleaños</p>
      <Faltan date = "2020/03/24" />
      <p>Días que han pasado</p>
      <Faltan date = "2020/01/01"/>
    </div>
  );
}
