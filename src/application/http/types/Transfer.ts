import * as yup from "yup";

export const transferSchema = yup.object({
  accountFrom: yup
    .string()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "must be document format: 000.000.000-00"
    )
    .required(),
  accountTo: yup
    .string()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "must be document format: 000.000.000-00"
    )
    .required(),
  amount: yup.number().required(),
});

export type Transfer = yup.InferType<typeof transferSchema>;
