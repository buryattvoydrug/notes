export enum InlineStyle {
  BOLD = "BOLD",
  ITALIC = "ITALIC",
  UNDERLINE = "UNDERLINE",
  STRIKETHROUGH = "STRIKETHROUGH",
}

export const CUSTOM_STYLE_MAP = {
  [InlineStyle.STRIKETHROUGH]: {
    backgroundColor: "#F7F6F3",
    color: "#A41E68",
  },
};