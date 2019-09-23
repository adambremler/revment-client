import normalizeUrl from 'normalize-url';

export default function getComparableURL(url) {
    try {
        return normalizeUrl(url, {
            stripHash: true,
            stripProtocol: true
        });
    } catch (e) {
        return url;
    }
}
