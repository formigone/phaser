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
        expect(typeof Phaser.Math.average()).toBe('number');
        expect(Phaser.Math.average()).not.toBe(0);

        // If only JavaScript was this smart...
        //expect(Phaser.Math.average()).toBe(NaN);

        expect(Phaser.Math.average(0)).toBe(0);
        expect(Phaser.Math.average(1)).toBe(1);

        expect(Phaser.Math.average(1, 2, 3)).toBe(2);
        expect(Phaser.Math.average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(5.5);
    });

    it('Create an array representing the inclusive range of numbers in `[start, end]`', function(){
        var exp = [1];
        var out = Phaser.Math.numberArray(1, 1);
        expect(out).toEqual(exp);

        exp = [1, 2, 3, 4, 5];
        out = Phaser.Math.numberArray(1, 5);
        expect(out).toEqual(exp);

        exp = [-1, 0, 1];
        out = Phaser.Math.numberArray(-1, 1);
        expect(out).toEqual(exp);
    });

    it('Create an array from `[start, end)` with a step', function(){
        var exp = [1];
        var out = Phaser.Math.numberArrayStep(1, 2, 1);
        expect(out).toEqual(exp);

        exp = [1, 2];
        out = Phaser.Math.numberArrayStep(1, 3, 1);
        expect(out).toEqual(exp);
    });

    it('Checks that a number is odd', function(){
        expect(Phaser.Math.isEven(0)).toBe(true);
        expect(Phaser.Math.isEven(1)).not.toBe(true);
        expect(Phaser.Math.isEven(2)).toBe(true);
    });

    it('Checks that a number is even', function(){
        console.log(Phaser.Math.isOdd(3));
        expect(Phaser.Math.isOdd(0)).not.toBe(true);
        expect(Phaser.Math.isOdd(1)).toBe(true);
        expect(Phaser.Math.isOdd(2)).not.toBe(true);
    });
});
