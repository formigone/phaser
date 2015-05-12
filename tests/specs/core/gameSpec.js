describe('core game object', function(){
    it('has a default width and height', function(){
        var game = new Phaser.Game();

        expect(typeof game.width).toBe('number');
        expect(typeof game.height).toBe('number');
    });
});
