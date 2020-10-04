const momentTz = require("moment-timezone");

const timezone = "America/Los_Angeles";
const currentDate = new Date();

// Conversion Using Moment Timezone
momentTz(currentDate).tz(timezone);
