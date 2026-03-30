'use client';
import { usePathname } from "next/navigation";
import { useEffect,useState } from "react";
import { getFiremanRes } from "@/helper";
import { onEntryChange } from "@/contentstack-sdk";
import { Root as CharacterHeroType } from "./characterherotype";
import Image from "next/image";
const CharacterHeroPage = () => {
    const [characterHeroEntry, setCharacterHeroEntry] = useState<CharacterHeroType>();
    const entryUrl = usePathname();
    const fetchData = async () => {
        const entryRes = await getFiremanRes(entryUrl);
        setCharacterHeroEntry(entryRes);
    }
    useEffect(() => {
        onEntryChange(() => fetchData());
    }, []);
    return (
        <div className="container" style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
           
            <div>
            <h1>{characterHeroEntry?.character_title}</h1>
            <p>{characterHeroEntry?.description}</p>
            <p>{characterHeroEntry?.power}</p>
            <p>{characterHeroEntry?.tags}</p>
            <p>{characterHeroEntry?.title}</p>
            <p>{characterHeroEntry?.updated_at}</p>
            <p>{characterHeroEntry?.updated_by}</p>
            <p>{characterHeroEntry?.url}</p>
            </div>
            <div>
           {characterHeroEntry?.characterimage?.url && <Image src={characterHeroEntry?.characterimage?.url} alt={characterHeroEntry?.character_title||''} width={400} height={400} />}
            </div>
        </div>
    );
};
export default CharacterHeroPage;