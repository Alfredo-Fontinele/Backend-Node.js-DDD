export const isValidDocumet = (document: string) => {
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regexCPF.test(document);
};
