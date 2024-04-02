/**
 * 图文数据
 */
export type LogType = {
  /**
   * 时间
   */
  date: string;
  /**
   * 多图图片信息
   */
  images: string[];

  /**
   * 文字
   */
  text: string | undefined;
};