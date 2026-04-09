import { FormEvent, use, useContext, useEffect, useState } from "react";
import Button from "../../buttons/Button";
import Input from "../../input/Input";
import "./BiodataForm.css";
import { Biodata } from "../../model/biodata";
import { BiodataContext } from "../../context/biodataContext";

const BiodataForm = () => {
    const defaultBiodata: Biodata = {
        name: "",
        age: 0,
        address: "",
    };

    const [form, setForm] = useState<Biodata>(defaultBiodata);
    const {setBiodata} = useContext(BiodataContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3000/biodata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then((res) => {
            alert("Post Data berhasil disimpan");
            getListBiodata();
        })
            .catch((err) => {
            alert("Post Data gagal disimpan");
        });
    };

    const getListBiodata = async () => {
        const data = await fetch("http://localhost:3000/biodata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res => {
                return res.json();
            }))
            .catch((err) => {     
                setBiodata(data);   
            });
    }

    useEffect(() => {
        getListBiodata();
    }, []);

    return (
        <>
            <form className="latihan_form" onSubmit={handleSubmit}>
                <h2>Form Biodata</h2>
                <div className="latihan_form_item">
                    <label htmlFor="">Nama</label>
                    <Input id="name" type="text" value={form?.name} onChange={(e) => setForm({...form, name: e.target.value})} 
                     style={{ marginLeft: 10 }} placeholder="Masukan Nama" required />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Email</label>
                    <Input
                        value={form?.email}
                        onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        }}
                        type="email"
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Email" />
                </div>
                <div className="latihan_form_item">
                    <label htmlFor="">Telephon</label>
                    <Input
                        value={form?.phone}
                        onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        }}
                        style={{ marginLeft: 10 }}
                        placeholder="Masukan Telephon" />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Button label="Submit" />
                </div>            
            </form>
        </>
    )
}

export default BiodataForm;


