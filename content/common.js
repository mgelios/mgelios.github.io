function getValue(value, source) {
    const links = {
        link: 0,
        linkText: 1,
        badgeColor: 2,
        badgeText: 3,
        badgeTextColor: 4
    };
    return source[links[value]];
}