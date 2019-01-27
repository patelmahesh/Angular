import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
   

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})



export class NavComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  constructor(private route: ActivatedRoute, private router: Router){

  }

  selectedItem(event){
    this.router.navigate([event.link]);
  }

  appitems = [
    {
      label: 'Elements',
      icon: 'flag',
      items: [
        {
          label: 'Typography',
         icon: 'text_format',
          items: [
            {
              label: 'Title Font',
              link: '/title-font',
              icon: 'stop'
            },
            {
              label: 'Body Font',
              link: '/body-font',
              //faIcon: 'fab fa-font'
             icon: 'stop'
            },
          ]
        },
        {
          label: 'Colors',
          icon: 'format_color_fill',
          items: [
            {
              label: 'Font Color',
              link: '/font-color',
              icon: 'stop'
            },
            {
              label: 'body Color',
              link: '/body-color',
              icon: 'stop'
            },
          ]
        },{
          label: 'Dropdown',
          icon: 'layers',
          link: '/dropdown'
        },
        ,{
          label: 'Accordian',
          icon: 'layers',
          link: '/accordian'
        },
        {
          label: 'Buttons',
          icon: 'touch_app',
          items: [
            {
              label: 'Buttons',
              link: '/buttons',
              icon: 'stop'
            },
            {
              label: 'Icon Buttons',
              link: '/icon-buttons',
              icon: 'stop'
            },
            {
              label: 'Round Buttons',
              link: '/round-buttons',
              icon: 'stop'
            }
          ]
        }
        ,{
          label: 'Others',
          icon: 'web_asset',
          link: '/others'
        },
        
      ]
    },
    {
      label: 'Layout',
      icon: 'dashboard',
      items: [
        {
          label: 'List',
          link: '/list',
          icon: 'stop'
        },
        {
          label: 'Window',
          link: '/window',
          icon: 'stop'
        }
      ]
    },
    {
      label: 'Form Controls',
      icon: 'description',
      items: [
        {
          label: 'Datepicker',
          link: '/datepicker',
          icon: 'stop'
        },
        {
          label: 'Input',
          link: '/input',
          icon: 'stop'
        }
      ]
    },
    {
      label: 'Modals/Popups',
      icon: 'description',
      items: [
        {
          label: 'alerts',
          link: '/alert',
          icon: 'stop'
        },
        {
          label: 'Tooltip',
          link: '/tooltip',
          icon: 'chevron_left'
        }
      ]
    },
    {
      label: 'Tables',
      icon: 'description',
      items: [
        {
          label: 'dataTable',
          link: '/dataTable',
          icon: 'stop'
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    }
  ];


  ngOnInit() {
  };

  config = {
    paddingAtStart: false,
    classname: 'main-navigation',
    listBackgroundColor: 'transparent',
    fontColor: '#969696',
    backgroundColor: '#fff',
    selectedListFontColor: '#018452',
  };
}



  

 
