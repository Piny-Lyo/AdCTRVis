import { makeAutoObservable } from 'mobx'

class Store {
    selectedFeature = null;
    keys = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedFeature = (selectedFeature) => {
        this.selectedFeature = selectedFeature;
    }

    setKeys = (keys) => {
        this.keys = keys;
    }
}

export const store = new Store();