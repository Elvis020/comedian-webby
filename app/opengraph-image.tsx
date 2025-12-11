import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Comedian Kwame Obed - Ghanaian Stand-Up Comedy';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, sans-serif',
                    position: 'relative',
                }}
            >
                {/* Decorative Elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(34, 139, 34, 0.3) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        zIndex: 10,
                        padding: '40px',
                    }}
                >
                    {/* Name */}
                    <div
                        style={{
                            fontSize: '80px',
                            fontWeight: 900,
                            color: '#FFFFFF',
                            marginBottom: '20px',
                            letterSpacing: '-2px',
                        }}
                    >
                        Kwame Obed
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            fontSize: '48px',
                            fontWeight: 700,
                            color: '#228B22',
                            marginBottom: '40px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                        }}
                    >
                        Comedian
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: '32px',
                            fontWeight: 400,
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontStyle: 'italic',
                            maxWidth: '800px',
                        }}
                    >
                        Ghanaian Stand-Up Comedy • Shows • Skits
                    </div>

                    {/* Website */}
                    <div
                        style={{
                            fontSize: '24px',
                            fontWeight: 500,
                            color: 'rgba(255, 255, 255, 0.6)',
                            marginTop: '40px',
                            letterSpacing: '1px',
                        }}
                    >
                        www.kwameobed.com
                    </div>
                </div>

                {/* Bottom accent bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '8px',
                        background: 'linear-gradient(90deg, #228B22 0%, #90EE90 100%)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
