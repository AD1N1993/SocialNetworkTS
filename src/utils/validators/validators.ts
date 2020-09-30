type FileValidatorType = (value: string) => string | undefined

export const required:FileValidatorType = (value) => {
    if (value) return undefined;

    return "Field is required"
}

export const maxLengthCreator = (maxLength: number):FileValidatorType => (value) => {
    if (value && value.length > maxLength) return `Max length ${maxLength} symbols`;

    return undefined
}