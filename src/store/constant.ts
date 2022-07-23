import { Sandwich } from 'types/sandwhich';

const API_URL = 'https://cofactr.pythonanywhere.com'

interface UrlsType {
    FLUSH(): string;
    MEATS(): string;
    TOPPINGS(): string;
    SANDWICHES(sandwichId?: Sandwich['id'] | null,): string;
}

export const URLS: UrlsType = {
    FLUSH: () => `${API_URL}/flush/`,
    MEATS: () => `${API_URL}/meats/`,
    TOPPINGS: () => `${API_URL}/toppings/`,
    SANDWICHES: (id = null) => {
        let uri = `${API_URL}/sandwiches/`;
        if (id) uri += `${id}/`;
        return uri;
    }
};
