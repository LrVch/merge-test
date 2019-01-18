import * as PureJs from './es5-extra/index';

export type LogObj = (obj: Object, desc?: string) => void;

export type Line = (logn?: number) => void;

export const line: Line = (logn: number = 20) => console.log('='.repeat(logn));

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

export interface IHobby extends ICoder, IPilot, IFootballPlayer, IShooter, IGeek { }

export interface IHuman extends IGeneralAbilities { }

export abstract class AbstarctHuman implements IHuman {
    cook = false;
    sing = false;
    dance = false;
    teach = false;
}

export class Human extends AbstarctHuman {
    constructor(options: Partial<IHuman> = {}) {
        super();
        return Object.assign(this, options);
    }
}

type JakeOptions = Partial<IHuman> & Pick<IHobby, 'flyPlanes' | 'playFootball'>;

export class Jake extends Human implements IHobby {
    playFootball = false;
    flyPlanes = false;

    constructor(options: JakeOptions = {}) {
        super({ ...options, dance: true });
        return Object.assign(this, options);
    }
}

type JaneOptions = Partial<IHuman> & Pick<IHobby, 'code'>;

export class Jane extends Human implements IHobby {
    code = false;

    constructor(options: JaneOptions = {}) {
        super({ ...options, teach: true });
        return Object.assign(this, options);
    }
}

type JanisOptions = Partial<IHuman> & Pick<IHobby, 'shootGuns' | 'repairElectronics'>;

export class Janis extends Human implements IHobby {
    shootGuns = false;
    repairElectronics = false;

    constructor(options: JanisOptions = {}) {
        super({ ...options, cook: true });
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

line();

logObj(jake1, 'jake1');
logObj(jake2, 'jake2');

line();

logObj(jane1, 'jane1');
logObj(jane2, 'jane2');

line();

logObj(janis1, 'janis1');
logObj(janis2, 'janis2');


/* 
    Extra es5
*/


line();
console.log('Extra es5');
line();

const humanPure1 = new PureJs.Human();
const humanPure2 = new PureJs.Human({ sing: true, dance: true });

const jakePure1 = new PureJs.Jake({ sing: true });
const jakePure2 = new PureJs.Jake({ playFootball: true, flyPlanes: true });

const janePure1 = new PureJs.Jane();
const janePure2 = new PureJs.Jane({ code: true });

const janisPure1 = new PureJs.Janis();
const janisPUre2 = new PureJs.Janis({ shootGuns: true, repairElectronics: true });


logObj(humanPure1, 'humanPure1');
logObj(humanPure2, 'humanPure2');

line();

logObj(jakePure1, 'jakePure1');
logObj(jakePure2, 'jakePure2');

line();

logObj(janePure1, 'janePure1');
logObj(janePure2, 'janePure2');

line();

logObj(janisPure1, 'janisPure1');
logObj(janisPUre2, 'janisPUre2');