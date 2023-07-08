// import React
import React from 'react';


// create component
class HornedBeast extends React.Component {
    render() {
        return (
            <><div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgLink} />
                <p>{this.props.description}</p>
            </div></>
        );
    }
}

// export component
export default HornedBeast;