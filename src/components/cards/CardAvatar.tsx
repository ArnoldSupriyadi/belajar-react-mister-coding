import Avatar from "../avatar/Avatar";
import "../avatar/Avatar.css"

interface Props {
  name?: string;
  age?: number;
  image?: string;
}

const CardAvatar = ({ name, age, image} : Props) => {
  return (
    <>
        <div style={{ display:"flex", marginBottom:10, alignItems:"center" }}>
            <div>
                <Avatar label={name} url={image} size="sm"/>
            </div>
            <div style={{ marginLeft:10 }}>
                <h3 style={{ padding:0, margin:0, }}>{name}</h3>
                <h4 style={{ padding:0, margin:0, }}>Umur : {age}</h4>
            </div>
        </div>
    </>
  )
} 

export default CardAvatar;