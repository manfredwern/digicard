
function ButtonItem({name, handleAction}) {
    function capitalizeFirstLetter(word) {
        return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    }

    return(
        <>
          <button type='button'
                className='btn btn-secondary me-3 mb-3'
                name={name}
                onClick={handleAction}>{capitalizeFirstLetter(name)}</button>
        </>
    )
}

export default ButtonItem