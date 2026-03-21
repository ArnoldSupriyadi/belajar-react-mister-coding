interface Biodata {
  name: string;
  umur: number;
}

export default function ContohList() {

       const biodata: Biodata[] = [
        {
            name: "Adi",
            umur: 20,
        },
        {
            name: "John",
            umur: 21,
        },
        {
            name: "Arnold",
            umur: 26,
        },
        {
            name: "Sarah",
            umur: 22,
        },
           ]

  return (
    <>
      <ul>
        {biodata.map((item, index) => (
            <li key={index}>nama : {item.name},umur : {item.umur}</li>
        ))}
      </ul>
    </>
  )
}
