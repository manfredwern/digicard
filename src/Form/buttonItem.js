
function ButtonItem({name, handleAction}) {
    function capitalizeFirstLetter(word) {
        return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    }

    return(
        <>
          <button type='button'
                className='action-button'
                name={name + 'Btn'}
                onClick={handleAction}>{capitalizeFirstLetter(name)}</button>
        </>
    )


}

export default ButtonItem