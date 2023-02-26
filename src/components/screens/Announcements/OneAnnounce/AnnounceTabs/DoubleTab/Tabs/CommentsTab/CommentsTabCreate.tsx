import { useRouter } from "next/router";
import { Formik } from "formik";
import { Rating, Stack } from "@mui/material";

import { MainInput } from "@components/ui/Inputs";
import { MainButton } from "@components/ui/Buttons";
import { FC, useState } from "react";
import { useCreateFeedbackMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints";

interface Props {
  parentCommentId?: number;
}

const CommentsTabCreate: FC<Props> = ({ parentCommentId }) => {
  const router = useRouter();
  const { announceId } = router.query;

  const [create] = useCreateFeedbackMutation();

  const [value, setValue] = useState<number | null>(2);

  const body = announceId && {
    comment: "",
    star: 0,
    productId: Number(announceId),
  };

  return (
    <Stack
      sx={{
        padding: "16px",
        borderRadius: "12px",
        backgroundColor: "common.white",
      }}
    >
      <Formik
        initialValues={{ comment: "" }}
        onSubmit={(values) => {
          body && create({ ...body, ...values });
        }}
      >
        {({ handleSubmit, handleChange, errors, values }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <MainInput
                bgcolor="grey.200"
                type="text"
                onChange={handleChange}
                value={values.comment}
                name="comment"
                label={"Напишите отзыв"}
              />
              <MainButton type="submit">Отправить</MainButton>
            </Stack>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default CommentsTabCreate;
