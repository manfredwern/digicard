import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function ActionItem({ name, handleAction, handleRemoveAction }) {

    function capitalizeFirstLetter(word) {
        return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    }

    return (
        <div className="input-group mb-3">
            <label htmlFor={name} className='input-group-text'>{capitalizeFirstLetter(name)}</label>
            <input
                type="text"
                className="form-control"
                name={name}
                id={name}
                onChange={handleAction}
            >
            </input>
            <button
                type='button'
                className='btn remove-action-btn'
                name={'remove' + capitalizeFirstLetter(name)}
                aria-label='remove'
                onClick={() => handleRemoveAction(name)}
            ><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    )
}

export default ActionItem