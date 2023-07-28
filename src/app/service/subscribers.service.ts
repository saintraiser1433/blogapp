import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }

  addSub(addData: any) {
    this.afs.collection('subscribers').add(addData).then(() => {
      this.toastr.success("successfully added");
    }).catch(e => {
      this.toastr.warning(e);
    })
  }

  checkSubs(subEmail: any) {
    return this.afs.collection('subscribers', ref => ref.where('email', '==', subEmail)).get();

  }
}
