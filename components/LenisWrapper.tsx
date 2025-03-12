"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1, // Adjust for smoothness (lower = smoother)
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
