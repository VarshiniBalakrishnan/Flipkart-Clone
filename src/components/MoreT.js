import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { MdMonetizationOn } from 'react-icons/md';
import { MdLiveHelp } from 'react-icons/md';
import { IoTrendingUp } from 'react-icons/io5'; 
import { MdGetApp } from 'react-icons/md';
const MoreT = () => {
  return (
    <div className='moret'>
        <div className='more__in'>
            <IoNotifications />
            <p>Notifications Preferences</p>
        </div>
        <hr />
        <div className='more__in'>
            <MdMonetizationOn />
            <p>Sell on Flipkart</p>
        </div>
        <hr />
        <div className='more__in'>
            <MdLiveHelp />
            <p>24*7 Customer Care</p>
            <hr />
        </div>
        <div className='more__in'>
            <IoTrendingUp />
            <p>Advertise</p>
        </div>
        <hr />
        <div className='more__in'>
            <MdGetApp />
            <p>Download app</p>
        </div>
        
    </div>
  );
};

export default MoreT;

