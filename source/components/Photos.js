import React from 'react';

// Instruments
import { photos } from '../theme/assets/images/photos';

// Compotents
import Photo from './Photo';

export default class Photos extends React.Component {
    render() {
        
        const photosJSX = photos.map((photo) => {
            return <Photo src = {photo.src} key = {photo.id} secured = { photo.secured } />;
        });
                                     
        
        return (
            <section className = 'photos'>
               { photosJSX }
            </section>
        );
    } 
}