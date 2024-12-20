import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = (props) => (
  <span style={{ color: "#AF271D" }}>{props.children}</span>
);
const TitleStyle = (props) => (
  <span style={{ fontSize: "1.5em", fontWeight: 700 }}>{props.children}</span>
);

export default {
  name: "headingPortableText",
  type: "array",
  title: "Heading portable text",
  description:
    "Use only with one block of Heading and one block of Normal text",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        {
          title: "Heading",
          value: "h2",
          component: TitleStyle,
        },
      ],
      lists: [],
      marks: {
        decorators: [
          {
            title: "Highlight",
            value: "highlight",
            icon: highlightIcon,
            component: highlightRender,
          },
        ],
        annotations: [{ type: "internalLink" }, { type: "externalLink" }],
      },
    },
  ],
};
