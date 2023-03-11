import TextEditor, { TextEditorProvider } from '../TextEditor'
import Tools from '../Tools'

export default function NotePage() {
  return (
    <>
      <TextEditorProvider >
        <>
          <Tools />
          <TextEditor />
        </>
      </TextEditorProvider>
    </>
  )
}
