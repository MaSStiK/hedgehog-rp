import { getCache } from "../../assets/scripts/cache.js"
import { relocate, initInputPassword, initInputWithoutSpaces } from "../../assets/scripts/global-functions.js"
import { consts } from "../../assets/scripts/global-consts.js"


// Ставим пределы для логина и пароля
$("#login").attr("minlength", consts.loginMin)
$("#login").attr("maxlength", consts.loginMax)

$("#password").attr("minlength", consts.passwordMin)
$("#password").attr("maxlength", consts.passwordMax)


// Объявляем запороленый инпут
initInputPassword("#password-input")

// Объявляем инпуты без пробелов
initInputWithoutSpaces("#login")
initInputWithoutSpaces("#password")


// Нажатие на логотип переносит на главную
$(".logotype-wrapper img").on("click tap", () => { 
    relocate("../home/")
})