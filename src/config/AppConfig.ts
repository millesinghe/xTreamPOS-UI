export interface AppConfig{
    server: {
        baseURL: string
    }

    database : {
        hostname : string,
        port : string
    }
    
    screen: {
        resolution: string
    }

    apiServer: {
        getByItemId:string,
        link2:string,
    }
}