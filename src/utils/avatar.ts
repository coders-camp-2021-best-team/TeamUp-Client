import { CDN } from './CDN';

export const DEFAULT_AVATAR = '/defaultImage.jpg';

export const AVATAR = (key: string | null) => (key ? CDN(key) : DEFAULT_AVATAR);
