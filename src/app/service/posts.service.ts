import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  loadData() {
    return this.afs.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
    )
  }
  loadDataFeatured() {
    return this.afs.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
    )
  }

  loadCategoryPost(categoryId: any) {
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
    )
  }

  loadOnePost(postId: any) {
    return this.afs.doc(`posts/${postId}`).valueChanges();
  }

  loadSimilar(catid: any) {
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', catid)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
    )
  }

  // countViews(postId: any) {
  //   const i = {
  //     views: firebase.default.firestore.FieldValue.increment(1)
  //   }
  //   this.afs.doc(`posts/${postId}`) .update(i)
  // }
}
