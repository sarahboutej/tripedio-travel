import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents-body-content',
  templateUrl: './agents-body-content.component.html',
  styleUrls: ['./agents-body-content.component.scss']
})
export class AgentsBodyContentComponent implements OnInit {

  agentItems= [
    {
      agentName: 'Cameron Williamson',
      agentAvatar:'assets/images/user-1.jpg',
      agentDetail: 'I  believe great trip comes from focusing on the right questions, not the right answers.',
      destination: ['Baltic Sea','Russia','Spain','Greece'],
      travelType: ['Cruise','Family Holiday','Sport'],
      matching: '90%',
      stars: 3,
      review: '2',
      availabilityDate: [
        {
          days: 'Mo. - Fr.',
          time: '09:00 - 18:00'
        },
        {
          days: 'Sa.',
          time: '09:00 - 16:00'
        }
      ],
      status: 'online'
    },

    {
      agentName: 'Brooklyn Simmons',
      agentAvatar:'assets/images/user-2.jpg',
      agentDetail: 'I  believe great trip comes from focusing on the right questions, not the right answers.',
      destination: ['Baltic Sea','Russia','Spain','Greece'],
      travelType: ['Cruise','Family Holiday','Sport'],
      matching: '90%',
      stars: 3,
      review: '2',
      availabilityDate: [
        {
          days: 'Mo. - Fr.',
          time: '09:00 - 18:00'
        },
        {
          days: 'Sa.',
          time: '09:00 - 16:00'
        }
      ],
      status: 'away'
    },

    {
      agentName: 'Ronald Richards',
      agentAvatar:'assets/images/user-3.jpg',
      agentDetail: 'I  believe great trip comes from focusing on the right questions, not the right answers.',
      destination: ['Baltic Sea','Russia','Spain','Greece'],
      travelType: ['Cruise','Family Holiday','Sport'],
      matching: '90%',
      stars: 3,
      review: '3',
      availabilityDate: [
        {
          days: 'Mo. - Fr.',
          time: '09:00 - 18:00'
        },
        {
          days: 'Sa.',
          time: '09:00 - 16:00'
        }
      ],
      status: 'online'
    },

    {
      agentName: 'Devon Lane',
      agentAvatar:'assets/images/user-4.jpg',
      agentDetail: 'I  believe great trip comes from focusing on the right questions, not the right answers.',
      destination: ['Baltic Sea','Russia','Spain','Greece'],
      travelType: ['Cruise','Family Holiday','Sport'],
      matching: '90%',
      stars: 5,
      review: '4',
      availabilityDate: [
        {
          days: 'Mo. - Fr.',
          time: '09:00 - 18:00'
        },
        {
          days: 'Sa.',
          time: '09:00 - 16:00'
        }
      ],
      status: 'offline'
    },

    {
      agentName: 'Arlene McCoy',
      agentAvatar:'assets/images/user-5.jpg',
      agentDetail: 'I  believe great trip comes from focusing on the right questions, not the right answers.',
      destination: ['Baltic Sea','Russia','Spain','Greece'],
      travelType: ['Cruise','Family Holiday','Sport'],
      matching: '90%',
      stars: 3,
      review: '3',
      availabilityDate: [
        {
          days: 'Mo. - Fr.',
          time: '09:00 - 18:00'
        },
        {
          days: 'Sa.',
          time: '09:00 - 16:00'
        }
      ],
      status: 'online'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
