class Form{
    constructor(){


    }
    display(){
        var title= createElement("h2")
        title.html("car racing game")
        title.position(130,0)
        var input= createInput("name")
        var botton= createButton("play")
        var greeting = createElement("h3")
        input.position(130,160)
        botton.position(250,200)
        botton.mousePressed(function(){
            input.hide()
            botton.hide()
            var name= input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello"+name)
            greeting.position(130,160)

        })
    }
}