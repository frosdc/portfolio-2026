    export interface ArtPiece {
    id: string
    caption: string
    medium: string
    year: string
    gradient: string
    image?: string
    }

    import tm from '../img/art/tm.webp'
    import hirono from '../img/art/hirono.webp'
    import sketch from '../img/art/sketch.webp'
    import trainOfThought from '../img/art/train-of-thought.webp'
    // import sky from '../img/art/sky.webp'
    // import gap from '../img/art/gap.webp'



    const PHONE = 'Digital painting, drawn on a phone'

export const artPieces: ArtPiece[] = [
{
    id: 'art-1',
    caption: 'ART I',
    medium: PHONE,
    year: '2026',
    gradient: 'bg-linear-to-br from-neutral-900 via-neutral-800 to-stone-700',
    image: tm
},
{
    id: 'art-2',
    caption: 'ART II',
    medium: PHONE,
    year: '2026',
    gradient: 'bg-linear-to-b from-stone-800 to-black',
    image: hirono
},
{
    id: 'art-3',
    caption: 'ART III',
    medium: PHONE,
    year: '2025',
    gradient: 'bg-linear-to-tr from-black via-stone-900 to-amber-900/70',
    image: sketch
},
{
    id: 'art-4',
    caption: 'ART IV',
    medium: PHONE,
    year: '2025',
    gradient: 'bg-linear-to-bl from-neutral-700 via-neutral-900 to-black',
    image: trainOfThought
},
// {
//     id: 'art-5',
//     caption: 'ART V',
//     medium: PHONE,
//     year: '2024',
//     gradient: 'bg-linear-to-t from-black via-stone-900 to-stone-600',
//     image: sky
// },
// {
//     id: 'art-6',
//     caption: 'ART VI',
//     medium: PHONE,
//     year: '2024',
//     gradient: 'bg-linear-to-br from-stone-900 to-neutral-700',
//     image: gap
// },
]
