import CardAvatar from "../../cards/CardAvatar";

interface Biodata {
  name: string;
  age: number;
  image: string;
}
const ContohList2 = () => {
    const biodata: Biodata[] = [
        {
            name: "Adi",
            age: 20,
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Budi",
            age: 21,
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Cici",
            age: 22,
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            name: "Arnold",
            age: 23,
            image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
    ]
    
    return (
    <>
        <ul>
            {biodata.map((item, index) => (
                <CardAvatar key={index} name={item.name} image={item.image} age={item.age}/>
            ))}
        </ul>
    </>
    )
}

export default ContohList2;