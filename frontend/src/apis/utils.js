const apiurl = ' https://mernstack-manager.vercel.app ';

const makeApiRequest = async (endpoint, option = {}) => {
    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export { apiurl, makeApiRequest };