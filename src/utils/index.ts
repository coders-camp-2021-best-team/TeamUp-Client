export const getAge = (dateString: string | Date) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    const age =
        (today.getDate() - birthDate.getDate()) / 1000 / 60 / 60 / 24 / 365;

    return Math.floor(age);
};
