export interface smallIMG{
    id:number;
    marca:string;
    modelo:string;
    description:string;
    imgMain:string;
}


export interface wallpapersIMG{
    modelo:string;
    url:string,
    description:string,
}

export interface publicidadIMG{
    marca?:string;
    url:string,  
}


export interface MenuItem{
    componente:string;
    title:string;

}

