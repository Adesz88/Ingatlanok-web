import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  collectionName = "Users";
  constructor(private afs: AngularFirestore) { }

  create(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  get(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).valueChanges();
  }

  getByEmail(email: string) {
    return this.afs.collection<User>(this.collectionName,
        ref => ref.where("email", "==", email)).valueChanges();
  }

  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

}
