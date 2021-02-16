import React, { PropsWithChildren } from "react";

import { Button } from "@material-ui/core";

import useStyles from "./RoundedButton.styles";

interface RoundedProps extends PropsWithChildren<any> {
  size?: "small" | "medium" | "large";
}

const RoundedButton = ({ children, size }: RoundedProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Button size={size} className={classes.button}>
      {children}
    </Button>
  );
};

RoundedButton.defaultProps = {
  size: "small"
};

export default RoundedButton;
