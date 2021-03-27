const title =
    'BrainDUMP';
const description = 'A place to quickly store your random thoughts, ideas, and more. Get started remembering now!';

const SEO = {
    title,
    description,
    canonical: 'https://braindmp.vercel.app/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://braindmp.vercel.app/',
        title,
        description,
        images: [
            {
                url: 'https://braindmp.vercel.app/brand.png',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    }
};

export default SEO;