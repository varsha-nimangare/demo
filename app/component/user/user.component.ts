import { Component,input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  
}

const users: User[] = [
  { id: 1, name: 'Rahul'}
]

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id= [1,2];
  Name= ["Rahul","Rohit"];

  onClick(
    url: string = "https://www.youtube.com/watch?v=FgB6Hrzw7z0")
  {
    window.open(url);
  }

  displayedColumns: string[] = ['id', 'name'];
   dataSource = users;
}
