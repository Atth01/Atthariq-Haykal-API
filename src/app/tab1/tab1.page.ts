import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
public allData:any = [];
  constructor() {
    this.getData();
  }

  async getData(){
    const res:any = await axios.get('http://localhost/api/api/get_data.php');

    console.log(res.data);
    this.allData = res.data.result
  }

}
