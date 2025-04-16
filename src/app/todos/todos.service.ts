import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class TodosService {

  
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getComments(postId: number) {
    const params = {
      postId
    }
    
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {params})
  }

  getPost() {
    const body = {
      id: 1,
      comment: 'Hola',
      date: '2022-01-01'
    }
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body);
  }
}
