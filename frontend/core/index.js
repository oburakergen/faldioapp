
export const core = {
    coreSeo (state) {
        const meta = [
            {
                hid: 'description',
                name: 'description',
                content: state?.metaDescription || ''
            },
            {
                hid: 'canonical',
                rel: 'canonical',
                href: state?.canonicalURL || ''
            },
            {
                hid: 'keywords',
                rel: 'keywords',
                content: state?.keywords || ''
            },
            {
                hid: 'robots',
                rel: 'robots',
                content: state?.metaRobots || ''
            },
            {
                hid: 'viewport',
                rel: 'viewport',
                content: state?.metaViewport || ''
            },
            {
                hid: 'og:image',
                rel: 'og:image',
                content: state?.metaImage?.data?.attributes?.url || ''
            },
            {
                hid: 'og:image:secure_url',
                rel: 'og:image:secure_url',
                content: state?.metaImage?.data?.attributes?.url || ''
            },
            {
                hid: 'og:image:alt',
                rel: 'og:image:alt',
                content: state?.metaImage?.data?.attributes?.alternativeText || ''
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: process.env.APP_NAME || ''
            }
        ];

        (state.metaSocial || []).map((item) => {
            if (item.socialNetwork === 'Facebook') {
                meta.push({
                    hid: 'facebook:site',
                    name: 'facebook:site',
                    content: state?.canonicalURL || ''
                });
                meta.push({
                    hid: 'facebook:title',
                    name: 'facebook:title',
                    content: item.title
                });
                meta.push({
                    hid: 'facebook:description',
                    name: 'facebook:description',
                    content: item.description || ''
                });
                meta.push({
                    hid: 'facebook:image',
                    name: 'facebook:image',
                    content: item?.image?.data?.attributes?.url || ''
                });
            } else if (item.socialNetwork === 'Twitter') {
                meta.push({
                    hid: 'twitter:site',
                    name: 'twitter:site',
                    content: state?.canonicalURL || ''
                });
                meta.push({
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: item.title || ''
                });
                meta.push({
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: item.description || ''
                });
                meta.push({
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: item?.image?.data?.attributes?.url || ''
                });
            }

            return false;
        });

        const seo = meta.map((item) => {
            if (item.content || item.href) {
                return item;
            }

            return false;
        }).filter(Boolean);

        return {
            title: state.metaTitle,
            meta: [...seo]
        };
    }
};
