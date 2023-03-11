import { Editor } from 'draft-js'
import { useEditorApi } from './context';

export default function TextEditor() {
  const { note, onChange } = useEditorApi();

  return (
    <div>
      <Editor 
        editorState={note.content}
        onChange={onChange}
      />
    </div>
  )
}

