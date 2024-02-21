import * as Contentful from "contentful";

export interface Provider {
    name: string;
    description: string;
    website: string;
    logo: string;
}

export type ProviderDTO = {
    contentTypeId: "provider",
    fields: {
        name: Contentful.EntryFields.Text;
        description: Contentful.EntryFields.Text;
        website: Contentful.EntryFields.Text;
        logo: Contentful.EntryFields.Object;
    }
}