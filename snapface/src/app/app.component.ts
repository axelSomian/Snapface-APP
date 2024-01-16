import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!:FaceSnap[]


  ngOnInit(): void {
    this.faceSnaps=[
    {
      title:'Shin-Sekai News',
      description:'Mugiwara no luffy Kaizoku-ō',
      createdDate:new Date(),
      snaps:1000000,
      imageUrl:'../../assets/luffy.jpg',
      location:'Marine Ford'
    },
    {
      title: 'Dressrosa',
      description:' Dofuramingo no kanraku' ,
      createdDate:  new Date() ,
      snaps:5 ,
      imageUrl: '../../assets/dofla.jpg' ,
    },
    {
      title: 'East Blue',
      description:'Yonkō biggumamu to kaidō no aratana dōmei' ,
      createdDate:  new Date() ,
      snaps:5 ,
      imageUrl: '../../assets/kaidoMon.jpg',
    },
    {
      title:'Shin-Sekai News',
      description:'Kaizoku-ō no musuko',
      createdDate:new Date(),
      snaps:99999,
      imageUrl:'https://i.pinimg.com/originals/de/01/81/de01815949455ff29e700305cc3de749.jpg',
 
    },
    {
      title: 'Dressrosa',
      description:' Usoland' ,
      createdDate:  new Date() ,
      snaps:5 ,
      imageUrl: 'https://i.pinimg.com/originals/fa/d2/fe/fad2fe8f776b24ba791ba976fba6c102.jpg' ,
    },
    {
      title: 'East Blue',
      description:'Akagami no shanks' ,
      createdDate:  new Date() ,
      snaps:10059 ,
      imageUrl: 'https://i.pinimg.com/originals/9f/21/e7/9f21e77272ce3d3e7c61597999ee3046.jpg',
    }
    ];
  }

}
