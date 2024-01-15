import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap
  mySnap1!:FaceSnap
  mySnap2!:FaceSnap

  ngOnInit(): void {

    this.mySnap={    
        title:'Shin-Sekai News',
        description:'Mugiwara no luffy Kaizoku-ō',
        createdDate:new Date(),
        snaps:1000000,
        imageUrl:'../../assets/luffy.jpg',
        location:'Marine Ford'
      }
      
      this.mySnap1={
        title: 'Dressrosa',
        description:' Dofuramingo no kanraku' ,
        createdDate:  new Date() ,
        snaps:5 ,
        imageUrl: '../../assets/dofla.jpg' ,
      }
      
      this.mySnap2={
        title: 'East Blue',
        description:'Yonkō biggumamu to kaidō no aratana dōmei' ,
        createdDate:  new Date() ,
        snaps:5 ,
        imageUrl: '../../assets/kaidoMon.jpg',
      }

      

  }
}
