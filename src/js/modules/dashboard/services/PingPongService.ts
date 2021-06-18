import { DefaultHttpService } from "@src/common/services/HttpService";
import { PingPongApi } from "@src/modules/dashboard/services/PingPongApi";
import { PingPongModel } from "@src/modules/dashboard/services/PingPongModel";

class PingPongService {
  readonly pingPongApi = new PingPongApi(new DefaultHttpService());

  public saveGame(pingPongData: PingPongModel): Promise<any> {
    return this.pingPongApi.create(pingPongData);
  }
}

export default new PingPongService();
