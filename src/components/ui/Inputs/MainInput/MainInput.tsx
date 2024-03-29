import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export type CustomTextFieldProps = {
  bgcolor?: string;
  bradius?: string;
  color?: string;
  bordercolor?: string;
  height?: string;
} & TextFieldProps;

const MainInput = styled((props: CustomTextFieldProps) => (
  <TextField
    variant="outlined"
    fullWidth
    hiddenLabel
    {...props}
    sx={{
      "& .MuiOutlinedInput-root": {
        height: props.height ? props.height : "50px",

        backgroundColor: props.bgcolor ? props.bgcolor : "secondary.main",
        borderRadius: props.bradius ? props.bradius : "10px",
        color: props.color ? props.color : "common.black",

        "& fieldset": {
          borderColor: props.bordercolor ? props.bordercolor : "transparent",
        },
      },
    }}
  />
))(({ theme }) => ({
  // backgroundColor: "#E4FFF9",

  "& .MuiOutlinedInput-root": {
    border: "none",

    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    // "&.Mui-focused fieldset": {
    // 	borderColor: "transparent"
    // },

    "&.Mui-focused .MuiInputLabel-root": {
      color: "red",
    },
  },

  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
}));

export default MainInput;
