import React from 'react';

import "../css/UserProfile.css";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";

import Killinois from "../../public/killinois.jpg";

class UserProfile extends React.Component {

    componentWillUpdate = () => {
        window.FB.XFBML.parse(this.refs.fblike);
    };

    render() {
        let viewModel = this.props.viewModel;

        let imageStyle = {
            "background-image": "url(" + Killinois + ")",
        };


        return (
            <div className="UserProfile-maincontainer">
                <div className="UserProfile-leftcolumn">
                    <div style={imageStyle} className="UserProfile-leftcolumn-userImage">
                    </div>
                    <div className="UserProfile-leftcolumn-userLinks">
                        <div className="UserProfile-leftcolumn-userLinks-primarytext">{viewModel.name}</div>
                        <div className="UserProfile-leftcolumn-userLinks-social">
                            <div className="fb-like" data-href={viewModel.facebookUrl}
                                 data-layout="button_count" data-action="like" data-size="small" data-show-faces="true"
                                 data-share="true"></div>
                        </div>
                        <Paper zDepth={1} className="UserProfile-leftcolumn-userLinks-paper">
                            <div>
                                <FontIcon className="fa fa-soundcloud "/>
                            </div>
                            <div>
                                {viewModel.soundcloudUrl}
                            </div>
                        </Paper>
                        <Paper zDepth={1} className="UserProfile-leftcolumn-userLinks-paper">
                            <div>
                                {viewModel.bio}
                            </div>
                        </Paper>

                    </div>
                </div>
                <div className="UserProfile-rightcolumn">
                    {/*<div className="UserProfile-rightcolumn-name">*/}
                    {/*</div>*/}
                    <Paper className="UserProfile-rightcolumn-paper" zDepth={1}>
                        <div>
                            <iframe width="100%" height="200" scrolling="no" frameBorder="no"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/301774116&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258156220&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205068266&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="200" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299116288&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                        </div>

                    </Paper>
                    <Paper className="UserProfile-rightcolumn-paper" zDepth={1}>
                        <div>
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/72rJQLXICM4" frameBorder="0" allowFullScreen="true"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/5CDdh41LhQ"
                                    frameBorder="0" allowFullScreen="true"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/v=oc3oFzzKqTk" frameBorder="0" allowFullScreen="true"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/y4KgN4G9KcM" frameBorder="0" allowFullScreen="true"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="200" src="https://www.youtube.com/embed/x_F_slqYBD0" frameBorder="0" allowFullScreen="true"></iframe>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }

}

UserProfile.propTypes = {viewModel: React.PropTypes.object};
UserProfile.defaultProps = {
    viewModel: {
        imageUrl: Killinois,
        soundcloudUrl: "https://www.facebook.com/StaffInfection",
        facebookUrl: "https://www.facebook.com/itmemusic/",
        name: "Killinois",
        bio: "A honeybee named Barry B. Benson (Jerry Seinfeld) has recently graduated from college and is about to enter the hive's Honex Industries honey-making workforce alongside his best friend Adam Flayman (Matthew Broderick). Barry is initially excited to join the workforce, but his courageous non-conformist attitude emerges upon discovering that his choice of job will never change once picked. Later, the two bees run into a group of Pollen Jocks, bees who collect pollen from flowers outside the hive. The Jocks offer to take Barry outside the hive to a flower patch, and he accepts. While on his first pollen-gathering expedition in New York City, Barry gets lost in the rain, and ends up on the balcony of a human florist named Vanessa (Renée Zellweger). Upon noticing Barry, Vanessa's boyfriend Ken (Patrick Warburton) attempts to squash him, but Vanessa gently catches and releases Barry outside the window, saving his life."
    }
};


export default UserProfile;