window.onload = () => {
    WebFont.load({
        google: {
            families: ['MedievalSharp']
        },
        active: () => {
            preloadAssets();

        }
    });

}

function preloadAssets() {
    let assets = {
        icons: [],
        cards: [],
        heroes: [],
        monsters: [],
        backgrounds: []
    };
    preloadImages(icons, assets.icons, function(){
        preloadImages(cards, assets.cards, function(){
            preloadImages(heroes, assets.heroes, function(){
                preloadImages(monsters, assets.monsters, function(){
                    preloadImages(backgrounds, assets.backgrounds, function(){
                        game.init(assets)
                    });
                });
            });
        });
    });
}

function preloadImages(images, collection, cb) {
    let loadedCounter = 0;
    const toBeLoadedNumber = images.length;
    images.forEach(image => {

        preloadImage(image, collection, function () {
            loadedCounter++;
            if (loadedCounter === toBeLoadedNumber) {
                cb();
            }
        })

    });

    function preloadImage(image, collection, callback) {
        var img = new Image();
        img.src = image.src;
        collection[image.name] = img;
        img.onload = callback;
    }
}


/*
function preloadImages() {
    let assets = {
        icons: [],
        cards: [],
        heroes: [],
        monsters: [],
        backgrounds: []
    };
    let assetsCount = 
    icons.forEach(icon => {
        let img = new Image();
        img.src = icon.src;
        img.onload = () => {
            assets.icons.push({name:icon.name, img:img});
        };  
    })
    game.init(assets);
}
*/