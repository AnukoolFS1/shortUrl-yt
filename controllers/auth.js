const tokens = new Map()

const genrateToken = (id, value) => {
    tokens.set(id, value)

}


const checkAuthentication = (id) => {
    if(tokens.has(id)){
        return tokens.get(id)
    }else{
        return false
    }
}

module.exports = {genrateToken, checkAuthentication}