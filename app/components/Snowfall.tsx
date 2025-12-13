"use client";
import { useEffect, useState } from "react";
import { CHRISTMAS_MODE } from "@/lib/consts";

interface Snowflake {
    id: number;
    x: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    shape: "circle" | "star" | "diamond" | "cross";
}

// Different snowflake shapes
const SnowflakeShape = ({ shape, size }: { shape: string; size: number }) => {
    switch (shape) {
        case "star":
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="white"
                    className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                >
                    <path d="M12 2L14.09 8.26L20.18 9.27L16.09 13.14L17.18 19.18L12 16.77L6.82 19.18L7.91 13.14L3.82 9.27L9.91 8.26L12 2Z" />
                </svg>
            );
        case "diamond":
            return (
                <div
                    className="bg-white rotate-45"
                    style={{
                        width: size * 0.7,
                        height: size * 0.7,
                        boxShadow: `0 0 ${size}px rgba(200, 230, 255, 0.9)`,
                    }}
                />
            );
        case "cross":
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_3px_rgba(255,255,255,0.7)]"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            );
        default: // circle
            return (
                <div
                    className="w-full h-full bg-white rounded-full"
                    style={{
                        boxShadow: `0 0 ${size * 2}px rgba(200, 230, 255, 0.8)`,
                    }}
                />
            );
    }
};

export function Snowfall() {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        // Only generate snowflakes if Christmas mode is enabled
        if (!CHRISTMAS_MODE) return;

        // Generate snowflakes only on client side
        const flakes: Snowflake[] = [];
        const count = 45; // Reduced by 10% (from 50)
        const shapes: Snowflake["shape"][] = ["circle", "star", "diamond", "cross"];

        for (let i = 0; i < count; i++) {
            flakes.push({
                id: i,
                x: Math.random() * 100, // Random horizontal position (%)
                size: Math.random() * 6 + 3, // Size between 3-9px (slightly larger for variety)
                duration: Math.random() * 12 + 8, // Fall duration 8-20s
                delay: Math.random() * 10, // Random delay 0-10s
                opacity: Math.random() * 0.5 + 0.3, // Opacity 0.3-0.8 (more visible)
                shape: shapes[Math.floor(Math.random() * shapes.length)], // Random shape
            });
        }

        // Use setTimeout to avoid "setting state synchronously within an effect" error
        const timer = setTimeout(() => {
            setSnowflakes(flakes);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    // Return null if Christmas mode is disabled or no snowflakes
    if (!CHRISTMAS_MODE || snowflakes.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute top-[-10px] animate-snowfall flex items-center justify-center"
                    style={{
                        left: `${flake.x}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                        animationDuration: `${flake.duration}s`,
                        animationDelay: `${flake.delay}s`,
                    }}
                >
                    <SnowflakeShape shape={flake.shape} size={flake.size} />
                </div>
            ))}
        </div>
    );
}

