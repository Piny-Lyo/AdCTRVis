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

// import { action, observable, makeObservable } from 'mobx';
// class Store {
//     // constructor() {
//     //     makeObservable(this, {
//     //         selectedFeature: observable, // 标记observable
//     //         setSelectedFeature: action, // 标记action
//     //     });
//     // }
//     // selectedFeature = null;
//     // setSelectedFeature(featureName) {
//     //     this.selectedFeature = featureName;
//     // }
// }

export const store = new Store();