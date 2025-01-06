import { useDarkModeContext } from 'context/DarkModeContext'

import sun from 'assets/images/sun-shine.png'
import sunDark from 'assets/images/sun-shine-dark.png'
import stars from 'assets/images/star-circle.png'
import starsDark from 'assets/images/star-circle-dark.png'
import clock from 'assets/images/clock-abstract.png'
import clockDark from 'assets/images/clock-abstract-dark.png'

function LoadingAnimation() {

    const { darkMode } = useDarkModeContext()

    if (!darkMode) { // light mode

        return (
            <div className="loading-animation">

                <img className='inner-loading-animation' src={sun} />
                <img className='middle-loading-animation' src={clock} />
                <img className='outer-loading-animation' src={stars} />

            </div>
        )
        
    } else { // dark mode

        return (
            <div className="loading-animation">

                <img className='inner-loading-animation' src={sunDark} />
                <img className='middle-loading-animation' src={clockDark} />
                <img className='outer-loading-animation' src={starsDark} />

            </div>
        )

    }

}

export default LoadingAnimation