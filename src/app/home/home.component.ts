import { Component, OnInit, ViewChild, Inject, ViewEncapsulation} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HomeService } from './../services/home/home.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeModalComponent } from './../components/modal/home-modal/home-modal.component';
import { Results, CharacterResults } from './../models/home';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  dataSource: any;
  totalItems: number;
  results = [];
  limit = 10;
  offset = 0;
  loading: boolean;
  showTable = false;
  filtro: string;
  itemsPerPage = 10;
  actualPage = 0;

  constructor(
    private toast: ToastrService,
    private homeService: HomeService,
    public modalHero: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.loading = true;

    this.loadData((this.limit), (this.offset));
  }

  currentPage() {}

  loadData(limit?: number, offset?: number) {
    this.homeService.getPersonagens(limit, offset).subscribe(
      (res) => {
        this.loading = false;
        this.showTable = true;
        this.results = res.data.results;
        this.totalItems = res.data.total;
        this.dataSource = new MatTableDataSource(res.data.results);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        this.toast.error('Não foi possivel carregar os dados', 'Erro');
      }
    );
  }

  pagination(index:any){
    this.actualPage += index;
    this.limit = this.itemsPerPage;

    this.offset = this.actualPage? this.actualPage * this.limit : 0
    console.log(this.dataSource)
    this.homeService.getPersonagens(this.limit,this.offset).subscribe(
      (res) => {
        this.showTable=true;
        this.results = res.data.results;
        this.totalItems = res.data.total
      },
      (err) => {
        this.toast.error('Não foi possivel carregar os dados','Erro')
      }
    );
   }
id:any
  openCharacterModal(element: Results) {
    this.id = element.id;
    // console.log(id)
    this.homeService.getPersonagemPeloId(this.id).subscribe((res) => {
      let personagem = res.data.results;
      console.log(personagem);
      personagem.map((x: CharacterResults) => {
        let modalRef = this.modalHero.open(HomeModalComponent, {
          width: '400px',
          data: {
            id: this.id,
            nome: x.name,
            desc: x.description,
          },
        });
        modalRef.afterClosed();
      });
    });
  }

  get dt(): any {
    if (this.filtro) {
      return this.results.filter((x: any) =>
        x.name.includes(
          this.filtro.toLocaleLowerCase() || this.filtro.toUpperCase()
        )
      );
    }

    return this.results;
  }

  applyFilter(event: Event) {
    this.filtro = (event.target as HTMLInputElement).value;
  }
}
