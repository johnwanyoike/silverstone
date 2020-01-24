export const state = () => ({
    selectfeature:[],
    features: [{
        "id": 2,
        "group": 1,
        "pattern": "MEGLIO",
        "featuresTitle": "Benefits",
        "featureDescription": "Four wide straight grooves provide efficient drainage in wet conditions for improved vehicle stability.",
      },
      {
        "id": 3,
        "group": 1,
        "pattern": "MEGLIO",
        "featuresTitle": "",
        "featureDescription": "A straight rib block design applied to the outside of tire contact patch helps to eliminate unwanted road noise and increase cornering grip and driving stability.",
      },
      {
        "id": 4,
        "group": 1,
        "pattern": "MEGLIO",
        "featuresTitle": "",
        "featureDescription": "The ultra- high performance pattern design offers driver with impressive grip in dry and wet conditions while multiple 2D kerfs and curving edges provide improved winter condition traction.",
      },
      {
        "id": 5,
        "group": 1,
        "pattern": "VERDANT",
        "featuresTitle": "Benefits",
        "featureDescription": "An advanced tread design coupled with a high stylized sidewall design offers excellent driving comfort",
      },
      {
        "id": 6,
        "group": 1,
        "pattern": "VERDANT",
        "featuresTitle": "",
        "featureDescription": "Silica compound provides improved dry and wet traction along with lower rolling resistance.",
      },
      {
        "id": 7,
        "group": 1,
        "pattern": "VERDANT",
        "featuresTitle": "",
        "featureDescription": "Equilibrium polyester body ply, wider steel belts plus high density jointless nylon full cover minimize tire deformation, enhance durability and stability.",
      },
      {
        "id": 8,
        "group": 1,
        "pattern": "ETALON",
        "featuresTitle": "Benefits",
        "featureDescription": "Etalon gives you the all-weather handling you need for your crossover vehicle, while delivering a comfortable and quiet ride always.",
      },
      {
        "id": 9,
        "group": 1,
        "pattern": "ETALON",
        "featuresTitle": "",
        "featureDescription": "Circumferential zigzag grooves resist hydroplaning by channeling water away from the tread grooves",
      },
      {
        "id": 10,
        "group": 1,
        "pattern": "ETALON",
        "featuresTitle": "",
        "featureDescription": "Optimized tread profile design reduced rolling resistance heavily and increase fuel efficiency.",
      },
      {
        "id": 11,
        "group": 1,
        "pattern": "ETALON",
        "featuresTitle": "",
        "featureDescription": "Integrated shoulder minimizes road noise and uneven wear for quiet ride.",
      },
      {
        "id": 12,
        "group": 1,
        "pattern": "IMPERO",
        "featuresTitle": "Benefits",
        "featureDescription": "4 wide longitudinal grooves improved drainage performance.",
      },
      {
        "id": 13,
        "group": 1,
        "pattern": "IMPERO",
        "featuresTitle": "",
        "featureDescription": "Hydroplaning lateral grooves offer excellent wet performance.",
      },
      {
        "id": 14,
        "group": 1,
        "pattern": "IMPERO",
        "featuresTitle": "",
        "featureDescription": "3 center blocks provide straight driving stability.",
      },
      {
        "id": 15,
        "group": 1,
        "pattern": "IMPERO",
        "featuresTitle": "",
        "featureDescription": "Optimized shoulder block maximize the grip during cornering.",
      },
    ]
})

export const getters = {
    selectfeature (state){
        return state.selectfeature
    }
}

export const mutations = {
    SET_SELECT_PATTERN_FEATURE (state, pattern) {
        for (var item, i = 0; item = state.features[i++];) {
            if (pattern == item.pattern) {
                state.selectfeature.push(item);
            }
        }
    },
    SET_CLEAR_FEATURE_SELECTION (state, data) {
        state.selectfeature = data
    },
}

export const actions = {
    async setSelectPattaern ({ commit }, pattern) {
        commit('SET_SELECT_PATTERN_FEATURE', pattern)
    },
    clearSelectFeaturs ({ commit }) {
        commit('SET_CLEAR_FEATURE_SELECTION', [])
    },
}