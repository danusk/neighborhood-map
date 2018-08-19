const api = "https://api.foursquare.com/v2";
const CLIENT_ID = "Y2H4EF1IXDCCIW3UWTMLDLYBTGZSDJC21CJ2S0MCBMK4PHIM";
const CLIENT_SECRET = "ZS0BHTSRRBS55ZK0RILFNODJBOMN0SZJNPG4X2EK04BNSNKJ";

const headers = {
    Accept: "application/json"
};

export const getTip = id =>
    fetch(
        `${api}/venues/${id}/tips?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180724`,
        { headers }
    )
    .then(res => res.json())
    .then(data => data.response);

export const getDetail = (lat, lng) =>
    fetch(
        `${api}/venues/search?ll=${lat},${lng}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180724`,
        { headers }
    )
    .then(res => res.json())
    .then(data => data.response);
