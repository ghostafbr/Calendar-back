const moment = require('moment');

const isDate = (date) => {

    if (!date) {
        return false;
    }

    const dateMoment = moment(date);
    return dateMoment.isValid();
}

module.exports = {
    isDate
}
