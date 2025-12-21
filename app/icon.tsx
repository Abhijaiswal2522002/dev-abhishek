import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 16,
                    background: 'linear-gradient(to bottom right, #8b5cf6, #0ea5e9)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '8px', // Rounded corners for a modern look
                    fontWeight: 700,
                }}
            >
                AJ
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
