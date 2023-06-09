import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Listing} from "../models/Listing";

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  collectionName = "Listings";

  constructor(private afs: AngularFirestore) { }

  create(listing: Listing) {
    listing.id = this.afs.createId();
    return this.afs.collection<Listing>(this.collectionName).doc(listing.id).set(listing);
  }

  get(id: string) {
    return this.afs.collection<Listing>(this.collectionName).doc(id).valueChanges();
  }

  getByUser(email: string) {
    return this.afs.collection<Listing>(this.collectionName,
        ref => ref.where("user", "==", email)).valueChanges();
  }

  getAll() {
    return this.afs.collection<Listing>(this.collectionName,
        ref => ref.orderBy('name', 'asc')).valueChanges();
  }

  update(listing: Listing) {
    return this.afs.collection<Listing>(this.collectionName).doc(listing.id).set(listing);
  }

  delete(id: string) {
    return this.afs.collection<Listing>(this.collectionName).doc(id).delete();
  }
}
