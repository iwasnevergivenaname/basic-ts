// create a class named TodoItem
export class TodoItem {
    // TS allows you to have parameters that create instance properties
    constructor(public id: number,
                public task: string,
                public complete: boolean = false) {
    }

    printDetails(): void {
        console.log(`${this.id}\t${this.task} ${this.complete ? '\t(complete' : ''} `);
    }
}

