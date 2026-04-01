import './App.css'
import LatihanForm from './components/features/form/LatihanForm';
import LatihanForm2 from './components/features/form/LatihanForm2';
import Input from './components/input/Input';
import { useState, useEffect } from 'react';



function App()  {
  const [nama, setNama] = useState<string>("");

  useEffect(() => {
    console.log('name :', nama)
  }, [nama])

  return (
  
    <div className='App'>
    <Input value={nama} placeholder='Masukan Nama Kamu' onChange={(e)=>
    {
        setNama(e.target.value)
    }} />
    <p>{nama}</p>
    <button onClick={() => setNama("Jamet")}>Test UseEffect</button>
        {/* <ContohList /> */}
        {/* <ContohList2 /> */}
        {/* <LatihanForm2 /> */}
    </div>
  );
}

export default App
