export type RequestOptions = RequestInit & { params?: Record<string, any>};

export class HttpClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL
    }

    private buildUrl(endpoint: string, params?: Record<string,any>) {
        const url = new URL(endpoint, this.baseURL);

        if(params) {
            Object.entries(params).forEach(([k,v]) => {
                if(v !== undefined && v !== null) url.searchParams.append(k, String(v));
            });
        }
        return url.toString();
    };

    private async request<T>(input: RequestInfo, init?: RequestOptions): Promise<T> {
        const response = await fetch(input,init);

        if(!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        };

        return response.json() as Promise<T>;
    };

    async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        const url = this.buildUrl(endpoint, params);

        return this.request<T>(url, {method:"GET"});
    }
}