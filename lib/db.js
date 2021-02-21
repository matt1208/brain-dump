import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
    return firestore
        .collection('user')
        .doc(uid)
        .set({ uid, ...data }, { merge: true });
}

export function createThought(data) {
    const site = firestore.collection('thought').doc();
    site.set(data);

    return site;
}

export function deleteFeedback(id) {
    return firestore
        .collection('thought').doc(id).delete();
}