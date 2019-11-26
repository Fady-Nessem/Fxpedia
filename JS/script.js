$( document).ready( function(){
    $(".account").on('click' , function(){
        $(".login-choise").toggle()
        $(".lists-choise").hide()
        $(".trips-choise").hide()
    })

    $(".trips").on('click' , function(){
        $(".trips-choise").toggle()
        $(".login-choise").hide()
        $(".lists-choise").hide()
    })
    $(".lists").on('click' , function(){
        $(".lists-choise").toggle()
        $(".login-choise").hide()
        $(".trips-choise").hide()
    })
    $(".flight").on('click' , function(){
        $(".hide").addClass('show')
        $(".main").hide()
    })
    $(".fa-times").on('click' , function(){
        $(".hide").removeClass('show')
        $(".main").show()
    })
    $(".nav-flight").on('click' , function(){
        $(".hide").addClass('show')
        $(".main").hide()
    })
})