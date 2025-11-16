import { FileType } from "@/constant/file";
import { EXT_MAP } from "@/constant/file";
import { FILE_ICON_MAP } from "@/constant/file";

/** 获取文件后缀名 */
export const getFileExt = (filename: string) => {
  const parts = filename.split(".");
  return parts.length > 1 ? parts.pop()!.toLowerCase() : "unknown";
};

/** 通过后缀名获取文件svg类型 */
export function getFileTypeByExt(filename: string): FileType {
  const lower = getFileExt(filename);

  for (const type of Object.values(FileType)) {
    if (EXT_MAP[type].includes(lower)) {
      return type;
    }
  }

  return FileType.Unknown;
}

/** 获取文件类型对应的svg */
export const getFileIcon = (fileName: string) => {
  const type = getFileTypeByExt(fileName);
  return FILE_ICON_MAP[type];
};
