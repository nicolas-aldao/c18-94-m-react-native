// Acá podemos configurar si consumimos el servicio o el mock, dejar comentado lo que no se usa

// import { WebApiService } from "./api";
import { MockService } from "./mock";

// export const provider = new WebApiService();
export const provider = new MockService();