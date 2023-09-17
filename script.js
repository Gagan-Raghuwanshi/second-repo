let box = document.getElementById('box');


joks = [
        { 'joks':'Why did the scarecrow win an award? Because he was outstanding in his field.'},
        {'joks':'Why did the melon jump into the lake? It wanted to be a water-melon.'},
        {'joks':'What did the duck say when it bought lipstick? “Put it on my bill.'},
        { 'joks':'What do you call a pig that does karate? A pork chop.'},
        {'joks':'What has a bed that you can’t sleep in? A river.'},
        {'joks':'What creature is smarter than a talking parrot? A spelling bee.'},
        {'joks':'What do you call a pig that does karate? A pork chop.'},
        {'joks':'What runs around a yard without actually moving? A fence.'},
        {'joks':'What’s an astronaut’s favorite candy? A Mars bar.'},
        {'joks':'Where do sheep go to get their hair cut?  The baa-baa shop.'},
        {'joks':'Why are there gates around cemeteries? Because people are dying to get in.'},
        {'joks':'What do you get when you cross a snake with a pie? A pie-thon!'},
        {'joks':'Why is Peter Pan always flying? He Neverlands.'},
        {'joks':'What’s the most musical part of the chicken? The drumstick.'},
        {'joks':'Why do seagulls fly over the sea? Because if they flew over a bay, they would be bagels.'},
        {'joks':' How do you know when the moon has had enough to eat? When it’s full.'},
        {'joks':'What kind of music do planets like? Neptunes.'},
        {'joks':'Why can’t you trust an atom? Because they make up everything.'},
        {'joks':'What do you call a group of disorganized cats? A cat-tastrophe.'},
        {'joks':'Why do bees have sticky hair? Because they use honeycombs.'},
        {'joks':'Where do you learn to make banana splits? At sundae school.'},
        {'joks':'How does NASA organize a party? They planet.'}
        ];



function next(){
        index = Math.floor(Math.random() * (0,joks.length-1))
        box.innerHTML =joks[index].joks
};