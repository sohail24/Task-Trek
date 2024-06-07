import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStlye = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JAVASCRIPT: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    //for all browsers the default type is subtmit so when we select the tag
    //it gets submitted the entire form of creating the tasks
    //so we change the button type as button for the tags
    <button
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
      style={selected ? tagStlye[tagName] : tagStlye.default}
    >
      {tagName}
    </button>
  );
};

export default Tag;
