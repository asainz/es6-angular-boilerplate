class SidebarController {
    constructor(FakeItemsService) {
        "ngInject";
        this._FakeItemsService = FakeItemsService;

        this.items = this._FakeItemsService.query();
    }

    ramdomizeValue(item){
        item.value = this._FakeItemsService.getNewValue();
    }
}

export default SidebarController;