export const state = () => ({
    aboutgalaxy: [
        {
            "id": 1,
            "fulldesc":[
                {
                    "id": 1,
                    "title": '',
                    "subtitle": '',
                    "para": "Galaxy offers purpose-built high performance tires that provide superior performance, long life and exceptional value – qualities that are an absolute must for operating in industrial and construction terrains. Galaxy’s range of Skid Steer and Contract Utility tires are a popular choice with leading OEMs and aftermarket users. The Galaxy brand can be defined by two simple words – \"work tires\".Galaxy tires can be found on equipment in over 120 countries spanning 6 continents."
                },
                {
                    "id": 2,
                    "title": '',
                    "subtitle": '',
                    "para": "All Galaxy off-the-road tires are Purpose Built – Application Specific. What does this mean? Focused on application based product development, our engineering teams have successfully put together a comprehensive line of advanced tires for a wide range of industries including Construction, Mining, Forestry, Agriculture and Industrial. Drawing on decades of experience in the industry, our tires have been perfected through years of intensive research and development. Each and every Galaxy tire exceeds international quality standards set by different organizations and their quality parameters are checked by conducting tests in the field and laboratory. Galaxy tires are synonymous with hard work which is why hard working people choose our tires to help them get the job done."
                },
            ],
            "subdesc":"",
        },
    ],
    whygeneral: [
        {
            "writeup":[],
            "keypoints":[]
        },
    ]
})

export const getters = {
    aboutgalaxy (state){
        return state.aboutgalaxy
    },
    whygeneral (state){
        return state.whygeneral
    }
}