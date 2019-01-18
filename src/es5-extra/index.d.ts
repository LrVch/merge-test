export interface HumanOptions {
    cook?: boolean;
    sing?: boolean;
    dance?: boolean;
    teach?: boolean
}

export interface HobbyOptions extends HumanOptions {
    playFootball?: boolean;
    flyPlanes?: boolean;
    code?: boolean;
    shootGuns?: boolean;
    repairElectronics?: boolean;
}

export declare class Human {
    constructor(options?: HumanOptions);
}

type JakeOptions = HumanOptions & Pick<HobbyOptions, 'flyPlanes' | 'playFootball'>;

export declare class Jake {
    constructor(options?: JakeOptions);
}

type JaneOptions = HumanOptions & Pick<HobbyOptions, 'code'>;

export declare class Jane {
    constructor(options?: JaneOptions);
}

type JanisOptions = HumanOptions & Pick<HobbyOptions, 'shootGuns' | 'repairElectronics'>;

export declare class Janis {
    constructor(options?: JanisOptions);
}