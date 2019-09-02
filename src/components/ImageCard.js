//Import libraries
import React from 'react';

//Component
class ImageCard extends React.Component {
    //Constructor
    constructor(props) {
        super(props);

        //State
        this.state = { spans: 0 };

        //Creates reference to image
        this.imageRef = React.createRef();
    }

    //Lifecycle
    componentDidMount() {
        //Waits until the image is loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    //Set height spans
    setSpans = () => {
        //Variables
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        this.setState({ spans });
    }

    //Render
    render() {
        //Variables
        const { description, urls } = this.props.image;

        //Return render (places reference to instance)
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description}  src={urls.regular} />
            </div>
        );
    }
}

//Exports component
export default ImageCard;