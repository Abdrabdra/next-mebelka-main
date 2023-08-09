import { Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const footerLinks = [
  {
    title: "Реквизиты",
    link: "requisites",
  },
  {
    title: "Договор оферты",
    link: "offer",
  },
  {
    title: "Агентский договор",
    link: "agency",
  },
  {
    title: "Пользовательское соглашение",
    link: "terms",
  },
  {
    title: "Политика Конфиденциальности",
    link: "policy",
  },
];

const Footer: React.FC<{ forOnePage?: boolean }> = ({ forOnePage }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "primary.main",
        padding: "20px",
        paddingBottom: forOnePage ? "101px" : "84px",
      }}
    >
      <Container>
        <Stack sx={{ color: "common.white" }}>
          {footerLinks.map((row, index) => (
            <HoverText key={index} text={row.title} link={row.link} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;

const HoverText: React.FC<{ text: string; link: string }> = ({
  text,
  link,
}) => {
  const router = useRouter();

  const handleClick = () => {
    link ? router.push(`/info/${link}`) : null;
  };

  if (link === "agency") {
    return (
      <a
        href="/files/agency.docx"
        download
        style={{ color: "white", textDecoration: "none" }}
      >
        {text}
      </a>
    );
  }

  return (
    <Typography
      onClick={handleClick}
      sx={{
        width: "max-content",
        color: "common.white",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {text}
    </Typography>
  );
};
