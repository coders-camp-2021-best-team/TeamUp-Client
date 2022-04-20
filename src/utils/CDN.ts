export const CDN = (key: string) => {
    return `${process.env.REACT_APP_CDN_URL}/${key}`;
};
