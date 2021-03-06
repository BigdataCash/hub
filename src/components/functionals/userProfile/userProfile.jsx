import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

// Import provider Hoc's
import { withFirebase } from '../../../providers/firebase';

import injectSheet from 'react-jss';
import { Button, Grid, FormGroup } from '@material-ui/core';
import swal from 'sweetalert';
import { Input } from 'antd';

// Import Styles
import userProfileStyle from './userProfile.style';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      image: null,
      imageFile: null,
      showUserNameMsg: false,
      showEmailMsg: false
    };

    this.submitProfile = this.submitProfile.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.checkUserEmail = this.checkUserEmail.bind(this);
  }

  // add Firebase as global var in component
  firebase = this.props.firebase;

  async submitProfile() {
    const username = this.registerName.value;
    const email = this.registerEmail.value;
    const image = this.state.imageFile;
    let updatedUser = {};
    updatedUser.username = username ? username : null;
    updatedUser.email = email ? email : null;

    if (email || username || image) {
      if (image != null) {
        const fileName = this.state.imageFile.name;
        const file = this.state.imageFile;
        const uploadTask = await this.firebase.storageAvatar(fileName, file);
        const downloadURL = uploadTask.downloadURL;
        updatedUser.photoURL = downloadURL;
        this.props.onUpdateProfile(updatedUser);
        this.registerName.value = '';
        this.registerEmail.value = '';
        this.setState({ disabled: true });
        return;
      }
      this.props.onUpdateProfile(updatedUser);
      this.registerName.value = '';
      this.registerEmail.value = '';
      this.setState({
        disabled: false
      });
    }
  }

  checkUserEmail(event) {
    const email = event.target.value;
    const disabled = email ? false : true;
    this.setState({ disabled });
  }

  async checkUsername(event) {
    const username = this.registerName.value.trim();
    if (event.target.value.match(/^[0-9a-zA-Z_ ]*$/) == null) {
      swal({
        title: 'Oops...',
        text: 'Must be an alphanumeric character',
        icon: 'warning'
      });

      return;
    }

    if (event.target.value) {
      const isUsernameAvailable = await this.firebase.isUsernameAvailable(
        username
      );
      if (isUsernameAvailable) {
        this.setState({
          disabled: false,
          showUserNameMsg: true
        });
      } else {
        this.setState({
          disabled: true,
          showUserNameMsg: true
        });
      }
    } else {
      this.setState({
        showUserNameMsg: false,
        disabled: true
      });
    }
  }

  // upload profile image function
  onImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result, imageFile: file });
      };
      reader.readAsDataURL(event.target.files[0]);
      this.setState({ disabled: false });
    }
  }

  render() {
    const { classes, deviceType, currentUser } = this.props;
    const { showEmailMsg, showUserNameMsg } = this.state;
    //Platform style switcher
    const style = deviceType === 'mobile' ? classes.mRoot : classes.root;
    const userName = currentUser ? currentUser.displayName : '';
    const userEmail = currentUser ? currentUser.email : '';
    const avatar =
      currentUser && currentUser.photoURL
        ? this.props.currentUser.photoURL
        : require('../../../assets/img/no-user-image.gif');

    return (
      <div className={style}>
        <Grid container className="profile-grid">
          {/* profile text */}
          <Grid item md={12}>
            <h1 className="profile-heading">Profile</h1>
          </Grid>

          {/* profile image grid */}
          <Grid md={3} lg={2} item className="profile-image-grid">
            <div className="avatar-container upload-image-container">
              {this.state.image === null ? (
                <img src={avatar} alt="no user" className="user-image" />
              ) : (
                <img
                  src={this.state.image}
                  alt="no user"
                  className="user-image"
                />
              )}
            </div>
            <span className="change-photo-btn upload-image-container">
              <Input
                type="file"
                onChange={this.onImageChange.bind(this)}
                className="filetype"
                id="group_image"
              />
              <i className="link-color">click to change photo</i>
            </span>
          </Grid>

          {/* profile credential grid */}
          <Grid md={8} lg={9} item className="profile-credential-grid">
            {/* For User Name */}
            <FormGroup className="form-group">
              <span htmlFor="user-name" className="label">
                {`Username: `}
              </span>
              <input
                ref={input => (this.registerName = input)}
                name="usernames"
                id="user-name"
                className="input-field"
                placeholder={userName}
                onChange={this.checkUsername}
              />
              {showUserNameMsg && (
                <span className="validation-message">
                  {this.state.disabled === true ? 'Not Available' : 'Available'}
                </span>
              )}
            </FormGroup>

            {/* For User Email */}
            <FormGroup className="form-group">
              <span htmlFor="user-email" className="label">
                {`Email: `}
              </span>
              <input
                ref={input => (this.registerEmail = input)}
                name="email"
                id="user-email"
                className="input-field"
                placeholder={userEmail}
                onChange={this.checkUserEmail}
              />
              {showEmailMsg && (
                <span className="validation-message">
                  {this.state.disabled === true ? 'Not Available' : 'Available'}
                </span>
              )}
            </FormGroup>
          </Grid>
          <Grid item md={9} lg={12} className="update-button-grid">
            <Button
              onClick={this.submitProfile}
              variant="raised"
              color="primary"
              className="update-button"
              disabled={this.state.disabled}
            >
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    currentUser: state.app.currentUser
  };
};

const dispatchToProps = dispatch => {
  return {};
};

export default compose(
  withFirebase,
  connect(
    stateToProps,
    dispatchToProps
  ),
  injectSheet(userProfileStyle)
)(UserProfile);
