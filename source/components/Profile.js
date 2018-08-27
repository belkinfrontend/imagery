import React from 'react';

// Instruments
import avatar from '../theme/assets/images/canguru';

export default class Profile extends React.Component {
    render() {
        return (
            <section className = 'profile'>
                <div className = 'wrap-logo'>
                    <img src = {avatar} alt = 'avatar' />
                </div>
                
                <div>
                   <div className = 'nickname'>
                       <span>canguroenglish</span>
                   </div>

                   <div className = 'stats'>
                       <span>
                           <span>1184&nbsp;</span>
                           <span>posts</span>
                       </span>
                       <span>
                           <span>2.5 million&nbsp;</span>
                           <span>followers</span>
                       </span>
                       <span>
                           <span>37&nbsp;</span>
                           <span>following</span>
                       </span>
                   </div>

                   <div className = 'name'>
                       Christian Saunders
                   </div>
                </div>
               
                
            </section>
        );
    } 
}