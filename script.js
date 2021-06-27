var cardIndex = 0;

var text1 = [];
text1[0] = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
text1[1] = "Et harum quidem rerum facilis est et expedita distinctio. Fusce wisi. Praesent vitae arcu tempor neque lacinia pretium.";
text1[2] = "Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.";

var text2 = [];
text2[0] = "Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.";
text2[1] = "Suspendisse nisl. Nullam eget nisl. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollici.";
text2[2] = "Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Mauris suscipit, ligula sit amet pharetra semper.";

var names = [];
names[0] = "Sousa Fernandes";
names[1] = "Richie Barnett";
names[2] = "Sheila Browne";

var roles = [];
roles[0] = "CEO & Founder";
roles[1] = "Student";
roles[2] = "Student";

function moveLeft() {
    console.log("leftuju");
    if (cardIndex <= 0) {
        cardIndex = 2;
    } else {
        cardIndex = cardIndex - 1;
    }

    document.getElementsByClassName("students-feedback__text1").innerText = text1[cardIndex];
}

function moveRight() {

}

function test() {
    console.log("ahoj");
}