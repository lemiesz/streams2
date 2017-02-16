import React from "react";
import Like from "material-ui/svg-icons/action/favorite-border";

import "../../css/UserTile.css";
import PlaceHolder from "../../../public/placeholderUser.jpeg";

class UserTile extends React.Component {

    render() {
        return(
            <div onTouchTap={this.props.onTouchTap} className="UserTile-tile">
                <div className="UserTile-image">
                    <img src={this.props.viewModel.imageUrl} />
                </div>
                <div className="UserTile-info">
                    <div>
                        {this.props.viewModel.name}
                    </div>
                    <div>
                        {this.props.viewModel.location}
                    </div>
                    <div className="UserTile-info-likes">
                        <Like/>
                        <div className="UserTile-info-likes-text">{this.props.viewModel.likes}</div>
                    </div>
                </div>
            </div>
        )
    }

}

UserTile.propTypes = { viewModel: React.PropTypes.object };
UserTile.defaultProps = {
    viewModel: {
        name: "DJ Name",
        location: "Seattle, WA",
        likes: "1006",
        imageUrl: PlaceHolder
    }
}

export default UserTile;