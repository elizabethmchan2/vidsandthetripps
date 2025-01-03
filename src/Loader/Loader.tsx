import { Platter } from '../assets/Platter';
import { Tonearm } from '../assets/Tonearm';
import { Record } from '../assets/Record';
import { RecordContrast } from '../assets/RecordContrast';
import './Loader.scss';

// TODO: fix css modules
const Loader = () => {

  return (
    <div className='loading'>
        <div className='wrapper'>
            <Record className='record'/>
            <Platter className='platter'/>
            <RecordContrast className='recordContrast' />
            <Tonearm className='tonearm'/>
        </div>
    </div>
  )
}

export default Loader;