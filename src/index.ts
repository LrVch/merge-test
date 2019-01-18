export type LogObj = (obj: Object, desc?: string) => void;

export const logObj: LogObj = (obj: Object = {}, desc: string = '') => {
    console.log(desc, JSON.stringify(obj, null, 4));
}

export interface ICook {
    cook: boolean;
}

export interface IDancer {
    dance: boolean;
}

export interface ITeacher {
    teach: boolean;
}

export interface ISinger {
    sing: boolean;
}

export interface ICoder {
    code?: boolean;
}

export interface IPilot {
    flyPlanes?: boolean;
}

export interface IFootballPlayer {
    playFootball?: boolean;
}

export interface IShooter {
    shootGuns?: boolean;
}

export interface IGeek {
    repairElectronics?: boolean;
}

export interface IGeneralAbilities extends ICook, IDancer, ITeacher, ISinger { }

export interface IHuman extends IGeneralAbilities { }

export interface IHobby extends ICoder, IPilot, IFootballPlayer, IShooter, IGeek { }

export abstract class AbstarctHuman implements IHuman {
    cook = false;
    sing = false;
    dance = false;
    teach = false;
}

type Options = Partial<IHuman> & Partial<IHobby>;

export class Human extends AbstarctHuman {
    constructor(options: {
        cook?: boolean,
        sing?: boolean,
        dance?: boolean,
        teach?: boolean
    } = {}) {
        super();
        return Object.assign(this, options);
    }

}

export class Jake extends Human implements IHobby {
    playFootball = false;
    flyPlanes = false;

    constructor(options: Options = {}) {
        super({ ...options, dance: true });
        return Object.assign(this, options);
    }
}

export class Jane extends Human implements IHobby {
    code = false;

    constructor(options: Options = {}) {
        super({ ...options });
        return Object.assign(this, options);
    }
}

export class Janis extends Human implements IHobby {
    shootGuns = false;
    repairElectronics = false;

    constructor(options: Options = {}) {
        super({ ...options });
        return Object.assign(this, options);
    }
}

const human1 = new Human();
const human2 = new Human({ sing: true, dance: true });

const jake1 = new Jake({ sing: true });
const jake2 = new Jake({ playFootball: true, flyPlanes: true });

const jane1 = new Jane();
const jane2 = new Jane({ code: true });

const janis1 = new Janis();
const janis2 = new Janis({ shootGuns: true, repairElectronics: true });

logObj(human1, 'human1');
logObj(human2, 'human2');

console.log('='.repeat(20));

logObj(jake1, 'jake1');
logObj(jake2, 'jake2');

console.log('='.repeat(20));

logObj(jane1, 'jane1');
logObj(jane2, 'jane2');

console.log('='.repeat(20));

logObj(janis1, 'janis1');
logObj(janis2, 'janis2');