import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {
      alert("Sua seção expirou, entre novamente!")
      this.router.navigate(['/entrar'])
    }
  }

}
