export abstract class BaseService {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected handleError(err: any): never {
    const message = err?.message ?? "Unknown error";
    throw { message, original: err };
  }
}
