class User{
    constructor(){
        this.ranks = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];
        this.pos = 0;
        this.rank = this.ranks[this.pos];
        this.progress = 0;
    }

    incProgress(testRank){
        testRank = this.ranks.indexOf(testRank)
        if (testRank < 0 ) throw new Error()
        let diff = testRank - this.pos;
        if (diff == 0) this.progress += 3
        else if (diff > 0) this.progress += diff * diff * 10
        else if (diff == -1) this.progress += 1

        this.pos += Math.floor(this.progress/100)
        this.progress = this.progress%100;
        if (this.pos>= 15) {
            this.pos = 15;
            this.progress = 0;
        }
        this.rank = this.ranks[this.pos]
    }
}

export default  User;
