import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {providedIn: 'root'
})
export class ArticlesService {
  deleteArticle(id: string) {
    throw new Error("Method not implemented.");
  }
  private url: string = 'http://localhost:3000/api/articles';
  constructor(private http: HttpClient) { }
  getArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }
  getArticles(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }
  createArticles (Article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, Article, httpOptions);
  }
  editArticles (Article: Article): Observable<Article> {
    return this.http.put<Article>(this.url, Article, httpOptions);
  }
  deleteArticles (id: string): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }
}