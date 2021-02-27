import { db } from './firebase-admin';

export async function getAllThoughts() {
    try {
        const snapshot = await firebase.collection('sites').get();
        const sites = [];

        snapshot.forEach((doc) => {
            sites.push({ id: doc.id, ...doc.data() });
        });

        return { sites };
    } catch (error) {
        return { error };
    }
}

export async function getUserThoughts(uid) {
    const snapshot = await db
        .collection('sites')
        .where('authorId', '==', uid)
        .get();

    const sites = [];

    snapshot.forEach((doc) => {
        sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
}