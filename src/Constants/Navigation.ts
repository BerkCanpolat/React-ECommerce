export interface SubLink {
    id: number;
    title: string;
    path: string;
}

export interface NavLink {
    id: number;
    title: string;
    path: string;
    hasDropDown?: boolean;
    subLinks?: SubLink[];
}

export interface FooterLink {
    header: string,
    links: string[]
}

export const NAVIGATE_LINKS: NavLink[] = [
    {id:1, title: "Shop", path: "/", hasDropDown: true, subLinks: [
        {id: 101, title: "Mens", path: "/brands"},
        {id: 102, title: "Women", path: "/onSale"},
        {id: 103, title: "Kids", path: "/newArrivals"},
    ]},
    {id:2, title: "On Sale", path: "/onSale"},
    {id:3, title: "New Arrivals", path: "/newArrivals"},
    {id:4, title: "Brands", path: "/brands"},
]

export const FOOTER_LINKS: FooterLink[] = [
    {
        header: "company",
        links: ["about","features","works","career"]
    },
    {
        header: "help",
        links: ["customer support","delivery details","terms & conditions","privacy policy"]
    },
    {
        header: "faq",
        links: ["account","manage deliveries","orders","payments"]
    },
    {
        header: "resources",
        links: ["free ebooks","development tutorial","how to - blog","youtube playlist"]
    },
]