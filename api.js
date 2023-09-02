export class HomeData {
    async getResponse() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        response = await response.json()
        return response
    }
}
export class LookUpData {
    constructor(id) {
        this.lookUpId = id
    }
    async GetInstruction() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.lookUpId}`)
        response = await response.json()
        return response
    }
}
export class SearchData {
    constructor(wordToSearch, typeSearch) {
        this.wordToSearch = wordToSearch
        this.typeSearch = typeSearch
    }
    async getResponse() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${this.typeSearch}=${this.wordToSearch}`)
        response = await response.json()
        return response
    }
}

export class CategoriesData {
    async getResponse() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json()
        return response
    }
}

export class FilterData {
    constructor(type, word) {
        this.type = type
        this.word = word
    }
    async getResponse() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${this.type}=${this.word}`)
        response = await response.json()
        return response
    }
}
export class AreaORIngredientsData {
    constructor(type) {
        this.type = type
    }
    async getResponse() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${this.type}=list`)
        response = await response.json()
        return response
    }
}
