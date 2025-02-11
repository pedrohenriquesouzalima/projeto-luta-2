const char = createSorcerer ('Pedro');
const monster = createBigMonster();

stage.star(
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);