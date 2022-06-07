import "./SubmitStory.scss";

import React from "react";
import SubmitForm from "../../components/SubmitForm";

export default function SubmitStory() {
  return (
    <div className="submit-story-page">
      <h1 className="styled-title section">Submit a story</h1>
      <p className="sub-text">
        By submitting your story, you agree to allow Southern Cannibal the
        commercial use of the story typed herein, to edit or change for use on
        the Southern Cannibal YouTube Channel.
      </p>
      <SubmitForm />
    </div>
  );
}
