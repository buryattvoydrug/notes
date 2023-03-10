import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentNote } from '../utils/actions';

export default function AddButton() {
  
  const dispatch = useDispatch();

  const handleSetCurrentNote = () => {
    dispatch(setCurrentNote(null))
  }

  return (
    <>
      <Link to="/" onClick={handleSetCurrentNote}>
        <Fab 
          color="primary" 
          aria-label="add" 
          style={{position: "fixed", bottom: '20px', right: "20px"}}
          >
          <AddIcon />
        </Fab>
      </Link>
    </>
  )
}
