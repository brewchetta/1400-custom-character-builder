import { useEffect, useState } from 'react'

/* TO PRELOAD IMAGE IMPORT AND ADD IT TO MANIFEST */
import img1 from "assets/images/alchemy-symbols-dark.png"
import img2 from "assets/images/alchemy-symbols.png"
import img3 from "assets/images/castle-ruins-dark.png"
import img4 from "assets/images/castle-ruins.png"
import img5 from "assets/images/chalk-swatch.png"
import img6 from "assets/images/checkbox-frame-dark.png"
import img7 from "assets/images/checkbox-frame.png"
import img8 from "assets/images/checkbox-X-dark.png"
import img9 from "assets/images/checkbox-X.png"
import img10 from "assets/images/checkmark-dark.png"
import img11 from "assets/images/checkmark.png"
import img12 from "assets/images/chest-icon.png"
import img13 from "assets/images/clock-abstract-dark.png"
import img14 from "assets/images/clock-abstract.png"
import img15 from "assets/images/dice-sizes.png"
import img16 from "assets/images/save-icon.png"
import img17 from "assets/images/flock-dark.png"
import img18 from "assets/images/flock.png"
import img19 from "assets/images/help-icon.png"
import img20 from "assets/images/hops-1.png"
import img21 from "assets/images/hops-2.png"
import img22 from "assets/images/hops-3.png"
import img23 from "assets/images/hops-4.png"
import img24 from "assets/images/magic-circle-dark.png"
import img25 from "assets/images/magic-circle.png"
import img26 from "assets/images/medeival-town-skyline-dark.png"
import img27 from "assets/images/medeival-town-skyline.png"
import img28 from "assets/images/minus-circle.png"
import img29 from "assets/images/paint-swatch-2.png"
import img30 from "assets/images/edit-icon.png"
import img31 from "assets/images/plus-circle.png"
import img32 from "assets/images/quill-drawing-dark.png"
import img33 from "assets/images/quill-drawing.png"
import img34 from "assets/images/scratch-wallpaper-color.png"
import img35 from "assets/images/scratch-wallpaper-dark.png"
import img36 from "assets/images/scratch-wallpaper.png"
import img37 from "assets/images/spellbook-dark.png"
import img38 from "assets/images/spellbook.png"
import img39 from "assets/images/star-circle-dark.png"
import img40 from "assets/images/star-circle.png"
import img41 from "assets/images/star-mode-icon.png"
import img42 from "assets/images/sun-mode-icon.png"
import img43 from "assets/images/sun-shine-dark.png"
import img44 from "assets/images/sun-shine.png"
import img45 from "assets/images/tavern-exterior-dark.png"
import img46 from "assets/images/tavern-exterior.png"
import img47 from "assets/images/triangle-icon.png"
import img48 from "assets/images/dice-sizes-dark.png"

const manifest = [
img1,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
img9,
img10,
img11,
img12,
img13,
img14,
img15,
img16,
img17,
img18,
img19,
img20,
img21,
img22,
img23,
img24,
img25,
img26,
img27,
img28,
img29,
img30,
img31,
img32,
img33,
img34,
img35,
img36,
img37,
img38,
img39,
img40,
img41,
img42,
img43,
img44,
img45,
img46,
img47,
img48
]

async function resolveImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image().src = src
        img.onload( resolve(img) )
        img.onerror( reject(src) )
    })
}

export function usePreloadImages() {
    const [imgsCompleted, setImgsCompleted] = useState(0)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        const preloadIt = async () => {
            manifest.forEach(async (imgSrc) => {
                await resolveImage(imgSrc)
                setImgsCompleted(prev => prev + 1)
            })
        }
        preloadIt()
    }, [])

    useEffect(() => {
        // console.log({imgsCompleted})
        setComplete(imgsCompleted === manifest.length)
    }, [imgsCompleted])

    return [ complete ]
}