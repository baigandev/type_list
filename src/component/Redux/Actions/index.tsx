export const setInputValue = (values: { fio: string, work: string, weight: string, height: string, res:string, }) => {
    return {
        type: 'SET_INPUT_VALUE',
        payload: values
    };
};