import React, {useState} from "react";

// Dinamik olarak sayfayi guncelleme
// useState hook fonk.u React modulden gelir, "Initial Stage" ve "function" dondurur.
// "setCount" fonk.u "count" degerini update eder.
function App() {
  const [count, setCount] = useState(0);
  /* const [red, green, blue] = [9, 132, 227];
  console.log(blue); */

function decrease(){
  setCount(count - 1);
}
function increase(){
  setCount(count + 1); 
}
// butonun "h1" icindeki numarayi update etmesini istiyorum.
// hardcoded degeri degisken olarak yaz.
return(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>
  ); 
}
export default App;
