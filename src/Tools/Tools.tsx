import { useEditorApi } from '../TextEditor'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import { Button, ButtonGroup } from '@material-ui/core';
import { InlineStyle } from '../TextEditor/config';

export default function Tools() {
  const { toggleInlineStyle, hasInlineStyle } = useEditorApi()

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      margin: "20px 0"
    }}>
      <ButtonGroup 
        color="primary" 
        aria-label="outlined primary"
        >
        <Button
          variant={hasInlineStyle(InlineStyle.BOLD) ? "contained" : "outlined"}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle(InlineStyle.BOLD);
          }}
        >
          <FormatBoldIcon />
        </Button>
        <Button
          variant={hasInlineStyle(InlineStyle.ITALIC) ? "contained" : "outlined"}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle(InlineStyle.ITALIC);
          }}
        >
          <FormatItalicIcon />
        </Button>
        <Button
          variant={hasInlineStyle(InlineStyle.UNDERLINE) ? "contained" : "outlined"}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle(InlineStyle.UNDERLINE);
          }}
        >
          <FormatUnderlinedIcon />
        </Button>
        <Button
          variant={hasInlineStyle(InlineStyle.STRIKETHROUGH) ? "contained" : "outlined"}
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle(InlineStyle.STRIKETHROUGH);
          }}
        >
          <FormatStrikethroughIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
