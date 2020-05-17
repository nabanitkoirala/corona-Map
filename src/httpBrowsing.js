import axios from 'axios';



export const coronaNepal = async () => {
    const url = 'https://data.nepalcorona.info/api/v1/municipals';
    let changeableUrl = url;



    try {
        const { title_ne, type, centroid, covid_cases } = await axios.get(changeableUrl);
        const response = {

            munacipality: title_ne,
            munacipality_type: type,
            coordinates: centroid,
            cases: covid_cases

        }

        return response;

    }
    catch (error) {

    }

}
