export default function App(){

  let anionuevo = new Date("2020/1/1");
  let hoy = new Date();
  
  let resta = hoy.getTime() - anionuevo.getTime();
  let faltan = Math.round(resta / (1000 * 60 * 60 * 24));

  return(
    <h1>
      {faltan} hasta hoy{" "}
      {hoy.getDate() + "/" +
      hoy.getMonth() + "/" +
      hoy.getFullYear()}
    </h1>
  );

}
