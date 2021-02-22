import firebase from './firebase-admin';

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