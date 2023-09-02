console.log("index its ok");
import { HomeData, SearchData, LookUpData, CategoriesData, FilterData, AreaORIngredientsData } from "./api.js";
import { Meals, Categories, Instruction, Area, Ingredients } from "./ui.js";
import { NameValidation, EmailValidation, PhoneValidation, AgeValidation, PassWordValidation, RePassWordValidation } from "./validation.js";
//-------------------------LOADER SPINNER---------------------\\
$(document).ready(function () {
    $(".loaderDiv").fadeOut(1500);
    $("body").removeClass("overflow-hidden")
})
//-------------------------CLOSE & OPEN MENU BAR---------------------\\
$("#closeBtn").click(function (e) {

    e.preventDefault();
    toggleCloseBtn()

});

function toggleCloseBtn() {

    $("nav").toggleClass("open")
    if ($("nav").hasClass("open")) {
        $("nav").animate({ left: "0%" }, 700, function () {
            for (let i = 0; i < 5; i++) {
                $(".navLink").eq(i).animate({ top: "0%" }, 500 + (i * 100))
            }
        });
        $("#closeBtn").children().removeClass("fa-bars").addClass("fa-xmark");
    } else {
        $("nav").animate({ left: "-175px" }, 700, function () {
            $(".navLink").animate({ top: "100%" })
        });
        $("#closeBtn").children().removeClass("fa-xmark").addClass("fa-bars");
    }

}
//-------------------------DISPLAY HOME SECTION---------------------\\
async function displayHome() {
    let data = new HomeData()
    let response = await data.getResponse()
    response = response.meals
    let allMeals = new Meals(response)
    let blackBox = allMeals.displayMeals()
    $("#home").html(blackBox);
    $(".mealHover").click(function (e) {
        e.preventDefault();
        let id = $(e.target).attr("meal-id");
        displayInstructionSec(id)
        $("#mealInstruction").removeClass("d-none")
        $("#mealInstruction").siblings().removeClass("d-none").addClass("d-none")
    });
}
displayHome()
//-------------------------DISPLAY MEAL DETAILS SECTION---------------------\\
async function displayInstructionSec(id) {
    $(".loaderDiv").fadeIn(300);

    let lookUpId = id
    let lookUp = new LookUpData(lookUpId)
    let response = await lookUp.GetInstruction()
    response = response.meals
    let meal = new Instruction(response)
    let blackBox = meal.displayInstruction()
    $("#mealInstruction").html(blackBox);
    $("#mealInstruction i").click(function (e) {
        e.preventDefault();
        $("#home").removeClass("d-none")
        $("#home").siblings().removeClass("d-none").addClass("d-none")
    })
    $(".loaderDiv").fadeOut(300);
}
//-------------------------DISPLAY SEARCH SECTION---------------------\\
$("#searchTab").click(function (e) {
    $(".loaderDiv").fadeIn(300);
    e.preventDefault();
    toggleCloseBtn()
    $("#search").removeClass("d-none")
    $("#search").siblings().removeClass("d-none").addClass("d-none")
    $(".loaderDiv").fadeOut(300);
});

document.getElementById("searchByName").addEventListener("keyup", async function (e) {
    let wordToSearch = $(e.target).val()
    let typeSearch = $(e.target).attr("search-type")

    let search = new SearchData(wordToSearch, typeSearch)
    let response = await search.getResponse()
    response = response.meals
    let allMeals = new Meals(response)
    let blackBox
    if (response) {
        blackBox = allMeals.displayMeals()
    } else {
        blackBox = `<h2 class="text-white text-center">No Data</h2>`
    }
    $("#displaySearch").html(blackBox)
    $(".mealHover").click(function (e) {
        e.preventDefault();
        let id = $(e.target).attr("meal-id");
        displayInstructionSec(id)
        $("#mealInstruction").removeClass("d-none")
        $("#mealInstruction").siblings().removeClass("d-none").addClass("d-none")
    });
})

document.getElementById("searchByLetter").addEventListener("keyup", async function (e) {
    $(".loaderDiv").fadeIn(300);
    let wordToSearch = $(e.target).val()
    let typeSearch = $(e.target).attr("search-type")
    let search = new SearchData(wordToSearch, typeSearch)
    let response
    try {
        response = await search.getResponse()
    } catch (error) {
        console.log(error);
        $(".loaderDiv").fadeOut(300);

    }

    response = response.meals
    let allMeals = new Meals(response)
    let blackBox
    if (response) {
        blackBox = allMeals.displayMeals()
    } else {
        blackBox = `<h2 class="text-white text-center">No Data</h2>`
    }
    $("#displaySearch").html(blackBox)
    $(".mealHover").click(function (e) {
        e.preventDefault();
        let id = $(e.target).attr("meal-id");
        displayInstructionSec(id)
        $("#mealInstruction").removeClass("d-none")
        $("#mealInstruction").siblings().removeClass("d-none").addClass("d-none")
    })
    $(".loaderDiv").fadeOut(300);
})
//-------------------------DISPLAY CATEGORIES SECTION---------------------\\
$("#categoriesTab").click(function (e) {
    e.preventDefault();
    toggleCloseBtn()
    $("#categories").removeClass("d-none")
    $("#categories").siblings().removeClass("d-none").addClass("d-none")
    $(".loaderDiv").fadeIn(300);
    displayCategoriesSec()
    $(".loaderDiv").fadeOut(300);
});
async function displayCategoriesSec() {
    let data = new CategoriesData()
    let response = await data.getResponse()
    response = response.categories
    console.log(response);
    let allCat = new Categories(response)
    let blackBox = allCat.displayCategories()

    $("#categories").html(blackBox);
    $(".categoriesDes").click(function (e) {
        let word = $(e.target).attr("id")
        let type = "c"
        console.log(word);
        displayFilter(type, word)
        $("#displayByFilter").removeClass("d-none")
        $("#displayByFilter").siblings().removeClass("d-none").addClass("d-none")
    })
}
//-------------------------DISPLAY BY FILTER SECTION---------------------\\
async function displayFilter(type, word) {
    $(".loaderDiv").fadeIn(300);
    let data = new FilterData(type, word)
    let response = await data.getResponse()
    response = response.meals
    console.log(response);
    let allMeals = new Meals(response)
    let blackBox = allMeals.displayMeals()
    $("#displayByFilter").html(blackBox)
    $(".mealHover").click(function (e) {
        e.preventDefault();
        let id = $(e.target).attr("meal-id");
        displayInstructionSec(id)
        $("#mealInstruction").removeClass("d-none")
        $("#mealInstruction").siblings().removeClass("d-none").addClass("d-none")
    });
    $(".loaderDiv").fadeOut(300);
}
//-------------------------DISPLAY AREAS SECTION---------------------\\
$("#areaTab").click(function (e) {
    e.preventDefault();
    toggleCloseBtn()
    $("#area").removeClass("d-none")
    $("#area").siblings().removeClass("d-none").addClass("d-none")
    $(".loaderDiv").fadeIn(300);
    displayByAreaSec()
    $(".loaderDiv").fadeOut(300);
});
async function displayByAreaSec() {
    let type = "a"
    let data = new AreaORIngredientsData(type)

    let response = await data.getResponse()
    response = response.meals
    console.log(response);
    let areas = new Area(response)
    let blackBox = areas.displayArea()
    $("#area").html(blackBox)
    $(".areasImg").click(function (e) {
        let word = $(e.target).attr("area-id")
        let type = "a"
        console.log(word);
        displayFilter(type, word)
        $("#displayByFilter").removeClass("d-none")
        $("#displayByFilter").siblings().removeClass("d-none").addClass("d-none")
    })

}
//-------------------------DISPLAY INGREDIENTS SECTION---------------------\\
$("#ingredientsTab").click(function (e) {
    e.preventDefault();
    toggleCloseBtn()
    $("#ingredients").removeClass("d-none")
    $("#ingredients").siblings().removeClass("d-none").addClass("d-none")
    $(".loaderDiv").fadeIn(300);
    displayIngredientsSec()
    $(".loaderDiv").fadeOut(300);
});

async function displayIngredientsSec() {
    let type = "i"
    let data = new AreaORIngredientsData(type)

    let response = await data.getResponse()
    response = response.meals
    response = response.slice(0, 20)
    console.log(response);
    let ingredient = new Ingredients(response)
    let blackBox = ingredient.displayIngredients()
    $("#ingredients").html(blackBox)
    $(".ingredientsClick").click(function (e) {
        let word = $(e.target).attr("ingredients-id")
        let type = "i"
        console.log(word);
        displayFilter(type, word)
        $("#displayByFilter").removeClass("d-none")
        $("#displayByFilter").siblings().removeClass("d-none").addClass("d-none")
    })
}
//-------------------------DISPLAY CONTACT SECTION---------------------\\
$("#contactUsTab").click(function (e) {
    e.preventDefault();
    toggleCloseBtn()
    $(".loaderDiv").fadeIn(300);

    $("#contactUs").removeClass("d-none")
    $("#contactUs").siblings().removeClass("d-none").addClass("d-none")
    $(".loaderDiv").fadeOut(300);
});

document.getElementById("name").addEventListener("keyup", async function (e) {
    if (validationName()) {
        $("#name").siblings().addClass("d-none")
    } else {
        $("#name").siblings().removeClass("d-none")
    }
    allValidation()
})
//-------------------------VALIDATION---------------------\\
function validationName() {
    let valid = new NameValidation($("#name").val()).checkValidation()
    return valid
}

document.getElementById("email").addEventListener("keyup", async function (e) {
    if (validationEmail()) {
        $("#email").siblings().addClass("d-none")
    } else {
        $("#email").siblings().removeClass("d-none")
    }
    allValidation()
})

function validationEmail() {
    let valid = new EmailValidation($("#email").val()).checkValidation()
    return valid
}

document.getElementById("phone").addEventListener("keyup", async function (e) {
    if (validationPhone()) {
        $("#phone").siblings().addClass("d-none")
    } else {
        $("#phone").siblings().removeClass("d-none")
    }
    allValidation()
})

function validationPhone() {
    let valid = new PhoneValidation($("#phone").val()).checkValidation()
    return valid
}

document.getElementById("age").addEventListener("keyup", async function (e) {
    if (validationAge()) {
        $("#age").siblings().addClass("d-none")
    } else {
        $("#age").siblings().removeClass("d-none")
    }
    allValidation()
})

function validationAge() {
    let valid = new AgeValidation($("#age").val()).checkValidation()
    return valid
}

document.getElementById("passWord").addEventListener("keyup", async function (e) {
    if (validationPassword()) {
        $("#passWord").siblings().addClass("d-none")
    } else {
        $("#passWord").siblings().removeClass("d-none")

    }
    allValidation()
})

function validationPassword() {
    let valid = new PassWordValidation($("#passWord").val()).checkValidation()
    return valid
}

document.getElementById("rePassWord").addEventListener("keyup", async function (e) {
    if (validationRePassword()) {
        $("#rePassWord").siblings().addClass("d-none")
    } else {
        $("#rePassWord").siblings().removeClass("d-none")
    }
    allValidation()
})

function validationRePassword() {
    let pattern = $("#passWord").val()
    let rePassword = $("#rePassWord").val()
    let valid = new RePassWordValidation(pattern, rePassword).checkValidation()
    return valid
}



function allValidation() {

    let validName = validationName()
    let validEmail = validationEmail()
    let validPhone = validationPhone()
    let validAge = validationAge()
    let validPassword = validationPassword()
    let validRePassword = validationRePassword()
    console.log(validName, validEmail, validPhone, validAge, validPassword, validRePassword);
    if (validName && validEmail && validPhone && validAge && validPassword && validRePassword) {
        $("#submitBtn").removeAttr('disabled');
    } else {
        $("#submitBtn").attr('disabled', "")
    }
}
