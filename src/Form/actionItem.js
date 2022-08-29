
function ActionItem({name, handleAction, handleRemoveAction}) {
    
    function capitalizeFirstLetter(word) {
        return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    }

    return(
        <>
            <p>ACTION ITEM</p>
            <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
                    <input
                        type="text"
                        name={name}
                        id={name}
                        onChange={handleAction}
                    >
                    </input>
                    <button 
                        type='button'
                        className='remove-action-btn' 
                        name={'remove'+capitalizeFirstLetter(name)}
                        onClick={() => handleRemoveAction(name)}
                        >remove</button>
        </>
    )
}

export default ActionItem