export function Human(options) {
    options = options || {};

    this.cook = options.cook || false;
    this.sing = options.sing || false;
    this.dance = options.dance || false;
    this.teach = options.teach || false;
}

export function Jake (options) {
    Human.apply(this, arguments);

    options = options || {};

    this.playFootball = options.playFootball || false;
    this.flyPlanes = options.flyPlanes || false;
    this.dance = true;
}

Jake.prototype = Object.create(Human.prototype);
Jake.prototype.constructor = Jake;

export function Jane (options) {
    Human.apply(this, arguments);

    options = options || {};

    this.code = options.code || false;
    this.teach = true;
}

Jane.prototype = Object.create(Human.prototype);
Jane.prototype.constructor = Jane;

export function Janis (options) {
    Human.apply(this, arguments);

    options = options || {};

    this.shootGuns = options.shootGuns || false;
    this.repairElectronics = options.repairElectronics || false;
    this.cook = true;
}

Janis.prototype = Object.create(Human.prototype);
Janis.prototype.constructor = Janis;