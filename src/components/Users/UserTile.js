import React from "react";
import Like from "material-ui/svg-icons/action/favorite-border";

import "../../css/UserTile.css";
import PlaceHolder from "../../../public/placeholderUser.jpeg";

class UserTile extends React.Component {

    render() {
        return(
            <div className="UserTile-tile">
                <div className="UserTile-image">
                    <img src={PlaceHolder} />
                </div>
                <div className="UserTile-info">
                    <div>
                        DJ name
                    </div>
                    <div>
                        Seattle, WA
                    </div>
                    <div className="UserTile-info-likes">
                        <Like/>
                        <div className="UserTile-info-likes-text">1006</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UserTile;