
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
                className='btn btn-outline-danger remove-action-btn'
                name={'remove' + capitalizeFirstLetter(name)}
                onClick={() => handleRemoveAction(name)}
            >remove</button>
        </div>
    )
}

export default ActionItem