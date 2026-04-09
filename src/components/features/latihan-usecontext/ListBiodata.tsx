import { useContext } from "react";
import { BiodataContext } from "../../context/biodataContext";

const ListBiodata = () => {
const {biodatas} = useContext(BiodataContext);

    return  (
        <>
            <div>
                <ul>
                    {biodatas?.map((item, index) => {
                        return (
                            <li key={index}>
                                <p>Name: {item.name}</p>
                                <p>Age: {item.email}</p>
                                <p>Address: {item.phone}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ListBiodata;