let errorCodes = {
    404: "404. Not found. They said.",
    500: "Blame the server, darling.",
    403: "You have no power here.",
    503: "Service is down. We're getting a guy to fix it up."
}

async function fetchData(sourceURL) {
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Take this! Error ${response.status}: ${errorCodes[response.status]}`);
        }

        return response;
    });

    let dataset = await resource.json();

    return dataset[0];

    debugger;
}

async function postData(sourceURL) {

    return "You are using the postData API endpoint";
}


export { fetchData, postData };