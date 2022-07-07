import fetch from "node-fetch";

const REDDIT_API = "https://www.reddit.com/r/memes/hot.json";

export default class Reddit {
    async fetchPosts() {
        const res = await fetch(REDDIT_API).then((res) => res.json());
        const posts = res.data.children
            .map(({ data }) => data.url_overridden_by_dest)
            .filter((source) => !!source)
            .join("\n");

        return posts;
    }
}
