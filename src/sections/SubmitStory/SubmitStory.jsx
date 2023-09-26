import "./SubmitStory.scss";

import React from "react";
import SubmitForm from "../../components/SubmitForm";

export default function SubmitStory() {
  return (
    <div className="submit-story-page">
      <h1 className="styled-title section">Submit a story</h1>
      <p className="sub-text">
        By submitting your story, you agree to allow Southern Cannibal the
        commercial use of the story typed herein, to edit or change and publish
        on all Southern Cannibal related content. If your story is used in any
        southern cannibal content there are no repeals. The content will NOT be
        removed just because you change your mind. Please keep that in mind when
        submitting your story.
      </p>
      <SubmitForm />
    </div>
  );
}
