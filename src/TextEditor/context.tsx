import { createContext, ReactNode, useContext } from 'react'
import { useEditor, EditorStateI } from './useEditor';

const TextEditorContext = createContext<EditorStateI | undefined>(undefined);

export const TextEditorProvider = ({children}: {children: ReactNode}) => {
  const editorApi = useEditor();

  return (
    <TextEditorContext.Provider value={editorApi}>
      {children}
    </TextEditorContext.Provider>
  )
}

export const useEditorApi = () => {
  const context = useContext(TextEditorContext);
  if (context === undefined) {
    throw new Error('no context');
  }
  
  return context;
}