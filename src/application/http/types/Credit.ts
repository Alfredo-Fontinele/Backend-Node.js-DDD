import * as yup from "yup";

export const creditSchema = yup.object({
  amount: yup.number().required(),
  document: yup
    .string()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "must be document format: 000.000.000-00"
    )
    .required(),
});

export type Credit = yup.InferType<typeof creditSchema>;
