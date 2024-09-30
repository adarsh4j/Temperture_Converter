import { useState } from 'react';
import style from '../temp/temp.module.css'
import partlyCloudImage from '/cloud.png';
import sun from '/sun.png'
 function Temp() {
 const [fahrenheit,setfahrenheit]=useState('');
 const [celsius, setcelsius]=useState('');
 const [kelvin, setkelvin]=useState('');

 const fahren=(e)=>{
  const value = parseFloat(e.target.value);
  setfahrenheit(value);
  if (!isNaN(value)) {
    const c = ((value - 32) * 5) / 9;
    setcelsius(c.toFixed(2));

    const k = ((value - 32) * 5) / 9 + 273.15;
    setkelvin(k.toFixed(2));
  }
 };

 const cels=(e)=>{
  const value = parseFloat(e.target.value);
  setcelsius(value);
  if (!isNaN(value)) {
    const f = (value * 9) / 5 + 32;
    setfahrenheit(f.toFixed(2));

    const k = value + 273.15;
    setkelvin(k.toFixed(2));
  }
 };

 const kel=(e)=>{
  const value = parseFloat(e.target.value);
  setkelvin(value);
  if (!isNaN(value)) {
    const f = (value - 273.15) * 9 / 5 + 32;
    setfahrenheit(f.toFixed(2));

    const c = value - 273.15;
    setcelsius(c.toFixed(2));
  }
 };

  return (
    <div>
       <div className={style.container}>
        <h1>Temperature Converter</h1>
    <div className={style.converter}>
    <img className={style.sun} src={sun} alt="Error" />
      <div className={style.temp} >
        <label> Fahrenheit </label>
        <input onChange={fahren} type="number" value={fahrenheit} />
        <label> Celsius </label>
        <input onChange={cels} type="number" value={celsius} />
        <label> Kelvin </label>
        <input onChange={kel} type="number" value={kelvin} />
      </div>
    </div>
    <img  className={style.cloud}src={partlyCloudImage} alt="Error in loading" />
     </div>
    </div>
  )
}
export default Temp

