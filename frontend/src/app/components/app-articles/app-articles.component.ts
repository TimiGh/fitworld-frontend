import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-articles',
  templateUrl: './app-articles.component.html',
  styleUrls: ['./app-articles.component.css']
})
export class AppArticlesComponent implements OnInit {

  constructor() { }

  artimg: any = '../../../assets/images/articles/img.jpg';

  articles: any[] = [
    { title: 'artcle one', content: 'This is article one' },
    { title: 'artcle two', content: 'This is article Two' },
    { title: 'artcle three', content: 'This is article Three' }];

  posts: any[] = [
    { title: 'post one', content: 'This is article one', by: 'jessica doe', on: '12/02/2017' },
    { title: 'post two', content: 'This is article Two', by: 'jhon smith', on: '02/07/2016' },
    { title: 'post three', content: 'This is article Three', by: 'Will jack', on: '11/03/2016' }];


  ngOnInit() {
  }

}
