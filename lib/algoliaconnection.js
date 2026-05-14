// helloAlgolia.mjs
import algoliasearch from "algoliasearch";

const appID = process.env.ALGOLIA_APPLICATION_ID;
const apiKey = process.env.ALGOLIA_SEARCH_API_KEY;

const client = algoliasearch(appID, apiKey);

const index = client.initIndex("testingwithprogramm");
console.log("index",index);
export default index;