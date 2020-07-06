import { Component, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})

export class AddHeroComponent {

  selectedFile: File = null;
  url: string | ArrayBuffer = "";
  nameHero: string
  @Output() heroes = new EventEmitter()

  constructor(private heroService: HeroService) { }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = reader.result;
      }
    }
  }
  add(): void {
    let hero: Object = {
      name: this.nameHero,
      url: this.url
    }
    this.heroService.addHero(hero as Hero)
      .subscribe(hero => {
        this.heroes.emit(hero);
      });
    this.url = '';
  }


}

