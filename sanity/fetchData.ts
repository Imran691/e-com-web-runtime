//we will use this file to fetch data from Sanity

import { client } from "./lib/client"


const FetchData = async () => {
    const data = await client.fetch('*[_type == "products"]')
  return data
}

export default FetchData