let Borger_time = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 3 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 3 4 4 e . 
e b 4 3 4 4 3 3 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 3 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 3 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Player)
Borger_time.setPosition(108, 80)
let tayco = sprites.create(img`
. . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
. . . . . . . . . . . . e e 4 5 5 6 6 2 e 2 e . . . . . . . . . 
. . . . . . . . . . e e 4 5 5 5 6 7 2 3 e 2 6 8 8 . . . . . . . 
. . . . . . . . . e 4 6 7 7 6 6 7 7 2 3 2 e 7 7 7 6 6 8 . . . . 
. . . . . . . . e 4 6 7 4 5 5 5 4 7 7 2 2 2 7 7 7 6 7 7 8 . . . 
. . . . . . . 4 4 4 8 7 4 4 4 4 4 7 7 7 7 6 6 7 7 7 6 7 8 . . . 
. . . . . . 4 5 2 2 e 7 7 7 7 7 7 6 7 7 7 7 6 6 6 7 6 6 6 8 . . 
. . . . . 4 5 2 3 2 2 7 7 6 6 7 2 2 e 6 6 6 e e e e e 8 8 8 . . 
. . . . 4 5 5 2 3 2 e 7 6 6 7 2 3 2 2 e 4 5 5 5 d d d d 4 8 . . 
. . . 4 4 5 6 7 7 7 7 5 5 4 6 2 3 e 4 5 5 d d d d d d d d d 4 . 
. . . e 6 6 7 7 4 5 5 4 4 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4 
. . e 4 6 7 7 7 4 4 4 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4 
. . e 5 6 6 8 6 7 7 6 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e 
. e 4 5 5 4 4 e 8 7 7 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e 
. e 5 5 4 e e e e 6 6 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e 
. e 5 5 e e 4 4 f e e 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e 
e 4 5 4 e e e e f e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e . 
e 5 e 4 e e f f f e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . . 
e 5 e e 4 e e f f 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . . 
e 5 e e e e f f e 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . . 
e 5 f f e f e e e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . . 
e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . . 
e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . . 
e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . . 
e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . . 
e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . . 
. e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . . 
. e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . . 
. . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . . 
. . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tayco.setPosition(138, 16)
let nemos_dad = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`, SpriteKind.Player)
let the_za = sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, SpriteKind.Player)
the_za.setPosition(14, 8)
let poo = sprites.create(img`
. . . . . . . . . . . 2 2 2 2 2 2 e e . . . . . . . . . . . . . 
. . . . . . . . . 2 2 3 3 3 3 3 b b e e e . . . . . . . . . . . 
. . . . . . . 2 2 3 3 d 1 1 1 1 3 3 3 b e e . . . . . . . . . . 
. . . . . . 2 3 d d d 1 1 1 d d 1 d 3 3 e e e . . . . . . . . . 
. . . . . 2 3 d 1 3 3 3 d 1 d 3 3 d 1 3 b e e . . . . . . . . . 
. . . . 2 3 d 1 3 3 3 3 3 d 1 d 3 3 3 1 3 e e e . . . . . . . . 
. . . 2 3 1 1 3 3 3 3 3 3 d d d 3 3 3 3 d b e e e . . . . . . . 
. . 2 3 1 3 3 3 3 3 3 3 3 3 3 d d d 3 3 d 3 e 4 4 e . . . . . . 
. . 2 1 d 3 3 3 3 3 3 3 3 3 3 d d d 3 3 3 d b 4 4 e e . . . . . 
. 2 3 1 3 3 3 3 3 3 3 3 3 3 d d 3 3 3 3 3 d b 4 4 4 e e . . . . 
. 2 d d 3 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 3 b 4 4 4 e . . . . 
2 3 1 1 d 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d d b b 4 4 4 e . . . 
2 d 1 3 1 d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 6 6 4 4 e . . . 
2 d 3 3 d d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 4 4 4 4 4 e . . 
2 1 3 3 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d 1 6 4 4 6 6 4 e e . 
2 1 3 3 3 d 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 d 1 6 b 6 4 4 6 4 b e 
2 1 3 3 3 d d d d 3 3 d d 3 3 3 3 3 3 3 3 d 1 6 4 6 4 4 6 b 6 e 
2 1 3 3 3 3 3 d d 1 1 d d 3 3 3 3 3 3 3 3 d 1 6 4 4 b 6 4 4 6 e 
e 1 3 3 3 3 3 d 1 d 3 1 d 3 3 3 3 3 3 3 3 d 1 b 4 4 4 6 4 4 6 e 
e 1 3 3 3 3 3 1 d 3 3 3 1 3 3 3 3 3 3 3 3 1 d 6 b b 4 4 b 6 e . 
e 1 3 3 3 3 3 1 d d 3 3 1 b 3 3 3 3 3 3 3 1 3 6 b b 6 b b 6 e . 
e 1 3 3 3 3 3 3 1 d d 1 d b 3 3 3 3 3 3 3 1 b 6 b 6 6 b b e . . 
e d d 3 3 3 3 3 3 1 1 d b 3 3 3 3 3 3 3 d d 6 b b 6 b b e . . . 
e 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 3 1 3 6 b e e b b e . . . 
. e d d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d d b f e e b b e . . . . 
. e 3 d d 3 3 3 3 3 d d 3 3 3 3 3 3 3 d 3 e f e e e e . . . . . 
. . e 3 d d 3 3 3 d 1 3 3 3 3 3 3 d d 3 b f f f f f . . . . . . 
. . . e 3 1 1 1 1 1 d d d 3 3 3 d d d b f f e e f . . . . . . . 
. . . . e e d 1 d 3 3 d 1 1 1 1 1 3 b e f e f f . . . . . . . . 
. . . . . . e e b 3 3 3 d d 1 3 b e f f f f . . . . . . . . . . 
. . . . . . . . e e e e f f f f f e e . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
poo.setPosition(50, 15)
game.showLongText("sack", DialogLayout.Bottom)
let sack = sprites.create(img`
. . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . . b b b 4 4 4 4 4 4 b b . . . . . . . . . . . . . . 
. . . . . 2 2 4 4 4 4 4 d d d 4 4 4 b . . . . . . . . . . . . . 
. . . . 2 4 4 4 4 4 4 4 4 d d d d 4 4 e . . . . . . . . . . . . 
. . . 2 4 4 4 4 4 4 4 4 4 4 4 d d d 4 b e . . . . . . . . . . . 
. . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b 4 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
2 b b b 4 4 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
2 2 b b b 4 4 4 b b 4 b b 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
. 2 b b b b b 4 4 b b b b 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
. 2 2 b b b b b b b b 4 4 b b b 4 4 4 4 4 4 b b e . . . . . . . 
. . e e e b b b b b b b 4 4 b b b 4 4 4 4 4 4 b e . . . . . . . 
. . . e e e e e b b b b b b b b 4 4 b 4 4 4 4 b e . . . . . . . 
. . . . . e e e e e e 2 2 2 b b 4 4 b b b 4 b b e . . . . . . . 
. . . . . . . e e e e e 2 2 2 b b 4 4 b b b b e e . . . . . . . 
. . . . . . . . . . . . e 2 2 2 b b b b b b b e c . . . . . . . 
. . . . . . . . . . . . . . e e 2 b b b b e e b d b . . . . . . 
. . . . . . . . . . . . . . . . . e e e e e c d d d b . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . c d 1 1 b b b b . 
. . . . . . . . . . . . . . . . . . . . . . . . c d 1 1 1 d b b 
. . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c 1 1 d d 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c d 1 d b c . 
. . . . . . . . . . . . . . . . . . . . . . . . . c b 1 1 c . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
sack.setPosition(18, 86)
