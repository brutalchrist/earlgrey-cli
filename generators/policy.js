const camelize = require('camelize');

module.exports = (name, package) => {
    return `package ${package}.policies;

import earlgrey.core.Session;
import earlgrey.interfaces.PolicieCore;

public class ${camelize(name)} implements PolicieCore {
    public boolean check(Session sesion) {
        return true;
    }
}
`;
}