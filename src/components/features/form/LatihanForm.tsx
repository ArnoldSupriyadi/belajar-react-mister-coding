import { useState, type FormEvent } from "react";
import Button from "../../buttons/Button";
import Input from "../../input/Input";
import './LatihanForm.css'

export default function LatihanForm() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e:FormEvent)=> {
        e.preventDefault();
        console.log('nama', nama);
        console.log('email', email);
        console.log('phone', phone);
    }
    
    return (
        <>
            <form className="latihan_form" onSubmit={handleSubmit}>
                <h2>Form Biodata</h2>
                <div className="latihan_form_item">
                    <label htmlFor="">Nama</label>
                    <Input value={nama} onChange={(e)=>setNama(e.target.value)} style={{ marginLeft: "10" }} placeholder="masukan nama" required />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Email</label>
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" style={{ marginLeft: "10" }} placeholder="masukan email" required />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">No. HP</label>
                    <Input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" style={{ marginLeft: "10" }} placeholder="masukan no. hp" required />
                </div>
                 <div style={{ marginTop: 20 }}>
                    <Button label="Submit" />
                </div>
            </form>
        </>
    )
}