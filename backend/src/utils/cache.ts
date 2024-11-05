import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const setCache = (key: string, value: any) => {
    cache.set(key, value);
};

export const getCache = (key: string) => {
    return cache.get(key);
};
