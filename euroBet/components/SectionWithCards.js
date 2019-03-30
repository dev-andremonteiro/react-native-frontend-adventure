import React from "react";

import { Block, Text } from "../components";

export default class SectionWithCards extends React.Component {
  render() {
    const { title, inside } = this.props;
    const stringOrArray = typeof title === "string";

    return (
      <Block flex={false}>
        <Block
          flex={false}
          row
          center
          space={"between"}
          style={
            title ? { paddingBottom: 10, paddingTop: 15 } : { paddingTop: 10 }
          }
        >
          {title &&
            (stringOrArray ? (
              <Text>{title}</Text>
            ) : (
              title.map((i, n) => <Text key={n}>{i}</Text>)
            ))}
        </Block>
        {inside}
      </Block>
    );
  }
}
