
export function abbreviateName(fullName) {
    // Split the full name into an array of words
    const nameParts = fullName.split(' ');

    // Ensure there is at least one word
    if (nameParts.length < 1) {
        throw new Error('Full name must contain at least one word.');
    }

    // Take the first character of each word except the last one
    const initials = nameParts.slice(0, -1).map(word => word[0]).join('');

    // Get the last word (last name)
    const lastName = nameParts[nameParts.length - 1];

    // Concatenate the initials with the last name
    const abbreviatedName = initials + ' ' + lastName;

    return abbreviatedName;
}