export class Meals {
    constructor(response) {
        this.response = response
    }

    displayMeals() {
        let blackBox = ""
        for (let i = 0; i < this.response.length; i++) {
            blackBox += `<div class="col-md-3  overflow-hidden mealHover " meal-id="${this.response[i].idMeal}" >
                    <div class="position-relative cursor-pointer">
                        <img src="${this.response[i].strMealThumb}" alt="" class="img-fluid rounded-3 ">
                        <div class="overLayMeal position-absolute rounded-3 d-flex justify-content-center 
                        align-items-center" meal-id="${this.response[i].idMeal}">
                            <h3 class="text-white">${this.response[i].strMeal}</h3>
                        </div>
                    </div>
                </div>`
        }
        return blackBox
    }
}

export class Categories {
    constructor(response) {
        this.response = response
    }

    displayCategories() {
        let blackBox = ""
        for (let i = 0; i < this.response.length; i++) {
            blackBox += `<div class="col-md-3  overflow-hidden mealHover ">
                    <div class="position-relative">
                        <img src="${this.response[i].strCategoryThumb}" alt="" class="img-fluid rounded-3 ">
                        <div class="overLayCategories position-absolute rounded-3 d-flex flex-column justify-content-center align-items-center p-1"
                            id="${this.response[i].strCategory}">
                            <h6 class="text-white">${this.response[i].strCategory}</h6>
                            <p class="text-secondary categoriesDes overflow-hidden" id="${this.response[i].strCategory}">${this.response[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>`
        }
        return blackBox
    }
}

export class Instruction {
    constructor(response) {
        this.response = response
    }

    displayInstruction() {

        let recipesIngredient = ``
        let tagsText = ""
        let res = this.response[0]
        for (let i = 0; i < 20; i++) {
            if (res[`strIngredient${i}`]) {
                recipesIngredient += `<span class="btn btn-info mb-2 me-2">${res[`strMeasure${i}`] + res[`strIngredient${i}`]}</span>`
            }
            this.response[`strIngredient${i}`]

        }
        let tags
        if (res.strTags) {
            tags = res.strTags.split(",")

       
            for (let i = 0; i < tags.length; i++) {
                tagsText += `<span class="btn btn-info mb-2 me-2 fw-medium">${tags[i]}</span>`

            }
        }
     
        let blackBox = `<i class="fa-solid fa-xmark fa-2xl text-end text-white  position-absolute top-0 end-0"></i>
        <div class="col-md-4 d-flex flex-column">
            <img src="${this.response[0].strMealThumb}" alt="" class="img-fluid rounded-3 mb-3">
            <h3 class="text-white">${this.response[0].strMeal}</h3>
        </div>
        <div class="col-md-8">
            <h3 class="text-white">Instructions</h3>
            <p class="text-secondary">${this.response[0].strInstructions}</p>
            <h3 class="text-white">Area: <span class="text-secondary">${this.response[0].strArea}</span></h3>
            <h3 class="text-white">Category: <span class="text-secondary">${this.response[0].strCategory}</span></h3>
            <div class="text-secondary">
                <h3 class="text-white">Recipes:</h3>
               ${recipesIngredient}</div>
            <div>
                <h3 class="text-white">Tags: ${tagsText}</h3>
                <a class="btn btn-success text-white text-decoration-none" href="${this.response[0].strSource}">Source</a>
                <a class="btn btn-danger text-white text-decoration-none" href="${this.response[0].strYoutube}">Youtube</a>
            </div>
        </div>`
        return blackBox
    }
}

export class Area {
    constructor(response) {
        this.response = response
    }

    displayArea() {
        let blackBox = ""
        for (let i = 0; i < this.response.length; i++) {
            blackBox += `<div class="col-md-3 text-center">
                    <img src="images/pngfind.com-food-icon-png-58323.png" alt="" class=" mb-3 areasImg" area-id="${this.response[i].strArea}" style="width: 150px">
                    <h4 class="text-center text-white">${this.response[i].strArea}</h4>
                </div>`
        }
        return blackBox
    }
}

export class Ingredients {
    constructor(response) {
        this.response = response
    }

    displayIngredients() {
        let blackBox = ""
        for (let i = 0; i < this.response.length; i++) {
            blackBox += `<div class="col-md-3 ingredientsClick" ingredients-id="${this.response[i].strIngredient}">
                    <h2 class="text-center text-white mb-3" ingredients-id="${this.response[i].strIngredient}"><i class="fa-solid fa-drumstick-bite fa-2xl" ingredients-id="${this.response[i].strIngredient}"></i></h2>
                    <h4 class="text-center text-white" ingredients-id="${this.response[i].strIngredient}">${this.response[i].strIngredient}</h4>
                    <p class="text-secondary" ingredients-id="${this.response[i].strIngredient}">${this.response[i].strDescription.slice(0, 150)}</P>
                </div>`
        }
        return blackBox
    }
}

