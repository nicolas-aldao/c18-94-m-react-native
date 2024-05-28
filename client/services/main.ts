// Acá podemos configurar si consumimos el servicio o el mock
import { MedConnectService } from "@/services/medConnectService";
import { WebApiService } from "./api";
import { MockService } from "./mock";

const USE_MOCK = true;
const provider = USE_MOCK ? new MockService() : new WebApiService();
export const medConnectService = new MedConnectService(provider)