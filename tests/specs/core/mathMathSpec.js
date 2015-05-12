describe('math Math object', function(){
    it('calculates fuzzy equality', function(){
        var a = 0.01;
        var b = 0.02;
        var epsi = 0.1;

        expect(Phaser.Math.fuzzyEqual(a, b, epsi)).toBe(true);
    });
});
