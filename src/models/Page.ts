export class Page {
    _id: string;
    name: string;
    permalink: string; // prefix forward slash
    priority: string;
    category: "Menu" | "Non-Menu";
    txt: string; // md_content
    parent: string;
    slug: string; // was url 
}
