import { useState, type FormEvent } from "react";
import Button from "../../buttons/Button";
import Input from "../../input/Input";
import './LatihanForm.css'

  interface Biodata {
        nama: string;
        email: string;
        phone: string;
    }

export default function LatihanForm() {

    const defaultState:Biodata = {
        nama: "",
        email: "",
        phone: "",
    }
    const [form, setForm] = useState<Biodata>(defaultState);

    const handleSubmit = (e:FormEvent)=> {
        e.preventDefault();
        console.log('nama', form.nama)
        console.log('email', form.email)
        console.log('phone', form.phone)
        console.log('form', form)
    }
    
    return (
        <>
            <form className="latihan_form" onSubmit={handleSubmit}>
                <h2>Form Biodata</h2>
                <div className="latihan_form_item">
                    <label htmlFor="">Nama</label>
                    <Input value={form?.nama} onChange={(e)=>setForm({...form, nama: e.target.value})} style={{ marginLeft: "10" }} placeholder="masukan nama" required />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Email</label>
                    <Input value={form?.email} onChange={(e)=>setForm({...form, email: e.target.value})} type="email" style={{ marginLeft: "10" }} placeholder="masukan email" required />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">No. HP</label>
                    <Input value={form?.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} type="number" style={{ marginLeft: "10" }} placeholder="masukan no. hp" required />
                </div>
                 <div style={{ marginTop: 20 }}>
                    <Button label="Submit" />
                </div>
            </form>
        </>
    )
}