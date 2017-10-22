import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import{ShoppingItem} from '../../models/shopping-item/shopping-item.interface'

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
  
})
export class AddShoppingPage {
//creating a new object
  shoppingItem ={} as ShoppingItem

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem:ShoppingItem)
{
  /* creating a new anonymous object and converts itemnumber to number
  and push this to database under shopping list


  */
  this.shoppingItemRef$.push({itemName: this.shoppingItem.itemName,
    itemNumber: Number(this.shoppingItem.itemNumber)
})
console.log(shoppingItem)
}

}
