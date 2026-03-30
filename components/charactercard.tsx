
import Image from "next/image";
import Link from "next/link";
const CharacterCard=({characteritems}:{characteritems:any})=>{
   
console.log("characteritems",characteritems)

    return <div className="container">
        <Link href={characteritems?.url}>
        {characteritems?.characterimage?.url && <Image src={characteritems?.characterimage?.url} alt={characteritems?.character_title} width={400} height={400}/>}
      <p>{characteritems?.character_title}</p>
      <p>{characteritems?.description}</p>
      </Link>
    </div>
}

export default CharacterCard;