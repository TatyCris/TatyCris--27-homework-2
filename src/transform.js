function groupAdultsByAgeRange(people) {
    return people.reduce((group, person) => {
        if (person.age < 18) {
            return {
                ...group,
            }
        }
        if (person.age <= 20) {
            return {
                ...group,
                '20 and younger': [...(group['20 and younger'] || []), person]
            }
        }
        if (person.age <= 30) {
            return {
                ...group,
                '21-30': [...(group['21-30'] || []), person]
            }
        }
        if (person.age <= 40) {
            return {
                ...group,
                '31-40': [...(group['31-40'] || []), person]
            }
        }
        if (person.age <= 50) {
            return {
                ...group,
                '41-50': [...(group['41-50'] || []), person]
            }
        }
        if (person.age > 50) {
            return {
                ...group,
                '51 and older': [...(group['51 and older'] || []), person]
            }
        }

        // return person
    }, {})
}

module.exports = { groupAdultsByAgeRange }