import { Thumbnail } from './../models/home';
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
    this.getHQ();
  }
  pathImg: string[] = [];
  indexImg: any;

  getHQ() {
    this.homeService.getQuadrinhos(history.state.id).subscribe((res) => {
      this.loading = false;
      this.titulo = res.data.results.map((x:any) =>{
        return ({
          ...x,
          path: x.thumbnail.path+'/portrait_xlarge.jpg'
        })
      } )
    });
  }
}
