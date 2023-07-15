// import React
import React from 'react';
import Card from 'react-bootstrap/Card';


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

    handleClick = () => {
        this.props.handleShowModal(this.props.beast)
    }

    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Title onClick={this.handleLikes}>{this.props.title}</Card.Title>
                <p>Likes: {this.state.LikesCount}</p>
                <Card.Img src={this.props.ImgLink} onClick={this.handleClick} />
                <Card.Text>{this.props.description}</Card.Text>
            </Card>
        );
    }
}

// export component
export default HornedBeast