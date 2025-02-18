import type { PageServerLoad } from './$types';
import { getTweet } from 'sveltekit-tweet/server';

export const load = (async () => {
    // const tweetId_Milei_Novelli = '1837216757062504746';
    const tweetId = '1885068460268363889';
	
    // const tweet_Milei_Novelli = await getTweet(tweetId_Milei_Novelli);
    const tweet = await getTweet(tweetId);

	return { tweet };
}) satisfies PageServerLoad;