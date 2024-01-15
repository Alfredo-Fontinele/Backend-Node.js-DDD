import * as yup from "yup";

export const getAccountInfo = yup.object({
  document: yup
    .string()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "must be document format: 000.000.000-00"
    )
    .required(),
});

export type GetAccountInfo = yup.InferType<typeof getAccountInfo>;
