export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: 'light',
    properties: {
        '--foreground-default': '#08090A',
        '--foreground-secondary': '#41474D',
        '--foreground-tertiary': '#797C80',
        '--foreground-quaternary': '#F4FAFF',
        '--foreground-light': '#41474D',

        '--background-default': '#F4FSFF',
        '--background-secondary': '#A3B9CC',
        '--background-tertiary': '#5C7D99',
        '--background-light': '#FFFFFF',

        '--primary-default': '#5DFDCB',
        '--primary-dark': '#24B286',
        '--primary-light': '#B2FFE7',

        '--error-default': '#EF3E36',
        '--error-dark': '#800600',
        '--error-light': '#FFCECC',

        '--background-tertiary-shadow': '0 1px 3px 0 rgba(92, 125, 153, 0.5)'
    }
};

export const dark: Theme = {
    name: 'dark',
    properties: {
        '--foreground-default': '#5C7D99',
        '--foreground-secondary': '#A3B9CC',
        '--foreground-tertiary': '#F4FAFF',
        '--foreground-quaternary': '#E5E5E5',
        '--foreground-light': '#FFFFFF',

        '--background-default': '#797C80',
        '--background-secondary': '#41474D',
        '--background-tertiary': '#08090A',
        '--background-light': '#41474D',

        '--primary-default': '#5DFDCB',
        '--primary-dark': '#24B286',
        '--primary-light': '#B2FFE7',

        '--error-default': '#EF3E36',
        '--error-dark': '#800600',
        '--error-light': '#FFCECC',

        '--background-tertiary-shadow': '0 1px 3px 0 rgba(8, 9, 10, 0.5)'
    }
};

export const satya: Theme = {
    name: 'satya',
    properties: {
        '--foreground-default': '#5C7000',
        '--foreground-secondary': '#A3B000',
        '--foreground-tertiary': '#F4FVVV',
        '--foreground-quaternary': '#E5EYYY',
        '--foreground-light': '#FFFMMM',

        '--background-default': '#797000',
        '--background-secondary': '#414AAA',
        '--background-tertiary': '#080WWW',
        '--background-light': '#414LLL',

        '--primary-default': '#5DFBBB',
        '--primary-dark': '#24BLLL',
        '--primary-light': '#B2FOOO',

        '--error-default': '#EF3TTT',
        '--error-dark': '#800999',
        '--error-light': '#FFC888',

        '--background-tertiary-shadow': '0 1px 3px 0 rgba(6, 5, 3, 0.9)'
    }
};

export const praveen: Theme = {
    name: 'praveen',
    properties: {
        '--foreground-default': '#DDD44A',
        '--foreground-secondary': '#13374D',
        '--foreground-tertiary': '#HH4480',
        '--foreground-quaternary': '#Y56AFF',
        '--foreground-light': '#TT674D',

        '--background-default': '#ABCDEF',
        '--background-secondary': '#HIJKLM',
        '--background-tertiary': '#MNOPQR',
        '--background-light': '#STUVWX',

        '--primary-default': '#EE88CB',
        '--primary-dark': '#BB8886',
        '--primary-light': '#ZZ00E7',

        '--error-default': '#QQ9936',
        '--error-dark': '#22vv00',
        '--error-light': '#LLhhCC',

        '--background-tertiary-shadow': '0 1px 3px 0 rgba(1, 5, 3, 0.2)'
    }
};

