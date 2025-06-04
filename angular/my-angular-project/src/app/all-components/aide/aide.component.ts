import { Component } from '@angular/core';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent {

  submitForm() {
    alert('ok');
    console.log('Formulaire soumis !');
  }
}

