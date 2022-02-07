import { HomeService } from './../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personagem',
  templateUrl: './info-personagem.component.html',
  styleUrls: ['./info-personagem.component.scss'],
})
export class InfoPersonagemComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  titulo: any;
  loading = true;

  ngOnInit(): void {
    console.log(history.state);
    console.log(history.state.id);
    // this.homeService.getQuadrinhos(history.state.id).subscribe(res =>{

    //   console.log(res)
    // })
    this.getHQ();
  }
  pathImg: any;
  indexImg:any
  getHQ() {
    this.homeService.getQuadrinhos(history.state.id).subscribe((res) => {
      this.loading = false;
      this.titulo = res.data.results;
      let thumbnail = res.data.results.map((x:any)=> {
        console.log(x.thumbnail)
        x.thumbnail})
      
      thumbnail.map((x:any) => {
        this.pathImg = `${x.path}/portrait_xlarge.jpg`;
      })
    });
  }
}
