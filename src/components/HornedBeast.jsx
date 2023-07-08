// import React
import React from 'react';


// create component
class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            LikesCount: 0
        };
    }

    handleLikes = () => {
        this.setState({
            LikesCount: this.state.LikesCount + 1
        });
    };

    render() {
        return (
            <><div>
                <h2>{this.props.title}</h2>
                <img onClick={this.handleLikes}></img>
                <p>Likes: {this.state.LikesCount}</p>
                <img src={this.props.imgLink} />
                <p>{this.props.description}</p>
            </div></>
        );
    }
}

// export component
export default HornedBeast;