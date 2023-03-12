import { Box } from '@material-ui/core';
import { Editor } from 'draft-js'
import { useEditorApi } from './context';

export default function TextEditor() {
  const { editorState, onChange } = useEditorApi();
  
  return (
    <div>
      <Box
        sx={{
          borderBottom: "1px solid black",
          fontSize: 18
        }}
        >
        <Editor
          editorState={editorState}
          onChange={onChange}
        />
      </Box>
    </div>
  )
}

