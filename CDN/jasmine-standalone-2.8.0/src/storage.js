class Storage {
    constructor(){
        this.CURRENT_LIST_KEY = 'currentList';
        this.LIST_KEY = 'lists'
    }

    saveCurrentList(list) {
        localStorage.setItem(this.CURRENT_LIST_KEY, JSON.stringify(list));
    }

    getCurrentList() {
        return JSON.parse(localStorage.getItem(this.CURRENT_LIST_KEY));
    }

    saveLists() {
        localStorage.setItem(this.LIST_KEY, JSON.stringify(lists));
    };

    getLists(){
        return JSON.parse(localStorage.getItem(this.LIST_KEY));
    }

}


