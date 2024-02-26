import { createPubSub } from 'graphql-yoga';
import { Redis, RedisOptions } from 'ioredis';
import { createRedisEventTarget } from '@graphql-yoga/redis-event-target';

const redisOptions: RedisOptions = {
    // host: 'localhost',
    host: 'localhost',
    //port: 6379,
    port: 7001,
    maxLoadingRetryTime: 40,

    password: 'testtest',
};
const publishClient = new Redis(redisOptions)
const subscribeClient = new Redis(redisOptions)

const eventTarget = createRedisEventTarget({
    publishClient,
    subscribeClient
})

export const pubSub = createPubSub({ eventTarget })