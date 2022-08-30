import { withStyles } from '$styleguide/theme';

const signOtp = withStyles((({ palette, typography, spacing }) => ({
    inputPadding:{
        labelStyles:{
            padding: spacing[0],
            marginBottom: spacing[0],
        }
    }
  }))
  
);

export default signOtp;
