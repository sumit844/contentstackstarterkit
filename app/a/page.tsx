'use client'

import { useParams, usePathname } from "next/navigation"
import { getCharacterGallaryRes } from "@/helper";
import { useEffect, useState } from "react";
import { onEntryChange } from "@/contentstack-sdk";
import CharacterCard from "@/components/charactercard";
import * as Contentstack from "contentstack"
import * as Utils from "@contentstack/utils"
const CharacterGallary = () => {
    const [Stack,setStackData]=useState<any>();
    const [entryDatanew, setEntryData] = useState<any>();
    const entry = usePathname();

    const loadData = async () => {
        const entryData = null
        setEntryData(entryData)
    }
    useEffect(() => {
        onEntryChange(() => { return loadData() })

    }, [])

    const InitializeSDK =async () => {
       const stack= Contentstack.Stack({
            api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || ''
            , delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN || '', environment: "development",region:Contentstack.Region.AZURE_NA
        })
        setStackData(stack)
        
    }
    useEffect(() => {
        InitializeSDK()
    }, [])
    const renderOption = {
        span: (node: any, next: any) => next(node.children),
      };
    useEffect(()=>{
        const getEntry=async ()=>{
            const entry=Stack?.ContentType('charact_gallary_page').Entry('blt95c4f9d5d4d90349').includeReference('character_heros');
            
            const result=await entry?.toJSON()?.fetch();
            console.log("resultresult",result)
            Utils.jsonToHTML({
                entry: result,
                paths: ['character_heros.description'],
                renderOption,
              });
            console.log("entryentry",result)
            setEntryData(result)
        }
        getEntry();
       
    },[Stack])

    if (!entryDatanew) {
        return <>Data not fetched</>
    }
    return <div className="container">
        <h1>{entryDatanew?.heading}</h1>
        <p>{entryDatanew?.description}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
            {entryDatanew?.character_heros?.map((item: any, index: number) => {
                return <CharacterCard characteritems={item}  key={index}/>
            })}
        </div>
    </div>
}

export default CharacterGallary;