import { FC, useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import CommentsTabOneSkeleton from "./CommentsTabOneSkeleton";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import CommentsTabCreate from "../CommentsTabCreate";
import { IOneFeedback } from "@src/types/Feedback/IFeedback";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  row: IOneFeedback;
}

const CommentsTabOne: FC<Props> = ({ row }) => {
  const { id, user, comment } = row;
  const [isOpen, setIsOpen] = useState(false);
  const [isReplyClick, setIsReplyClick] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleReplyClick = () => {
    setIsReplyClick(!isReplyClick);
  };

  // const queryParams = {
  //   parentId: id,
  // };

  // const { data, isLoading, isSuccess } = useGetCommentsQuery(queryParams, {
  //   skip: isOpen ? false : true,
  // });

  return (
    <Stack spacing={0.5}>
      <Stack
        key={id}
        spacing={1}
        sx={{
          // height: "122px",
          padding: "16px",
          borderRadius: "12px",
          backgroundColor: "common.white",
        }}
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignContent={"end"}
        >
          <Typography
            alignSelf={"center"}
            sx={{ fontSize: 16, fontWeight: 600 }}
          >
            {`Пользователь ${
              row.user.profile?.firstName === null
                ? ""
                : row.user.profile.firstName
            }`}
          </Typography>
          <IconButton color="primary" sx={{ padding: 0 }}>
            <FavoriteBorderIcon />
          </IconButton>
        </Stack>

        <Stack>
          <Rating
            name="text-feedback"
            value={row.star}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Stack>

        <Typography
          sx={{
            color: "secondary.900",
            width: "100%",
            wordWrap: "break-word",
          }}
        >
          {comment}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CommentsTabOne;
