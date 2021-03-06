import React from 'react';
import { connect } from "react-redux";
import Profile from "./profile";
import { addPost, updateNewPostText, setUserProfileThunk } from "../../redux/reducers/profileReduсer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;

        if (!userId) {
            userId = 2;
        }
        this.props.setUserProfileThunk(userId)
    }

    render() {
        return (
            <div>
                <Profile newPostText={this.props.newPostText}
                         arrPosts={this.props.arrPosts}
                         profile={this.props.profile}
                         addPost={this.props.addPost}
                         updateNewPostText={this.props.updateNewPostText}
                />
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        arrPosts: state.profilePage.arrPosts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfileThunk})(WithUrlDataContainerComponent);