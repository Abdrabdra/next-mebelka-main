import { FC } from "react";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import CommentsTabSkeleton from "./CommentsTabSkeleton";
import CommentsTabOne from "./CommentsTabOne";
import CommentsTabCreate from "./CommentsTabCreate";
import { useRouter } from "next/router";
import { useGetFeedbackQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints";

interface Props {
  commentsCount: number;
}

const CommentsTab: FC<Props> = ({ commentsCount }) => {
  const router = useRouter();

  const { id } = router.query;

  const queryParams = {
    productId: id,
  };

  console.log(id);

  const { data, isLoading, isSuccess } = useGetFeedbackQuery(queryParams);

  return (
    <Stack spacing={4}>
      {commentsCount === 0 ? (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "122px",
            padding: "16px",
            borderRadius: "12px",
            backgroundColor: "common.white",
          }}
        >
          Нет Комментарий
        </Stack>
      ) : isLoading ? (
        <CommentsTabSkeleton />
      ) : isSuccess ? (
        <Stack spacing={2}>
          <CommentsTabCreate />

          <Stack spacing={4}>
            {/* {data.data.map((row) => (
              <CommentsTabOne key={row.id} row={row} />
            ))} */}
          </Stack>
        </Stack>
      ) : (
        <Stack>Error</Stack>
      )}
    </Stack>
  );
};

export default CommentsTab;
