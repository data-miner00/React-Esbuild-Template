import React from "react";

function Profile(): JSX.Element {
  return (
    <>
      <h1>Profile page {process.env.REACT_APP_SECRET}</h1>
    </>
  );
}

export default Profile;
