class FakeItemsService {
    constructor(){
        this.items = [
            { label: 'Option', value: this.getNewValue() },
            { label: 'Option', value: this.getNewValue() },
            { label: 'Option', value: this.getNewValue() },
            { label: 'Option', value: this.getNewValue() }
        ];
    }

    query(){
        return this.items;
    }

    getNewValue(){
       return Math.random(); 
    }
}

export default FakeItemsService;