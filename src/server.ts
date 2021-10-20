import { serverHttp } from "./app";

serverHttp.listen(4000, () => console.log(`Servidor em execução na porta 4000.`));