function noDuplicate(arr: number[]): number[] {
    const s = new Set(arr);
    const it = s.values();
    return Array.from(it);
}

/* 
    merge as itarator
*/

class Merge implements Iterable<number[]> {
    constructor(public arr: number[][]) { }

    [Symbol.iterator]() {
        const source = this.arr.slice();
        let index = 0;
        let result: number[] = [];

        return {
            next(): IteratorResult<number[]> {
                if (index < source.length) {
                    result = [...result, ...source[index]];
                    result = noDuplicate(result);
                    index++;
                    return {
                        done: false,
                        value: result.sort()
                    };
                } else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        }
    }
}

function merge(arr: number[][]): number[] {
    const result = [...new Merge(arr)];

    return result[result.length - 1];
}

console.log(merge([[1, 1, 2, 2, 3, 4], [2, 3, 4, 5, 5]]));

/* 
    merge as generator
*/

export interface IGenerator {
    next: (value: any) => any;
}

function* mergeGen(arr: number[][]) {
    let result: number[] = [];
    for (let a of arr) {
        const arr = yield a;
        result = [...result, ...arr];
        result = noDuplicate(result);
    }
    return result;
}

async function mergeArr(arr: number[][]) {
    return await new Promise(res => {
        function execute(generator: IGenerator, yieldValue?: any) {
            let next = generator.next(yieldValue);

            if (!next.done) {
                execute(generator, next.value);
            } else {
                res(next.value);
            }
        }
        execute(mergeGen(arr));
    });
}

mergeArr([[1, 1, 2, 2, 3, 4], [2, 3, 4, 5, 5]]).then(console.log);