module.exports = class ClashData {
    constructor( data ){
        console.log(data)
        this.hitpoints = data.hitpoints,
        this.range = data.range ,
        this.damage = data.damage ,
        this.hitSpeed = data.hitSpeed
    }
}