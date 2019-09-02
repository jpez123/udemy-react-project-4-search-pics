//Import libraries
import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

//Component
const ImageList = (props) => {
    //Loops through images and creates node object
    const images = props.images.map( (image) => {
        return <ImageCard key={image.id} image={image} />
    });

    //Returns main container with list of node items
    return <div className="image-list">{images}</div>;
};

//Export
export default ImageList;