import { PingPongModel } from "@src/modules/dashboard/services/PingPongModel";

export class PingPongApi {
  constructor(private http: any) {}

  create(pingPongData: PingPongModel): Promise<any> {
    return this.http.POST(`/statistic/store`, pingPongData, {
      headers: {},
      params: {},
      responseType: ""
    });
  }
}
