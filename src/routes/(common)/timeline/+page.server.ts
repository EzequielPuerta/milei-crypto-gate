import type { PageServerLoad } from './$types';
import { getTweet } from 'sveltekit-tweet/server';
import { tweets } from '$lib/tweets';

export const load = (async () => {
    const tweetResults: Record<string, any> = {};

    const tweetPromises = tweets.map(async tweet => {
        const result = await getTweet(tweet.tweetId);
        tweetResults[`${tweet.tweetName}`] = result;
    });

    await Promise.all(tweetPromises);

    return tweetResults;
}) satisfies PageServerLoad;