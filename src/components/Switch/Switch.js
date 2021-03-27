import { Switch as SwitchMaterial, withStyles } from "@material-ui/core";

import { COLORS } from "../../theme/theme";

const Switch = withStyles({
  switchBase: {
    "&$checked": {
      color: COLORS.PRIMARY_COLOR,
    },
    "&$checked + $track": {
      backgroundColor: COLORS.PRIMARY_COLOR,
    },
  },
  checked: {},
  track: {},
})(SwitchMaterial);

export default Switch;
