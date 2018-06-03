import { Injectable } from '@angular/core';

export interface Country {
  name: string;
  flag?: string;
  region?: string;
}

export interface Direction {
  region: string;
  countries: Country[];
}

export interface Range {
  from: number;
  to: number;
}

export interface People {
  child: number;
  adult: number;
}

export interface Compilation {
  id: number;
  name: string;
  from?: string;
  directions?: Direction[];
  hotelStar?: number;
  topHotels?: number;
  departure?: string;
  food?: number;
  location?: number;
  days: Range;
  price: Range;
  people: People;
}

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  list: Compilation[] = [
    {
      id: 1,
      name: 'Подборка Васи',
      from: 'Санкт-Петербург',
      directions: [
        {
          region: 'Юго-Восточная Азия',
          countries: [
            {
              name: 'Тайланд',
              flag: '/assets/img/flag-1.svg'
            },
            {
              name: 'Вьетнам',
              flag: '/assets/img/flag-2.svg'
            },
            {
              name: 'Индонезия',
              flag: '/assets/img/flag-3.svg'
            },
          ]
        }
      ],
      hotelStar: 4,
      days: {
        from: 7,
        to: 14
      },
      departure: '13.01.2018 - 19.01.2018',
      price: {
        from: 50000,
        to: 100000
      },
      people: {
        adult: 2,
        child: 2
      }
    }
  ];

  directions: Direction[] = [
    {
      region: 'Юго-Восточная Азия',
      countries: [
        {
          name: 'Тайланд',
          flag: '/assets/img/flag-1.svg'
        },
        {
          name: 'Вьетнам',
          flag: '/assets/img/flag-2.svg'
        },
        {
          name: 'Индонезия',
          flag: '/assets/img/flag-3.svg'
        },
      ]
    },
    {
      region: 'Европа',
      countries: [
        {
          name: 'США'
        },
        {
          name: 'Германия'
        },
        {
          name: 'Франция'
        },
      ]
    },
    {
      region: 'Россия',
      countries: [
        {
          name: 'Санк-Петербург'
        },
        {
          name: 'Сочи'
        }
      ]
    }
  ];

  constructor() { }
}
