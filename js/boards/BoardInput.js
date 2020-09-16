class BoardInput extends Board {
    constructor(context, x, y) {
        var gates = [];
        
        for (var i=0; i<2; i++) {
            for (var j=0; j<10; j++) {
                gates.push(new Switch(context, x+15+i*70, y+50+j*30));
            }
        }
        
        var width = 150;
        var height = 350;
            
        super(context, gates, x, y, width, height);
    }
}