import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
    return firestore
        .collection('user')
        .doc(uid)
        .set({ uid, ...data }, { merge: true });
}

export function createThought(data) {
    const site = firestore.collection('sites').doc();
    site.set(data);

    return site;
}

export function deleteThought(id) {
    return firestore
        .collection('sites').doc(id).delete();
}