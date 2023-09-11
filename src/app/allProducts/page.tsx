import React from "react";
import FetchData from "../../../sanity/fetchData";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

const page = async () => {
  const data = await FetchData();
  return (
    <div className="flex gap-4">
      {data.map((product: any, index: number) => (
        <div key={index}>
          <h1>{product.title}</h1>
          <h3>{product.category}</h3>
          <div className="max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300">
          <Image src={urlForImage(product.image).url()} alt="" width={200} height={200}/>
          </div>
          <h5>{product.description}</h5>
          <h6>{product.price}</h6>
        </div>
      ))}
    </div>
  );
};

export default page;
