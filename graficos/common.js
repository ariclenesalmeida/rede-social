const getCSS = (variavel) => {
    return getCompjustedsStyle(document.body) .getPropertyValue(variavel)
}

export {getCSS}
