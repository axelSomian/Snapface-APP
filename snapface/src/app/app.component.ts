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

    this.mySnap=new FaceSnap(
        'Shin-Sekai News',
        'Mugiwara no luffy Kaizoku-ō',
        new Date(),
        1000000,
        '../../assets/luffy.jpg'
      )
      
      this.mySnap1=new FaceSnap(
        'Dressrosa',
        ' Dofuramingo no kanraku',
        new Date(),
        5,
        '../../assets/dofla.jpg'
      )
      
      this.mySnap2=new FaceSnap(
        'East Blue',
        'Yonkō biggumamu to kaidō no aratana dōmei',
        new Date(),
        45,
        '../../assets/kaidoMon.jpg'
      )
      

  }
}
