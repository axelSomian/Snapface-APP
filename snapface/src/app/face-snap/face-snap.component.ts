import { Component,OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() facesnap!:FaceSnap
  buttonText!:string;

  ngOnInit(): void {
    this.buttonText="👍"
  }
  
  onSnap() {
    if(this.buttonText==="👍"){
      this.facesnap.snaps++
      this.buttonText="👎"
    }else{
      this.facesnap.snaps--
      this.buttonText="👍"
    }
  }


}
