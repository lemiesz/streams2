import React from 'react';
import "../css/UserProfile.css";

class UserProfile extends React.Component {

    render() {
        return (
            <div className="UserProfile-maincontainer">
                 <div className="UserProfile-leftcolumn">
                    <div className="UserProfile-leftcolumn-userImage">
                    </div>
                    <div className="UserProfile-leftcolumn-userLinks">
                    </div>
                 </div>
                 <div className="UserProfile-rightcolumn">
                    <div className="UserProfile-rightcolumn-name">
                    </div>
                    <div className="UserProfile-rightcolumn-textbox">
                    </div>
                 </div>
            </div>
        )
    }

}

export default UserProfile;