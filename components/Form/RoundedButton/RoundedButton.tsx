import React, { PropsWithChildren } from "react";

import { Button, PropTypes } from "@material-ui/core";

import useStyles from "./RoundedButton.styles";

interface RoundedProps extends PropsWithChildren<any> {
  size?: "small" | "medium" | "large";
  color?: PropTypes.Color;
}

const RoundedButton = ({
  children,
  size,
  color
}: RoundedProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Button
      color={color}
      size={size}
      variant="contained"
      className={classes.button}
    >
      {children}
    </Button>
  );
};

RoundedButton.defaultProps = {
  size: "small",
  color: "secondary"
};

export default RoundedButton;
