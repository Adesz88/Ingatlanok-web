import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Listing} from "../models/Listing";

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  collectionName = "Listings";

  constructor(private afs: AngularFirestore) { }

  create() {

  }

  get() {

  }

  getAll() {
    return this.afs.collection<Listing>(this.collectionName).valueChanges();
  }

  update() {

  }

  delete() {

  }
}
