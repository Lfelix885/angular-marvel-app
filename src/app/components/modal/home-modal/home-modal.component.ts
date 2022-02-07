import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss']
})
export class HomeModalComponent implements OnInit {

  constructor(
  private homeService : HomeService,
  private router: Router,
  public dialogRef: MatDialogRef<HomeModalComponent>,
 @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

loading: boolean;

  ngOnInit(): void {
    console.log(this.data)
    this.loading = true;
  }

  maisInfo(){
    this.router.navigate(['/info-personagem'],{
      state: this.data
    })
    this.dialogRef.close(); 
  }

  fecharModal(){
    this.dialogRef.close()
  }

}
