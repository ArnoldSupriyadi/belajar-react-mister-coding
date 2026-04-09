import { useState, type FormEvent } from "react";
import Button from "../../buttons/Button";
import Input from "../../input/Input";
import './LatihanForm.css'
import { useEffect } from "react";

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

    const [biodatas, setBiodatas] = useState<Biodata[]>();

    const getDataBiodata = async () => {
        const data = await fetch('http://localhost:3001/biodata', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            return res.json()
        })
        .catch((err) => {});
        if(data) {
            setBiodatas(data)
        }
    }

    useEffect(() => {
        getDataBiodata()
    }, [])

    const handleSubmit = (e:FormEvent)=> {
        e.preventDefault();
        fetch('http://localhost:3001/biodata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        .then((res) => {
            // alert("Data berhasil diinputkan")
            getDataBiodata()
        })
        .catch((err) => {
            alert("Data gagal diinputkan")
        })
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

             <h2>Biodata</h2>
            <ul>
                {biodatas?.map((item, index) => (
                    <li key={index}>
                        <h3>Nama : {item.nama}</h3>
                        <h4>Email : {item.email}</h4>
                        <h4>No. HP : {item.phone}</h4>
                    </li>
                ))}
            </ul>
        </>
    )
}