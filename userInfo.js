let userIDCounter = 1;
function createUserProfiles(originalNames, modifiedNames) {
    const profiles = [];

    for(let i = 0; i < originalNames.length; i++) {
        profiles.push({
            originalNames: originalNames[i],
            modifiedNames: modifiedNames[i],
            id: userIDCounter++,
        });
    }
    return profiles;
}