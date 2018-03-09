import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  movieProvider: any;
  public objeto_feed = {
    titulo: "Matheus Melo",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comments: "11h ago"
  }
  public page = 1;

  public nome_usuario: string = "Matheus Melo";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private MovieProvider: MovieProvider
  ) {
  }
  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovie().subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}
