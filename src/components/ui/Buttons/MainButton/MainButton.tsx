import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";

export type CustomButtonProps = {
  bgcolor?: string;
  bradius?: string;
  fsize?: string;
  tcolor?: string;
  jc?: string;
  hovertcolor?: string;
  hoverbgcolor?: string;
} & ButtonProps;

const MainButton = styled((props: CustomButtonProps) => (
  <Button
    variant="outlined"
    fullWidth
    {...props}
    sx={{
      backgroundColor: props.bgcolor ? props.bgcolor : "primary.main",
      borderRadius: props.bradius ? props.bradius : "10px",
      fontSize: props.fsize ? props.fsize : "16px",
      color: props.tcolor ? props.tcolor : "#fff",
      justifyContent: props.jc ? props.jc : "center",

      "&:focus, &:hover": {
        borderColor: "secondary.300",
        backgroundColor: props.hoverbgcolor
          ? props.hoverbgcolor
          : "secondary.300",
        color: props.hovertcolor ? props.hovertcolor : "#fff",
      },
    }}
  />
))(({ theme }) => ({
  height: "50px",
  lineHeight: "20px",
  fontWeight: 600,
  textTransform: "capitalize",
  alignItems: "center",
  borderColor: "transparent",

  transition: theme.transitions.create([
    "border-color",
    "background-color",
    "box-shadow",
  ]),

  "&:focus, &:hover": {
    boxShadow: `${alpha(theme.palette.secondary[300], 0.9)} 0 0 0 0.2rem`,
    borderColor: theme.palette.secondary[300],
    backgroundColor: theme.palette.secondary[300],
  },

  ".Mui-disabled": {
    color: "#fff",
    backgroundColor: "#fff",
  },
}));

export default MainButton;
