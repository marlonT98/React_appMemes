import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");


  const onChangeLine1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLine2 = function (evento) {
    setLinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento) {
    alert("exporar");
    html2canvas(document.querySelector("#meme")).then(canvas => {

      var img    = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();

  });


  };

  return (

    <div className="App">

      <select onChange={onChangeImagen} >
        <option value="fire">casa en llamas</option>
        <option value="futurama">futurama</option>
        <option value="history">history channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>

      <br />

      <input onChange={onChangeLine1} type="text" placeholder="linea 1" />
      <br />
      <input onChange={onChangeLine2} type="text" placeholder="linea 2" />
      <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">

        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <img src={"/img/"+imagen+".jpg"} />

      </div>
      
    </div>
  );
}

export default App;
