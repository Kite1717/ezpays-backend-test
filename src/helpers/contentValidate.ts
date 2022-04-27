import { FileContent, ValidatorResponse } from "file";

const isFileContent = (object: any): object is FileContent =>
  "user" in object && "amount" in object && Object.keys(object).length === 2;

export const contentValidator = (content: any): ValidatorResponse => {
  if (!Array.isArray(content)) return { message: "Content must be array.", isValid: false } as ValidatorResponse;

  let flag: boolean = true;
  for (let i = 0; i < content.length; i++)
    if (!isFileContent(content[i])) {
      flag = false;
      break;
    }

  return {
    isValid: flag,
    message: flag
      ? "File content is valid."
      : "File content must be valid. Example content : {user: 'test',amount: 432}.",
  };
};
