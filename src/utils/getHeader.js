const getHeaderText = (page) => {
    switch (page) {
        case "ServiceSearch": {
            return "جستجوی خدمت"
        }

        case "CitySearch": {
            return "جستجوی شهر"
        }

        case "CLOSED":
            return ""
    }
}
export { getHeaderText }