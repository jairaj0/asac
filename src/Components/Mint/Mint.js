import React from 'react';
import { Countdown } from '../Countdown/Countdown';
import Mintbox from '../Mintbox/Mintbox';
import MintHeader from '../MintHeader/MintHeader';
import './Mint.scss';

const Mint = () => {
  return (
    <section id='mint' className='mintS'>
    <MintHeader />
    <div className="timer flex-center">
    <Countdown  />
    </div>
    <Mintbox />
    </section>
  )
}

export default Mint