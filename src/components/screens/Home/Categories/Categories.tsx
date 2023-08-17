import { Box, Button, Icon, Stack, TableRow, Typography } from "@mui/material";

import WindowIcon from "@mui/icons-material/Window";
import LightIcon from "@mui/icons-material/Light";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import ScienceIcon from "@mui/icons-material/Science";
import BedIcon from "@mui/icons-material/Bed";
import { useRouter } from "next/router";
import { useGetCategoryQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";
import { useEffect, useState } from "react";
import { $image_api } from "@api/index";

const category = {
  id: 0,
  title: "Категории",
  icon: "/svg/categories.svg",
  link: "/category",
};

const Categories = () => {
  const { data, isSuccess, isLoading, isError } = useGetCategoryQuery("");
  const router = useRouter();

  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: "16px" }}>
      {isLoading ? (
        "Загрузка"
      ) : isError ? (
        "Ошибка"
      ) : isSuccess ? (
        <>
          {/* <Stack
            spacing={1}
            sx={{
              flex: "1 1 calc(33.333% - 16px * 2 / 3)",
            }}
          >
            <Button
              onClick={() => router.push(category.link)}
              sx={{
                backgroundColor: "secondary.main",
                borderRadius: "12px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component={"img"}
                src={category.icon}
                sx={{
                  width: "100px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Button>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "14.32px",
                letterSpacing: "-0.33px",
                color: "primary.main",
              }}
            >
              {category.title}
            </Typography>
          </Stack> */}

          {data.data.map((row) => (
            <Stack
              key={row.id}
              spacing={1}
              sx={{
                flex: "1 1 calc(33.333% - 16px * 2 / 3)",
              }}
            >
              <Button
                onClick={() => router.push(`/category/${row.id}`)}
                key={row.id}
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "12px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  src={`${$image_api}/${row.icon}`}
                  sx={{
                    width: "100px",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Button>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "14.32px",
                  letterSpacing: "-0.33px",
                  color: "primary.main",
                }}
              >
                {row.title}
              </Typography>
            </Stack>
          ))}
        </>
      ) : null}
    </Stack>
  );
};

export default Categories;
