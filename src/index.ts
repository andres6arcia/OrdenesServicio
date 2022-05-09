import "reflect-metadata"
import { Server } from "./apiServer/server"

class App {
    public server: Server
    constructor() {
        this.server = new Server()
    }
}
const app = new App()
