import { getAllThoughts } from '@/lib/db-admin';

export default async (_, res) => {
    const { sites, error } = await getAllThoughts();
    if (error) {
        res.status(500).json({ error });
    }
    res.status(200).json({ sites });

};
