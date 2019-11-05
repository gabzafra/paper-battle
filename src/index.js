window.onload = () => {
    WebFont.load({
        google: {
            families: ['MedievalSharp']
        },
        active: () => {
            game.init();
        }
    });   
}