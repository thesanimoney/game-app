function removeTextAfter(inputText: string) {
    if(inputText)
        return inputText.replace(/Español[\s\S]*/g, '');
}

// Example usage:
export default removeTextAfter
