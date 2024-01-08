import { AnimatedOptions, AnimatedCallback } from './types';
export declare function createAnimate(): {
    ({ to, from, duration, friction, reverseEasing, easing, onStart, onUpdate, onEnd }: AnimatedOptions): () => void;
    onStart(onStart: AnimatedCallback): () => void;
    onUpdate(onUpdate: AnimatedCallback): () => void;
    onEnd(onEnd: AnimatedCallback): () => void;
    off(): void;
    getValue(): number;
};
export type CreateAnimate = ReturnType<typeof createAnimate>;
//# sourceMappingURL=implement.d.ts.map