import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql-julieth.alwaysdata.net",
    port: 3306,
    username: "julieth",
    password: "Ikalesunperrofeo03",
    database: "julieth_udicon",
    entities: [
        "src/entity/*.ts"
    ],
    synchronize: true,
    logging: false,
})
