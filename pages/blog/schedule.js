import Container from 'components/container'
import { getPostBySlug } from 'lib/api'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import TwoColumn from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Post ({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {

    console.log("title:", title);
    console.log("publish:", publish);
    console.log("content:", content);
    console.log("eyecatch:", eyecatch);
    console.log("categories:", categories);

    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />

                <figure>
                    <Image
                        src={eyecatch?.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch?.width}
                        height={eyecatch?.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                        />
                </figure>

                <TwoColumn>
                    <TwoColumn.Main>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumn.Main>
                    <TwoColumn.Sidebar>
                        <PostCategories categories={categories} />
                    </TwoColumn.Sidebar>
                </TwoColumn>
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule';

    try {
        const post = await getPostBySlug(slug);

        if (!post) {
            throw new Error(`Post with slug ${slug} not found`);
        }

        return {
            props: {
                title: post.title || 'Default Title',
                publish: post.publishDate || 'Default Publish Date',
                content: post.content || 'Default Content',
                eyecatch: post.eyecatch || { url: '', width: 0, height: 0 }, // Default eyecatch
                categories: post.categories || [],
            },
        };
    } catch (error) {
        console.error('Error fetching post:', error);
        return {
            notFound: true,
        };
    }
}