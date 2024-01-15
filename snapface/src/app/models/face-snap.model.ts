// creation de type personnalisé sous forme de class
export class FaceSnap {

        title!:string
        description!:string
        createdDate!:Date
        snaps!:number
        imageUrl!:string
        location?:string

    // il s'agit d'une maniere de creer qui aura pour proprieté les props passer au constucteur 
    // pour que ca fonctionne il faut mettre le mot *Public* devant chaque proprieté du constructeur 
    //  constructor(public title:string,
    //              public description:string,
    //              public createdDate:Date,
    //              public snaps:number,
    //              public imageUrl:string ){}
    
}