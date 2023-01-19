import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonIcon from "@mui/icons-material/Person";

export const routes = [
  {
    id: 0,
    text: "Главная",
    route: "/",
    icon: HomeOutlinedIcon,
    iconFocused: HomeIcon,
  },
  {
    id: 1,
    text: "Поиск",
    route: "/search",
    icon: SearchOutlinedIcon,
    iconFocused: SearchOutlinedIcon,
  },
  {
    id: 2,
    text: "Заказы",
    route: "/orders",
    icon: ViewInArRoundedIcon,
    iconFocused: ViewInArRoundedIcon,
  },
  {
    id: 3,
    text: "Корзина",
    route: "/basket",
    icon: ShoppingCartOutlinedIcon,
    iconFocused: ShoppingCartIcon,
  },
  {
    id: 4,
    text: "Профиль",
    route: "/profile",
    icon: PermIdentityIcon,
    iconFocused: PersonIcon,
  },
];
