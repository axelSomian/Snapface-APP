import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  title!:string;
  imgUrl!:string;
  buttonText!:string;
  description!:string;
  createdDate!:Date;
  snaps!:number;

  ngOnInit(): void {
    this.title='Raiftel';
    this.imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KMZfyI4moEaMMiV9a_R-RauqK0i_B6n9uGjCF_BslQ&s'
    this.description='Mugiwara no luffy Kaizoku-ō';
    this.createdDate=new Date();
    this.snaps=4000;
    this.buttonText="👍"
  }

  onSnap() {
    if(this.buttonText==="👍"){
      this.snaps++
      this.buttonText="👎"
    }else{
      this.snaps--
      this.buttonText="👍"
    }
  }


}
