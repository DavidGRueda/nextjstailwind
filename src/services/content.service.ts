'use server'

import { Provider, ProviderDTO } from "@/models/provider";
import * as contentful from "contentful";

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
})

export const fetchProviders = async () : Promise<Provider[]>=> {
  const data = await client.getEntries<ProviderDTO>({
    content_type: 'provider'
  });
  const contentfulResponse = data.items.map((item) => item.fields);
  const parsedResponse = contentfulResponse.map((item) : Provider => {
    return {
      ...item,
      logo: (item.logo as any).fields.file.url
    } as Provider;
  });

  return parsedResponse as Provider[];
}


