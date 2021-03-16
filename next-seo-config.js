const title =
    'BrainDUMP';
const description = 'A place to quickly store your random thoughts, ideas, and more. Sign in and write down your thoughts so you can remember them later.';

const SEO = {
    title,
    description,
    canonical: 'https://brain-dump-git-main-matt1208.vercel.app/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://brain-dump-git-main-matt1208.vercel.app/',
        title,
        description,
        images: [
            {
                url: 'https://brain-dump-git-main-matt1208.vercel.app/brand.png',
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    }
};

export default SEO;