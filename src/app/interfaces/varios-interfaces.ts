export interface arrayIMG{
    id:number;
    marca:string;
    modelo:string;
    description:string;
    imgMain:string;
    arrayWP:wallpapersIMG[];
}


export interface wallpapersIMG{
    url:string,
    modelo:string;
    description:string,
}

export interface logoMarga{
    marca:string;
    url:string,  
}


export interface MenuItem{
    componente:string;
    title:string;

}

