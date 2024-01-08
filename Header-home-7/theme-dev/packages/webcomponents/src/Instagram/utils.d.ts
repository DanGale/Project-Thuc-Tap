export declare const EMBED_JS = "https://platform.instagram.com/en_US/embeds.js";
export declare const INSTA_API = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username";
export declare const INSTA_MODAL_NAME = "xo-instagram";
export declare function getImageSize(src: string): Promise<{
    width: number;
    height: number;
}>;
export declare function createModal(): void;
export declare function openModal(accessToken: string, index: number): void;
//# sourceMappingURL=utils.d.ts.map