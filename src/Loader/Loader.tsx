import { Platter } from '../assets/Platter';
import { Tonearm } from '../assets/Tonearm';
import { Vinyl } from '../assets/Vinyl';
import VinylContrast from '../assets/VinylContrast';
import './Loading.scss';

// TODO: fix css modules
const Loader = () => {
  return (
    <div className='loading'>
        <div className='wrapper'>
            <Vinyl className='vinyl'/>
            <Platter className='platter'/>
            <VinylContrast className='vinylContrast' />
            <Tonearm className='tonearm'/>
        </div>
    </div>
  )
}

export default Loader;