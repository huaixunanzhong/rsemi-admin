import Audio from "@/assets/svg/file-audio.svg?react";
import Excel from "@/assets/svg/file-excel.svg?react";
import Image from "@/assets/svg/file-img.svg?react";
import Pdf from "@/assets/svg/file-pdf.svg?react";
import Ppt from "@/assets/svg/file-ppt.svg?react";
import Text from "@/assets/svg/file-text.svg?react";
import Unknown from "@/assets/svg/file-unknown.svg?react";
import Video from "@/assets/svg/file-video.svg?react";
import Word from "@/assets/svg/file-word.svg?react";
import Zip from "@/assets/svg/file-zip.svg?react";

// 文件后缀名分类
const imageExt = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "svg",
  "bmp",
  "heic"
] as const;
const videoExt = ["mp4", "mov", "avi", "mkv", "webm"] as const;
const audioExt = ["mp3", "wav", "aac", "flac"] as const;
const pdfExt = ["pdf"] as const;
const excelExt = ["xls", "xlsx"] as const;
const wordExt = ["doc", "docx"] as const;
const pptExt = ["ppt", "pptx"] as const;
const textExt = ["txt", "md", "json", "csv", "xml"] as const;
const zipExt = ["zip", "rar", "7z", "tar", "gz"] as const;

// 文件类型枚举
export enum FileType {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Pdf = "pdf",
  Excel = "excel",
  Word = "word",
  Ppt = "ppt",
  Text = "text",
  Zip = "zip",
  Unknown = "unknown"
}

// 文件类型与后缀名映射
export const EXT_MAP: Record<FileType, readonly string[]> = {
  [FileType.Image]: imageExt,
  [FileType.Video]: videoExt,
  [FileType.Audio]: audioExt,
  [FileType.Pdf]: pdfExt,
  [FileType.Excel]: excelExt,
  [FileType.Word]: wordExt,
  [FileType.Ppt]: pptExt,
  [FileType.Text]: textExt,
  [FileType.Zip]: zipExt,
  [FileType.Unknown]: ["unknown"]
} as const;

// 文件类型与图标映射
export const FILE_ICON_MAP: Record<FileType, React.ReactNode> = {
  [FileType.Image]: <Image />,
  [FileType.Video]: <Video />,
  [FileType.Audio]: <Audio />,
  [FileType.Pdf]: <Pdf />,
  [FileType.Excel]: <Excel />,
  [FileType.Word]: <Word />,
  [FileType.Ppt]: <Ppt />,
  [FileType.Text]: <Text />,
  [FileType.Zip]: <Zip />,
  [FileType.Unknown]: <Unknown />
};
