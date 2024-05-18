const BASE_URL = "https://front-interview.darkube.app/inter/exp/direct/api/"
async function fetchServices({ zoneId }) {
    if (zoneId) {
        const res = await fetch(
            `${BASE_URL}services?zoneId=${zoneId}`, {
            next: {
                revalidate: 3000
            }
        }
        );
        return res.json()
    }

}
async function fetchCities() {
    const res = await fetch(
        `${BASE_URL}zones`, {
        cache: "force-cache"
    }
    );
    return res.json()
}
async function fetchSingleService({ zoneId, serviceId }) {
    const res = await fetch(
        `${BASE_URL}page?zoneId=${zoneId}&serviceId=${serviceId}`, {
        next: {
            revalidate: 3000
        }
    }
    );
    return res.json()
}
export { fetchServices, fetchCities, fetchSingleService }