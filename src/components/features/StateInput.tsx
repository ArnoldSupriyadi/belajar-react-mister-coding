import { useState } from "react";
import Input from "../input/Input";

export default function StateInput() {

   const [nama, setNama] = useState<string>();

   return (
      <>
         <Input placeholder='Masukan User name' value={nama} onChange={(e) =>
            setNama(e.target.value)
         } />
         <h1>{nama}</h1>

      </>
   )
}
