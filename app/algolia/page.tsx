import index from "@/lib/algoliaconnection";

const AlgoliaPage = async () => {
    await index.saveObjects([{
        objectID: "1",
        name: "test",
    },
    {
        objectID: "2",
        name: "test2",
    }
    ],
    ).wait();

    const { hits } = await index.search('test');
    return <div className="container mx-auto">
        <h1>Algolia Page</h1>
        {hits.map((hit: any) => {

            return <div key={hit.objectID}>{hit.name}</div>
        })}
    </div>;
};

export default AlgoliaPage;