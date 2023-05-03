import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Notification} from "../models/Notification";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  collectionName = "Notifications";

  constructor(private afs: AngularFirestore, private userService: UserService) { }

  create(description: string) {
    this.userService.getAll().subscribe(users => {
      for (let user of users) {
        let notification = {
          description: description,
          id: this.afs.createId(),
          email: user.email,
          date: new Date().toString()
        };

        this.afs.collection<Notification>(this.collectionName).doc(notification.id).set(notification);
      }
    }, error => {
      console.log(error);
    });
  }

  getByUser(email: string) {
    return this.afs.collection<Notification>(this.collectionName,
        ref => ref.where("email", "==", email)).valueChanges();
  }

  delete(id: string) {
    return this.afs.collection<Notification>(this.collectionName).doc(id).delete();
  }
}
