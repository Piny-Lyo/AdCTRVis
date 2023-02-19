import { makeAutoObservable } from 'mobx'

class Store {
    selectedFeature = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedFeature = (featureName) => {
        this.selectedFeature = featureName;
    }
}

export const store = new Store();