import { Component, OnInit } from '@angular/core';
import { Compilation, Country, Direction, DirectionsService } from '../directions.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  list: Compilation[] = [];

  directions: Direction[] = [];

  selected: number = 1; // Тут id выбранной подборки

  selectedDirection: string = null;

  selectedCountry: Country = null;

  constructor(private service: DirectionsService) { }

  ngOnInit(): void {
    this.list = this.service.list;
    this.directions = this.service.directions;
  }

  addCompilation(): void {
    const item: Compilation = {
      id: new Date().getTime(),
      name: 'Новая подборка',
      directions: [],
      hotelStar: 0,
      days: {
        from: 7,
        to: 14
      },
      price: {
        from: 15000,
        to: 20000
      },
      people: {
        adult: 1,
        child: 0
      }
    };
    this.list.push(item);
    this.selected = item.id;
  }

  get current(): Compilation {
    return this.list.find(it => {
      return it.id === this.selected;
    });
  }

  removeCountry(di: number, i: number): void {
    this.current.directions[di].countries.splice(i, 1);
  }

  get availableDirections(): Direction[] {
    return this.directions.filter(it => {
      return !this.current.directions.find(d => d.region === it.region);
    });
  }

  get availableCountries(): Country[] {
    const list: Country[] = [];
    this.directions.forEach(direction => {
      direction.countries.forEach(country => {
        const curDir = this.current.directions.find(dr => dr.region === direction.region);
        if (!curDir || !curDir.countries.find(c => c.name === country.name)) {
          list.push({...country, region: direction.region});
        }
      });
    });
    return list;
  }

  addRegion(): void {
    if (this.selectedDirection) {
      this.current.directions.push({
        region: this.selectedDirection,
        countries: []
      });
      this.selectedDirection = null;
    }
  }

  addCountry(): void {
    if (this.selectedCountry) {
      if (!this.current.directions.find(dr => dr.region === this.selectedCountry.region)) {
        this.current.directions.push({
          region: this.selectedCountry.region,
          countries: []
        });
      }

      this.current.directions
        .find(dr => dr.region === this.selectedCountry.region)
        .countries
        .push(this.selectedCountry);

      this.selectedCountry = null;
    }
  }

  removeCompilation(): void {
    if (confirm('Вы уверены, что хотите удалить подборку?')) {
      const index = this.list.findIndex(it => it.id === this.current.id);
      this.list.splice(index, 1);

      if (this.list.length) {
        this.selected = this.list[0].id;
      } else {
        this.selected = null;
      }
    }
  }

}
