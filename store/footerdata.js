export const state = () => ({
    footerdata: [
        {
            "id": 1,
            "para": "ContiPartner Fitment Professionals specialize in auto fitment related products and services. We have been in operation in Africa for over 20 years and in Kenya since 2012.",
        },
        {
            "id": 2,
            "para": "At ContiPartner expect professional customer service, competitive pricing, convenience and peace of mind.",
        },
        {
            "id": 3,
            "para": "When you entrust your vehicle to a ContiPartner retail outlet, rest assured that you and your family’s safety is always our first priority. Whatever your auto fitment needs, come to Your Fitment Professionals.",
        },
        {
            "id": 4,
            "para": "Our network of Tyre and Auto Dealers across Africa have been selectively chosen because of their extensive tyre knowledge and technical expertise.",
        },
    ],
})

export const getters = {
    footerdata (state){
        return state.footerdata
    }
}