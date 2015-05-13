describe('math Math object', function(){
    it('calculates fuzzy equality', function(){
        var a = 0.01;
        var b = 0.02;
        var epsi = 0.1;

        expect(Phaser.Math.fuzzyEqual(a, b, epsi)).toBe(true);

        a = 0.10;
        b = 0.20;
        epsi = 0.01;

        expect(Phaser.Math.fuzzyEqual(a, b, epsi)).toBe(false);
    });

    it('calculates average of all values passed in', function(){
        //expect(Phaser.Math.average()).toBe(0);
        expect(Phaser.Math.average(0)).toBe(0);
        expect(Phaser.Math.average(1)).toBe(1);

        for (var i = 1; i < 10; i++) {

        }
    });
});
